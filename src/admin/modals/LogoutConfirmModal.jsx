export default function LogoutConfirmModal({
  isOpen,
  onClose,
  onConfirm,
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
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
            onClick={onClose}
            className="flex-1 rounded-xl border border-white/[0.08] bg-slate-800 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-700 transition-all cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 rounded-xl bg-red-500/80 hover:bg-red-500 py-2.5 text-sm font-bold text-white transition-all cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}
