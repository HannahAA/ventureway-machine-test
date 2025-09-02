import './App.css'
// import { LandingPage } from './pages/landingPage'
import LandingPage from './pages/landingPage'
import ManualLandingPage from './pages/ManualLandingPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import { Routes , Route } from 'react-router-dom'

function App() {

  return (
    // <Router>
      <Routes>
        {/* Default route for "/" */}
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<ManualLandingPage />} />
        {/* Add other routes here later */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    // </Router>
  );
}

export default App
