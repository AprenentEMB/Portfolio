import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ProjectModalProps {
  project: {
    title: string;
    images: string[];
    fullDescription: string;
  };
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);

  useEffect(() => {
    setLoadedImages(project.images.map(() => false));
  }, [project.images]);

  if (typeof document === 'undefined') return null;

  const modalContent = (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-white/85 z-50 flex justify-center items-center cursor-pointer animate-fadeIn"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="bg-white/30 backdrop-blur-3xl border border-white/30 p-6 rounded-lg max-w-4xl w-full relative animate-scaleIn cursor-auto z-10 shadow-2xl transition-all duration-300 text-black"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-black/70 text-xl hover:text-red-500 transition-colors duration-200"
        >
          &times;
        </button>

        <h3 className="text-2xl font-semibold mb-4 text-black/90">
          {project.title}
        </h3>

        <div className="modal-scroll overflow-x-auto max-w-full pb-2">
          <div className="flex gap-4 w-max pr-1">
            {project.images.map((img, idx) => {
              const isLoaded = loadedImages[idx];

              return (
                <div
                  key={idx}
                  className="relative max-h-[500px] rounded shadow-lg bg-white/40 flex-shrink-0"
                >
                  {!isLoaded && (
                    <div className="w-[320px] h-[220px] sm:w-[420px] sm:h-[280px] md:w-[520px] md:h-[340px] animate-pulse bg-black/10 rounded" />
                  )}
                  <img
                    src={img}
                    alt={`Screenshot ${idx + 1}`}
                    onLoad={() =>
                      setLoadedImages(prev => {
                        const next = [...prev];
                        next[idx] = true;
                        return next;
                      })
                    }
                    onError={() =>
                      setLoadedImages(prev => {
                        const next = [...prev];
                        next[idx] = true;
                        return next;
                      })
                    }
                    className={`max-h-[500px] w-auto rounded object-contain flex-shrink-0 transition-opacity duration-300 ${
                      isLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-black/90 mt-4 bg-white/70 border border-white/40 rounded-md px-4 py-3">
          {project.fullDescription}
        </p>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
