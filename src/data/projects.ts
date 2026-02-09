const projects = [
  {
    id: 1,
    title: 'Ascendra (In Progress)',
    description: 'An e-commerce platform for skincare products (in progress).',
    url: 'https://ascendra-zeta.vercel.app/es',
    fullDescription:
      'Ascendra is a modern e-commerce web application focused on skincare. Users can browse products, filter by category and popularity, create accounts, and manage favorites. Backend integration and checkout system are currently under development.',
    thumbnail: '/images/ascendra-thumb.png',
    images: [
      '/images/ascendra-1.png',
      '/images/ascendra-2.png',
      '/images/ascendra-3.png',
      '/images/ascendra-4.png',
      '/images/ascendra-5.png',
      '/images/ascendra-6.png',
      '/images/ascendra-7.png',
      '/images/ascendra-8.png',
    ],
    technologies: [
      'React',
      'Nextjs',
      'TailwindCSS',
      'TypeScript',
      'Zustand',
      'Strapi',
    ],
  },
  {
    id: 2,
    title: 'Isaac Fluxà Portfolio',
    description:
      "A minimalist portfolio showcasing Isaac Fluxà's film direction and visual storytelling work.",
    url: 'https://isaac-flux.vercel.app/',
    fullDescription:
      'This project is a personal portfolio for Isaac Fluxà, a film director and visual storyteller. Designed with a minimalist and elegant aesthetic, the website focuses on strong visual angles and imagery to present his audiovisual projects, cinematic work, and creative vision. Built with Astro and TailwindCSS, emphasizing clarity, rhythm, and visual impact.',
    thumbnail: '/images/isaac-thumb.png',
    images: [
      '/images/isaac-1.png',
      '/images/isaac-2.png',
      '/images/isaac-3.png',
      '/images/isaac-4.png',
    ],
    technologies: ['Astro', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 3,
    title: 'WeekMePro',
    description:
      'A SaaS web application created to help users design their own personalized weekly schedule. The app focuses on simplicity and usability, allowing users to create planners freely and save them by signing up.',

    url: 'https://www.weekmepro.com',
    fullDescription:
      'WeekMePro is a powerful and intuitive weekly planner that lets you design your weekly schedule for free, without needing an account. Users can optionally create an account to save and manage their weekly planners in the cloud. The app is completely free to use, and for those who wish to support its development, optional donations are available through Buy Me a Coffee, securely processed via Stripe. Additional features include a visual schedule editor, undo/redo actions, PDF export, multilingual support, and extensive customization options for fonts and colors.',
    thumbnail: '/images/myweek-thumb.png',
    images: [
      '/images/myweek-1.png',
      '/images/myweek-2.png',
      '/images/myweek-3.png',
      '/images/myweek-4.png',
      '/images/myweek-5.png',
      '/images/myweek-6.png',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'TailwindCSS',
      'Zustand',
      'i18n',
      'Firebase',
      'Stripe',
    ],
  },
];

export default projects;
