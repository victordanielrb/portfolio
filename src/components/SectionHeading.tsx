interface SectionHeadingProps {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
      <span className="w-1 h-6 bg-purple-500 rounded-full inline-block" />
      {children}
    </h2>
  )
}
