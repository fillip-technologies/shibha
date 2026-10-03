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

function IndustrialSolar() {
  useEffect(() => {
    window.scrollTo(0, 0)

    // Set page SEO metadata
    document.title = 'Industrial Solar Solutions in Patna by Shibha Enterprises'
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = 'Explore Industrial Solar Solutions in Patna for factories, warehouses, cold storage, and solar farms with high-capacity systems for power generation & savings.'
  }, [])

  return (
    <>
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
