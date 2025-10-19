import { useState } from "react"
import { ProjectModal } from "./ProjectModal"
import projects from "../data/projects"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20">


      <div className="flex flex-col gap-12 my-10 h-[40%] ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row gap-6 cursor-pointer group hover:bg-slate-300/5 p-4 rounded-lg transition-colors duration-300 hover:border-t-[0.1px] hover:border-slate-200/20"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full md:w-1/3 rounded-lg shadow-md group-hover:scale-[1.02] transition-transform duration-300 object-cover max-h-28"
            />

            <div className="flex flex-col justify-center ">
              <h3 className="text-xl font-normal text-slate-300 group-hover:text-teal-400">{project.title}</h3>
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
