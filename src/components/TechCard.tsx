import type { TechItem } from '../i18n/translations'

export default function TechCard({ name, icon, description }: TechItem) {
  const isFaIcon = icon.startsWith('fa')

  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 hover:bg-white/8 transition-all duration-200 group">
      {isFaIcon ? (
        <i className={`${icon} text-2xl text-zinc-300 group-hover:scale-110 transition-transform duration-200`} />
      ) : (
        <img
          src={icon}
          alt={name}
          className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-200"
        />
      )}
      <span className="text-xs text-zinc-400 font-medium text-center">{name}</span>
      {description && (
        <span className="text-[10px] text-zinc-500 text-center leading-tight">{description}</span>
      )}
    </div>
  )
}
