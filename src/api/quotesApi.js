export const quotesApi = {
  async getQuotes({ page = 1, limit = 15, status = '', service = '', source = '' } = {}) {
    const params = new URLSearchParams({ page, limit })
    if (status) params.set('status', status)
    if (service) params.set('service', service)
    if (source) params.set('source', source)

    const res = await fetch(`/api/quotes?${params}`, { credentials: 'include' })
    return res.json()
  },

  async updateStatus(id, status) {
    const res = await fetch(`/api/quotes/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ status }),
    })
    return res.json()
  },

  async deleteQuote(id) {
    const res = await fetch(`/api/quotes/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
    return res.json()
  },

  async submitQuote(data) {
    const res = await fetch('/api/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    return res.json()
  },
}

export default quotesApi
