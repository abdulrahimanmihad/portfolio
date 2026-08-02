export const profile = {
  name: 'Abdul Rahiman Mihad',
  title: 'AI Engineer',
  tagline: 'Real-Time Conversational AI · Agentic Systems · MLOps',
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
    'I am an AI engineer focused on the part of machine learning that is hardest to fake: systems that run live, in front of real users, under real latency budgets. Most of my work sits where language models meet streaming audio, state machines, and production infrastructure.',
    'At HireUp I build Alpha, a real-time AI voice interviewer that takes a candidate from browser microphone to streaming speech-to-text, through an LLM engine, and back out as streaming speech. Getting that to feel like a conversation meant treating reliability as an engineering problem rather than a prompting problem — deterministic control flow where correctness matters, and the model where judgement matters.',
    'Outside of that I work on agentic retrieval systems, computer vision pipelines with real experiment tracking, and low-level deep learning implementations built from scratch to understand what the abstractions are hiding.',
  ],
  facts: [
    { label: 'Based in', value: 'Abu Dhabi, UAE' },
    { label: 'Currently', value: 'AI/ML Engineer at HireUp' },
    { label: 'Focus', value: 'Real-time voice AI, agentic LLM systems' },
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
      'Project "Alpha" — a production real-time AI Voice Interviewer: browser microphone to streaming STT, through an LLM engine, back out as streaming TTS.',
    highlights: [
      {
        metric: { value: 15, suffix: '/15' },
        title: 'Correct live navigation turns',
        body:
          'A deterministic, zero-latency NAV resolver replaced prompt-only interview navigation, taking turn accuracy from roughly 80% to 15 of 15 on live runs.',
      },
      {
        metric: { value: 1.5, prefix: '~', suffix: 's', decimals: 1 },
        title: 'Startup latency removed',
        body:
          'STT pre-connect and warm streams cut about 1.5 seconds of cold-start delay before the candidate hears the first question.',
      },
      {
        metric: { text: '~300–450' },
        unitLabel: 'tokens/turn saved',
        title: 'Per-turn cost optimisation',
        body:
          'Replaced vector RAG with a one-time JD/CV JSON extraction and eliminated per-turn LLM summarisation calls entirely.',
      },
      {
        metric: null,
        title: 'Voice barge-in',
        body:
          'Candidates can interrupt the AI mid-sentence, using AudioWorklet RMS detection, echo rejection and browser-native acoustic echo cancellation.',
      },
      {
        metric: null,
        title: 'Text-level eval and regression suite',
        body:
          'Replays full interviews in seconds with LLM judges, with MLflow metrics and LangSmith tracing behind every run.',
      },
      {
        metric: { value: 11, suffix: '-tag' },
        title: 'Hidden control protocol',
        body:
          'Separates prompt-owned speech from code-owned state, and fixed a Redis read-modify-write race condition in session handling.',
      },
    ],
    tech: [
      'Python',
      'FastAPI',
      'WebSockets',
      'asyncio',
      'LangGraph',
      'LangChain',
      'Groq (Llama 70B)',
      'OpenAI',
      'AWS Bedrock',
      'Gemini',
      'Claude',
      'Deepgram Flux STT',
      'Aura TTS',
      'WebRTC VAD',
      'Redis',
      'PostgreSQL',
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
      'A self-corrective multi-agent pipeline in LangGraph with iterative document grading, hallucination detection and query rewriting.',
    points: [
      'Reduced hallucinations by 40% and reached 92% end-to-end query accuracy.',
      'Llama 3.1 70B via AWS Bedrock at sub-1.5s latency.',
      'MCP server with tool-calling, deployed on AWS EC2 behind FastAPI and Streamlit.',
    ],
    stats: [
      { value: 40, suffix: '%', label: 'fewer hallucinations' },
      { value: 92, suffix: '%', label: 'query accuracy' },
    ],
    tags: ['LangGraph', 'AWS Bedrock', 'RAG', 'MCP', 'MLflow', 'Docker'],
  },
  {
    name: 'AI Litter Detection System',
    demo: 'https://litter-detection.duckdns.org/',
    blurb:
      'A small-object detection pipeline trained on hand-annotated CVAT data, with full experiment tracking and a real-time inference app.',
    points: [
      'Boosted small-object mAP by 15% on 1,500+ hand-annotated CVAT images.',
      '960px scaling, Mosaic and MixUp augmentation, automated oversampling for class imbalance.',
      '50+ tracked experiments with DVC, DagsHub and MLflow.',
      'Real-time Streamlit app with confidence thresholding and per-class counts.',
    ],
    stats: [
      { value: 15, suffix: '%', label: 'mAP gain' },
      { value: 50, suffix: '+', label: 'tracked experiments' },
    ],
    tags: ['YOLOv8', 'Computer Vision', 'CVAT', 'DVC', 'MLflow', 'Streamlit', 'PyTorch'],
  },
  {
    name: 'Custom Character-Level Language Model',
    demo: null,
    blurb:
      'A language model built from scratch — MLPs, backpropagation and SGD in PyTorch on top of a custom autograd engine.',
    points: [
      'Custom autograd engine with dynamic graph traversal and hash map gradient caching.',
      'Built to develop a deep, first-principles understanding of transformer internals.',
    ],
    stats: [],
    tags: ['PyTorch', 'NumPy', 'Deep Learning', 'Autograd'],
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
        name: 'Advanced Fine-Tuning for LLMs',
        url: 'https://coursera.org/share/384fb6f330cfd519df79bb05854eda6f',
      },
      {
        name: 'Fine-Tuning Transformers',
        url: 'https://coursera.org/share/0bd561bc8089ecff32f0181159988eba',
      },
      {
        name: 'AI Agents: RAG & LangChain',
        url: 'https://coursera.org/share/51e48d68fe7fa59272b1f5916124afe3',
      },
      {
        name: 'LLM Architecture & Data Preparation',
        url: 'https://coursera.org/share/53c6a0b4dd5fc2de6f0ec72bbf84e408',
      },
      {
        name: 'Language Modeling with Transformers',
        url: 'https://coursera.org/share/afe132f03837d87e23e0f34d996e93b7',
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
    group: 'AI / LLM',
    items: [
      'LLMs',
      'RAG',
      'Multi-Agent Systems',
      'LangGraph',
      'LangChain',
      'MCP',
      'Prompt Engineering',
      'PEFT / LoRA',
      'Transformers',
      'NLP',
      'Computer Vision',
    ],
  },
  {
    group: 'Real-Time',
    items: [
      'WebSockets',
      'asyncio',
      'Deepgram STT/TTS',
      'WebRTC VAD',
      'Web Audio API',
      'Streaming pipelines',
    ],
  },
  {
    group: 'Engineering',
    items: [
      'Python',
      'SQL',
      'JavaScript',
      'PyTorch',
      'TensorFlow',
      'XGBoost',
      'FastAPI',
      'Streamlit',
      'Pandas',
      'OpenCV',
    ],
  },
  {
    group: 'MLOps',
    items: [
      'MLflow',
      'LangSmith',
      'DVC',
      'Docker',
      'GitHub Actions',
      'CI/CD',
      'Eval Pipelines',
      'Observability',
    ],
  },
  {
    group: 'Cloud / Data',
    items: [
      'AWS (Bedrock, EC2, S3)',
      'Azure',
      'GCP',
      'Redis',
      'PostgreSQL',
      'BigQuery',
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
