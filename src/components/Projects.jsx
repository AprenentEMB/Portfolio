import { useState } from "react"
import { ProjectModal } from "./ProjectModal"
import projects from "../data/projects"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20">


      <div className="flex flex-col gap-12 my-8 h-[40%] ">
        {projects.map((project) => (
          <div key={project.id}>
            <div
              className="flex flex-col md:flex-row gap-6 cursor-pointer group hover:bg-slate-300/5 p-2 rounded-lg transition-colors duration-300 hover:border-t-[0.1px] hover:border-slate-200/20"
              onClick={() => setSelectedProject(project)}
            >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full md:w-1/3 rounded-lg shadow-md group-hover:scale-[1.02] transition-transform duration-300 object-cover max-h-28"
            />

            <div className="flex flex-col justify-center ">
              <div className="flex items-center justify-between">
              <h3 className="text-xl font-normal text-slate-300 group-hover:text-teal-400">{project.title}</h3>{project.url && (
            <button
  onClick={(e) => {
    e.stopPropagation();
    window.open(project.url, '_blank');
  }}
  className="mt-1 text-teal-400 hover:text-teal-100 flex items-center gap-2 text-sm font-medium p-2 rounded z-10"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth="1.2" 
    stroke="currentColor" 
    className="w-6 h-6"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" 
    />
  </svg>
</button>


          )}
              </div>
              <p className="text-slate-400 mt-2 text-sm">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-teal-800 text-teal-400 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
</div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
