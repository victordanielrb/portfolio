import { useLanguage } from '../context/LanguageContext'

export default function ProfileBio() {
  const { t } = useLanguage()
  const { hero } = t

  return (
    <div className="flex-1 min-w-0">
      <p className="text-zinc-400 text-sm mb-1">{hero.greeting}</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">{hero.name}</h1>
      <p className="text-purple-400 font-medium mb-4">{hero.role}</p>
      <div className="space-y-3">
        {hero.bio.map((paragraph, i) => (
          <p key={i} className="text-zinc-400 text-sm leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}
