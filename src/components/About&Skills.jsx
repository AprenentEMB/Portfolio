export function About({id}) {
  return (
    <section id={id} className="my-4 mt-8">
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
        <span className="text-black">Node.js, Express, and Supabase</span>{' '}
        to strengthen my full-stack skills.
      </p>

      <p className="text-md text-black tracking-wide font-light mt-4 text-pretty text-justify">
        I'm currently working part-time at <strong>SkillGap</strong>,
        contributing to a variety of projects and areas, including building and
        maintaining internal tools, web applications, and other initiatives
        using <span className="text-black">React, Node.js, Firebase</span>.
        This role allows me to collaborate with experienced developers, learn
        best practices in real-world projects, and improve my problem-solving
        and project management skills.
      </p>

      <p className="text-md text-black tracking-wide font-light mt-4 text-pretty text-justify">
        My background in <strong>music production</strong> and as a{' '}
        <strong>sound technician</strong> influences my attention to detail,
        creativity, and structured thinking in coding. Outside of development, I
        enjoy producing <strong>electronic music</strong>,{' '}
        <strong>rock climbing</strong>, practicing <strong>yoga</strong>, and
        exploring new recipes, which helps me maintain balance and inspiration.
      </p>
    </section>
  )
}

export function InProgress({id}) {
  return (
    <section id={id} className="mt-4 mb-24">
      <div className="text-black text-md tracking-wide font-light space-y-4">
        <p>
          I’m currently focused on building and refining{' '}
          <strong>MyHabits</strong> — a habit tracking application designed to
          help users build consistency and improve their daily routines. This
          project allows me to go deeper into backend development while keeping
          a clean and intuitive front-end experience.
        </p>

        <p>
          My main focus is on designing a solid system architecture that handles
          user data, habits, and activity logs efficiently, while exploring
          automation strategies to enhance the overall user experience.
        </p>

        <div className="border-l-4 border-emerald-400 pl-4 mt-6">
          <h3 className="text-xl font-semibold mb-1">
            🚧 Main focus: MyHabits App
          </h3>

          <p>
            MyHabits is a full-stack habit tracking web application. I’m
            currently building the backend using <strong>Node.js</strong>,{' '}
            <strong>Prisma</strong>, and <strong>Supabase</strong>, focusing on
            database design, authentication, and scalable data access.
          </p>

          <p className="mt-2">
            I’m also implementing automation systems for habit streaks, progress
            tracking, and scheduled processes, with the goal of creating a
            production-ready backend that supports growth and future features.
          </p>

          <p className="mt-2">
            The objective is to deliver a robust, maintainable, and scalable
            application that showcases my ability to design backend systems and
            work comfortably across the full stack.
          </p>
        </div>
      </div>
    </section>
  )
}
