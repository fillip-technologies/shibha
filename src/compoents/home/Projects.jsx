import { useEffect, useRef, useState } from 'react'
import solar3 from '../../assets/images/install-1.jpeg'
import solar5 from '../../assets/images/install-3.jpeg'
import solar6 from '../../assets/images/install-6.jpeg'
import solar7 from '../../assets/images/install-2.jpeg'
import solar8 from '../../assets/images/install-7.jpeg'
import solar9 from '../../assets/images/install-5.jpeg'

const projects = [
  {
    image: solar3,
    title: 'Residential Rooftop',
    location: 'Patna, Bihar',
    capacity: '10 kW',
    category: 'Residential',
  },
  {
    image: solar7,
    title: 'Commercial Solar Farm',
    location: 'Hajipur, Bihar',
    capacity: '250 kW',
    category: 'Commercial',
  },
  {
    image: solar9,
    title: 'Township Housing',
    location: 'Darbhanga, Bihar',
    capacity: '200 kW',
    category: 'Residential',
  },
  {
    image: solar6,
    title: 'Solar Array Field',
    location: 'Gaya, Bihar',
    capacity: '500 kW',
    category: 'Residential',
  },
  {
    image: solar8,
    title: 'Modern Home Solar',
    location: 'Patna, Bihar',
    capacity: '8 kW',
    category: 'Residential',
  },
  {
    image: solar5,
    title: 'Inverter & Equipment',
    location: 'Muzaffarpur, Bihar',
    capacity: '15 kW',
    category: 'Commercial',
  },
]


function Projects() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Residential', 'Commercial']
  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

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
    <section id="projects" className="bg-white py-24" ref={ref}>
      <div className="site-container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Our Projects</span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            Featured{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Installations
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            Browse our portfolio of successful solar installations across residential
            and commercial projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${activeFilter === filter
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`project-card group transition-all duration-700 ease-out ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="mb-1 inline-flex w-fit rounded-full bg-emerald-500/90 px-3 py-0.5 text-xs font-bold text-white">
                    {project.capacity}
                  </span>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-slate-300">{project.location}</p>
                </div>

                {/* Category Badge */}
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
