import { useEffect, useRef, useState } from 'react'
import consultationImg from '../../assets/images/process-consultation.png'
import designImg from '../../assets/images/process-design.jpg'
import installImg from '../../assets/images/process-install.jpg'
import monitoringImg from '../../assets/images/process-monitoring.jpg'

const processSteps = [
  {
    id: '01',
    title: 'Consultation & Site Assessment',
    desc: 'We begin with an in-depth consultation to understand your energy needs and goals. Our team then conducts a detailed on-site evaluation.',
    image: consultationImg,
    layoutType: 'image-top'
  },
  {
    id: '02',
    title: 'Custom System Design & Planning',
    desc: 'Custom system design and planning typically involves creating tailored solutions to meet specific needs and optimize efficiency.',
    image: designImg,
    layoutType: 'image-bottom'
  },
  {
    id: '03',
    title: 'Professional Solar Installation',
    desc: 'Assess roof space, tilt, and orientation (for rooftop installations). Evaluate ground space and shading, and mount solar panels securely.',
    image: installImg,
    layoutType: 'image-top'
  },
  {
    id: '04',
    title: 'Monitoring & Ongoing Support',
    desc: 'Effective monitoring and ongoing support are critical for ensuring a solar energy system\'s optimal long-term generation and health.',
    image: monitoringImg,
    layoutType: 'image-bottom'
  }
]

function WorkingProcess() {
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
    <section
      ref={ref}
      className="relative bg-slate-50/30 py-24 overflow-hidden border-b border-slate-100"
    >
      {/* Subtle Background Glows */}
      <div className="pointer-events-none absolute -right-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-500/5 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/5 blur-[100px]" aria-hidden="true" />

      <div className="site-container">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Our Working Process
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            How We Work Process In{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Solar Energy
            </span>
          </h2>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const isImageTop = step.layoutType === 'image-top'

            return (
              <div
                key={step.id}
                className={`flex flex-col justify-between h-full transition-all duration-1000 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {isImageTop ? (
                  /* Image-Top layout */
                  <div className="flex flex-col h-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 overflow-hidden">
                    {/* Arched image */}
                    <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover rounded-t-full scale-105 hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Content section */}
                    <div className="relative pt-8 pb-7 px-6 text-center flex-grow flex flex-col justify-start">
                      {/* Step Number Badge */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-white font-extrabold text-xs border-4 border-white shadow-sm">
                        {step.id}
                      </div>

                      <h3 className="text-base font-bold text-slate-800 leading-snug">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-slate-500 flex-grow">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Image-Bottom layout */
                  <div className="flex flex-col h-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 overflow-hidden">
                    {/* Content section */}
                    <div className="relative pt-7 pb-8 px-6 text-center flex-grow flex flex-col justify-start">
                      <h3 className="text-base font-bold text-slate-800 leading-snug">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-slate-500 flex-grow">
                        {step.desc}
                      </p>

                      {/* Step Number Badge */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-white font-extrabold text-xs border-4 border-white shadow-sm">
                        {step.id}
                      </div>
                    </div>

                    {/* Arched image */}
                    <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover rounded-b-full scale-105 hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WorkingProcess
