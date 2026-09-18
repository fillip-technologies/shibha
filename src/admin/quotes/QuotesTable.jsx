import React from 'react'

export const STATUS_CONFIG = {
  new:       { label: 'New',       color: 'bg-blue-500/15 text-blue-400 border-blue-500/25' },
  contacted: { label: 'Contacted', color: 'bg-amber-500/15 text-amber-400 border-amber-500/25' },
  closed:    { label: 'Closed',    color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25' },
}

export function formatDate(unix) {
  return new Date(unix * 1000).toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

export default function QuotesTable({
  quotes = [],
  loading,
  expanded,
  onToggleExpand,
  deletingId,
  onStatusChange,
  onDelete,
}) {
  return (
    <div className="bg-slate-900 border border-white/[0.06] rounded-2xl overflow-hidden">
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="h-7 w-7 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin" />
        </div>
      ) : quotes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="h-14 w-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-4">
            <svg className="h-7 w-7 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
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
                <React.Fragment key={q.id}>
                  <tr
                    className="hover:bg-white/[0.02] transition-colors cursor-pointer"
                    onClick={() => onToggleExpand(q.id)}
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
                        onChange={(e) => onStatusChange(q.id, e.target.value)}
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
                          onClick={() => onDelete(q.id)}
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
                    <tr className="bg-slate-800/40">
                      <td colSpan={8} className="px-6 py-3">
                        <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">Message</p>
                        <p className="text-xs text-slate-300 leading-relaxed">{q.message}</p>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
