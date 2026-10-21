export const profile = {
  name: 'Abdul Rahiman Mihad',
  shortName: 'A. R. Mihad',
  title: 'AI Engineer',
  location: 'Abu Dhabi, UAE',
  availability: 'Available immediately',
  email: 'abdulrahimanmihad@gmail.com',
  phone: '+971 50 865 5325',
  phoneHref: '+971508655325',
  linkedin: 'https://www.linkedin.com/in/abdul-rahiman-mihad/',
  github: 'https://github.com/abdulrahimanmihad',
  cv: './cv.pdf',
  // Panel statement. Text between asterisks is set in italics.
  headline: 'AI systems that talk, think and *ship.*',
  subline:
    'Founder of Vendoor, building the LLM agents, messaging and cloud infrastructure behind a B2B procurement platform for the UAE. Before that, real-time voice AI at HireUp.',
}

// The panel index. Order must match the section order in App.jsx.
export const navLinks = [
  { id: 'about', index: '01', label: 'Profile' },
  { id: 'experience', index: '02', label: 'Experience' },
  { id: 'projects', index: '03', label: 'Work' },
  { id: 'skills', index: '04', label: 'Capabilities' },
  { id: 'background', index: '05', label: 'Background' },
  { id: 'contact', index: '06', label: 'Contact' },
]

export const about = {
  paragraphs: [
    'I build AI products that reach production and stay there. I founded Vendoor and built the platform end to end: four LLM agents with enforced structured output, WhatsApp and email automation, and a FastAPI and PostgreSQL backend on AWS, now live with real UAE suppliers.',
    'Before that I built Alpha at HireUp, a full-duplex real-time voice interviewer, and raised its navigation accuracy from about 80% to 100%. My strengths are generative AI, agentic LLM systems, RAG, computer vision and MLOps, backed by three Microsoft Azure certifications.',
  ],
  facts: [
    { label: 'Currently', value: 'Founder and Full-Stack AI Engineer, Vendoor' },
    { label: 'Previously', value: 'AI/ML Engineer, HireUp' },
    { label: 'Based in', value: 'Abu Dhabi, UAE' },
    { label: 'Status', value: 'Available immediately, UAE visit visa' },
  ],
}

export const experience = [
  {
    role: 'Founder and Full-Stack AI Engineer',
    company: 'Vendoor',
    companyUrl: 'https://vendoor.ae',
    location: 'Abu Dhabi, UAE',
    period: 'Jul 2026 – Present',
    summary:
      'Vendoor is a B2B supplier discovery and tender platform for the UAE food and beverage market. I founded it and built it end to end, from the buyer-facing product and founder console to the AI pipeline, messaging and cloud infrastructure. It is live in production with real suppliers and the full tender loop running on real replies.',
    // Large figures. `value` is the display string, formatted by hand.
    stats: [
      { value: '4', label: 'Production LLM agents', note: 'with enforced structured output' },
      { value: '5,000', label: 'SKUs per supplier catalog', note: 'turned into line items automatically' },
      { value: '0', label: 'Downtime at cut-over', note: 'across 86 migrated API routes' },
    ],
    highlights: [
      {
        title: 'Four LLM agents in production',
        body:
          'They turn buyer specs, spreadsheets and 5,000-SKU supplier catalogs into line items, parse free-text quotes with per-line confidence, and match catalog items semantically with Voyage AI embeddings on pgvector.',
      },
      {
        title: 'Supplier outreach that runs itself',
        body:
          'Quote requests and replies move over the WhatsApp Cloud API and email, with HMAC-verified webhooks and atomic ingestion, so retries never duplicate a quote and no message waits on a human.',
      },
      {
        title: 'A zero-downtime backend migration',
        body:
          'Moved from Node.js and MySQL to Python 3.12, FastAPI and PostgreSQL on AWS App Runner, ECS Fargate, RDS, S3 and SQS, porting all 86 API routes under a CI-enforced contract.',
      },
    ],
    tech: [
      'Python 3.12',
      'FastAPI',
      'PostgreSQL',
      'pgvector',
      'Voyage AI',
      'WhatsApp Cloud API',
      'AWS App Runner',
      'ECS Fargate',
      'RDS',
      'SQS',
      'GitHub Actions',
      'Docker',
    ],
  },
  {
    role: 'AI/ML Engineer',
    company: 'HireUp',
    companyUrl: 'https://app.hireup.now/',
    location: 'Remote · Japan HQ',
    period: 'Jan 2026 – Jun 2026',
    summary:
      'Built Alpha, a full-duplex real-time AI voice interviewer, with an international team working across time zones.',
    stats: [
      { value: '100%', label: 'Navigation accuracy', note: 'up from about 80%' },
      { value: '1.5s', label: 'Less start-up latency', note: 'on the voice pipeline' },
    ],
    highlights: [
      {
        title: 'Designed the full-duplex voice pipeline',
        body:
          'WebSocket streaming, concurrent asyncio loops, Deepgram Flux speech-to-text, WebRTC voice detection and streaming text-to-speech, cutting start-up latency by about 1.5 seconds.',
      },
      {
        title: 'Navigation accuracy from about 80% to 100%',
        body:
          'Replaced non-deterministic LLM routing with a deterministic resolver, verified across live interviews and automated tests.',
      },
      {
        title: 'Lower LLM cost and an evaluation harness',
        body:
          'Redesigned the conversation loop to remove redundant model calls from every turn, and built a harness that replays full interviews in seconds with MLflow and LangSmith tracing.',
      },
    ],
    tech: [
      'Python',
      'asyncio',
      'WebSockets',
      'LangGraph',
      'OpenAI',
      'Deepgram Flux',
      'WebRTC VAD',
      'AWS',
      'Redis',
      'PostgreSQL',
      'MLflow',
      'LangSmith',
    ],
  },
]

