export default function ProfileImage() {
  return (
    <div className="relative flex-shrink-0">
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden ring-2 ring-purple-500/30">
        <img
          src="/img/victor.jfif"
          alt="Victor Daniel"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  )
}
