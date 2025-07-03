import React from 'react';
import banner from '../assets/festival-banner.jpg'; // Place le fichier ici !

function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <header
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '5rem 2rem',
        }}
      >
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
          }}
        >
          Acheter un billet
        </a>
      </header>

      <section style={{ marginTop: '3rem' }}>
        <h2>À propos du festival</h2>
        <p>
          Le Belfield Festival rassemble des artistes du monde entier pour un
          week-end inoubliable. Concerts, activitées, food-trucks et bien plus encore !
        </p>
      </section>
    </div>
  );
}

export default Home;
