import { useEffect, useRef, useState } from 'react'
import founderImg from '../../assets/images/founder.jpeg'
import ownerImg from '../../assets/images/owner.jpeg'
import accountsImg from '../../assets/images/Accounts.jpeg'
import salesImg from '../../assets/images/sales-and-marketing.png'

const teamMembers = [
  {
    name: 'Keshav Kumar',
    role: 'Founder',
    image: founderImg,
    gradient: 'from-emerald-500 via-emerald-600 to-emerald-700',
    glowColor: 'rgba(16, 185, 129, 0.15)',
  },
  {
    name: 'Mrs. Shibha Devi',
    role: 'Owner',
    image: ownerImg,
    gradient: 'from-teal-500 via-teal-600 to-teal-700',
    glowColor: 'rgba(20, 184, 166, 0.15)',
  },
  {
    name: 'Rahul Mehta',
    role: 'Sales & Marketing',
    image: salesImg,
    gradient: 'from-green-500 via-green-600 to-emerald-600',
    glowColor: 'rgba(34, 197, 94, 0.15)',
  },
  {
    name: 'Amit Kumar',
    role: 'Accounts',
    image: accountsImg,
    gradient: 'from-emerald-600 via-teal-500 to-green-500',
    glowColor: 'rgba(5, 150, 105, 0.15)',
  },
]

function TeamSection() {
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


  return (
    <section className="relative bg-slate-50/50 py-32 overflow-hidden" ref={ref}>
      {/* Decorative blurred background blobs */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-[100px]" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-teal-100/30 blur-[100px]" aria-hidden="true" />

      {/* Grid background overlay for high-tech premium feel */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(16, 185, 129, 0.25) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl xl:max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <span className="section-label">Our Leadership</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Meet the{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Experts
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            A dedicated team of solar energy professionals committed to delivering excellence and powering a cleaner tomorrow.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`group relative flex flex-col justify-start transition-all duration-500 ease-out hover:-translate-y-1.5 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Main content wrapper */}
              <div className="w-full">
                {/* Image Container with Landscape Aspect Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md ring-1 ring-black/5 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-emerald-950/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                </div>

                {/* Info Block */}
                <div className="mt-4 px-1 flex flex-col items-start gap-1">
                  <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-emerald-700">
                    {member.name}
                  </h3>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                    {member.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
