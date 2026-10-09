import { useEffect } from 'react'
import PMSuryaGharHero from './PMSuryaGharHero'
import PMSuryaGharFeatureCards from './PMSuryaGharFeatureCards'
import PMSuryaGharOverview from './PMSuryaGharOverview'
import PMSuryaGharServices from './PMSuryaGharServices'
import PMSuryaGharSystemSizes from './PMSuryaGharSystemSizes'
import PMSuryaGharProcess from './PMSuryaGharProcess'
import PMSuryaGharContact from './PMSuryaGharContact'
import PMSuryaGharFaq from './PMSuryaGharFaq'
import SEO from '../../../partials/SEO'
import { seoConfig } from '../../../data/seoData'

function PMSuryaGharSolar() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SEO {...seoConfig.pmSuryaGhar} />
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
