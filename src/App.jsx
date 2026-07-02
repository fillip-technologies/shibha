import { Routes, Route } from 'react-router-dom'
import Footer from './partials/Footer'
import Navbar from './partials/Navbar'
import HomePage from './compoents/home/HomePage'
import AboutPage from './compoents/about/AboutPage'
import ContactPage from './compoents/contact/ContactPage'
import ProjectsPage from './compoents/projects/ProjectsPage'
import OnGridSolar from './compoents/services/OnGridSolar'
import OffGridSolar from './compoents/services/OffGridSolar'
import HybridSolar from './compoents/services/HybridSolar'
import { QuoteModalProvider } from './context/QuoteModalContext'
import QuoteModal from './partials/QuoteModal'

function App() {
  return (
    <QuoteModalProvider>
      <div className="app-shell">
        <Navbar />
        <main aria-label="Shibha Solar page content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/on-grid" element={<OnGridSolar />} />
            <Route path="/services/off-grid" element={<OffGridSolar />} />
            <Route path="/services/hybrid" element={<HybridSolar />} />
          </Routes>
        </main>
        <Footer />
        <QuoteModal />
      </div>
    </QuoteModalProvider>
  )
}

export default App
