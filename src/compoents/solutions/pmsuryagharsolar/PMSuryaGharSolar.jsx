import { useEffect } from 'react'
import PMSuryaGharHero from './PMSuryaGharHero'
import PMSuryaGharFeatureCards from './PMSuryaGharFeatureCards'
import PMSuryaGharOverview from './PMSuryaGharOverview'
import PMSuryaGharServices from './PMSuryaGharServices'
import PMSuryaGharSystemSizes from './PMSuryaGharSystemSizes'
import PMSuryaGharProcess from './PMSuryaGharProcess'
import PMSuryaGharContact from './PMSuryaGharContact'
import PMSuryaGharFaq from './PMSuryaGharFaq'

function PMSuryaGharSolar() {
  useEffect(() => {
    window.scrollTo(0, 0)

    // Set page SEO metadata according to user requirements
    document.title = 'PM Surya Ghar Solar Installation in Patna | Shibha Enterprises'
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = 'Get PM Surya Ghar Solar Installation in Patna with guidance on rooftop solar, government subsidy, net metering, installation, and eligibility requirements.'
  }, [])

  return (
    <>
      <PMSuryaGharHero />
      <PMSuryaGharFeatureCards />
      <PMSuryaGharOverview />
      <PMSuryaGharServices />
      <PMSuryaGharSystemSizes />
      <PMSuryaGharProcess />
      <PMSuryaGharContact />
      <PMSuryaGharFaq />
    </>
  )
}

export default PMSuryaGharSolar
