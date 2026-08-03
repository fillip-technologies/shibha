import { useEffect } from 'react'
import ProjectsHero from './ProjectsHero'
import ProjectsStats from './ProjectsStats'
import ProjectsGallery from './ProjectsGallery'
import ProjectsFaq from './ProjectsFaq'
import ProjectsCta from './ProjectsCta'

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ProjectsHero />
      <ProjectsStats />
      <ProjectsGallery />
      <ProjectsFaq />
      <ProjectsCta />
    </>
  )
}

export default ProjectsPage
