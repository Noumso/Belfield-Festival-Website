import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Info from './pages/Info';
import Admin from './pages/Admin';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/schedule">Programmation</Link></li>
          <li><Link to="/info">Infos</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/info" element={<Info />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
