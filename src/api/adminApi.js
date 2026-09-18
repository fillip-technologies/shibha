export const adminApi = {
  async loginAdmin(credentials) {
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(credentials),
    })
    return res.json()
  },

  async getAdminMe() {
    const res = await fetch('/api/admin/me', { credentials: 'include' })
    return res.json()
  },

  async logoutAdmin() {
    const res = await fetch('/api/admin/logout', {
      method: 'POST',
      credentials: 'include',
    })
    return res.json()
  },

  async forgotPassword(email) {
    const res = await fetch('/api/admin/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    return res.json()
  },

  async resetPassword({ token, password }) {
    const res = await fetch('/api/admin/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, password }),
    })
    return res.json()
  },
}

export default adminApi
