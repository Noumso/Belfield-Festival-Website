import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link> |{' '}
        <Link to="/schedule">Programme</Link> |{' '}
        <Link to="/gallery">Galerie</Link> |{' '}
        <Link to="/info">Infos pratiques</Link> |{' '}
        <Link to="/login">Connexion</Link>
      </nav>
    </header>
  );
}

export default Header;
