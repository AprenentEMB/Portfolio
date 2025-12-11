export function About() {
  return (
    <section className="my-4 mt-8" id="about">
      <p className="text-md text-slate-400 tracking-wide font-light pt-16">
        I'm Enric Moles, a front-end developer based in Barcelona, passionate
        about building
        <span className="text-slate-300">
          {' '}
          modern, accessible, and functional user interfaces.
        </span>
      </p>

      <p className="text-md text-slate-400 tracking-wide font-light mt-4">
        I started learning to code on my own, completing{' '}
        <strong>freeCodeCamp</strong> certifications and diving into{' '}
        <strong>React</strong> and <strong>Node.js</strong> through{' '}
        <strong>Midudev's courses</strong>, while building personal projects
        like e-commerce websites and portfolio pages.
      </p>

      <p className="text-md text-slate-400 tracking-wide font-light mt-4">
        I currently work with{' '}
        <span className="text-slate-300">
          React (Vite), JavaScript/TypeScript, TailwindCSS, Zustand, TanStack
          Router & Query, Astro, and Strapi
        </span>
        , and am learning back-end basics with{' '}
        <span className="text-slate-300">Node.js, Express, and Supabase</span>{' '}
        to strengthen my full-stack skills.
      </p>

      <p className="text-md text-slate-400 tracking-wide font-light mt-4">
        I'm currently working part-time at <strong>SkillGap</strong>,
        contributing to a variety of projects and areas, including building and
        maintaining internal tools, web applications, and other initiatives
        using <span className="text-slate-300">React, Node.js, Firebase</span>.
        This role allows me to collaborate with experienced developers, learn
        best practices in real-world projects, and improve my problem-solving
        and project management skills.
      </p>

      <p className="text-md text-slate-400 tracking-wide font-light mt-4">
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

export function InProgress() {
  return (
    <section className="mt-4 mb-24" id="in-progress">
      <div className="text-slate-400 text-md tracking-wide font-light space-y-4">
        <p>
          I’m currently focused on building and refining{' '}
          <strong>EasyBeats</strong> — a portfolio and showcase platform for the
          beatmaker EasyBeats. This project helps me practice integrating
          multimedia content, responsive design, and modern web frameworks like
          Astro and TailwindCSS.
        </p>

        <p>
          In parallel, I’m exploring new features and interactions that enhance
          user experience, aiming to create a visually appealing and functional
          portfolio that highlights both music and development skills.
        </p>

        <div className="border-l-4 border-emerald-400 pl-4 mt-6">
          <h3 className="text-xl font-semibold text-slate-300 mb-1">
            🚧 Main focus: EasyBeats Portfolio
          </h3>
          <p>
            The EasyBeats project is a portfolio web app for a beatmaker. It
            includes sections to showcase music tracks, projects, and
            collaborations. I’m currently working on layout improvements,
            responsive design, and backend integration for content management.
          </p>
          <p className="mt-2">
            The goal is to create a clean, professional, and scalable portfolio
            that demonstrates my web development capabilities and provides a
            solid experience for users exploring the artist's work.
          </p>
        </div>
      </div>
    </section>
  )
}
