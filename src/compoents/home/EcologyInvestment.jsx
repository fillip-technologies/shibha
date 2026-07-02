import { useEffect, useRef, useState, useCallback } from 'react'
import bulbBg from '../../assets/images/bulb-bg.png'
import solarBgImg from '../../assets/images/solar-bg image.png'

function EcologyInvestment() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isGlowing, setIsGlowing] = useState(false)
  const glowTimerRef = useRef(null)
  const autoGlowRef = useRef(null)

  // Intersection observer for scroll animation
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

  // Auto-glow: starts 3.5s after section is visible, pulses every 5s
  useEffect(() => {
    if (!isVisible) return

    // First glow after 3.5 seconds
    const initialTimer = setTimeout(() => {
      setIsGlowing(true)

      // Then pulse: glow on for 3s, off for 2s, repeat
      autoGlowRef.current = setInterval(() => {
        setIsGlowing((prev) => !prev)
      }, 3000)
    }, 3500)

    return () => {
      clearTimeout(initialTimer)
      if (autoGlowRef.current) clearInterval(autoGlowRef.current)
    }
  }, [isVisible])

  // Manual hover overrides auto-glow
  const handleMouseEnter = useCallback(() => {
    if (autoGlowRef.current) clearInterval(autoGlowRef.current)
    setIsGlowing(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    // Smoothly turn off, then restart auto-glow cycle
    setIsGlowing(false)
    if (glowTimerRef.current) clearTimeout(glowTimerRef.current)
    glowTimerRef.current = setTimeout(() => {
      setIsGlowing(true)
      autoGlowRef.current = setInterval(() => {
        setIsGlowing((prev) => !prev)
      }, 3000)
    }, 2000)
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (glowTimerRef.current) clearTimeout(glowTimerRef.current)
      if (autoGlowRef.current) clearInterval(autoGlowRef.current)
    }
  }, [])

  return (
    <section className="relative bg-white overflow-hidden" ref={ref}>
      <div className="relative w-full">
        <div className="grid min-h-[580px] lg:grid-cols-[42%_58%] lg:min-h-[680px]">

          {/* ═══════ Left: Bulb Image ═══════ */}
          <div
            className={`relative overflow-hidden transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
              }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: 'pointer' }}
          >
            {/* ── Glow Layer 1: Large outer warm glow ── */}
            <div
              className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-[1500ms] ease-in-out"
              style={{
                background:
                  'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(253,224,71,0.28) 0%, rgba(250,204,21,0.12) 35%, rgba(234,179,8,0.04) 60%, transparent 80%)',
                opacity: isGlowing ? 1 : 0,
              }}
              aria-hidden="true"
            />

            {/* ── Glow Layer 2: Inner bright core ── */}
            <div
              className="pointer-events-none absolute z-0 rounded-full transition-all duration-[1200ms] ease-in-out"
              style={{
                width: '280px',
                height: '280px',
                left: '42%',
                top: '38%',
                transform: `translate(-50%, -50%) scale(${isGlowing ? 1.1 : 0.8})`,
                background:
                  'radial-gradient(circle, rgba(255,251,235,0.5) 0%, rgba(253,224,71,0.25) 40%, rgba(250,204,21,0.08) 70%, transparent 100%)',
                opacity: isGlowing ? 1 : 0,
                filter: `blur(${isGlowing ? '40px' : '30px'})`,
              }}
              aria-hidden="true"
            />

            {/* ── Glow Layer 3: Subtle edge light ── */}
            <div
              className="pointer-events-none absolute z-0 rounded-full transition-all duration-[1800ms] ease-in-out"
              style={{
                width: '450px',
                height: '450px',
                left: '45%',
                top: '42%',
                transform: 'translate(-50%, -50%)',
                background:
                  'radial-gradient(circle, rgba(254,240,138,0.15) 0%, transparent 60%)',
                opacity: isGlowing ? 1 : 0,
                filter: 'blur(50px)',
              }}
              aria-hidden="true"
            />

            {/* ── The Bulb Image ── */}
            <img
              src={bulbBg}
              alt="Eco-friendly light bulbs with green plant leaves — clean energy concept"
              className="relative z-10 h-full w-full object-cover object-left"
              style={{
                filter: isGlowing
                  ? 'brightness(1.08) drop-shadow(0 0 60px rgba(250,204,21,0.3)) drop-shadow(0 0 20px rgba(253,224,71,0.2))'
                  : 'brightness(1) drop-shadow(0 0 0px transparent)',
                transition: 'filter 1.2s ease-in-out',
              }}
              loading="lazy"
            />

            {/* ── Tiny floating sparkles (visible when glowing) ── */}
            <div
              className="pointer-events-none absolute left-[38%] top-[28%] z-20 h-1.5 w-1.5 rounded-full bg-yellow-200"
              style={{
                opacity: isGlowing ? 0.6 : 0,
                animation: isGlowing ? 'sparkle 2.5s ease-in-out infinite' : 'none',
                transition: 'opacity 0.8s ease',
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-[52%] top-[35%] z-20 h-1 w-1 rounded-full bg-amber-200"
              style={{
                opacity: isGlowing ? 0.5 : 0,
                animation: isGlowing ? 'sparkle 3s ease-in-out 0.5s infinite' : 'none',
                transition: 'opacity 0.8s ease',
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-[44%] top-[44%] z-20 h-1 w-1 rounded-full bg-yellow-100"
              style={{
                opacity: isGlowing ? 0.4 : 0,
                animation: isGlowing ? 'sparkle 2.8s ease-in-out 1s infinite' : 'none',
                transition: 'opacity 0.8s ease',
              }}
              aria-hidden="true"
            />
          </div>

          {/* ═══════ Right: Content Side ═══════ */}
          <div
            className={`relative flex items-center overflow-hidden transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
              }`}
          >
            {/* Solar panel background image — decorative, bottom-right */}
            <img
              src={solarBgImg}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-2 -right-10 z-0 w-[470px] opacity-[0.25] sm:w-[570px] lg:w-[640px]"
              loading="lazy"
            />

            {/* Content */}
            <div className="relative z-10 px-8 py-16 sm:px-12 lg:px-14 lg:py-0 xl:px-20">
              <div className="max-w-lg">
                {/* Label */}
                {/* <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-emerald-600">
                  <span className="inline-block h-px w-6 bg-emerald-500" />
                  About Us
                </span> */}

                {/* Heading */}
                <h2 className="mt-5 text-[1.75rem] font-extrabold leading-snug text-slate-900 sm:text-[2rem] lg:text-[2.5rem] lg:leading-[1.18]">
                  Produce Your Own
                  <br />
                  <span className="text-slate-800">Clean Energy.</span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                    Save The Environment.
                  </span>
                </h2>

                {/* Divider */}
                <div className="mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400" />

                {/* Body text */}
                <div className="mt-6 space-y-4">
                  <p className="text-[14px] leading-[1.85] text-slate-500 sm:text-[15px]">
                    Shibha Solar is a leader in the energy-saving industry. Established
                    with a vision to make clean energy accessible to every home and
                    business.
                  </p>
                  <p className="text-[14px] leading-[1.85] text-slate-500 sm:text-[15px]">
                    Since inception, we have installed over{' '}
                    <span className="font-semibold text-slate-700">500+ solar energy systems</span>{' '}
                    in homes, businesses, schools, government facilities, and
                    communities delivering more than{' '}
                    <span className="font-semibold text-slate-700">12 MW</span> of
                    renewable energy.
                  </p>

                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className="group mt-9 inline-flex items-center gap-2.5 rounded-lg bg-emerald-600 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-700/25 hover:-translate-y-0.5"
                >
                  Read More
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EcologyInvestment
