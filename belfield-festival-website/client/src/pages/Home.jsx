import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-hero">
        <h1>Bienvenue au Belfield Festival 🎉</h1>
        <p>Musique, art et culture au cœur de l'été !</p>
        <a href="/billetterie" className="btn-ticket">Acheter un billet</a>
      </header>

      <section className="home-info">
        <h2>À propos du festival</h2>
        <p>
          Le Belfield Festival rassemble des artistes du monde entier pour un
          week-end inoubliable. Concerts, expositions, food-trucks et bien plus encore !
        </p>
      </section>
    </div>
  );
}

export default Home;
