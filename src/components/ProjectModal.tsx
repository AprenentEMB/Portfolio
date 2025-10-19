export function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex justify-center items-center">
      <div className="bg-gray-900 p-6 rounded-lg max-w-4xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-xl hover:text-red-400"
        >
          &times;
        </button>

        <h3 className="text-2xl font-semibold mb-4 text-white">{project.title}</h3>

        <div className="flex gap-4 overflow-x-auto max-w-full">
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Screenshot ${idx + 1}`}
              className="w-[300px] h-auto rounded shadow-lg object-cover"
            />
          ))}
        </div>

        <p className="text-gray-300 mt-4">{project.fullDescription}</p>
      </div>
    </div>
  )
}
