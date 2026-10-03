import { useEffect } from 'react'
import ResidentialHero from './ResidentialHero'
import ResidentialOverview from './ResidentialOverview'
import ResidentialSystemSizes from './ResidentialSystemSizes'
import ResidentialBenefits from './ResidentialBenefits'
import ResidentialProcess from './ResidentialProcess'
import ResidentialContact from './ResidentialContact'
import ResidentialFaq from './ResidentialFaq'

function ResidentialSolar() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ResidentialHero />
      <ResidentialOverview />
      <ResidentialSystemSizes />
      <ResidentialBenefits />
      <ResidentialProcess />
      <ResidentialContact />
      <ResidentialFaq />
    </>
  )
}

export default ResidentialSolar
