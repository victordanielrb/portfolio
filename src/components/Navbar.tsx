import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const SECTIONS = ['about', 'projects', 'technologies'] as const
type Section = (typeof SECTIONS)[number]

export default function Navbar() {
  const { t, lang, switchTo } = useLanguage()
  const [active, setActive] = useState<Section>('about')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const map = new Map<Element, Section>()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = map.get(entry.target)
            if (id) setActive(id)
          }
        })
      },
      { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
    )

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        map.set(el, id)
        observerRef.current!.observe(el)
      }
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const navLabels: Record<Section, string> = {
    about: t.nav.about,
    projects: t.nav.projects,
    technologies: t.nav.technologies,
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-[#0a0a0b]/80 border-b border-white/5">
      <a
        href="#about"
        className="text-white font-bold text-sm font-mono tracking-tight hover:text-purple-400 transition-colors"
      >
        {'< VD />'}
      </a>

      <nav className="flex items-center gap-1">
        {SECTIONS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              active === id
                ? 'text-white bg-white/10'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {navLabels[id]}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-1">
        <button
          onClick={() => switchTo('en')}
          className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all duration-200 ${
            lang === 'en'
              ? 'text-white bg-purple-500/30 border border-purple-500/50'
              : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => switchTo('pt')}
          className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all duration-200 ${
            lang === 'pt'
              ? 'text-white bg-purple-500/30 border border-purple-500/50'
              : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          PT
        </button>
      </div>
    </header>
  )
}
