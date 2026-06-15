interface TagProps {
  label: string
  variant?: 'default' | 'purple'
}

export default function Tag({ label, variant = 'default' }: TagProps) {
  const base = 'text-xs font-medium px-2.5 py-1 rounded-full'
  const styles =
    variant === 'purple'
      ? `${base} bg-purple-500/20 text-purple-300 border border-purple-500/30`
      : `${base} bg-white/5 text-zinc-400 border border-white/10`
  return <span className={styles}>{label}</span>
}
