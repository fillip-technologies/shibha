export const SERVICES = [
  'On-Grid Solar System',
  'Off-Grid Solar System',
  'Hybrid Solar System',
  'Commercial Installation',
  'Solar Panel Maintenance',
  'PM Surya Ghar Subsidy Help',
  'Other',
]

export default function QuotesFilter({
  filterStatus,
  onStatusChange,
  filterService,
  onServiceChange,
  filterSource,
  onSourceChange,
  onClearFilters,
}) {
  const hasActiveFilters = Boolean(filterStatus || filterService || filterSource)

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <select
        value={filterStatus}
        onChange={(e) => onStatusChange(e.target.value)}
        className="bg-slate-800 border border-white/[0.08] text-slate-300 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-emerald-500 cursor-pointer"
      >
        <option value="">All Statuses</option>
        <option value="new">New</option>
        <option value="contacted">Contacted</option>
        <option value="closed">Closed</option>
      </select>

      <select
        value={filterService}
        onChange={(e) => onServiceChange(e.target.value)}
        className="bg-slate-800 border border-white/[0.08] text-slate-300 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-emerald-500 cursor-pointer"
      >
        <option value="">All Services</option>
        {SERVICES.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <select
        value={filterSource}
        onChange={(e) => onSourceChange(e.target.value)}
        className="bg-slate-800 border border-white/[0.08] text-slate-300 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-emerald-500 cursor-pointer"
      >
        <option value="">All Sources</option>
        <option value="Quote Modal">Quote Modal</option>
        <option value="Contact Form">Contact Form</option>
      </select>

      {hasActiveFilters && (
        <button
          onClick={onClearFilters}
          className="text-xs text-slate-500 hover:text-slate-300 font-semibold transition-colors flex items-center gap-1"
        >
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Clear filters
        </button>
      )}
    </div>
  )
}
