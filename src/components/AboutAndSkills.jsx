export function About({ id }) {
  return (
    <section id={id} className="my-4 mt-8">
      <p className="text-md text-black tracking-wide font-light pt-16 text-pretty text-justify md:hidden">
        I’m Enric Moles, a Barcelona-based front-end developer. I work mainly
        with React (Vite), TypeScript, TailwindCSS, Zustand, TanStack Router &
        Query, Astro, and Strapi, while expanding my back-end skills with
        Node.js, Express, Supabase, and Firebase. Currently part-time at
        SkillGap, building internal tools and web applications.
      </p>

      <div className="hidden md:block">
        <p className="text-md text-black tracking-wide font-light pt-16 text-pretty text-justify">
          I'm Enric Moles, a front-end developer based in Barcelona, passionate
          about building
          <span className="text-black">
            {' '}
            modern, accessible, and functional user interfaces.
          </span>
        </p>

        <p className="text-md text-black tracking-wide font-light mt-4 text-pretty text-justify">
          I started learning to code on my own, completing{' '}
          <strong>freeCodeCamp</strong> certifications and diving into{' '}
          <strong>React</strong> and <strong>Node.js</strong> through{' '}
          <strong>Midudev's courses</strong>, while building personal projects
          like e-commerce websites and portfolio pages.
        </p>

        <p className="text-md text-black tracking-wide font-light mt-4 text-pretty text-justify">
          I currently work with{' '}
          <span className="text-black">
            React (Vite), JavaScript/TypeScript, TailwindCSS, Zustand, TanStack
            Router & Query, Astro, and Strapi
          </span>
          , and am learning back-end basics with{' '}
          <span className="text-black">Node.js, Express, and Supabase</span> to
          strengthen my full-stack skills.
        </p>

        <p className="text-md text-black tracking-wide font-light mt-4 text-pretty text-justify">
          I'm currently working part-time at <strong>SkillGap</strong>,
          contributing to a variety of projects and areas, including building
          and maintaining internal tools, web applications, and other
          initiatives using{' '}
          <span className="text-black">React, Node.js, Firebase</span>. This
          role allows me to collaborate with experienced developers, learn best
          practices in real-world projects, and improve my problem-solving and
          project management skills.
        </p>

        <p className="text-md text-black tracking-wide font-light mt-4 text-pretty text-justify">
          My background in <strong>music production</strong> and as a{' '}
          <strong>sound technician</strong> influences my attention to detail,
          creativity, and structured thinking in coding. Outside of development,
          I enjoy producing <strong>electronic music</strong>,{' '}
          <strong>rock climbing</strong>, practicing <strong>yoga</strong>, and
          exploring new recipes, which helps me maintain balance and
          inspiration.
        </p>
      </div>
    </section>
  );
}

export function InProgress({ id }) {
  return (
    <section id={id} className="mt-4 mb-12">
      <div className="text-black text-md tracking-wide font-light space-y-4">
        <p>
          My focus is on scaling and evolving Taskune, a live task management SaaS built to help companies organize and distribute work efficiently. I’m refining system design, improving performance, and preparing the upcoming 2.0 version.
        </p>

        <div className="border-l-4 border-emerald-400 pl-4 mt-6">
          <h3 className="text-xl font-semibold mb-1">
           Current focus: Taskune 2.0
          </h3>

          <p>
            The goal for version 2.0 is to offer new useful features that complete and enhance Taskune, improving the overall experience for teams while keeping the platform intuitive and easy to use.
          </p>
        </div>

        <p>
          Alongside product development, I’m continuing my professional growth by preparing for the AWS Certified Developer – Associate certification to deepen my understanding of scalable cloud architecture and best practices.
        </p>
      </div>
    </section>
  );
}