import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminAuth } from '../context/AdminAuthContext'

const STATUS_CONFIG = {
  new:       { label: 'New',       color: 'bg-blue-500/15 text-blue-400 border-blue-500/25' },
  contacted: { label: 'Contacted', color: 'bg-amber-500/15 text-amber-400 border-amber-500/25' },
  closed:    { label: 'Closed',    color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25' },
}

const SERVICES = [
  'On-Grid Solar System',
  'Off-Grid Solar System',
  'Hybrid Solar System',
  'Commercial Installation',
  'Solar Panel Maintenance',
  'PM Surya Ghar Subsidy Help',
  'Other',
]

function formatDate(unix) {
  return new Date(unix * 1000).toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

export default function AdminDashboard() {
  const { admin, logout } = useAdminAuth()
  const navigate = useNavigate()

  const [quotes, setQuotes] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [filterStatus, setFilterStatus] = useState('')
  const [filterService, setFilterService] = useState('')
  const [filterSource, setFilterSource] = useState('')
  const [page, setPage] = useState(1)
  const [expanded, setExpanded] = useState(null)
  const [deletingId, setDeletingId] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)

  const limit = 15

  const fetchQuotes = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({ page, limit })
      if (filterStatus) params.set('status', filterStatus)
      if (filterService) params.set('service', filterService)
      if (filterSource) params.set('source', filterSource)
      const res = await fetch(`/api/quotes?${params}`, { credentials: 'include' })
      const data = await res.json()
      if (data.success) {
        setQuotes(data.quotes)
        setTotal(data.total)
      }
    } catch {
      // network error
    } finally {
      setLoading(false)
    }
  }, [page, filterStatus, filterService, filterSource])

  useEffect(() => { fetchQuotes() }, [fetchQuotes])

  const handleStatusChange = async (id, status) => {
    await fetch(`/api/quotes/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ status }),
    })
    fetchQuotes()
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this quote request? This cannot be undone.')) return
    setDeletingId(id)
    await fetch(`/api/quotes/${id}`, { method: 'DELETE', credentials: 'include' })
    setDeletingId(null)
    fetchQuotes()
  }

  const handleLogout = async () => {
    setShowLogoutConfirm(false)
    await logout()
    navigate('/admin/login', { replace: true })
  }

  const totalPages = Math.ceil(total / limit)

  const stats = [
    { label: 'Total Leads', value: total, icon: '📋', color: 'from-slate-700 to-slate-600' },
    { label: 'New', value: quotes.filter(q => q.status === 'new').length, icon: '🔔', color: 'from-blue-600 to-blue-500' },
    { label: 'Contacted', value: quotes.filter(q => q.status === 'contacted').length, icon: '📞', color: 'from-amber-600 to-amber-500' },
    { label: 'Closed', value: quotes.filter(q => q.status === 'closed').length, icon: '✅', color: 'from-emerald-600 to-emerald-500' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Sidebar Overlay (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-50 h-full w-64 bg-slate-900 border-r border-white/[0.06] flex flex-col transform transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-white/[0.06]">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex-shrink-0">
            <svg className="h-4.5 w-4.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-black text-white leading-tight">Shibha Solar</p>
            <p className="text-[10px] text-slate-500 font-medium">Admin Panel</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 cursor-default">
            <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
            <span className="text-sm font-bold text-emerald-400">Quote Requests</span>
          </div>
        </nav>

        {/* Admin info + logout */}
        <div className="p-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-3 px-3 py-2 mb-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-500/20 border border-emerald-500/25 flex items-center justify-center text-xs font-black text-emerald-400 flex-shrink-0">
              {admin?.name?.[0]?.toUpperCase() || 'A'}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-white truncate">{admin?.name || 'Admin'}</p>
              <p className="text-[10px] text-slate-500 truncate">{admin?.email}</p>
            </div>
          </div>
          <button
            onClick={() => setShowLogoutConfirm(true)}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all text-sm font-semibold"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-slate-900/50 border-b border-white/[0.06] px-5 py-4 flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-slate-400 hover:text-white transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <div>
            <h1 className="text-base font-black text-white">Quote Requests</h1>
            <p className="text-[11px] text-slate-500">{total} total leads</p>
          </div>
          <div className="ml-auto">
            <button
              onClick={fetchQuotes}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 border border-white/[0.06] text-slate-400 hover:text-white hover:border-white/10 transition-all text-xs font-semibold"
            >
              <svg className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              Refresh
            </button>
          </div>
        </header>

        <main className="flex-1 p-5 space-y-5 overflow-auto">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map(s => (
              <div key={s.label} className="bg-slate-900 border border-white/[0.06] rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">{s.label}</p>
                    <p className="text-2xl font-black text-white leading-none mt-0.5">{s.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 items-center">
            <select
              value={filterStatus}
              onChange={(e) => { setFilterStatus(e.target.value); setPage(1) }}
              className="bg-slate-800 border border-white/[0.08] text-slate-300 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="closed">Closed</option>
            </select>

            <select
              value={filterService}
              onChange={(e) => { setFilterService(e.target.value); setPage(1) }}
              className="bg-slate-800 border border-white/[0.08] text-slate-300 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="">All Services</option>
              {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>

            <select
              value={filterSource}
              onChange={(e) => { setFilterSource(e.target.value); setPage(1) }}
              className="bg-slate-800 border border-white/[0.08] text-slate-300 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="">All Sources</option>
              <option value="Quote Modal">Quote Modal</option>
              <option value="Contact Form">Contact Form</option>
            </select>

            {(filterStatus || filterService || filterSource) && (
              <button
                onClick={() => { setFilterStatus(''); setFilterService(''); setFilterSource(''); setPage(1) }}
                className="text-xs text-slate-500 hover:text-slate-300 font-semibold transition-colors flex items-center gap-1"
              >
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear filters
              </button>
            )}
          </div>

          {/* Table */}
          <div className="bg-slate-900 border border-white/[0.06] rounded-2xl overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="h-7 w-7 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin" />
              </div>
            ) : quotes.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="h-14 w-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-4">
                  <svg className="h-7 w-7 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-slate-400">No quote requests yet</p>
                <p className="text-xs text-slate-600 mt-1">Requests from the website form will appear here</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      {['#', 'Customer', 'Contact', 'Service', 'Source', 'Status', 'Date', 'Actions'].map(h => (
                        <th key={h} className="px-4 py-3 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {quotes.map((q) => (
                      <>
                        <tr
                          key={q.id}
                          className="hover:bg-white/[0.02] transition-colors cursor-pointer"
                          onClick={() => setExpanded(expanded === q.id ? null : q.id)}
                        >
                          <td className="px-4 py-3.5 text-xs text-slate-600 font-mono w-10">#{q.id}</td>
                          <td className="px-4 py-3.5">
                            <p className="text-sm font-bold text-white">{q.name}</p>
                          </td>
                          <td className="px-4 py-3.5">
                            <p className="text-xs text-slate-300">{q.email}</p>
                            <p className="text-xs text-slate-500">{q.phone}</p>
                          </td>
                          <td className="px-4 py-3.5">
                            <span className="text-xs text-slate-300 font-medium">{q.service}</span>
                          </td>
                          <td className="px-4 py-3.5">
                            <span className={`inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${
                              q.source === 'Contact Form'
                                ? 'bg-purple-500/15 text-purple-400 border-purple-500/25'
                                : 'bg-sky-500/15 text-sky-400 border-sky-500/25'
                            }`}>
                              {q.source === 'Contact Form' ? 'Contact' : 'Quote'}
                            </span>
                          </td>
                          <td className="px-4 py-3.5">
                            <select
                              value={q.status}
                              onClick={(e) => e.stopPropagation()}
                              onChange={(e) => handleStatusChange(q.id, e.target.value)}
                              className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1.5 rounded-lg border cursor-pointer focus:outline-none bg-transparent ${STATUS_CONFIG[q.status]?.color}`}
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="closed">Closed</option>
                            </select>
                          </td>
                          <td className="px-4 py-3.5 text-[11px] text-slate-500 whitespace-nowrap">{formatDate(q.created_at)}</td>
                          <td className="px-4 py-3.5">
                            <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                              <a
                                href={`tel:${q.phone}`}
                                className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-emerald-500/15 hover:text-emerald-400 transition-all"
                                title="Call"
                              >
                                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                              </a>
                              <a
                                href={`mailto:${q.email}`}
                                className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-blue-500/15 hover:text-blue-400 transition-all"
                                title="Email"
                              >
                                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                              </a>
                              <button
                                onClick={() => handleDelete(q.id)}
                                disabled={deletingId === q.id}
                                className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-red-500/15 hover:text-red-400 transition-all disabled:opacity-40"
                                title="Delete"
                              >
                                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>

                        {/* Expanded message row */}
                        {expanded === q.id && q.message && (
                          <tr key={`${q.id}-msg`} className="bg-slate-800/40">
                            <td colSpan={7} className="px-6 py-3">
                              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">Message</p>
                              <p className="text-xs text-slate-300 leading-relaxed">{q.message}</p>
                            </td>
                          </tr>
                        )}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-500">
                Page {page} of {totalPages} &mdash; {total} total
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 rounded-xl bg-slate-800 border border-white/[0.06] text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Previous
                </button>
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-4 py-2 rounded-xl bg-slate-800 border border-white/[0.06] text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Logout confirmation modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowLogoutConfirm(false)} />
          <div className="relative z-10 w-full max-w-sm bg-slate-900 border border-white/[0.08] rounded-2xl p-6 shadow-2xl">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 mb-4">
              <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
            </div>
            <h3 className="text-base font-black text-white mb-1">Sign out?</h3>
            <p className="text-xs text-slate-400 mb-6">You'll need to log in again to access the admin panel.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 rounded-xl border border-white/[0.08] bg-slate-800 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-700 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 rounded-xl bg-red-500/80 hover:bg-red-500 py-2.5 text-sm font-bold text-white transition-all"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
