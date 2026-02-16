const projects = [
  {
    id: 1,
    title: 'Ascendra',
    description: 'An e-commerce platform for skincare products.',
    url: 'https://ascendra-affiliate.vercel.app/',
    fullDescription:
      'Ascendra is a modern e-commerce web application focused on skincare. Users can browse products, filter by category, and manage favorites. The products are linked to Amazon through affiliate links, allowing users to purchase directly from Amazon while supporting the site. Built with React, Next.js, TailwindCSS, and TypeScript, Ascendra emphasizes a clean design and smooth user experience.',
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
      'Next.js',
      'TailwindCSS',
      'TypeScript',
      'Zustand',
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
  {
    id: 4,
    title: 'Felicita',
    description:
    'A simple and clean app to remember and celebrate important dates with your loved ones.',
    url: 'https://felicita-app.vercel.app/',
    fullDescription:
      'Felicita is a minimalist web application designed to help users remember and celebrate important dates with their loved ones. The app allows users to create and manage a list of significant dates, such as birthdays, anniversaries, and other special occasions. With a clean and intuitive interface, Felicita focuses on simplicity and ease of use, making it easy for users to stay organized and never miss an important date again.',
    thumbnail: '/images/felicita-thumb.png',
    images: [
      '/images/felicita-1.png',
      '/images/felicita-2.png',
      '/images/felicita-3.png',
      '/images/felicita-4.png',
    ],
    technologies: ['NodeJS', 'Express', 'MongoDB','React', 'TypeScript', 'Vite'],
  }
];

export default projects;
