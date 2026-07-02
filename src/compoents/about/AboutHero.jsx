import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import solar3 from '../../assets/images/solar-3.jpg'

function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src={solar3}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />

      {/* Multi-layer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-emerald-950/85 to-slate-900/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

      {/* Animated floating orbs */}
      <div className="absolute top-20 right-[15%] h-72 w-72 rounded-full bg-emerald-500/15 blur-[100px] animate-[float_6s_ease-in-out_infinite]" aria-hidden="true" />
      <div className="absolute bottom-20 left-[10%] h-56 w-56 rounded-full bg-teal-400/10 blur-[80px] animate-[float_8s_ease-in-out_infinite_1s]" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-emerald-500/5 blur-[150px]" aria-hidden="true" />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(16, 185, 129, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* Diagonal decorative lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden opacity-10" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent rotate-[35deg]" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent rotate-[35deg]" />
        <div className="absolute top-[50%] right-[-15%] w-[600px] h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent rotate-[35deg]" />
        <div className="absolute top-[80%] right-[-8%] w-[450px] h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent rotate-[35deg]" />
      </div>

      <div className="site-container relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <div>
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className={`mb-8 transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
            >
              <ol className="flex items-center gap-2 text-sm text-emerald-300/60">
                <li><Link to="/" className="transition hover:text-white">Home</Link></li>
                <li aria-hidden="true">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-white font-semibold">About Us</li>
              </ol>
            </nav>

            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300 backdrop-blur-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                India's Trusted Solar Partner
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1]">
                <span className="text-white">Powering India's</span>
                <br />
                <span className="text-white">Future </span>
                <span className="bg-gradient-to-r from-emerald-300 via-green-300 to-teal-200 bg-clip-text text-transparent">
                  With Solar
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300/90 sm:text-lg">
                For over 15 years, Shibha Enterprises has been at the forefront of India's solar revolution
                delivering world-class solar energy systems to thousands of homes and businesses.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 transition-all hover:shadow-emerald-400/40 hover:-translate-y-0.5 hover:from-emerald-400 hover:to-emerald-500"
                >
                  Get In Touch
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href="tel:+919534668343"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5"
                >
                  <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call Us Now
                </a>
              </div>
            </div>
          </div>

          {/* Right — Floating stat cards */}
          <div className={`relative hidden lg:block transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            <div className="relative h-[420px]">
              {/* Decorative ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full border border-emerald-500/10" aria-hidden="true" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 rounded-full border border-emerald-500/5" aria-hidden="true" />

              {/* Central solar icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/20 backdrop-blur-xl">
                <svg className="h-10 w-10 text-emerald-400 animate-[spin_20s_linear_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>

              {/* Floating stat card 1 */}
              <div className="absolute top-4 left-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl animate-[float_6s_ease-in-out_infinite]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-white">500+</p>
                    <p className="text-[11px] text-slate-400 font-medium">Projects Completed</p>
                  </div>
                </div>
              </div>

              {/* Floating stat card 2 */}
              <div className="absolute top-8 right-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl animate-[float_7s_ease-in-out_infinite_0.5s]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-white">12 MW</p>
                    <p className="text-[11px] text-slate-400 font-medium">Capacity Deployed</p>
                  </div>
                </div>
              </div>

              {/* Floating stat card 3 */}
              <div className="absolute bottom-12 left-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl animate-[float_8s_ease-in-out_infinite_1s]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/20 text-green-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-white">98%</p>
                    <p className="text-[11px] text-slate-400 font-medium">Client Satisfaction</p>
                  </div>
                </div>
              </div>

              {/* Floating stat card 4 */}
              <div className="absolute bottom-4 right-12 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl animate-[float_6.5s_ease-in-out_infinite_1.5s]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-white">25 Yr</p>
                    <p className="text-[11px] text-slate-400 font-medium">Warranty Coverage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div
          className={`mt-16 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8 transition-all duration-1000 delay-500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        >
          {[
            { label: 'MNRE Certified', icon: '🏛️' },
            { label: 'ISO 9001:2015', icon: '✅' },
            { label: 'PM Surya Ghar Partner', icon: '☀️' },
            { label: '500+ Happy Clients', icon: '💚' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2.5 text-sm text-slate-400">
              <span className="text-base">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutHero
