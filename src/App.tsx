import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ServiceDetailsPage from './pages/ServiceDetailsPage'
import PortfolioDetailsPage from './pages/PortfolioDetailsPage'
import StarterPage from './pages/StarterPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/service-details" element={<ServiceDetailsPage />} />
          <Route path="/portfolio-details" element={<PortfolioDetailsPage />} />
          <Route path="/starter" element={<StarterPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
