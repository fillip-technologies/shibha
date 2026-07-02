import { createContext, useContext, useState } from 'react'

const QuoteModalContext = createContext()

export function QuoteModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openQuoteModal = () => setIsOpen(true)
  const closeQuoteModal = () => setIsOpen(false)

  return (
    <QuoteModalContext.Provider value={{ isOpen, openQuoteModal, closeQuoteModal }}>
      {children}
    </QuoteModalContext.Provider>
  )
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext)
  if (context === undefined) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider')
  }
  return context
}
