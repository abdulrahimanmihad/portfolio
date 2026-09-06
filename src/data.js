export const profile = {
  name: 'Abdul Rahiman Mihad',
  title: 'AI Engineer',
  tagline: 'Artificial Intelligence & Machine Learning',
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
    'AI Engineer at HireUp, where I built a real-time voice AI interviewer that is live in production. Machine learning, generative AI, computer vision and MLOps across AWS, Microsoft Azure and Google Cloud.',
  // Runs in the ticker beneath the hero.
  competencies: [
    'Generative AI',
    'Large Language Models',
    'Voice AI',
    'Conversational AI',
    'AI Agents',
    'RAG',
    'Computer Vision',
    'Natural Language Processing',
    'MLOps',
    'Prompt Engineering',
    'LLM Fine-Tuning',
    'Model Deployment',
    'Cloud Computing',
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
    'I build and launch production AI products. At HireUp, a Japan-based technology company, I built the flagship product: a real-time voice AI interviewer that speaks with job candidates, asks interview questions, understands their answers and responds naturally. It is running live today.',
    'My work spans machine learning, generative AI and large language models, natural language processing, computer vision and MLOps, with cloud experience across AWS, Microsoft Azure and Google Cloud. I am known for improving AI accuracy, cutting operating costs and delivering systems that stay reliable in production.',
  ],
  facts: [
    { label: 'Role', value: 'AI/ML Engineer, HireUp' },
    { label: 'Based in', value: 'Abu Dhabi, UAE' },
    { label: 'Status', value: 'Available immediately' },
    { label: 'Focus', value: 'Voice AI, LLMs, RAG, computer vision, MLOps' },
    { label: 'Cloud', value: 'AWS, Microsoft Azure, Google Cloud' },
    { label: 'Certified', value: 'Microsoft Azure AI-900, AZ-900, DP-900' },
  ],
}

