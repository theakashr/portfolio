export const navigation = [
  { label: 'Work', href: '#projects' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const profile = {
  name: 'Akash R',
  title: 'Builder of AI-powered products and thoughtful user experiences',
  intro:
    'I design and ship modern web products that combine practical AI workflows with clean, responsive interfaces.',
  github: 'https://github.com/theakashr',
  portfolio: 'https://portfolio-navy-kappa-28.vercel.app',
}

export const selectedProjects = [
  {
    name: 'AI Health Predictor',
    description:
      'Interactive health-tech demo with secure auth, trajectory prediction timelines, analytics, and clinical-style report generation flows.',
    disclaimer:
      'Educational project demo only — not medical advice, diagnosis, or treatment guidance.',
    stack: ['Next.js 15', 'TypeScript', 'Firebase', 'Recharts', 'Framer Motion', 'Vercel'],
    sourceUrl: 'https://github.com/theakashr/ai-health-predictor',
    demoUrl: 'https://ai-health-predictor-theta.vercel.app',
  },
  {
    name: 'Gully Cricket App',
    description:
      'Real-time scoring and tournament workflows with live updates, match insights, and a PWA-ready mobile-first experience.',
    stack: ['Next.js', 'Tailwind CSS v4', 'Firebase Realtime DB', 'Zustand', 'Recharts', 'Framer Motion'],
    sourceUrl: 'https://github.com/theakashr/gully-cricket-app',
  },
  {
    name: 'AI Support Triage Agent',
    description:
      'Multi-agent RAG triage pipeline that classifies risk, retrieves context, drafts responses, and tracks explainability for support operations.',
    stack: ['Python', 'Gemini', 'sentence-transformers', 'FAISS', 'RAG', 'Agent Systems'],
    sourceUrl: 'https://github.com/theakashr/AI-Support-Triage-Agent',
  },
]

export const supportingProjects = [
  {
    name: 'AI Resume Builder',
    stack: ['TypeScript'],
    sourceUrl: 'https://github.com/theakashr/Ai-Resume-Builder',
  },
  {
    name: 'AI Study',
    stack: ['TypeScript', 'Next.js'],
    sourceUrl: 'https://github.com/theakashr/AI-Study',
  },
  {
    name: 'Medicart',
    stack: ['JavaScript'],
    sourceUrl: 'https://github.com/theakashr/medicart',
  },
  {
    name: 'Medicart Dashboard',
    stack: ['JavaScript'],
    sourceUrl: 'https://github.com/theakashr/medicart-dashboard',
  },
]

export const capabilities = [
  {
    title: 'AI + Product Workflows',
    items: ['Applied AI features', 'RAG pipelines', 'Multi-agent orchestration', 'Safety and explainability patterns'],
  },
  {
    title: 'Frontend Engineering',
    items: ['React / Next.js interfaces', 'Responsive component systems', 'Motion-first interactions', 'Accessible UX patterns'],
  },
  {
    title: 'Real-time Experiences',
    items: ['Live data visualizations', 'Realtime database integrations', 'Progressive web app flows', 'Operational dashboards'],
  },
]

export const focusAreas = [
  'Applied AI features grounded in real product use cases',
  'RAG and agent systems for reliable support and decision flows',
  'Health-tech interfaces that communicate insights clearly and responsibly',
  'Real-time product experiences that stay fast on every screen size',
]
