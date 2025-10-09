import React from 'react'
import ReactMarkdown from 'react-markdown'

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-[#222] text-white w-[700px] max-h-[80vh] overflow-y-auto rounded-xl p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white text-2xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-1">{project.category}</h2>
        <p className="text-gray-400 text-sm mb-4">{project.period}</p>

        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{project.readme}</ReactMarkdown>
        </div>

      </div>
    </div>
  )
}

export default ProjectModal
