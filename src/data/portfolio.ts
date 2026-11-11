/**
 * Central portfolio data for Aditi Darp.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Aditi Balkrishna Darp',
  displayName: 'Aditi Darp',
  firstName: 'ADITI',
  seriesTag: 'THE SERIES',

  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN ADITI ORIGINAL',

  role: 'Computer Engineering Student',

  tagline: [
    'Computer Engineering Student',
    'Full-Stack Developer',
    'AI / ML Enthusiast',
  ],

  intro:
    'A B.Tech Computer Engineering student passionate about software development, problem-solving and emerging technologies. Exploring Full-Stack Development, Artificial Intelligence and Machine Learning while building practical projects that solve real-world problems.',

  location: 'Maharashtra, India',

  email: 'aditidarp@gmail.com',

  links: {
    linkedin: 'https://www.linkedin.com/in/aditi-darp-61a036283/',
    github: 'https://github.com/aditidarp',
  },

  // The only bundled PDF is named for a different person; don't expose it as Aditi's resume.
  resumePdf: null,

  portrait: {
    src: '/aditi.jpg',
    srcSet: '/aditi.jpg',
    alt: 'Portrait of Aditi Darp',
  },

  interests: [
    'Full-Stack Development',
    'Artificial Intelligence',
    'Data Structures & Algorithms',
  ],
};
export const education = [
  {
    school: 'Indira College Of Engineering And Management,Pune',
    place: 'Parandwadi,Pune',
    degree: 'Bachelor of Technology — Computer Engineering',
    period: 'September 2026 – Present',
  },
  {
    school: 'Marathwada Institute Of Technology',
    place: 'Chattrapati Sambhajinagar',
    degree: 'Diploma - Artificial Intelligence And Machine Learning',
    period: 'August 2023 – May 2026',
    score: '87.06 %',
  },
];

export const experience = [
  {
    company: 'Ekatta Innovators LLP',
    role: 'Data Science Intern',
    place: 'Chhatrapati Sambhajinagar',
    period: 'June 2025 – August 2025',
    points: [
      'Successfully completed a 3-month internship in the Data Science domain.',
      'Worked on assigned tasks and activities related to the Data Science department.',
      'Gained practical industry exposure and experience in a professional working environment.',
      'Demonstrated active participation, dedication and the ability to complete assigned responsibilities.',
    ],
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  laurel: string;
  detail: string;
  link?: string;
};

export const achievements: Achievement[] = [
  
  {
    id: 'data-science-internship',
    title: 'Data Science Intern',
    org: 'Ekatta Innovators LLP',
    laurel: 'INDUSTRY EXPERIENCE',
    detail: 'Completed a three-month Data Science internship from June to August 2025.',
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'policyguard-ai',
    title: 'SurakshaFlow',
    year: '2026',
    genre: 'Disaster Management • Full-Stack Development • Real-Time Systems',
    logline: 'A Real-Time Disaster Alert & Rescue Coordination System designed to deliver disaster-related alerts, provide emergency information, and improve coordination between affected users and rescue teams.',
    stack: ['React • Node.js • Express.js • MongoDB • Socket.IO • REST APIs • NASA EONET API • USGS API'],
    build: [
      'Developed SurakshaFlow, a full-stack disaster management platform that brings disaster alerts, emergency information and rescue coordination features together in one system.',
      'Integrated external disaster data sources, including NASA EONET and USGS, to retrieve information about natural hazards and seismic activity.',
      'Implemented user authentication, registration, profile management and emergency notification preferences.',
      'Worked on real-time updates, interactive maps, weather information and communication features to support disaster awareness and response.',


    ],
    features: [
      'Natural disaster alerts and updates',
      'Integration with NASA EONET and USGS data sources',
      'User registration and authentication',
      'Interactive map for disaster awareness',
      'Real-time communication using Socket.IO',
      'Rescue coordination features',
      'Weather information and emergency updates',
      'User profile and notification preferences',
    ],
    metrics: [
      { value: '500+', label: 'policy documents processed' },
      { value: '92%', label: 'accuracy' },
      { value: '60%', label: 'less manual review time' },
      { value: '45%', label: 'faster decision turnaround' },
      { value: '8', label: 'policy categories' },
    ],
    // The resume links to https://github.com/Sushmitadasari/PolicyGuard-AI, which is not public yet (404).
    // Add `github: 'https://github.com/Sushmitadasari/PolicyGuard-AI',` back once the repo is public.
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
  id: 'schemesathi',
  title: 'SchemeSathi',
  year: '2026',
  genre: 'Full-Stack • GovTech • Eligibility Checker',
  logline: 'A government scheme discovery and eligibility checking platform that helps users find relevant welfare schemes based on their category and personal eligibility.',
  stack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
  build: [
    'Developed a government scheme eligibility checker that organizes schemes into categories, helping users discover schemes relevant to their requirements.',
    'Designed scheme detail pages displaying eligibility information, required documents, application procedures and official application links to simplify access to government benefits.',
  ],
  features: [
    'Category-wise government scheme discovery',
    'Scheme eligibility checking',
    'Required document information',
    'Step-by-step application guidance',
    'Official application links',
    'Multilingual interface (if implemented)',
    'Recently added schemes displayed first (if implemented)',
  ],
  metrics: [
    { value: 'Category-wise', label: 'scheme discovery' },
    { value: 'Eligibility', label: 'based scheme matching' },
    { value: 'Step-by-step', label: 'application guidance' },
    { value: 'Centralized', label: 'scheme information' },
  ],
  
  palette: { from: '#071b13', via: '#16734a', to: '#080e0b', accent: '#6ee7a2' },
  motif: 'flow',
},
  
];



export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'E-KATTA', name: 'Internship Certificate', link: 'https://drive.google.com/file/d/1YDBUSPdEfOmIqa8Q7pdbUDq0no9VULIO/view?usp=drive_link' },
  { issuer: 'SKILL-UP', name: 'Basics of Data Structures and Algorithms', link: 'https://drive.google.com/file/d/1XKapLxURzMPv0jiJCw7S0W5CygMk8OfF/view?usp=drive_link' },
  { issuer: 'WOLFRAM U', name: 'Statistics', link: 'https://drive.google.com/file/d/16n-Z_EnHsNshZdhYGWKoIJtF_jv29wIg/view?usp=drive_link' },
  { issuer: 'WOLFRAM U', name: 'Statistics 2', link: 'https://drive.google.com/file/d/1mWMYq4tY6IC_x3KID7cPUGebnwEMvm-5/view?usp=drive_link' },
  { issuer: 'LE WAGON', name: 'Intro to UI/UX Design', link: 'https://drive.google.com/file/d/1e78CQI0buP8MlBJC3NdvNlYixcqai3BW/view?usp=drive_link' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python is the primary language',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'C++', mono: 'C+' },
      { name: 'Java', mono: 'Jv' },
      { name: 'C', mono: 'C' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & Tools',
    subtitle: 'Shipping & architecture',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'Docker Compose', mono: 'Dc' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Indexing • Normalization',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OS', mono: 'Os' },
      { name: 'CN', mono: 'Cn' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'Collections', mono: 'Co' },
      { name: 'Multithreading', mono: 'Mt' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'System Design', mono: 'Sd' },
      { name: 'Cloud Computing (AWS)', mono: 'Aw' },
      { name: 'Machine Learning', mono: 'Ml' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Oracle Java Certified Foundations Associate', 'HackerRank 5-star'],
  Python: ['PolicyGuard AI', 'Cisco Python Essentials 1', 'HackerRank 5-star'],
  C: ['HackerRank 5-star'],
  React: ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  HTML: ['Pearson IT Specialist – HTML and CSS', 'Cisco HTML Essentials'],
  CSS: ['Pearson IT Specialist – HTML and CSS', 'Cisco CSS Essentials'],
  JavaScript: ['Cisco JavaScript Essentials 1 & 2'],
  'Node.js': ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  'Express.js': ['Payment Gateway System'],
  Docker: ['Payment Gateway System'],
  'Docker Compose': ['Multi-Tenant SaaS Platform'],
  'REST APIs': ['PolicyGuard AI'],
  Microservices: ['Payment Gateway System'],
  'JWT Auth': ['Multi-Tenant SaaS Platform'],
  'Git / GitHub': ['GitHub Foundations'],
  PostgreSQL: ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  MongoDB: ['MongoDB Certified Associate Developer'],
  DBMS: ['NPTEL Database Management System', 'Oracle Database Foundations'],
  DSA: ['AlgoUniversity Tech Fellow', '850+ problems solved'],
  'Cloud Computing (AWS)': ['AWS Certified AI Practitioner', 'AWS Academy Cloud Foundations'],
  'Machine Learning': ['B.Tech AI & ML', 'NPTEL Deep Learning'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2023 – 2026',
    synopsis: 'Intermediate years at Marathwada Institute Of Technology, Chhatrapati Sambhajinagar — Artificial Intelligence and Machine Learning.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Diploma at Marathwada Institute Of Technology, Chhatrapati Sambhajinagar — finishing with a score of 87.06',
        tags: [],
        runtime: 'Aug 2023 – May 2026',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Learning to Build',
    period: '2025 – 2025',
    synopsis: 'Successfully completed a 3-month internship in the Data Science domain.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Trainee',
        description: 'Worked on assigned tasks and activities related to the Data Science department.',
        tags: ['Python', 'Data Visualization', 'Machine Learning'],
        runtime: 'June 2026 – Aug 2026',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Developer',
        description: 'Intensive Full-Stack Development training covering frontend, backend, database integration and deployment workflows.',
        tags: ['Python', 'Flask','Analytics'],
        runtime: 'Technical Hub',
        palette: jade,
      },
      {
        code: 'S02 E03',
        title: 'The Deployer',
        description: 'Deployed and managed web applications with version control, debugging and end-to-end development practices.',
        tags: ['Git / GitHub', 'Deployment'],
        runtime: 'Technical Hub',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Lateral Entry In Btech',
    period: '2026 – Current',
    synopsis: 'Pursuing a Bachelor of Technology in Computer Engineering through the Direct Second Year (Lateral Entry) pathway, building strong foundations in programming, data structures, software development, and emerging technologies.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Engineering Journey',
        description: 'Pursuing BTech in Computer Engineering through Direct Second Year admission, focusing on programming, data structures, object-oriented programming, database management and software development.',
        tags: ['Computer Engineering', 'C++', 'DSA', 'OOP', 'DBMS'],
        runtime: '2026 – Present',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Problem Solver',
        description: 'Actively solving LeetCode problems to strengthen data structures, algorithms and logical thinking while exploring new technologies, development tools and emerging areas of computer science.',
        tags: ['LeetCode', 'DSA', 'Problem Solving', 'Coding', 'Tech Exploration'],
        runtime: '2026 – Present',
        palette: amber,
      }
      
    ],
  },
  
      
  {
  number: 4,
  title: 'Building Real Products',
  period: '2026 – Present',
  synopsis: 'Turning ideas into practical solutions — building technology-driven projects focused on disaster management and government scheme accessibility.',
  episodes: [
    {
      code: 'S04 E01',
      title: 'SurakshaFlow',
      description: 'Real-Time Disaster Alert & Rescue Coordination System — a platform designed to provide disaster alerts, real-time updates and coordination between affected users and rescue teams.',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'APIs'],
      runtime: '2026',
      palette: crimson,
    },
    {
      code: 'S04 E02',
      title: 'SchemeSathi',
      description: 'Government Scheme Eligibility Checker — a platform that helps users discover relevant government schemes based on their category and eligibility, with required documents, application steps and official application links.',
      tags: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Government Schemes'],
      runtime: '2026',
      palette: amber,
    },
  ],
},
{
      
  
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The interests on the resume point to the next arc of the story.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring System Design, Cloud Computing (AWS) and Machine Learning.',
        tags: ['System Design', 'AWS', 'Machine Learning'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  {
    label: 'Education',
    title: 'Computer Engineering',
    detail: 'BTech • Direct Second Year (Lateral Entry)',
    palette: amber,
  },
 
  {
    label: 'Featured Project',
    title: 'SurakshaFlow',
    detail: 'Real-Time Disaster Alert & Rescue Coordination System',
    palette: crimson,
  },
  {
    label: 'Featured Project',
    title: 'SchemeSathi',
    detail: 'Government Scheme Discovery & Eligibility Checker',
    palette: violet,
  },
  {
    label: 'Internship',
    title: 'Data Science Intern',
    detail: 'E-Katta Innovators LLP • 3 Months',
    palette: ocean,
  },
  {
    label: 'Coding Practice',
    title: 'LeetCode',
    detail: 'Actively solving problems and improving DSA skills',
    palette: amber,
  },
  {
    label: 'Technical Interests',
    title: 'Full-Stack Development',
    detail: 'Exploring frontend, backend and database technologies',
    palette: crimson,
  },
  {
    label: 'Programming',
    title: 'Python & C++',
    detail: 'Building programming fundamentals and problem-solving skills',
    palette: jade,
  },
  {
    label: 'Developer Journey',
    title: 'Always Exploring',
    detail: 'Learning new technologies and building practical projects',
    palette: violet,
  },
  {
    label: 'Current Focus',
    title: 'DSA & Development',
    detail: 'Strengthening problem-solving and software development skills',
    palette: ocean,
  },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: education[0].degree,
    lines: [`${education[0].school}, ${education[0].place}`, education[0].period],
    chips: education[1].score ? [`Diploma score ${education[1].score}`] : undefined,
  },
  {
    kicker: 'Skills',
    title: 'My skill universe.',
    lines: [
      skillCategories.slice(0, 3).map((category) => `${category.title}: ${category.skills.map((skill) => skill.name).join(', ')}`).join(' · '),
      skillCategories.slice(3).map((category) => `${category.title}: ${category.skills.map((skill) => skill.name).join(', ')}`).join(' · '),
    ],
    chips: skillCategories[0].skills.map((skill) => skill.name),
  },
  {
    kicker: 'Experience',
    title: experience[0].role,
    lines: [`${experience[0].company} · ${experience[0].place}`, experience[0].period, experience[0].points[0]],
  },
  {
    kicker: 'Projects',
    title: `${projects.length} Originals`,
    lines: projects.map((project) => `${project.title} — ${project.logline}`),
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: achievements.slice(0, 3).map((achievement) => `${achievement.title} — ${achievement.org}`),
  },
  {
    kicker: 'Certified',
    title: `${certifications.length} Certifications`,
    lines: [Array.from(new Set(certifications.map((certification) => certification.issuer))).join(' · ')],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: [profile.interests.join(' · ')],
  },
];

export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Aditi',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals:   { nav: 'Projects', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Achievements', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
