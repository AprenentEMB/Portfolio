export function About() {
  return (
    
    <section className="my-4 mt-8" id="about">
  <p className="text-md text-slate-400 tracking-wide font-light pt-16">
    I'm Enric Moles, a front-end developer based in Barcelona, passionate about building <span className="text-slate-300">modern, accessible, and functional user interfaces.</span> 
    I enjoy making sure a website visually aligns with its underlying concept while also being fast and performant.
  </p>

  <p className="text-md text-slate-400 tracking-wide font-light mt-4">
    I started learning to code on my own, driven by the realization that programming allows creative ideas to become real, functional projects — and gives you the tools to solve meaningful problems. 
    I followed this passion by completing several <strong>freeCodeCamp</strong> certifications (HTML, CSS, and Front-End Developer) and diving into <strong>React</strong> and <strong>Node.js</strong> through <strong>Midudev's courses</strong>, alongside constantly building personal projects.
  </p>

  <p className="text-md text-slate-400 tracking-wide font-light mt-4">
    These days, I work with tools like <span className="text-slate-300">React (powered by <strong>Vite</strong>), <strong>JavaScript/TypeScript</strong>, <strong>TailwindCSS</strong>, <strong>Zustand</strong>, and the <strong>TanStack Router</strong> and <strong>TanStack Query</strong>.</span>
    I'm also learning the basics of back-end development using <span className="text-slate-300"><strong>Node.js</strong>, <strong>Express</strong>, and <strong>Zod</strong></span> to better understand full-stack workflows.
  </p>

  <p className="text-md text-slate-400 tracking-wide font-light mt-4">
    Before getting into tech, I worked in <strong>music production</strong> and as a <strong>sound technician</strong>. 
    That creative background shaped the way I approach design, structure, and detail in my code today.
  </p>

  <p className="text-md text-slate-400 tracking-wide font-light mt-4">
    Outside of coding, you'll find me producing <strong>electronic music</strong>, <strong>rock climbing</strong>, practicing <strong>yoga</strong>, or enjoying good food and exploring new recipes.
  </p>
</section>

  )
}


export function InProgress() {
  return (
    <section className="mt-4 mb-24" id="in-progress">

      <div className="text-slate-400 text-md tracking-wide font-light space-y-4">

        <p>
          I’m currently focused on building fullstack solo projects to deepen my understanding of complete web application workflows — from design to deployment.
          These projects serve both as learning experiences and as prototypes with real commercial potential.
        </p>

        <p>
          I’m also training for freelance work and preparing to join a collaborative development team in the near future, aiming to work on impactful products that balance usability, performance, and design.
        </p>

        <div className="border-l-4 border-emerald-400 pl-4 mt-6">
          <h3 className="text-xl font-semibold text-slate-300 mb-1">🚧 Main focus: Ascendra</h3>
          <p>
            My current main project is <strong className="text-slate-200">Ascendra</strong> — an e-commerce web app focused on climbing gear.
            It’s built from the ground up using a modern front-end stack (React, TypeScript, TailwindCSS, Zustand), and I’m integrating back-end features like user authentication, cart management, and a functional checkout process.
          </p>
          <p className="mt-2">
            The goal is to create a clean, performant and scalable product that could evolve into a real commercial platform — or serve as a strong technical case study for future work opportunities.
          </p>
        </div>

      </div>
    </section>
  )
}

