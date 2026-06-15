import type { SocialLink as SocialLinkType } from '../i18n/translations'

export default function SocialLink({ label, icon, href, download, filename }: SocialLinkType) {
  return (
    <a
      href={href}
      target={download ? undefined : '_blank'}
      rel={download ? undefined : 'noopener noreferrer'}
      download={download ? filename : undefined}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-purple-500/40 hover:bg-white/8 transition-all duration-200 text-sm font-medium"
    >
      <i className={`${icon} text-base`} />
      {label}
    </a>
  )
}
