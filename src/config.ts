// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Astro | Personal Portfolio';
export const SITE_CREATOR = 'Alessandro Incantalupo';
export const GITHUB_URL = 'https://github.com/Alessandro-Incantalupo';
export const SITE_DESCRIPTION =
  "Alessandro Incantalupo's personal portfolio showcasing his skills, experiences, and projects as a Software Engineer at Accenture. Connect with me today!";
export const GENERATE_SLUG_FROM_TITLE = true;
export const TRANSITION_API = true;
export const THEMES = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
  'dim',
  'nord',
  'sunset'
];

export const cv_texts = {
  profile: {
    title: 'Profile',
    description: `Angular Frontend Developer specializing in modern web development with a focus on speed, scalability, and maintainability. 
I build enterprise-grade applications using Angular 15–20, standalone components, Signal Store, and reactive architecture. 
I'm passionate about clean code, modular design, and continuously upskilling in state-of-the-art web technologies including Vue.js. 
Open to remote contracting opportunities across Europe, the UK, or globally, with an emphasis on digital engagement and long-term quality.`
  },
  education: {
    title: 'Education',
    items: [
      {
        title: 'ITIS G. Cardano, Pavia, Italy',
        subtitle: 'High School Diploma, Chemistry — Score: 84/100'
      },
      {
        title: 'University of Pavia, Italy',
        subtitle: 'Bachelor’s Degree in Mathematics (In progress) — GPA: 25.5/30'
      }
    ]
  },
  experience: {
    title: 'Experience',
    items: [
      {
        title: 'Custom Software Engineering Analyst',
        subtitle: 'Sep 2023 – Present | Accenture (Remote)',
        description: `Contributing to a national-scale Angular 17+ project with a 10-person frontend team for a state-level government platform.
    Develop and maintain advanced Angular components using standalone APIs, Signal-based state management, and zoneless configurations.
Collaborate in an Agile environment, participate in code reviews, and continuously sharpen expertise in performance profiling, testing, and enterprise architecture.`
      },
      {
        title: 'Frontend Developer',
        subtitle: 'Sep 2022 – Aug 2023 | ELAB (A.S. Watson Group)',
        description: `Delivered Angular components for a multi-brand loyalty platform across web and mobile.
Integrated REST APIs, designed reactive forms, and ensured accessibility and responsive design.
Worked closely with UI/UX teams and followed Agile delivery rhythms including grooming and retrospectives.`
      }
    ]
  },
  certifications: {
    title: 'Certifications',
    items: [
      'Advanced Dialogue Facilitation — Soliya (2022)',
      'Samsung Innovation Camp — Samsung (2021)'
    ]
  },
  skills: {
    title: 'Skills',
    items: [
      'Angular 15–20',
      'Signals & Signal Store',
      'RxJS',
      'NgRx',
      'TailwindCSS',
      'REST API Integration',
      'TypeScript & JavaScript',
      'Unit & Integration Testing',
      'HTML5 & CSS3',
      'Version Control (Git)',
      'Vue.js (Learning)'
    ]
  },
  learning: {
    title: 'Currently Learning',
    items: [
      'Vue.js 3 & Composition API',
      'Advanced TypeScript patterns',
      'Micro-frontend architecture',
      'Performance optimization techniques'
    ]
  }
};

export const home_texts = {
  greeting: 'Hello there 👋',
  intro: "I'm",
  role: 'Angular Frontend Developer',
  description: `I'm a Frontend Developer, specializing in Angular 15–20, micro frontends, and modern web architecture. 
Currently working on a national-scale enterprise project using the latest Angular features like standalone components, Signals, and zoneless setups.
In my spare time, I'm building an Angular Admin Dashboard and exploring new technologies like Astro, TailwindCSS, and Vue.js.
I'm open to remote contracting roles across Europe, the UK, and beyond—especially those focused on high-impact, long-term digital platforms.`,
  connect: "Let's connect!",
  message: 'Send me a message'
};
