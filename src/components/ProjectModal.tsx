import { useEffect } from 'react'
import type { Project } from '../i18n/translations'
import { useLanguage } from '../context/LanguageContext'
import Tag from './Tag'

interface Props {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const { t } = useLanguage()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#111113] border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative overflow-hidden h-52 rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 text-zinc-300 hover:text-white hover:bg-black/80 transition-colors"
          >
            <i className="fas fa-xmark text-sm" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Title + badge */}
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-white font-semibold text-lg">{project.title}</h2>
            {project.personal && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {t.projects.personalBadge}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>

          {/* Contributions */}
          <ul className="space-y-2">
            {project.contributions.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-zinc-400">
                <span className="text-purple-400 mt-0.5 flex-shrink-0">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div>
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

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
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
  )
}
