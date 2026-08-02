export const profile = {
  name: 'Abdul Rahiman Mihad',
  title: 'AI Engineer',
  tagline: 'Real-Time Conversational AI · Agentic Systems · RAG · MLOps',
  location: 'Abu Dhabi, UAE',
  email: 'abdulrahimanmihad@gmail.com',
  phone: '+971 50 670 8992',
  phoneHref: '+971506708992',
  linkedin: 'https://www.linkedin.com/in/abdul-rahiman-mihad/',
  github: 'https://github.com/abdulrahimanmihad',
  cv: './cv.pdf',
  headline: 'I build production AI systems that talk, think, and ship.',
  subline:
    'AI Engineer at HireUp (Japan), building a real-time voice AI interviewer used in production. Based in Abu Dhabi, UAE.',
  typingPhrases: [
    'Voice AI Systems',
    'LLM Reliability Engineering',
    'RAG Pipelines',
    'Computer Vision MLOps',
    'Agentic AI',
  ],
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  paragraphs: [
    'I am an AI engineer building production real-time conversational AI at HireUp (Japan HQ, remote) — a voice-based AI interviewer with sub-second turn latency, a LangGraph interview engine, and a multi-provider LLM abstraction spanning OpenAI, Groq, AWS Bedrock, Gemini and Claude. The team is international and distributed, so the work happens across time zones.',
    'Before that I architected a self-corrective RAG system on AWS Bedrock and EC2 that reached 92% query accuracy, and an end-to-end YOLOv8 MLOps pipeline with versioned data and 50+ tracked experiments. The common thread is treating reliability as an engineering problem rather than a prompting problem: deterministic control flow where correctness matters, and the model where judgement matters.',
    'My focus areas are LLM reliability engineering, production prompt engineering, WebSocket streaming, and cost and token optimisation. Microsoft Azure certified (AI-900, AZ-900, DP-900). Based in Abu Dhabi and available across the UAE.',
  ],
  facts: [
    { label: 'Based in', value: 'Abu Dhabi, UAE — available across the UAE' },
    { label: 'Currently', value: 'AI/ML Engineer at HireUp (Japan HQ, remote)' },
    { label: 'Focus', value: 'Real-time voice AI, agentic LLM systems, RAG' },
    { label: 'Certified', value: 'Microsoft Azure AI-900, AZ-900, DP-900' },
    { label: 'Open to', value: 'AI engineering roles and collaboration' },
  ],
}

export const experience = [
  {
    role: 'AI/ML Engineer',
    company: 'HireUp',
    companyUrl: 'https://app.hireup.now/',
    location: 'Japan HQ · Remote',
    period: 'May 2026 – Present',
    summary:
      'Project "Alpha" — a production real-time AI Voice Interviewer (streaming STT to LLM engine to streaming TTS), built remotely with a Japan-based team.',
    highlights: [
      {
        metric: { value: 1.5, prefix: '~', suffix: 's', decimals: 1 },
        title: 'Full-duplex real-time voice pipeline',
        body:
          'WebSocket audio streaming across two concurrent asyncio loops (STT receiver and turn processor), Deepgram Flux streaming STT with tunable endpointing, WebRTC VAD with a Groq Whisper batch fallback, and sentence-by-sentence streaming TTS. STT pre-connect and warm streams at server boot cut roughly 1.5s of perceived startup latency.',
      },
      {
        metric: { value: 15, suffix: '/15' },
        title: 'Correct live navigation turns',
        body:
          'Replacing LLM position arithmetic with a deterministic zero-latency NAV resolver (regex plus fuzzy word-overlap matching) took navigation from a roughly 80% prompt-only best to 15 of 15. Redacting unseen questions from context prevents prompt leaks outright — the model cannot leak what it never sees.',
      },
      {
        metric: null,
        title: 'Voice barge-in',
        body:
          'Candidates interrupt the AI mid-sentence via client-side RMS detection in an AudioWorklet, backend echo rejection, and a behavioural interruption ladder. Routing TTS through the microphone’s AudioContext fixed AEC echo using browser-native cancellation.',
      },
      {
        metric: { text: '~300–450' },
        unitLabel: 'tokens/turn',
        title: 'Token spend cut significantly',
        body:
          'Swapped vector-store RAG for a one-time JD/CV extraction into compact JSON matrices — no embeddings, no vector DB — and replaced per-turn LLM summarisation with a code-built question log, adding zero extra LLM calls per turn.',
      },
      {
        metric: { text: '2/6 → 0/6' },
        unitLabel: 'eval failures',
        title: 'Text-level eval and regression suite',
        body:
          'Replays full interviews in seconds against the real decision engine, combining deterministic scenario checks with LLM judges (no-teaching, tone). Code backstops measured under prompt fixes went from 2/6 failures to 0/6 with a zero-latency scrubber, with MLflow per-turn metrics and LangSmith tracing for prompt-version benchmarking.',
      },
      {
        metric: { value: 11, suffix: '-tag' },
        title: 'Hardened LangGraph interview engine',
        body:
          'A hidden 11-tag control protocol separates prompt-owned speech from code-owned state transitions, alongside a JSON-mode few-shot intent classifier (11 intents per turn) and behavioural state machines for non-answer streaks and repeat caps. Also fixed a Redis read-modify-write race condition that could roll back interview-finished state.',
      },
    ],
    tech: [
      'Python',
      'FastAPI',
      'WebSockets',
      'asyncio',
      'LangGraph',
      'LangChain',
      'OpenAI',
      'Groq (Llama 70B)',
      'AWS Bedrock',
      'Gemini',
      'Claude',
      'Deepgram Flux STT',
      'Aura TTS',
      'Groq Whisper',
      'WebRTC VAD',
      'AudioWorklet',
      'Redis',
      'PostgreSQL',
      'async SQLAlchemy',
      'Docker',
      'MLflow',
      'LangSmith',
    ],
  },
]

