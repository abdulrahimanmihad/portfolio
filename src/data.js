export const profile = {
  name: 'Abdul Rahiman Mihad',
  title: 'AI Engineer',
  tagline: 'LLM Agents · Real-Time Voice AI · Full-Stack & Cloud · MLOps',
  location: 'Abu Dhabi, UAE',
  availability: 'Available immediately',
  email: 'abdulrahimanmihad@gmail.com',
  phone: '+971 50 670 8992',
  phoneHref: '+971506708992',
  linkedin: 'https://www.linkedin.com/in/abdul-rahiman-mihad/',
  github: 'https://github.com/abdulrahimanmihad',
  cv: './cv.pdf',
  // Rendered uppercase, one line each, in the hero.
  headlineLines: ['AI systems', 'that talk,', 'think & ship.'],
  subline:
    'Full-Stack AI Engineer building Vendoor, a B2B supplier discovery and tender platform for the UAE F&B market. Previously built Alpha, a real-time AI voice interviewer, at HireUp. Generative AI, agentic LLM systems, RAG, computer vision and MLOps on AWS.',
  // Runs in the ticker beneath the hero.
  competencies: [
    'Generative AI',
    'Large Language Models',
    'LLM Agents & Tool Use',
    'Real-Time Voice AI',
    'Conversational AI',
    'RAG',
    'Vector Search',
    'Natural Language Processing',
    'Computer Vision',
    'Prompt Engineering',
    'LLM Fine-Tuning',
    'Backend Architecture',
    'Cloud Architecture',
    'MLOps',
  ],
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  paragraphs: [
    'I am an AI engineer building Vendoor, a B2B supplier discovery and tender platform for the UAE food and beverage market. I own the product end to end: four production LLM agents, WhatsApp and email automation, and a FastAPI and PostgreSQL backend on AWS, taken from MVP to production in a founder-led team.',
    'Before that I built Alpha at HireUp, a full-duplex real-time AI voice interviewer, lifting navigation accuracy from about 80% to 100%. My strengths are generative AI, agentic LLM systems, RAG, NLP, computer vision and MLOps. Microsoft Azure certified, based in the UAE and available immediately.',
  ],
  facts: [
    { label: 'Role', value: 'Full-Stack AI Engineer, Vendoor' },
    { label: 'Previously', value: 'AI/ML Engineer, HireUp' },
    { label: 'Based in', value: 'Abu Dhabi, UAE' },
    { label: 'Status', value: 'Available immediately, UAE visit visa' },
    { label: 'Focus', value: 'LLM agents, real-time voice AI, RAG, full-stack and cloud' },
    { label: 'Certified', value: 'Microsoft Azure AI-900, AZ-900, DP-900' },
  ],
}

