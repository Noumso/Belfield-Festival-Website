import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const token = localStorage.getItem('token');
  const logout = () => {
    localStorage.removeItem('token');
    window.location = '/';
  };

  return (
    <nav>
      <Link to="/">Accueil</Link> |{' '}
      <Link to="/schedule">Programme</Link> |{' '}
      <Link to="/gallery">Galerie</Link> |{' '}
      <Link to="/artists">Artistes</Link> |{' '}
      <Link to="/info">Infos</Link> |{' '}
      {!token ? (
        <Link to="/login">Admin</Link>
      ) : (
        <button onClick={logout}>Se déconnecter</button>
      )}
    </nav>
  );
}

export default Navbar;
