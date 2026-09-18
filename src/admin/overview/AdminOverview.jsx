export default function AdminOverview({ stats }) {
  if (!stats || stats.length === 0) return null

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((s) => (
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
  )
}
