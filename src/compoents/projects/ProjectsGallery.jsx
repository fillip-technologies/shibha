import { useEffect, useRef, useState } from 'react'
import { projectsData, projectCategories } from './projectsData'

function ProjectsGallery() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Close modal on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedProject])

  return (
    <>
      <section id="gallery" className="bg-slate-50 py-24" ref={ref}>
        <div className="site-container">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Project Gallery</span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
              Our{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Installations
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
              Being the Best Rooftop Solar Company in Patna, all projects executed by Shibha Enterprises are an embodiment of our dedication towards engineering, accurate installation, and lasting efficiency. Discover our successful solar projects that have been providing clean energy solutions for residential, commercial, and industrial purposes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 scale-105'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-md'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className={`group mb-6 break-inside-avoid cursor-pointer transition-all duration-700 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-100/40 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-900/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />

                    {/* Category Badge */}
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-700 shadow backdrop-blur-sm">
                      {project.category}
                    </span>

                    {/* Capacity Badge */}
                    <span className="absolute right-3 top-3 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-bold text-white shadow">
                      {project.capacity}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {project.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                      <svg className="h-3.5 w-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {project.location}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="mt-16 text-center">
              <p className="text-lg font-semibold text-slate-400">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════ Project Detail Modal ═══════ */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" />

          {/* Modal */}
          <div
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl animate-[fadeIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-lg backdrop-blur-sm transition hover:bg-white hover:text-slate-900 cursor-pointer"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-t-3xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

              {/* Floating badges */}
              <div className="absolute bottom-4 left-5 flex gap-2">
                <span className="rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                  {selectedProject.capacity}
                </span>
                <span className="rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold text-slate-700 shadow-lg backdrop-blur-sm">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {selectedProject.title}
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {selectedProject.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  Completed: {selectedProject.completedDate}
                </span>
              </div>

              <p className="mt-5 text-base leading-relaxed text-slate-600">
                {selectedProject.description}
              </p>

              {/* Project Metrics Grid */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-center">
                  <p className="text-2xl font-black text-slate-900">{selectedProject.panels}</p>
                  <p className="text-xs font-medium text-slate-500 mt-1">Panels Installed</p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-center">
                  <p className="text-2xl font-black text-emerald-600">{selectedProject.capacity}</p>
                  <p className="text-xs font-medium text-slate-500 mt-1">System Capacity</p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-center">
                  <p className="text-2xl font-black text-emerald-600">{selectedProject.annualSavings}</p>
                  <p className="text-xs font-medium text-slate-500 mt-1">Annual Savings</p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-center">
                  <p className="text-2xl font-black text-teal-600">{selectedProject.co2Offset}</p>
                  <p className="text-xs font-medium text-slate-500 mt-1">CO₂ Offset</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectsGallery
