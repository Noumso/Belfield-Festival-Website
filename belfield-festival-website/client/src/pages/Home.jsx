import React from 'react';
import banner from '../assets/festival-banner.jpg';

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // voile noir à 50%
    minHeight: '100vh',
    padding: '5rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}>
        <header>
          <h1>Bienvenue au Belfield Festival 🎉</h1>
          <p>Musique, art et culture au cœur de l'été !</p>
          <a
            href="/billetterie"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.8rem 1.5rem',
              backgroundColor: '#ff3c38',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
            }}
          >
            Acheter un billet
          </a>
        </header>

        <section style={{ marginTop: '3rem', maxWidth: '600px' }}>
          <h2>À propos du festival</h2>
          <p>
            Le Belfield Festival rassemble des artistes du monde entier pour un
            week-end inoubliable. Concerts, activités, food-trucks et bien plus encore !
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;
