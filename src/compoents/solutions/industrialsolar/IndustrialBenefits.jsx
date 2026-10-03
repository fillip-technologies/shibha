export default function IndustrialBenefits() {
  const technologies = [
    {
      title: 'High-Performance Solar Modules',
      desc: 'Employ advanced PV modules to produce more electricity per square meter of roof or land available.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
    },
    {
      title: 'Bifacial Solar Technology',
      desc: 'Utilize dual-sided solar energy absorption in compatible panels and make use of bifacial modules where required in large ground-mounted projects.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: 'String & Centralized Inverters',
      desc: 'Choose the proper type of inverter technology according to the project capacity, layout, loads, and operational needs.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: 'Advanced Solar Tracking',
      desc: 'If necessary, employ solar tracking systems to change the position of panels accordingly in order to increase the efficiency of solar energy capture.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      ),
    },
    {
      title: 'Industrial Grade Electrical Infrastructure',
      desc: 'Install proper electrical protection, wiring, distribution, mounting, and grid connection equipment for a large-capacity solar system.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 0021 17.25l-5.83-5.83M11.42 15.17l2.496-3.03c.315-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233l5.234-4.306a2.548 2.548 0 00-3.586-3.586l-4.306 5.234m0 0l-3.03 2.496" />
        </svg>
      ),
    },
    {
      title: 'Monitoring Systems',
      desc: 'Monitor generation and system performance using appropriate monitoring systems to allow operators to control their solar installation.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="pt-16 sm:pt-20 pb-6 sm:pb-8 bg-white overflow-hidden">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-2">
            ENGINEERED AT INDUSTRIAL SCALE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
            Technology That Scales Up Accordingly
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            At an industrial level, everything counts. The choice of solar modules, inverters, monitoring systems, and grid integration should depend on project capacity, conditions, energy requirements, and other needs. The Industrial Solar Solutions in Patna include:
          </p>
        </div>

        {/* 6 Technology Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-[#F8FAF9] border border-emerald-100/70 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="h-12 w-12 rounded-2xl bg-white shadow-xs border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-[#064E3B] group-hover:text-[#6EE7B7] transition-all mb-6">
                {tech.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-emerald-800 transition-colors">
                {tech.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
