import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { LandingPage } from './pages/landingPage'
import LandingPage from './pages/landingPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import { Routes , Route, Navigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR Hanny!
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //     {/* <BrowserRouter>
  //       <Routes>
  //         <Route path="/landing" element={<LandingPage />} />
  //       </Routes>
  //     </BrowserRouter> */}
  //     <Routes>
  //       {/* <Route exact path='/' component={LandingPage}></Route> */}
  //       {/* <Route exact path='/signup' component={Signup}></Route> */}

  //       {/* <Route exact path="/" render={() => <Route render={() => LandingPage} /> }></Route> */}
  //       <Route exact path="/" render={() => <Route render={() => <LandingPage />} /> }></Route>
  //       <Route exact path="*" render={() => <Navigate to="/" />} />
  //     </Routes>
  //   </>
  // )

  return (
    // <Router>
      <Routes>
        {/* Default route for "/" */}
        <Route path="/" element={<LandingPage />} />
        {/* Add other routes here later */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    // </Router>
  );
}

export default App
