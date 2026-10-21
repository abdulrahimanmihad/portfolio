// Renders scripts/og-card.html to public/og-image.png with headless Chrome
// over the DevTools Protocol. Needs Node 22+ (global fetch and WebSocket) and
// a local Chrome. Usage: node scripts/og-card.cjs [outputPath]
const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const CHROME =
  process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const WIDTH = 1200;
const HEIGHT = 630;

const source = path.join(__dirname, 'og-card.html');
const url = 'file:///' + source.split(path.sep).join('/');
const out = process.argv[2] || path.join(__dirname, '..', 'public', 'og-image.png');

const port = 9800 + Math.floor(Math.random() * 100);
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cdp-og-'));
const chrome = spawn(
  CHROME,
  [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${tmp}`,
    '--no-first-run',
    '--hide-scrollbars',
    `--window-size=${WIDTH},${HEIGHT}`,
    'about:blank',
  ],
  { stdio: 'ignore' },
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  let version;
  for (let i = 0; i < 50; i++) {
    try {
      version = await (await fetch(`http://127.0.0.1:${port}/json/version`)).json();
      break;
    } catch {
      await sleep(200);
    }
  }
  if (!version) throw new Error(`Chrome did not start from ${CHROME}`);

  const ws = new WebSocket(version.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });

  let id = 0;
  const pending = new Map();
  ws.onmessage = (ev) => {
    const m = JSON.parse(ev.data);
    if (!m.id || !pending.has(m.id)) return;
    const { resolve, reject } = pending.get(m.id);
    pending.delete(m.id);
    m.error ? reject(new Error(JSON.stringify(m.error))) : resolve(m.result);
  };
  const send = (method, params = {}, sessionId) =>
    new Promise((resolve, reject) => {
      const i = ++id;
      pending.set(i, { resolve, reject });
      ws.send(JSON.stringify({ id: i, method, params, sessionId }));
    });

  const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
  const page = (method, params) => send(method, params, sessionId);

  await page('Page.enable');
  await page('Runtime.enable');
  await page('Emulation.setDeviceMetricsOverride', {
    width: WIDTH,
    height: HEIGHT,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await page('Page.navigate', { url });
  for (let i = 0; i < 100; i++) {
    const { result } = await page('Runtime.evaluate', {
      expression: 'document.readyState',
      returnByValue: true,
    });
    if (result.value === 'complete') break;
    await sleep(100);
  }
  // Web fonts arrive after load; wait for them so the serif is in the capture.
  await page('Runtime.evaluate', {
    expression: 'document.fonts.ready.then(() => true)',
    awaitPromise: true,
    returnByValue: true,
  });
  await sleep(600);
  const { result } = await page('Runtime.evaluate', {
    expression: "document.fonts.check('32px \"Newsreader\"')",
    returnByValue: true,
  });
  if (!result.value) throw new Error('Newsreader did not load; is the machine online?');

  const { data } = await page('Page.captureScreenshot', {
    format: 'png',
    clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT, scale: 1 },
  });
  fs.writeFileSync(out, Buffer.from(data, 'base64'));
  console.log(`wrote ${out}`);
  ws.close();
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => {
    chrome.kill();
    setTimeout(() => {
      try {
        fs.rmSync(tmp, { recursive: true, force: true });
      } catch {}
    }, 500);
  });