export const projects = [
  {
    name: 'Self-Corrective RAG System',
    demo: 'http://3.110.62.109:8501/',
    blurb:
      'A self-corrective multi-agent RAG pipeline in LangGraph with iterative document grading, hallucination detection and autonomous query rewriting.',
    points: [
      'Reduced hallucination rate by 40% and reached 92% end-to-end query accuracy.',
      'Llama 3.1 (70B) via Amazon Bedrock at sub-1.5s latency.',
      'Exposed agent capabilities as an MCP server with tool-calling interfaces (ReAct plus hierarchical delegation).',
      'MLflow observability tracking tokens/sec, agent latency and cost-per-request.',
      'Deployed full-stack on AWS EC2 (FastAPI and async Streamlit) with near-zero downtime.',
    ],
    stats: [
      { value: 40, suffix: '%', label: 'fewer hallucinations' },
      { value: 92, suffix: '%', label: 'query accuracy' },
    ],
    tags: ['LangGraph', 'AWS Bedrock', 'EC2', 'FastAPI', 'MLflow', 'Docker', 'MCP'],
  },
  {
    name: 'End-to-End Litter Detection System',
    demo: 'https://litter-detection.duckdns.org/',
    blurb:
      'A small-object detection pipeline trained on hand-annotated CVAT data, with a fully reproducible MLOps workflow and a real-time inference app.',
    points: [
      'Boosted small-object mAP by 15% on 1,500+ manually CVAT-annotated images, with tight boxes on occluded objects.',
      '960px high-res scaling plus Mosaic and MixUp augmentation to force geometric shape learning, and automated oversampling for severe class imbalance.',
      'Custom scripts converting CVAT annotations to YOLOv8 format.',
      'Tracked 50+ experiments with DVC dataset versioning, DagsHub and MLflow loss-curve and confusion-matrix monitoring, and hyperparameter sweeps to eliminate overfitting.',
      'Streamlit app with 0.4 confidence thresholding, colour-coded boxes, per-class counts and sub-second latency.',
    ],
    stats: [
      { value: 15, suffix: '%', label: 'mAP gain' },
      { value: 50, suffix: '+', label: 'tracked experiments' },
    ],
    tags: [
      'YOLOv8',
      'CVAT',
      'OpenCV',
      'DVC',
      'MLflow',
      'DagsHub',
      'Streamlit',
      'PyTorch',
    ],
  },
  {
    name: 'Custom Character-Level Language Model',
    demo: null,
    blurb:
      'MLPs, backpropagation and SGD implemented from scratch in PyTorch on top of a custom autograd engine.',
    points: [
      'Custom autograd engine with dynamic graph traversal and hash map gradient caching.',
      'Built deep intuition for transformer internals, extended to TensorFlow/Keras CNN classifiers.',
    ],
    stats: [],
    tags: ['PyTorch', 'NumPy', 'Custom Autograd', 'TensorFlow', 'Keras'],
  },
]

