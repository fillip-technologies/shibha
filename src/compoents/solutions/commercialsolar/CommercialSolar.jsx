import { useEffect } from 'react'
import CommercialHero from './CommercialHero'
import CommercialFeatureCards from './CommercialFeatureCards'
import CommercialOverview from './CommercialOverview'
import CommercialResults from './CommercialResults'
import CommercialBenefits from './CommercialBenefits'
import CommercialSystemSizes from './CommercialSystemSizes'
import CommercialProcess from './CommercialProcess'
import CommercialContact from './CommercialContact'
import CommercialFaq from './CommercialFaq'
import SEO from '../../../partials/SEO'
import { seoConfig } from '../../../data/seoData'

function CommercialSolar() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SEO {...seoConfig.commercial} />
      <CommercialHero />
      <CommercialFeatureCards />
      <CommercialOverview />
      <CommercialResults />
      <CommercialBenefits />
      <CommercialSystemSizes />
      <CommercialProcess />
      <CommercialContact />
      <CommercialFaq />
    </>
  )
}

export default CommercialSolar
