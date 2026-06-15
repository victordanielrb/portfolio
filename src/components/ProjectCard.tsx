import { useState } from 'react'
import type { Project } from '../i18n/translations'
import Tag from './Tag'
import ProjectModal from './ProjectModal'

const TAG_PREVIEW_COUNT = 3

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [modal, setModal] = useState(false)

  const previewTags = project.tags.slice(0, TAG_PREVIEW_COUNT)
  const hiddenCount = project.tags.length - TAG_PREVIEW_COUNT

  return (
    <>
      {modal && <ProjectModal project={project} onClose={() => setModal(false)} />}

      <div
        className="rounded-2xl bg-white/3 border border-white/10 overflow-hidden hover:border-purple-500/30 hover:bg-white/5 transition-all duration-300 cursor-pointer group"
        onClick={() => setModal(true)}
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden h-44">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="p-5">
          {/* Title + badge */}
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <h3 className="text-white font-semibold text-base">{project.title}</h3>
            {project.personal && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Personal
              </span>
            )}
          </div>

          {/* Tag preview */}
          <div className="flex flex-wrap gap-1.5">
            {previewTags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
            {hiddenCount > 0 && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-zinc-500 border border-white/10">
                +{hiddenCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