export const experience = [
  {
    role: 'Full-Stack AI Engineer',
    company: 'Vendoor',
    companyUrl: null,
    location: 'UAE · Early-stage startup, founder-led team',
    period: 'Jul 2026 – Present',
    summary:
      'Vendoor is a B2B supplier discovery and tender platform for the UAE F&B market. I own the product end to end, from the buyer-facing product and founder console to the AI pipeline, messaging and cloud infrastructure, and took it from MVP to production.',
    // Big-number strip. Each entry is either an animated `value` or a static `text`.
    stats: [
      { value: 4, label: 'Production LLM agents', note: 'with enforced structured output' },
      { value: 5000, label: 'SKUs per supplier catalog', note: 'turned into line items by the agents' },
      { value: 86, label: 'API routes migrated', note: 'Node.js and MySQL to FastAPI and PostgreSQL' },
      { value: 0, label: 'Downtime at cut-over', note: 'under a CI-enforced API contract' },
    ],
    highlights: [
      {
        title: 'Built the platform end to end',
        body:
          'From the buyer-facing product and founder console to the AI pipeline, messaging and cloud infrastructure, taking Vendoor from MVP to production.',
      },
      {
        title: 'Four production LLM agents with enforced structured output',
        body:
          'They turn buyer specs, spreadsheets and 5,000-SKU supplier catalogs into line items, and parse free-text supplier quotes with per-line confidence.',
      },
      {
        title: 'Automated supplier outreach and quote collection',
        body:
          'Runs over the WhatsApp Cloud API and email, with HMAC-verified webhooks and atomic ingestion so retries never duplicate a quote and no message waits on a human.',
      },
      {
        title: 'Pricing normalisation and semantic catalog matching',
        body:
          'Voyage AI embeddings on pgvector make every supplier price comparable at the buyer’s quantity, and match aubergine to eggplant.',
      },
      {
        title: 'Migrated the backend with a zero-downtime cut-over',
        body:
          'From Node.js and MySQL to Python 3.12, FastAPI and PostgreSQL on AWS (App Runner, ECS Fargate, RDS, S3, SQS), porting all 86 API routes under a CI-enforced contract.',
      },
    ],
    tech: [
      'Python 3.12',
      'FastAPI',
      'PostgreSQL',
      'pgvector',
      'SQLAlchemy',
      'Alembic',
      'Voyage AI',
      'WhatsApp Cloud API',
      'Resend',
      'Supabase Auth',
      'AWS App Runner',
      'ECS Fargate',
      'RDS',
      'S3',
      'SQS',
      'GitHub Actions',
      'Docker',
    ],
  },
  {
    role: 'AI/ML Engineer',
    company: 'HireUp',
    companyUrl: 'https://app.hireup.now/',
    location: 'Japan HQ · Remote',
    period: 'May 2026 – Jul 2026',
    summary:
      'Built Alpha, a full-duplex real-time AI voice interviewer, for a technology company headquartered in Japan, working remotely with an international team across time zones.',
    stats: [
      { value: 100, suffix: '%', label: 'Navigation accuracy', note: 'up from about 80%' },
      { value: 1.5, suffix: 's', decimals: 1, label: 'Less start-up latency', note: 'on the voice pipeline' },
      { value: 0, label: 'Redundant LLM calls per turn', note: 'after the turn-loop redesign' },
    ],
    highlights: [
      {
        title: 'Designed the full-duplex real-time voice pipeline',
        body:
          'WebSocket streaming, concurrent asyncio loops, Deepgram Flux speech-to-text, WebRTC voice detection and streaming text-to-speech, cutting start-up latency by about 1.5 seconds.',
      },
      {
        title: 'Raised interview navigation accuracy from about 80% to 100%',
        body:
          'Replaced non-deterministic LLM routing with a deterministic resolver, verified across live interviews and automated tests.',
      },
      {
        title: 'Significantly cut LLM operating cost',
        body:
          'Redesigned the conversation turn loop to remove redundant model calls from every turn.',
      },
      {
        title: 'Built an automated evaluation harness',
        body:
          'Replays full interviews in seconds, with MLflow and LangSmith tracing to catch regressions across releases.',
      },
    ],
    tech: [
      'Python',
      'asyncio',
      'WebSockets',
      'LangGraph',
      'OpenAI',
      'Deepgram Flux STT',
      'WebRTC VAD',
      'Streaming TTS',
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
    category: 'Generative AI · RAG · AWS',
    demo: 'http://3.110.62.109:8501/',
    repo: null,
    blurb:
      'A self-correcting multi-agent pipeline that grades its documents, checks for hallucinations and rewrites queries before it answers.',
    points: [
      'Reduced hallucinations by 40% and reached 92% accuracy on Llama 3.1 70B via AWS Bedrock, with sub-1.5s responses.',
      'MLflow tracks tokens, latency and cost per request, and agent capabilities are exposed as an MCP server.',
      'Deployed on AWS with FastAPI and Docker.',
    ],
    stats: [
      { value: 40, suffix: '%', label: 'fewer hallucinations' },
      { value: 92, suffix: '%', label: 'accuracy' },
    ],
    tags: ['LangGraph', 'AWS Bedrock', 'FastAPI', 'MLflow', 'Docker', 'MCP'],
  },
  {
    name: 'End-to-End Litter Detection System',
    category: 'Computer Vision · Machine Learning',
    demo: 'https://litter-detection.duckdns.org/',
    repo: null,
    blurb:
      'A small-object detection system trained on hand-annotated data and deployed as a live Streamlit app on a reproducible MLOps pipeline.',
    points: [
      'Improved small-object detection accuracy (mAP) by 15% on 1,500+ images annotated by hand in CVAT.',
      '50+ tracked experiments with DVC dataset versioning and MLflow.',
      'Live Streamlit app anyone can try.',
    ],
    stats: [
      { value: 15, suffix: '%', label: 'mAP gain' },
      { value: 1500, suffix: '+', label: 'hand-annotated images' },
      { value: 50, suffix: '+', label: 'tracked experiments' },
    ],
    tags: ['YOLOv8', 'PyTorch', 'OpenCV', 'CVAT', 'DVC', 'MLflow', 'Streamlit'],
  },
  {
    name: 'Character-Level Language Model from Scratch',
    category: 'Deep Learning · PyTorch',
    demo: null,
    repo: 'https://github.com/abdulrahimanmihad',
    blurb:
      'A character-level language model and a custom automatic differentiation engine, built from first principles to understand how modern LLMs train and generate text.',
    points: [
      'Custom autograd engine with dynamic graph traversal and gradient caching.',
      'MLPs, backpropagation and SGD implemented by hand in PyTorch and NumPy.',
    ],
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

export const skills = [
  {
    group: 'AI / LLM',
    items: [
      'Tool Use & Structured Output',
      'RAG',
      'Embeddings (Voyage AI, pgvector)',
      'LangGraph',
      'LangChain',
      'Hugging Face',
      'MCP',
      'PEFT / LoRA',
      'PyTorch',
      'TensorFlow',
      'NLP',
      'Computer Vision',
    ],
  },
  {
    group: 'Real-Time AI',
    items: [
      'WebSockets',
      'asyncio',
      'Deepgram STT & TTS',
      'WebRTC VAD',
      'Web Audio API',
      'Streaming Pipelines',
    ],
  },
  {
    group: 'Backend',
    items: [
      'Python 3.12',
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL',
      'pgvector',
      'Alembic',
      'Node.js',
      'Express',
      'MySQL',
      'Redis',
    ],
  },
  {
    group: 'Frontend',
    items: ['JavaScript', 'HTML', 'CSS', 'Tailwind', 'Streamlit'],
  },
  {
    group: 'DevOps',
    items: [
      'Docker',
      'GitHub Actions (OIDC)',
      'CI/CD',
      'pytest',
      'ruff',
      'MLflow',
      'LangSmith',
      'DVC',
      'Model Monitoring',
    ],
  },
  {
    group: 'Cloud',
    items: [
      'AWS App Runner',
      'AWS ECS Fargate',
      'AWS RDS, S3, SQS',
      'AWS Secrets Manager',
      'AWS Bedrock',
      'Microsoft Azure',
      'Google Cloud',
      'BigQuery',
    ],
  },
  {
    group: 'Integrations',
    items: [
      'Meta WhatsApp Cloud API & Flows',
      'Resend',
      'Supabase Auth',
      'pypdf',
      'openpyxl',
      'fpdf2',
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
