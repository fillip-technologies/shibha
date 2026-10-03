import { useEffect } from 'react'
import ResidentialHero from './ResidentialHero'
import ResidentialFeatureCards from './ResidentialFeatureCards'
import ResidentialOverview from './ResidentialOverview'
import ResidentialResults from './ResidentialResults'
import ResidentialBenefits from './ResidentialBenefits'
import ResidentialProcess from './ResidentialProcess'
import ResidentialContact from './ResidentialContact'
import ResidentialFaq from './ResidentialFaq'

function ResidentialSolar() {
  useEffect(() => {
    window.scrollTo(0, 0)

    // Set page SEO metadata
    document.title = 'Residential Solar Installation in Patna | Rooftop Solar'
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = 'Get reliable Residential Solar Installation in Patna for homes and villas. Explore rooftop solar, net metering, energy savings, and efficient solar solutions.'
  }, [])

  return (
    <>
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
