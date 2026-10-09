import { useEffect } from 'react'
import IndustrialHero from './IndustrialHero'
import IndustrialFeatureCards from './IndustrialFeatureCards'
import IndustrialOverview from './IndustrialOverview'
import IndustrialResults from './IndustrialResults'
import IndustrialBenefits from './IndustrialBenefits'
import IndustrialSystemSizes from './IndustrialSystemSizes'
import IndustrialProcess from './IndustrialProcess'
import IndustrialContact from './IndustrialContact'
import IndustrialFaq from './IndustrialFaq'
import SEO from '../../../partials/SEO'
import { seoConfig } from '../../../data/seoData'

function IndustrialSolar() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SEO {...seoConfig.industrial} />
      <IndustrialHero />
      <IndustrialFeatureCards />
      <IndustrialOverview />
      <IndustrialResults />
      <IndustrialBenefits />
      <IndustrialSystemSizes />
      <IndustrialProcess />
      <IndustrialContact />
      <IndustrialFaq />
    </>
  )
}

export default IndustrialSolar
