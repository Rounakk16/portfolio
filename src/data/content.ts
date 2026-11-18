export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  link: string;
};

export type Capability = {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
};

export type NowEntry = {
  id: string;
  number: string;
  title: string;
  date: string;
  excerpt: string;
  tag: string;
};

export const projects: Project[] = [
  {
    id: 'stock-backtest',
    number: '01',
    title: 'Stock Backtesting Engine',
    category: 'Data Science · Python',
    year: '2025',
    description:
      'A backtesting platform that pulls up to 10 years of historical stock data and evaluates which trading strategies would have performed best on any given stock. Built to answer one question — does this strategy actually work?',
    tags: ['Python', 'Data Analysis', 'Finance'],
    link: '#',
  },
  {
    id: 'swastyasetu',
    number: '02',
    title: 'SwasthyaSetu AI',
    category: 'AI · Healthcare',
    year: '2025',
    description:
      'A medical AI assistant that helps users understand their symptoms and suggests possible conditions. Designed to bridge the gap between a patient and their first conversation with a doctor — not to replace one.',
    tags: ['AI/ML', 'Healthcare', 'NLP'],
    link: '#',
  },
  {
    id: 'agri-model',
    number: '03',
    title: 'Agriculture Tree Tracker',
    category: 'Computer Vision · AI',
    year: '2025',
    description:
      'A computer vision model that identifies tree species from images, assesses their health condition, and tracks growth over time. Built for farmers and researchers who need to monitor large plantations without walking every row.',
    tags: ['Computer Vision', 'Agriculture', 'Deep Learning'],
    link: '#',
  },
  {
    id: 'jarvis',
    number: '04',
    title: 'JARVIS — Personal Assistant',
    category: 'AI · Full-Stack',
    year: '2025',
    description:
      'A voice-controlled personal assistant inspired by Iron Man. Handles system tasks, answers questions, runs automations, and talks back. The project that started as a joke and became the one I use every day.',
    tags: ['AI', 'Voice', 'Automation'],
    link: '#',
  },
];

export const capabilities: Capability[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description:
      'Building intelligent systems — from symptom checkers to computer vision models. I work with Python, deep learning frameworks, and NLP to turn research papers into working software.',
    deliverables: ['Model training & deployment', 'Computer vision', 'NLP pipelines'],
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Web Development',
    description:
      'Frontend to backend, start to finish. JavaScript, TypeScript, Python, PHP, C#, Django, Flask, Node — whatever the project needs. I build APIs, wire up databases, and ship the interface too.',
    deliverables: ['Frontend (React, TS)', 'Backend (Django, Flask, Node)', 'API integration'],
  },
  {
    id: 'design',
    title: 'Graphic Design & Editing',
    description:
      'Visual identity, social media creatives, video editing. I believe good engineering deserves good design, and the attention to detail required for both is the same.',
    deliverables: ['Brand creatives', 'Video editing', 'Visual identity'],
  },
];

export const nowEntries: NowEntry[] = [
  {
    id: 'now-1',
    number: 'Now',
    title: 'In my second year of B.Tech',
    date: 'Ongoing',
    excerpt:
      'Pursuing Computer Science with a specialization in Artificial Intelligence and Data Science. Currently deep in ML coursework and building projects on the side.',
    tag: 'Education',
  },
  {
    id: 'now-2',
    number: 'Now',
    title: 'Experimenting with LLM agents',
    date: 'This month',
    excerpt:
      'Exploring how to chain language models with tools and APIs to build something more useful than a chatbot. JARVIS taught me that the interesting part is the plumbing, not the model.',
    tag: 'Building',
  },
  {
    id: 'now-3',
    number: 'Now',
    title: 'Learning systems design',
    date: 'This month',
    excerpt:
      'Working through how real-scale systems are architected — message queues, caching, load balancing. The kind of thing they do not teach in the second year but probably should.',
    tag: 'Learning',
  },
];

export const skills = {
  languages: ['Python', 'C++', 'C', 'Java', 'JavaScript', 'TypeScript', 'PHP', 'C#'],
  frameworks: ['Django', 'Flask', 'Node.js', 'React'],
  domains: ['AI & Machine Learning', 'Web Development', 'API Integration', 'Graphic Design', 'Video Editing'],
};