export const certifications = [
  {
    issuer: 'Microsoft',
    items: [
      { name: 'Azure AI Fundamentals', code: 'AI-900', url: null },
      { name: 'Azure Fundamentals', code: 'AZ-900', url: null },
      { name: 'Azure Data Fundamentals', code: 'DP-900', url: null },
    ],
  },
  {
    issuer: 'IBM · Coursera',
    items: [
      {
        name: 'AI Agents: RAG & LangChain',
        url: 'https://coursera.org/share/51e48d68fe7fa59272b1f5916124afe3',
      },
      {
        name: 'Gen AI Language Modeling with Transformers',
        url: 'https://coursera.org/share/afe132f03837d87e23e0f34d996e93b7',
      },
      {
        name: 'Advanced Fine-Tuning for LLMs',
        url: 'https://coursera.org/share/384fb6f330cfd519df79bb05854eda6f',
      },
      {
        name: 'Fine-Tuning Transformers',
        url: 'https://coursera.org/share/0bd561bc8089ecff32f0181159988eba',
      },
      {
        name: 'LLM Architecture & Data Preparation',
        url: 'https://coursera.org/share/53c6a0b4dd5fc2de6f0ec72bbf84e408',
      },
      {
        name: 'Foundational Models for NLP',
        url: 'https://coursera.org/share/181ba7bf3e84a290e10ec86e9258851f',
      },
      {
        name: 'Exploratory Data Analysis for ML',
        url: 'https://coursera.org/share/85ee3593b0fd25f4079f4d4d4965dc82',
      },
    ],
  },
  {
    issuer: 'Kaggle',
    items: [
      { name: 'Advanced SQL', url: null },
      { name: 'Intro to SQL', url: null },
    ],
  },
]

export const skills = [
  {
    group: 'Programming',
    items: [
      'Python',
      'SQL (BigQuery, Window Functions, CTEs)',
      'JavaScript',
      'C++',
      'Java',
    ],
  },
  {
    group: 'AI / LLM',
    items: [
      'LLMs',
      'RAG',
      'Multi-Agent Systems',
      'LangGraph',
      'LangChain',
      'MCP Servers',
      'Tool-Calling',
      'ReAct',
      'Intent Classification',
      'Prompt Engineering',
      'PEFT / LoRA',
      'Transformers',
      'NLP',
      'Computer Vision',
      'CNNs',
    ],
  },
  {
    group: 'Real-Time Voice',
    items: [
      'WebSockets',
      'asyncio',
      'Deepgram Flux STT',
      'Deepgram Aura TTS',
      'Groq Whisper',
      'WebRTC VAD',
      'Web Audio API / AudioWorklet',
      'Streaming TTS',
      'Barge-in / Echo Rejection',
    ],
  },
  {
    group: 'Frameworks',
    items: [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'XGBoost',
      'FastAPI',
      'Streamlit',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'OpenCV',
    ],
  },
  {
    group: 'MLOps & Eval',
    items: [
      'MLflow',
      'LangSmith',
      'DVC',
      'DagsHub',
      'Docker',
      'docker-compose',
      'GitHub Actions',
      'CI/CD',
      'Eval Pipelines',
      'LLM Judges',
      'Regression Suites',
      'Observability',
    ],
  },
  {
    group: 'Cloud / Data',
    items: [
      'AWS (Bedrock, EC2, S3)',
      'Azure',
      'GCP',
      'BigQuery',
      'Redis',
      'PostgreSQL',
      'SQLite',
      'async SQLAlchemy',
    ],
  },
  {
    group: 'LLM Providers',
    items: [
      'OpenAI',
      'Groq (Llama 70B)',
      'AWS Bedrock',
      'Google Gemini',
      'Anthropic Claude',
      'Multi-provider abstraction',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  school: 'Yenepoya University',
  location: 'India',
  period: 'Aug 2022 – Nov 2025',
  details: [
    'Specialisation in Machine Learning, AI & Robotics',
    'Industry partnership with TCS and Microsoft',
  ],
}

export const spokenLanguages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Malayalam', level: 'Native' },
  { name: 'Hindi', level: 'Elementary' },
  { name: 'Arabic', level: 'Elementary' },
]
