import { useState } from 'react';
import { ProjectModal } from './ProjectModal';
import projects from '../data/projects';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiStrapi,
  SiAstro,
  SiVite,
  SiI18Next,
  SiFirebase,
  SiStripe,
} from 'react-icons/si';

export function Projects({ id }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const techIcons = {
    React: SiReact,
    Nextjs: SiNextdotjs,
    TailwindCSS: SiTailwindcss,
    TypeScript: SiTypescript,
    Strapi: SiStrapi,
    Astro: SiAstro,
    Vite: SiVite,
    i18n: SiI18Next,
    Firebase: SiFirebase,
    Stripe: SiStripe,
  };

  return (
    <section id={id} className="py-20">
      <div className="flex flex-col gap-12 my-8 h-[40%]">
        {projects.map(project => (
          <div key={project.id}>
            <div
              className="flex flex-col md:flex-row gap-6 group hover:bg-gray-200 p-2 rounded-lg transition-colors duration-300 hover:border-gray-500"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full md:w-1/2 rounded-lg group-hover:scale-[1.02] transition-transform duration-300 object-contain aspect-video"
              />

              <div className="flex flex-col justify-center">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-normal text-black group-hover:text-black">
                    {project.title}
                  </h3>

                  {project.url && (
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        window.open(project.url, '_blank');
                      }}
                      className="mt-1 text-blue-700 hover:text-blue-400 flex items-center gap-2 text-sm font-medium p-2 rounded"
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

                <p className="text-black mt-2 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map(tech => {
                    const Icon = techIcons[tech];
                    return (
                      <span
                        key={tech}
                        className="flex items-center gap-1 bg-blue-800 text-white text-xs px-2 py-1 rounded-full"
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        {tech}
                      </span>
                    );
                  })}
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
  );
}
