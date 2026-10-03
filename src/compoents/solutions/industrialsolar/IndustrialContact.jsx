import { useState } from 'react'

export default function IndustrialContact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    sector: 'Factory / Manufacturing Unit',
    monthlyBill: '₹3,00,000 - ₹7,00,000',
    roofArea: '25,000 - 50,000 sq. ft.',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Full name is required'
    if (!formData.company.trim()) errs.company = 'Company / Plant name is required'
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required'
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      errs.phone = 'Enter a valid 10-digit mobile number'
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email address'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email || 'industrial-inquiry@shibhasolar.com',
        service: 'Industrial Solar Solutions in Patna',
        source: 'Industrial Solar Page',
        message: `Company: ${formData.company} | Sector: ${formData.sector} | Monthly Bill: ${formData.monthlyBill} | Roof Area: ${formData.roofArea} | Note: ${formData.message || 'Industrial Solar Assessment Request'}`,
      }

      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (data.success) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          sector: 'Factory / Manufacturing Unit',
          monthlyBill: '₹3,00,000 - ₹7,00,000',
          roofArea: '25,000 - 50,000 sq. ft.',
          message: '',
        })
      } else {
        setErrors({ submit: data.message || 'Submission failed. Please try again.' })
      }
    } catch {
      setErrors({ submit: 'Could not connect to server. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="industrial-contact" className="py-24 bg-white overflow-hidden scroll-mt-10">
      <div className="site-container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Text from User Content */}
          <div className="lg:col-span-5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-2">
              INDUSTRIAL ENERGY ASSESSMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Ready To Explore Industrial Solar?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Professional planning of Industrial Solar Solutions in Patna would allow industries to discover their options related to solar power generation through factories, warehouses, cold storage, processing units, and solar farms.
            </p>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Let’s analyse your facility to learn about its energy requirements and calculate its solar capacity is the next step.
            </p>

            {/* Direct Contact Cards */}
            <div className="mt-8 space-y-3.5">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F6FAF7] border border-emerald-100">
                <div className="h-11 w-11 rounded-xl bg-[#064E3B] text-[#6EE7B7] flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Industrial Desk Hotline</p>
                  <a href="tel:+919534668343" className="text-sm font-black text-slate-900 hover:text-emerald-700 transition">
                    +91 95346 68343 / +91 99344 88343
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F6FAF7] border border-emerald-100">
                <div className="h-11 w-11 rounded-xl bg-[#064E3B] text-[#6EE7B7] flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Engineering Email</p>
                  <a href="mailto:info@shibhasolar.com" className="text-sm font-black text-slate-900 hover:text-emerald-700 transition">
                    info@shibhasolar.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F6FAF7] border border-emerald-100">
                <div className="h-11 w-11 rounded-xl bg-[#064E3B] text-[#6EE7B7] flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Head Office</p>
                  <p className="text-sm font-black text-slate-900">
                    Patna, Bihar &bull; Serving Industrial Hubs Across Bihar
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-9 shadow-xl relative">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Industrial Assessment Request Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you. Our industrial engineering team will analyze your facility parameters and connect with you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white font-bold text-xs px-6 py-3 hover:bg-emerald-700 transition cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 mb-2">
                    <h3 className="text-xl font-black text-slate-900">Explore Industrial Solar Potential</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Analyze your facility to learn about its energy requirements and calculate solar capacity
                    </p>
                  </div>

                  {errors.submit && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                      {errors.submit}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anil Sharma"
                        className={`w-full rounded-xl border px-3.5 py-2.5 text-xs text-slate-900 outline-none transition ${
                          errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-200 focus:border-emerald-500 bg-slate-50/50'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Company / Facility Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Hajipur Cold Storage Pvt Ltd"
                        className={`w-full rounded-xl border px-3.5 py-2.5 text-xs text-slate-900 outline-none transition ${
                          errors.company ? 'border-red-400 bg-red-50/30' : 'border-slate-200 focus:border-emerald-500 bg-slate-50/50'
                        }`}
                      />
                      {errors.company && <p className="text-[11px] text-red-500 mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className={`w-full rounded-xl border px-3.5 py-2.5 text-xs text-slate-900 outline-none transition ${
                          errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-200 focus:border-emerald-500 bg-slate-50/50'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. management@facility.com"
                        className={`w-full rounded-xl border px-3.5 py-2.5 text-xs text-slate-900 outline-none transition ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-200 focus:border-emerald-500 bg-slate-50/50'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Facility Type
                      </label>
                      <select
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-emerald-500"
                      >
                        <option value="Factory / Manufacturing Unit">Factory / Manufacturing</option>
                        <option value="Warehouse / Logistics Park">Warehouse / Logistics</option>
                        <option value="Cold Storage Facility">Cold Storage</option>
                        <option value="Processing Unit / Mill">Processing Unit / Mill</option>
                        <option value="Solar Farm / Ground Mount">Solar Farm / Open Land</option>
                        <option value="Other Industrial Facility">Other Industrial</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Monthly Electricity Bill
                      </label>
                      <select
                        name="monthlyBill"
                        value={formData.monthlyBill}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-emerald-500"
                      >
                        <option value="₹1,00,000 - ₹3,00,000">₹1L - ₹3L / month</option>
                        <option value="₹3,00,000 - ₹7,00,000">₹3L - ₹7L / month</option>
                        <option value="₹7,00,000 - ₹15,00,000">₹7L - ₹15L / month</option>
                        <option value="₹15,00,000+">₹15L+ / month</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Available Area
                      </label>
                      <select
                        name="roofArea"
                        value={formData.roofArea}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-emerald-500"
                      >
                        <option value="10,000 - 25,000 sq. ft.">10k - 25k sq ft</option>
                        <option value="25,000 - 50,000 sq. ft.">25k - 50k sq ft</option>
                        <option value="50,000 - 1,00,000 sq. ft.">50k - 100k sq ft</option>
                        <option value="1,00,000+ sq. ft. / Acres">100k+ sq ft / Acres</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Energy Requirements & Equipment Details (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Connected to 11kV line, heavy compressor loads, looking for rooftop system with DISCOM net metering."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-emerald-500 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-[#064E3B] hover:bg-emerald-800 text-[#6EE7B7] font-black text-xs uppercase tracking-wider py-3.5 shadow-lg shadow-emerald-950/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 border-2 border-[#6EE7B7] border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Unleash Your Industrial Solar Potential</span>
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
