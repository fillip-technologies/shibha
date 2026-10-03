import { useState } from 'react'

export default function ResidentialContact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    monthlyBill: '₹2,500 - ₹5,000',
    roofType: 'Concrete Flat Roof',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Full name is required'
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
        email: formData.email || 'residential-inquiry@shibhasolar.com',
        service: 'Residential Solar System',
        source: 'Residential Solar Page',
        message: `Monthly Bill: ${formData.monthlyBill} | Roof Type: ${formData.roofType} | Note: ${formData.message || 'No additional note'}`,
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
          phone: '',
          email: '',
          monthlyBill: '₹2,500 - ₹5,000',
          roofType: 'Concrete Flat Roof',
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
    <section id="residential-contact" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="site-container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct contact info */}
          <div className="lg:col-span-5">
            <span className="section-label">Book Free Site Survey</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Get In Touch With Our{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Residential Solar Engineers
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Have questions about your roof feasibility, net metering rules, or the PM Surya Ghar ₹78,000 subsidy? Talk directly to our Patna engineering team.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="h-11 w-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Call Directly</p>
                  <a href="tel:+919534668343" className="text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors">
                    +91 95346 68343 / 95346 68345
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="h-11 w-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Official Email</p>
                  <a href="mailto:info@shibhaenterprises.com" className="text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors">
                    info@shibhaenterprises.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="h-11 w-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Service Coverage</p>
                  <p className="text-sm font-bold text-slate-900">Patna, Hajipur, Muzaffarpur, Gaya & All Bihar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Residential Solar Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-xl shadow-emerald-500/30">
                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Inquiry Received!</h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                    Thank you! Our residential solar specialist will review your details and contact you shortly to schedule your free roof assessment.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 inline-flex px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-200/60 pb-4">
                    <h3 className="text-xl font-black text-slate-900">Request Residential Solar Estimate</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out this quick form and get an instant cost & subsidy calculation for your home.
                    </p>
                  </div>

                  {errors.submit && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-600">
                      {errors.submit}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full rounded-xl border bg-white px-3.5 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                          errors.name ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className={`w-full rounded-xl border bg-white px-3.5 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                          errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@gmail.com"
                        className={`w-full rounded-xl border bg-white px-3.5 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                          errors.email ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Monthly Electricity Bill
                      </label>
                      <select
                        name="monthlyBill"
                        value={formData.monthlyBill}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 cursor-pointer"
                      >
                        <option value="Under ₹2,000">Under ₹2,000 (1-2 kW)</option>
                        <option value="₹2,500 - ₹5,000">₹2,500 - ₹5,000 (3 kW)</option>
                        <option value="₹5,000 - ₹8,000">₹5,000 - ₹8,000 (5 kW)</option>
                        <option value="₹8,000 - ₹12,000">₹8,000 - ₹12,000 (8 kW)</option>
                        <option value="₹12,000+">₹12,000+ (10 kW+)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Roof Type
                    </label>
                    <select
                      name="roofType"
                      value={formData.roofType}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 cursor-pointer"
                    >
                      <option value="Concrete Flat Roof">Concrete Flat RCC Roof</option>
                      <option value="Tin / Metal Shed Roof">Tin / Industrial Metal Sheet Roof</option>
                      <option value="Tiled / Sloped Roof">Clay Tiled / Sloped Roof</option>
                      <option value="Elevated Rooftop Pergola">Elevated Rooftop Pergola Structure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your City / Notes (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Near Kankarbagh, Patna. Looking for 3kW on-grid with net meter..."
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 px-6 text-sm font-bold shadow-lg shadow-emerald-600/20 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      'Request Free Consultation & Quote'
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
