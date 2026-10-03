export default function ResidentialBenefits() {
  const benefits = [
    {
      title: 'Direct Bank Subsidy up to ₹78,000',
      desc: 'Under the PM Surya Ghar Muft Bijli Yojana, eligible residential consumers get direct central assistance transferred to their bank accounts.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Up to 90% Reduction in Bills',
      desc: 'Harness free daytime solar energy to power heavy household loads like air conditioners and water pumps, dropping your utility bill to the minimum fixed meter charge.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6H2.25m0 0a2.25 2.25 0 00-2.25 2.25v7.5A2.25 2.25 0 002.25 18h19.5a2.25 2.25 0 002.25-2.25v-7.5A2.25 2.25 0 0021.75 6H21a.75.75 0 01-.75-.75V4.5m-18 0A2.25 2.25 0 014.5 2.25h15A2.25 2.25 0 0121.75 4.5m-18 0h18" />
        </svg>
      ),
    },
    {
      title: '25-Year Performance Warranty',
      desc: 'Our Tier-1 monocrystalline panels come backed by an industry-standard 25-year linear generation warranty guaranteeing dependable output for decades.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: 'Hedge Against Tariff Inflation',
      desc: 'Electricity discom rates rise 4-7% every couple of years. A rooftop solar plant locks in your electricity production cost at zero for 25+ years.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-1.364m-3.182 1.364l-1.364-3.182" />
        </svg>
      ),
    },
    {
      title: 'Elevate Property Value',
      desc: 'Homes and villas equipped with modern certified rooftop solar systems command a premium in the real estate market and appeal to eco-conscious buyers.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.75l-9 6.75V21h4.5z" />
        </svg>
      ),
    },
    {
      title: 'Substantial Carbon Offset',
      desc: 'A typical 5 kW residential solar plant eliminates approximately 6 tonnes of CO2 emissions annually, equivalent to planting over 300 mature trees.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Homeowner Advantages</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Why Switch Your Home To{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Solar Energy?
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Investing in residential rooftop solar is one of the highest-yielding financial decisions for any homeowner in Bihar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-7 rounded-3xl border border-slate-200/60 bg-white hover:border-emerald-300 shadow-sm hover:shadow-xl hover:shadow-emerald-100/30 transition-all hover:-translate-y-1 group"
            >
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {b.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {b.title}
              </h3>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed font-normal">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
