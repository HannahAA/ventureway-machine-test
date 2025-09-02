import './App.css'
import LandingPage from './pages/landingPage'
import { Routes , Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      {/* Default route for "/" */}
      <Route path="/" element={<LandingPage />} />
      {/* Add other routes here */}
    </Routes>
  );
}

export default App
