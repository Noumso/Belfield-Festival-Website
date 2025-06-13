import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // On créera ce fichier pour le style

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Belfield Festival</h1>
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/programme">Programme</Link></li>
        <li><Link to="/galerie">Galerie</Link></li>
        <li><Link to="/info">Infos</Link></li>
        <li><Link to="/login">Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
