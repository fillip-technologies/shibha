import { useEffect } from 'react'
import AboutHero from './AboutHero'
import OurStory from './OurStory'
import WorkingProcess from './WorkingProcess'
import MissionVisionValues from './MissionVisionValues'
import TeamSection from './TeamSection'
import Certifications from './Certifications'
import AboutFaq from './AboutFaq'
import AboutCta from './AboutCta'

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <AboutHero />
      <OurStory />
      <WorkingProcess />
      <MissionVisionValues />
      <TeamSection />
      <Certifications />
      <AboutFaq />
      <AboutCta />
    </>
  )
}

export default AboutPage
