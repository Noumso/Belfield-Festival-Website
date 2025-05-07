import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Info from './pages/Info'
import Admin from './pages/Admin'
import './App.css'

function App() {
  return (
    <div>
      <nav>
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/info">Info</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/info" element={<Info />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </div>
  )
}

export default App