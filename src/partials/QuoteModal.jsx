import { useState, useEffect } from 'react'
import { useQuoteModal } from '../context/QuoteModalContext'

const serviceOptions = [
  'On-Grid Solar System',
  'Off-Grid Solar System',
  'Hybrid Solar System',
  'Commercial Installation',
  'Solar Panel Maintenance',
  'PM Surya Ghar Subsidy Help',
  'Other',
]

function QuoteModal() {
  const { isOpen, closeQuoteModal } = useQuoteModal()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState({})

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Reset form when modal closes or opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setErrors({})
      setIsSubmitted(false)
      setIsSubmitting(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Full Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit mobile number'
    }
    if (!formData.service) newErrors.service = 'Please select a solar service'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop with elegant blur */}
      <div
        className="absolute inset-0 bg-slate-950/65 backdrop-blur-md transition-opacity duration-300"
        onClick={closeQuoteModal}
        aria-hidden="true"
      />

      {/* Main Split-Panel Modal Card */}
      <div
        className="relative z-10 w-full max-w-4xl transform overflow-hidden rounded-[32px] bg-white shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 animate-fade-in min-h-[550px]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button - positioned inside the form container to be always visible */}
        <button
          type="button"
          onClick={closeQuoteModal}
          className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition-all hover:bg-emerald-50 hover:text-emerald-700 hover:scale-105 active:scale-95"
          aria-label="Close quote modal"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ── LEFT COLUMN: Marketing & Trust (Hidden on Mobile) ── */}
        <div className="lg:col-span-5 hidden lg:flex flex-col justify-between p-10 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 text-white relative overflow-hidden border-r border-slate-900">
          {/* Decorative floating blurred elements */}
          <div className="absolute -top-12 -left-12 h-48 w-48 rounded-full bg-emerald-500/10 blur-[50px] pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-teal-500/10 blur-[40px] pointer-events-none" aria-hidden="true" />
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(16, 185, 129, 0.4) 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
            aria-hidden="true"
          />

          {/* Logo / Sub-brand */}
          <div className="relative z-10 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/25">
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25" />
              </svg>
            </div>
            <span className="text-xs font-black tracking-widest uppercase text-emerald-400">Shibha Solar</span>
          </div>

          {/* Pitch content */}
          <div className="relative z-10 my-auto py-8">
            <h4 className="text-2xl font-black tracking-tight leading-tight">
              Start Saving <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">With Clean Energy</span>
            </h4>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              Transform your rooftop into a clean power source, slash electrical utility bills, and support environmental sustainability.
            </p>

            {/* Feature lists */}
            <ul className="mt-8 space-y-4">
              {[
                { title: 'MNRE Certified Partner', desc: 'Government approved channels & meters', icon: '🏛️' },
                { title: '₹78,000 Direct Subsidy', desc: 'Step-by-step SURYA GHAR assistance', icon: '💰' },
                { title: '25-Year Panel Warranty', desc: 'Tier-1 modules for lifetime generation', icon: '🛡️' },
                { title: '500+ Live Projects', desc: 'Residential & commercial experience', icon: '⚡' },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3.5 group">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-base shadow-sm group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 group-hover:scale-105 transition-all">
                    {item.icon}
                  </span>
                  <div>
                    <h5 className="text-xs font-bold text-slate-200">{item.title}</h5>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-none">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive carbon footprint offset badge */}
          <div className="relative z-10 bg-slate-900/60 border border-white/5 rounded-2xl p-4 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="text-2xl animate-[spin_10s_linear_infinite]">🌱</span>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Carbon Savings</span>
                <span className="text-xs font-bold text-emerald-400 mt-0.5 block">
                  ~4.8 tons offset / year *
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Interactive Form ── */}
        <div className="lg:col-span-7 col-span-1 p-8 sm:p-10 bg-white flex flex-col justify-center relative">
          
          {isSubmitted ? (
            <div className="py-10 text-center animate-fade-in">
              {/* Animated checkmark icon */}
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-500/25">
                <svg className="h-12 w-12 animate-[bounce_1.2s_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 id="modal-title" className="text-2xl font-black tracking-tight text-slate-900">
                Request Sent Successfully!
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-500 max-w-sm mx-auto">
                Thank you for requesting a solar proposal. One of our lead design engineers will review your request and contact you within 24 hours.
              </p>
              <button
                type="button"
                onClick={closeQuoteModal}
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:shadow-emerald-400/40 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div>
              {/* Header Titles */}
              <div className="pr-8 mb-6">
                <span className="inline-block rounded-full bg-emerald-50 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-emerald-700">
                  ⚡ Free Quotation
                </span>
                <h3 id="modal-title" className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-slate-900 leading-tight">
                  Design Your Solar Solution
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                  Enter your requirements. We'll design a customized feasibility plan for your roof.
                </p>
              </div>

              {/* Form starts */}
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                {/* Full Name */}
                <div>
                  <label htmlFor="modal-name" className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <input
                      id="modal-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar"
                      className={`form-input py-3 pl-11 text-sm rounded-xl border border-slate-200 bg-white w-full placeholder-slate-400/80 transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none hover:border-slate-300 ${
                        errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : ''
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1.5 text-[10px] text-red-500 font-semibold flex items-center gap-1">
                      ⚠️ {errors.name}
                    </p>
                  )}
                </div>

                {/* Email & Phone columns */}
                <div className="grid gap-4 sm:grid-cols-2">
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="modal-email" className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <input
                        id="modal-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rajesh@email.com"
                        className={`form-input py-3 pl-11 text-sm rounded-xl border border-slate-200 bg-white w-full placeholder-slate-400/80 transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none hover:border-slate-300 ${
                          errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : ''
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 text-[10px] text-red-500 font-semibold flex items-center gap-1">
                        ⚠️ {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="modal-phone" className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                      </div>
                      <input
                        id="modal-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        className={`form-input py-3 pl-11 text-sm rounded-xl border border-slate-200 bg-white w-full placeholder-slate-400/80 transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none hover:border-slate-300 ${
                          errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : ''
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 text-[10px] text-red-500 font-semibold flex items-center gap-1">
                        ⚠️ {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Solar Service Option */}
                <div>
                  <label htmlFor="modal-service" className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-700 mb-1.5">
                    Solar Solution Interest *
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3" />
                      </svg>
                    </div>
                    <select
                      id="modal-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`form-input py-3 pl-11 pr-10 text-sm rounded-xl border border-slate-200 bg-white w-full transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none hover:border-slate-300 cursor-pointer appearance-none ${
                        !formData.service ? 'text-slate-400' : 'text-slate-800 font-medium'
                      } ${errors.service ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : ''}`}
                    >
                      <option value="" disabled>Select a solar solution...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="text-slate-800">{opt}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.service && (
                    <p className="mt-1.5 text-[10px] text-red-500 font-semibold flex items-center gap-1">
                      ⚠️ {errors.service}
                    </p>
                  )}
                </div>

                {/* Additional Details (Optional) */}
                <div>
                  <label htmlFor="modal-message" className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-700 mb-1.5">
                    Roof Details & Electricity Bills (Optional)
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute left-4 top-4.5 text-slate-400">
                      <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3" />
                      </svg>
                    </div>
                    <textarea
                      id="modal-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. RCC flat roof of 400 sq.ft, monthly power bills average ₹3,500..."
                      className="form-input py-3 pl-11 text-sm rounded-xl border border-slate-200 bg-white w-full placeholder-slate-400/80 transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none hover:border-slate-300 resize-none"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group mt-4 inline-flex h-13 w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 transition-all hover:shadow-emerald-400/40 hover:from-emerald-400 hover:to-emerald-500 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer select-none active:scale-98"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="mr-2.5 h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Engineering Quote Proposal...
                    </>
                  ) : (
                    <>
                      Generate Custom Quote
                      <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuoteModal
