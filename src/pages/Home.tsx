import { LanguageProvider } from '../context/LanguageContext'
import Navbar from '../components/Navbar'
import ProfileImage from '../components/ProfileImage'
import ProfileBio from '../components/ProfileBio'
import SocialLinks from '../components/SocialLinks'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import TechnologiesSection from '../components/TechnologiesSection'
import { useLanguage } from '../context/LanguageContext'

function HomeContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-full text-white">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-24 space-y-24">
        {/* About */}
        <section id="about" className="animate-fade-in">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <ProfileImage />
            <ProfileBio />
          </div>
          <SocialLinks />
        </section>

        {/* Projects */}
        <section id="projects" className="animate-fade-in-up">
          <SectionHeading>{t.projects.title}</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.projectList.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* Technologies */}
        <div className="animate-fade-in-up">
          <TechnologiesSection />
        </div>
      </main>
    </div>
  )
}

export default function HomePage() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  )
}
