import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Gallery from './pages/Gallery';
import Info from './pages/Info';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Artists from './pages/Artists';
import AddArtist from './pages/AddArtist';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/billetterie" element={<Info />} />
        <Route path="/login" element={<Login />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/events" element={<Events />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
