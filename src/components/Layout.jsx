import {  Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { About, InProgress } from './About&Skills'
import { Projects } from './Projects'


export function Layout() {

const navigate = useNavigate()
const [activeSection, setActiveSection] = useState(null)


// Efecte per observar les seccions i actualitzar activeSection
useEffect(() => {
  const ids = ['about', 'projects', 'in-progress']
  const sections = ids.map(id => document.getElementById(id)).filter(Boolean)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id)
      }
    })
  }, {
    rootMargin: '-70% 0px -70% 0px' // ajusta segons el teu header
  })

  sections.forEach(section => {
    observer.observe(section)
  })

  return () => {
    sections.forEach(section => {
      observer.unobserve(section)
    })
  }
}, [])


  function handleAboutClick(e) {
    e.preventDefault()
    navigate({ to: '/about' })
    setActiveSection('about')
    setTimeout(() => {
      const el = document.getElementById('about')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  function handleProjectsClick(e) {
    e.preventDefault()
    navigate({ to: '/projects' })
    setActiveSection('projects')
    setTimeout(() => {
      const el = document.getElementById('projects')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  function handleInProgressClick(e) {
    e.preventDefault()
    navigate({ to: '/in-progress' })
    setActiveSection('in-progress')
    setTimeout(() => {
      const el = document.getElementById('in-progress')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-br from-black via-slate-900 to-sky-900">



      <div className="pl-[11%] text-slate-400 p-6 flex flex-col justify-between lg:fixed lg:left-0 lg:top-0 lg:h-screen z-20">


        <div>
          <h1 className="text-5xl text-slate-300 font-semibold mb-2 pt-20">Enric Moles</h1>
          <p className="mb-6 text-slate-300 text-xl">Front End Developer</p>
          <p className="mb-6 text-slate-400 text-l font-light w-2/3">Focused on crafting accessible, responsive and modern web experiences.</p>
          <nav className="hidden sm:fixed sm:flex flex-col space-y-3 mt-16 text-xs">
            <div className="flex flex-row space-x-4 mt-2">
                
            <Link
              to="/about"
                onClick={handleAboutClick}
              className={`transition-all font-medium duration-300 flex flex-row items-center group ${activeSection === 'about' ? 'text-sky-400' : 'hover:text-sky-400'}`}
              
            >
                <div className= {`${activeSection === 'about' ? 'custom-line custom-line-active' : 'custom-line'}`}></div>
              <span className='transition-all duration-300 group-hover:ml-4'>ABOUT</span>
            </Link>
            </div>
             <div className="flex flex-row space-x-4 mt-2">
            <Link
              to="/projects"
                onClick={handleProjectsClick}
              className={`transition-all font-medium duration-300 flex flex-row items-center group ${activeSection === 'projects' ? 'text-sky-400' : 'hover:text-sky-400'}`}
              
            >
                <div className= {`${activeSection === 'projects' ? 'custom-line custom-line-active' : 'custom-line'}`}></div>
              <span className='transition-all duration-300 group-hover:ml-4'>PROJECTS</span>
            </Link>
            </div>
       
            <div className="flex flex-row space-x-4 mt-2">
            <Link
              to="/in-progress"
                onClick={handleInProgressClick}
              className={`transition-all font-medium duration-300 flex flex-row items-center group ${activeSection === 'in-progress' ? 'text-sky-400' : 'hover:text-sky-400'}`}
              
            >
               <div className= {`${activeSection === 'in-progress' ? 'custom-line custom-line-active' : 'custom-line'}`}></div>
              <span className='transition-all duration-300 group-hover:ml-4'>IN PROGRESS</span>
            </Link>
            </div>
          </nav>
          <div className="flex flex-row space-x-6 mt-10">
            <div className="flex flex-row space-x-4 mt-52 ml-2">
  {/* GitHub */}
  <a href="https://github.com/AprenentEMB" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
    <svg className="w-6 h-6 hover:text-sky-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
    </svg>
  </a>
  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/enric-moles-bellveh%C3%AD-7358b024a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <svg className="w-6 h-6 hover:text-sky-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.25c.41-.59 1.09-1.25 2.09-1.25 2.28 0 2.91 1.5 2.91 3.44v6.56z"/>
    </svg>
  </a>
  {/* Goodreads */}
{/*  <a href="https://www.goodreads.com/user/show/00000000-enricmoles" target="_blank" rel="noopener noreferrer" aria-label="Goodreads">
    <svg className="w-6 h-6 hover:text-sky-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
      <text x="2" y="18" fontSize="16" fontFamily="serif">G</text>
    </svg>
  </a>
  */}
  </div>
</div>
        </div>
      </div>
<div className="pl-[5%] pr-[5%] lg:pl-[48%] lg:pr-[10%]">
  {/* Main content */}
  <main className="flex flex-col">
    <div className="px-2">
      <About />
      <Projects />
      <InProgress />
    </div>
  </main>
</div>
</div>
  )
}

// Posar les meves pag reals a les icones