export const projects = [
  {
    name: 'Self-Corrective RAG System',
    category: 'Generative AI · AWS',
    demo: 'http://3.110.62.109:8501/',
    repo: null,
    blurb:
      'A multi-agent pipeline that grades its own retrievals, checks for hallucinations and rewrites queries before it answers. Runs Llama 3.1 70B on AWS Bedrock with sub-1.5s responses, traces tokens, latency and cost per request in MLflow, and exposes its agents as an MCP server.',
    stats: [
      { value: '40%', label: 'fewer hallucinations' },
      { value: '92%', label: 'accuracy' },
    ],
    tags: ['LangGraph', 'AWS Bedrock', 'FastAPI', 'MLflow', 'Docker', 'MCP'],
  },
  {
    name: 'Litter Detection System',
    category: 'Computer Vision · MLOps',
    demo: 'https://litter-detection.duckdns.org/',
    repo: null,
    blurb:
      'A small-object detector trained on more than 1,500 images annotated by hand in CVAT, with datasets versioned in DVC and every run tracked in MLflow. Deployed as a live Streamlit app anyone can try.',
    stats: [
      { value: '+15%', label: 'mAP on small objects' },
      { value: '50+', label: 'tracked experiments' },
    ],
    tags: ['YOLOv8', 'PyTorch', 'OpenCV', 'CVAT', 'DVC', 'MLflow', 'Streamlit'],
  },
  {
    name: 'Language Model from Scratch',
    category: 'Deep Learning',
    demo: null,
    repo: 'https://github.com/abdulrahimanmihad',
    blurb:
      'A character-level language model and a custom automatic-differentiation engine written from first principles: dynamic graph traversal, gradient caching, and MLPs, backpropagation and SGD implemented by hand in PyTorch and NumPy.',
    stats: [],
    tags: ['PyTorch', 'NumPy', 'Custom autograd'],
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
    issuer: 'IBM / Coursera',
    items: [
      {
        name: 'Advanced LLM Fine-Tuning',
        url: 'https://coursera.org/share/384fb6f330cfd519df79bb05854eda6f',
      },
      {
        name: 'Fine-Tuning Transformers',
        url: 'https://coursera.org/share/0bd561bc8089ecff32f0181159988eba',
      },
      {
        name: 'AI Agents with RAG and LangChain',
        url: 'https://coursera.org/share/51e48d68fe7fa59272b1f5916124afe3',
      },
      {
        name: 'LLM Architecture and Data Preparation',
        url: 'https://coursera.org/share/53c6a0b4dd5fc2de6f0ec72bbf84e408',
      },
      {
        name: 'Language Models with Transformers',
        url: 'https://coursera.org/share/afe132f03837d87e23e0f34d996e93b7',
      },
      {
        name: 'Foundational Models for NLP',
        url: 'https://coursera.org/share/181ba7bf3e84a290e10ec86e9258851f',
      },
      {
        name: 'EDA for Machine Learning',
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

// Each group renders as one comma-separated line.
export const skills = [
  {
    group: 'LLM systems',
    items: [
      'Agents and tool use',
      'Structured output',
      'RAG',
      'Embeddings and vector search',
      'Fine-tuning with PEFT and LoRA',
      'LangGraph',
      'LangChain',
      'Hugging Face',
      'MCP',
      'PyTorch',
      'TensorFlow',
    ],
  },
  {
    group: 'Real-time voice',
    items: [
      'WebSockets',
      'asyncio',
      'Deepgram STT and TTS',
      'WebRTC VAD',
      'Web Audio API',
      'Streaming pipelines',
    ],
  },
  {
    group: 'Backend and cloud',
    items: [
      'Python 3.12',
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL and pgvector',
      'Redis',
      'Node.js',
      'AWS App Runner, ECS Fargate, RDS, S3, SQS and Bedrock',
      'Microsoft Azure',
      'Google Cloud and BigQuery',
    ],
  },
  {
    group: 'Delivery and MLOps',
    items: [
      'Docker',
      'GitHub Actions',
      'pytest',
      'ruff',
      'MLflow',
      'LangSmith',
      'DVC',
      'Model monitoring',
      'WhatsApp Cloud API',
      'Supabase Auth',
      'Resend',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  school: 'Yenepoya University',
  location: 'India',
  period: 'Aug 2022 – Nov 2025',
  details: [
    'Specialised in Machine Learning, AI and Robotics',
    'Industry-partnered programme with TCS and Microsoft',
  ],
}

export const spokenLanguages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Malayalam', level: 'Native' },
  { name: 'Hindi', level: 'Elementary' },
  { name: 'Arabic', level: 'Elementary' },
]
