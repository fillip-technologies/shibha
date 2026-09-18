import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminAuth } from '../context/AdminAuthContext'
import { quotesApi } from '../api/quotesApi'

import AdminSidebar from './sidebar/AdminSidebar'
import AdminHeader from './header/AdminHeader'
import AdminOverview from './overview/AdminOverview'
import QuotesFilter from './quotes/QuotesFilter'
import QuotesTable from './quotes/QuotesTable'
import QuotesPagination from './quotes/QuotesPagination'
import LogoutConfirmModal from './modals/LogoutConfirmModal'

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
      const data = await quotesApi.getQuotes({
        page,
        limit,
        status: filterStatus,
        service: filterService,
        source: filterSource,
      })
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

  useEffect(() => {
    fetchQuotes()
  }, [fetchQuotes])

  const handleStatusChange = async (id, status) => {
    await quotesApi.updateStatus(id, status)
    fetchQuotes()
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this quote request? This cannot be undone.')) return
    setDeletingId(id)
    await quotesApi.deleteQuote(id)
    setDeletingId(null)
    fetchQuotes()
  }

  const handleLogout = async () => {
    setShowLogoutConfirm(false)
    await logout()
    navigate('/admin/login', { replace: true })
  }

  const handleFilterStatus = (val) => {
    setFilterStatus(val)
    setPage(1)
  }

  const handleFilterService = (val) => {
    setFilterService(val)
    setPage(1)
  }

  const handleFilterSource = (val) => {
    setFilterSource(val)
    setPage(1)
  }

  const handleClearFilters = () => {
    setFilterStatus('')
    setFilterService('')
    setFilterSource('')
    setPage(1)
  }

  const handleToggleExpand = (id) => {
    setExpanded(prev => (prev === id ? null : id))
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
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        admin={admin}
        onLogoutClick={() => setShowLogoutConfirm(true)}
        newCount={quotes.filter(q => q.status === 'new').length}
        totalCount={total}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader
          total={total}
          loading={loading}
          onRefresh={fetchQuotes}
          onOpenSidebar={() => setSidebarOpen(true)}
        />

        <main className="flex-1 p-5 space-y-5 overflow-auto">
          <AdminOverview stats={stats} />

          <QuotesFilter
            filterStatus={filterStatus}
            onStatusChange={handleFilterStatus}
            filterService={filterService}
            onServiceChange={handleFilterService}
            filterSource={filterSource}
            onSourceChange={handleFilterSource}
            onClearFilters={handleClearFilters}
          />

          <QuotesTable
            quotes={quotes}
            loading={loading}
            expanded={expanded}
            onToggleExpand={handleToggleExpand}
            deletingId={deletingId}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />

          <QuotesPagination
            page={page}
            totalPages={totalPages}
            total={total}
            onPageChange={setPage}
          />
        </main>
      </div>

      <LogoutConfirmModal
        isOpen={showLogoutConfirm}
        onClose={() => setShowLogoutConfirm(false)}
        onConfirm={handleLogout}
      />
    </div>
  )
}
