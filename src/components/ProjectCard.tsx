import { useState } from 'react'
import type { Project } from '../i18n/translations'
import { useLanguage } from '../context/LanguageContext'
import Tag from './Tag'

const TAG_PREVIEW_COUNT = 3

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage()
  const [expanded, setExpanded] = useState(false)
  const [lightbox, setLightbox] = useState(false)

  const previewTags = project.tags.slice(0, TAG_PREVIEW_COUNT)
  const hiddenCount = project.tags.length - TAG_PREVIEW_COUNT

  return (
    <>
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(false)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="max-w-full max-h-full rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="rounded-2xl bg-white/3 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
        {/* Thumbnail */}
        <div className="group/img relative overflow-hidden h-44 cursor-zoom-in" onClick={() => setLightbox(true)}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-3">
            <span className="text-white text-xs font-medium">
              <i className="fas fa-magnifying-glass-plus mr-1" />
              View image
            </span>
          </div>
        </div>

        <div className="p-5">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-white font-semibold text-base">{project.title}</h3>
              {project.personal && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {t.projects.personalBadge}
                </span>
              )}
            </div>
            <button
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-zinc-400 hover:text-white"
            >
              <i
                className={`fas fa-chevron-down text-xs transition-transform duration-300 ${
                  expanded ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>

          {/* Tag preview */}
          {!expanded && (
            <div className="flex flex-wrap gap-1.5 mb-0">
              {previewTags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
              {hiddenCount > 0 && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-zinc-500 border border-white/10">
                  +{hiddenCount}
                </span>
              )}
            </div>
          )}

          {/* Expandable content */}
          <div className={`expand-grid ${expanded ? 'expanded' : ''}`}>
            <div>
              <div className="expand-content">
                <p className="text-zinc-400 text-sm leading-relaxed mt-3 mb-4">{project.description}</p>

                {/* Contributions */}
                <ul className="space-y-2 mb-4">
                  {project.contributions.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-zinc-400">
                      <span className="text-purple-400 mt-0.5 flex-shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Challenges */}
                {project.challenges && project.challenges.length > 0 && (
                  <div className="mb-4">
                    <p className="text-orange-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      {t.projects.challenges}
                    </p>
                    <ul className="space-y-2">
                      {project.challenges.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-zinc-400">
                          <span className="text-orange-400 mt-0.5 flex-shrink-0">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Full tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} variant="purple" />
                  ))}
                </div>

                {/* Link */}
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <i className="fas fa-arrow-up-right-from-square text-xs" />
                    {t.projects.viewProject}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
