import { createContext, useContext, useState, useEffect } from 'react'
import { adminApi } from '../api/adminApi'

const AdminAuthContext = createContext(null)

export function AdminAuthProvider({ children }) {
  const [admin, setAdmin] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    adminApi.getAdminMe()
      .then(data => { if (data.success) setAdmin(data.admin) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const login = (adminData) => setAdmin(adminData)

  const logout = async () => {
    try {
      await adminApi.logoutAdmin()
    } catch {
      // ignore
    }
    setAdmin(null)
  }

  return (
    <AdminAuthContext.Provider value={{ admin, loading, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  )
}

export const useAdminAuth = () => useContext(AdminAuthContext)
