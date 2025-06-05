import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Belfield Festival 2025</h1>
        <p>Rejoignez-nous pour une expérience musicale inoubliable !</p>
        <a href="/schedule" className="cta-button">Voir la programmation</a>
      </section>
    </div>
  );
}

export default Home;