export const experience = [
  {
    role: 'AI/ML Engineer',
    company: 'HireUp',
    companyUrl: 'https://app.hireup.now/',
    location: 'Japan HQ, remote',
    period: 'May 2026 – Present',
    summary:
      'Built the company’s flagship AI product: a real-time voice AI interviewer that speaks with job candidates, asks interview questions, understands their answers and responds naturally. Now running live in production, built day to day with an international team across time zones.',
    // Big-number strip. Each entry is either an animated `value` or a static `text`.
    stats: [
      { value: 100, suffix: '%', label: 'Navigation accuracy', note: 'up from roughly 80%' },
      { value: 1.5, suffix: 's', decimals: 1, label: 'Faster response start-up', note: 'per conversation turn' },
      { value: 0, label: 'Extra LLM calls per turn', note: 'after the cost redesign' },
      { text: '0/6', label: 'Regression failures', note: 'down from 2/6' },
    ],
    highlights: [
      {
        title: 'Improved interview accuracy from roughly 80% to 100%',
        body:
          'Redesigned the question-navigation logic around a deterministic resolver instead of LLM position arithmetic, verified across live interview runs and automated tests.',
      },
      {
        title: 'Reduced AI operating costs significantly',
        body:
          'Redesigned how the system uses large language models: a one-time JD and CV extraction replaced vector-store retrieval, and a code-built question log replaced per-turn LLM summarisation, removing unnecessary processing from every conversation turn.',
      },
      {
        title: 'Made conversations feel natural and human',
        body:
          'Candidates can interrupt the AI mid-sentence and it responds appropriately, using client-side voice detection, echo rejection and a behavioural interruption ladder. Pre-connected streaming speech-to-text and text-to-speech cut response start-up delay by about 1.5 seconds.',
      },
      {
        title: 'Built an automated quality testing system',
        body:
          'Replays complete interviews in seconds against the real decision engine, combining deterministic scenario checks with LLM judges, so every software update ships with product quality protected.',
      },
    ],
    tech: [
      'Python',
      'LangGraph',
      'LangChain',
      'OpenAI',
      'AWS',
      'FastAPI',
      'WebSockets',
      'Deepgram',
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
    name: 'Self-Correcting AI Question Answering',
    category: 'Generative AI · RAG · AWS',
    demo: 'http://3.110.62.109:8501/',
    blurb:
      'An AI system that answers questions from documents, then checks and corrects its own answers before responding.',
    points: [
      'Reached 92% accuracy and cut wrong answers by 40% with iterative document grading, hallucination detection and autonomous query rewriting in LangGraph.',
      'Llama 3.1 70B on Amazon Bedrock at under 1.5 seconds per answer, with MLflow tracking tokens, latency and cost per request.',
      'Deployed live on AWS EC2 with FastAPI and Streamlit, with agent capabilities exposed as an MCP server.',
    ],
    stats: [
      { value: 92, suffix: '%', label: 'accuracy' },
      { value: 40, suffix: '%', label: 'fewer wrong answers' },
    ],
    tags: ['Python', 'LangGraph', 'AWS Bedrock', 'EC2', 'FastAPI', 'MLflow', 'Docker', 'MCP'],
  },
  {
    name: 'AI Litter Detection System',
    category: 'Computer Vision · Machine Learning',
    demo: 'https://litter-detection.duckdns.org/',
    blurb:
      'An AI camera system that automatically detects litter in photos, published as a live web application anyone can try.',
    points: [
      'Trained on 1,500+ images I labelled by hand in CVAT, improving small-object detection by 15%.',
      'High-resolution scaling, Mosaic and MixUp augmentation, and automated oversampling for severe class imbalance.',
      'Fully reproducible MLOps workflow: 50+ tracked experiments with DVC dataset versioning, DagsHub and MLflow.',
    ],
    stats: [
      { value: 15, suffix: '%', label: 'better small-object detection' },
      { value: 1500, suffix: '+', label: 'hand-labelled images' },
    ],
    tags: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'CVAT', 'DVC', 'MLflow', 'Streamlit'],
  },
  {
    name: 'Language Model Built from Scratch',
    category: 'Deep Learning · PyTorch',
    demo: null,
    blurb:
      'A small language model built completely from scratch to master how systems like ChatGPT work internally.',
    points: [
      'Custom autograd engine with dynamic graph traversal and gradient caching.',
      'MLPs, backpropagation and SGD implemented by hand, then extended to CNN classifiers in TensorFlow and Keras.',
    ],
    stats: [],
    tags: ['PyTorch', 'NumPy', 'TensorFlow', 'Keras'],
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
        name: 'AI Agents: RAG and LangChain',
        url: 'https://coursera.org/share/51e48d68fe7fa59272b1f5916124afe3',
      },
      {
        name: 'LLM Architecture and Data Preparation',
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
    group: 'AI & ML',
    items: [
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Generative AI',
      'Large Language Models',
      'Natural Language Processing',
      'Computer Vision',
      'RAG',
      'AI Agents',
      'Prompt Engineering',
      'Fine-Tuning',
    ],
  },
  {
    group: 'Programming',
    items: [
      'Python',
      'SQL',
      'JavaScript',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Hugging Face',
      'LangChain',
      'LangGraph',
      'FastAPI',
      'REST APIs',
    ],
  },
  {
    group: 'Cloud',
    items: [
      'Amazon Web Services',
      'Microsoft Azure',
      'Google Cloud Platform',
      'AWS Bedrock',
      'Cloud Deployment',
    ],
  },
  {
    group: 'MLOps & Data',
    items: [
      'Docker',
      'MLflow',
      'CI/CD',
      'GitHub Actions',
      'Model Deployment',
      'Model Monitoring',
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
    'Specialisation in Machine Learning, AI and Robotics',
    'Industry partnership with TCS and Microsoft',
  ],
}

export const spokenLanguages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Malayalam', level: 'Native' },
  { name: 'Hindi', level: 'Elementary' },
  { name: 'Arabic', level: 'Elementary' },
]
