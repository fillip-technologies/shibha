export default function ResidentialBenefits() {
  const benefits = [
    {
      title: 'Cut Down on Electricity Costs',
      desc: 'Produce your own electricity and have it on hand when you need it. Substantially reduce your monthly billing from day one.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Make the Most of Your Roof',
      desc: 'Solar panels can make a previously wasted rooftop space a money-saving, high-efficiency power generator for your household.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
    },
    {
      title: 'Cleaner Energy for Your Family',
      desc: "Your family's energy needs will be met with clean, renewable resources. Solar power produces zero harmful emissions unlike fossil power plants.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
        </svg>
      ),
    },
    {
      title: 'Potential Long-Term Savings',
      desc: 'Your investment will pay for itself; tier-1 solar panels produce electricity for decades. The compounding money saved on power bills really adds up.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6H2.25m0 0a2.25 2.25 0 00-2.25 2.25v7.5A2.25 2.25 0 002.25 18h19.5a2.25 2.25 0 002.25-2.25v-7.5A2.25 2.25 0 0021.75 6H21a.75.75 0 01-.75-.75V4.5m-18 0A2.25 2.25 0 014.5 2.25h15A2.25 2.25 0 0121.75 4.5m-18 0h18" />
        </svg>
      ),
    },
    {
      title: 'Net-Metering Compatibility',
      desc: 'Take full advantage of the extra daytime electricity your panels produce by exporting excess units to the grid under DISCOM net metering.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
    },
    {
      title: 'A Smarter Property Upgrade',
      desc: 'Make your home greener while improving your power situation and resale valuation. Rooftop solar is a definite smart upgrade for any residence.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Why Homeowners Are Switching to Solar
          </h2>
          <p className="mt-4 text-base sm:text-lg font-semibold text-emerald-800">
            Your Roof Can Provide Something Extraordinary.
          </p>
          <p className="mt-1 text-sm text-slate-500 max-w-2xl mx-auto">
            Residential Solar Installation in Patna has all the advantages a homeowner could hope for both today and in the future.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-7 rounded-3xl border border-slate-200/70 bg-[#FBFDFB] hover:bg-white hover:border-emerald-300 shadow-xs hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="h-12 w-12 rounded-2xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center mb-6 group-hover:bg-[#064E3B] group-hover:text-[#6EE7B7] transition-colors">
                {b.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                {b.title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
