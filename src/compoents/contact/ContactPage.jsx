import { useEffect } from 'react'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import MapSection from './MapSection'
import ContactFaq from './ContactFaq'

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <MapSection />
      <ContactFaq />
    </>
  )
}

export default ContactPage
