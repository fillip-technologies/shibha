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

function CommercialSolar() {
  useEffect(() => {
    window.scrollTo(0, 0)

    // Set page SEO metadata
    document.title = 'Commercial Solar Installation in Patna | Shibha Enterprises'
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = 'Explore Commercial Solar Installation in Patna for businesses, hospitals, schools, and commercial buildings with smart, reliable, and energy-efficient solar solutions.'
  }, [])

  return (
    <>
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
