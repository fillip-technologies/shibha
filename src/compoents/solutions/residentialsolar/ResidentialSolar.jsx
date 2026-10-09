import { useEffect } from 'react'
import ResidentialHero from './ResidentialHero'
import ResidentialFeatureCards from './ResidentialFeatureCards'
import ResidentialOverview from './ResidentialOverview'
import ResidentialResults from './ResidentialResults'
import ResidentialBenefits from './ResidentialBenefits'
import ResidentialProcess from './ResidentialProcess'
import ResidentialContact from './ResidentialContact'
import ResidentialFaq from './ResidentialFaq'
import SEO from '../../../partials/SEO'
import { seoConfig } from '../../../data/seoData'

function ResidentialSolar() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SEO {...seoConfig.residential} />
      <ResidentialHero />
      <ResidentialFeatureCards />
      <ResidentialOverview />
      <ResidentialResults />
      <ResidentialBenefits />
      <ResidentialProcess />
      <ResidentialContact />
      <ResidentialFaq />
    </>
  )
}

export default ResidentialSolar
