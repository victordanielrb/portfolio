import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import SectionHeading from './SectionHeading'
import TechCard from './TechCard'

export default function TechnologiesSection() {
  const { t } = useLanguage()
  const [showExtra, setShowExtra] = useState(false)

  return (
    <section id="technologies">
      <SectionHeading>{t.technologies.title}</SectionHeading>

      {/* Main grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
        {t.mainTech.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </div>

      {/* Expandable extra tech */}
      <div className={`expand-grid ${showExtra ? 'expanded' : ''}`}>
        <div>
          <div className="expand-content">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1 pt-1">
              {t.extraTech.map((tech) => (
                <div key={tech.name} className="flex-shrink-0 w-24">
                  <TechCard {...tech} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setShowExtra((v) => !v)}
        className="mt-4 flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
      >
        <i
          className={`fas fa-chevron-down text-xs transition-transform duration-300 ${
            showExtra ? 'rotate-180' : ''
          }`}
        />
        {showExtra ? t.technologies.showLess : t.technologies.showMore}
      </button>
    </section>
  )
}
