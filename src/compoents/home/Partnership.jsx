import { useEffect, useRef, useState } from 'react'
import gautamLogo from '../../assets/partners/gautam.png'
import loomLogo from '../../assets/partners/loom-solar-website-logo.png'
import vikramLogo from '../../assets/partners/vikram-solar-removebg-preview.png'
import waareeLogo from '../../assets/partners/waree-removebg-preview.png'
import adaniLogo from '../../assets/partners/adani-solar-vector-logo-1-removebg-preview.png'

const partnerLogos = [
  { name: 'Adani Solar', src: adaniLogo },
  { name: 'Gautam Solar', src: gautamLogo },
  { name: 'Loom Solar', src: loomLogo },
  { name: 'Vikram Solar', src: vikramLogo },
  { name: 'Waaree Solar', src: waareeLogo },
]

function Partnership() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Duplicate the array to create a seamless scrolling marquee on all screen sizes
  const repeatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos]

  return (
    <section className="relative bg-white py-12 overflow-hidden border-b border-slate-100" ref={ref}>
      <div className="site-container">
        {/* Section Title with horizontal lines */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="h-[1px] w-20 bg-amber-600/30" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500/80">
            Partnership
          </span>
          <div className="h-[1px] w-20 bg-amber-600/30" />
        </div>

        {/* Marquee Wrapper with fading edges */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks for smooth fade out */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Flex Row (moves left to right) */}
          <div className="flex w-[200%] gap-10 md:gap-16 items-center animate-marquee-ltr hover:[animation-play-state:paused]">
            {repeatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center gap-10 md:gap-16 flex-shrink-0"
              >
                {/* Logo wrapper without cards/borders */}
                <div className="flex items-center justify-center w-[140px] md:w-[160px] h-12">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-11 object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                {/* Thin vertical divider line */}
                <div className="h-6 w-[1px] bg-slate-200/60" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partnership
