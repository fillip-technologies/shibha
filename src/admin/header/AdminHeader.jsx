export default function AdminHeader({
  total,
  loading,
  onRefresh,
  onOpenSidebar,
}) {
  return (
    <header className="bg-slate-900/50 border-b border-white/[0.06] px-5 py-4 flex items-center gap-4">
      <button
        onClick={onOpenSidebar}
        className="lg:hidden text-slate-400 hover:text-white transition-colors cursor-pointer"
        aria-label="Open sidebar"
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
          onClick={onRefresh}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 border border-white/[0.06] text-slate-400 hover:text-white hover:border-white/10 transition-all text-xs font-semibold cursor-pointer"
        >
          <svg className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
          Refresh
        </button>
      </div>
    </header>
  )
}
