import { Link } from 'react-router-dom'
import logo from '../../assets/logo/shibha-logo.png'

export default function AdminSidebar({
  isOpen,
  onClose,
  admin,
  onLogoutClick,
  newCount = 0,
  totalCount = 0,
}) {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar - Full height, sticky on desktop */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 h-screen w-72 max-w-[85vw] bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-r border-white/[0.08] shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:flex-shrink-0 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Header / Branding with Original Logo */}
        <div className="px-5 py-4 border-b border-white/[0.08] flex items-center justify-between flex-shrink-0">
          <Link to="/" className="flex items-center gap-3 group min-w-0">
            <div className="h-11 w-11 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md shadow-emerald-500/10 border border-white/20 flex-shrink-0 group-hover:scale-105 transition-transform">
              <img
                src={logo}
                alt="Shibha Solar"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-black tracking-tight text-white leading-tight truncate">
                  Shibha Solar
                </span>
                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                  PRO
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase mt-0.5">
                Admin Panel
              </p>
            </div>
          </Link>

          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden h-8 w-8 rounded-lg bg-slate-800/90 border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors flex-shrink-0 cursor-pointer"
            aria-label="Close sidebar"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">
          {/* Main Navigation Section */}
          <div>
            <p className="px-3 text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">
              Management
            </p>
            <nav className="space-y-1.5">
              {/* Active Tab: Quote Requests */}
              <div className="relative group flex items-center justify-between px-3.5 py-3 rounded-xl bg-gradient-to-r from-emerald-500/15 via-emerald-500/10 to-transparent border border-emerald-500/25 text-emerald-400 shadow-sm cursor-default">
                {/* Active left indicator bar */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                    <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-white tracking-wide">Quote Requests</span>
                </div>

                {/* Badge */}
                {newCount > 0 ? (
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-500/20 border border-blue-500/30 text-blue-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                    {newCount} new
                  </span>
                ) : totalCount > 0 ? (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-400 border border-white/[0.06]">
                    {totalCount}
                  </span>
                ) : null}
              </div>
            </nav>
          </div>


        </div>

        {/* Bottom Section Pinned to the Bottom (mt-auto) */}
        <div className="mt-auto p-4 border-t border-white/[0.08] bg-slate-950/90 backdrop-blur-md flex-shrink-0 space-y-3">
          {/* User Info Card */}
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/90 border border-white/[0.06]">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-xs font-black text-white shadow-md shadow-emerald-500/20 flex-shrink-0">
              {admin?.name?.[0]?.toUpperCase() || 'A'}
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-slate-900" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-white truncate leading-tight">
                {admin?.name || 'Administrator'}
              </p>
              <p className="text-[10px] text-slate-400 truncate mt-0.5">
                {admin?.email || 'admin@shibhasolar.com'}
              </p>
            </div>
          </div>

          {/* Full-width Sign Out Button */}
          <button
            onClick={onLogoutClick}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/20 font-bold transition-all text-xs cursor-pointer shadow-sm active:scale-[0.98]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
            Sign Out
          </button>
        </div>
      </aside>
    </>
  )
}
