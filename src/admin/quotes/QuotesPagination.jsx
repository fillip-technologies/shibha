export default function QuotesPagination({
  page,
  totalPages,
  total,
  onPageChange,
}) {
  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-between">
      <p className="text-xs text-slate-500">
        Page {page} of {totalPages} &mdash; {total} total
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded-xl bg-slate-800 border border-white/[0.06] text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="px-4 py-2 rounded-xl bg-slate-800 border border-white/[0.06] text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          Next
        </button>
      </div>
    </div>
  )
}
