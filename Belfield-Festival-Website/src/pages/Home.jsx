import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Bienvenue au Belfield Festival 🎉</h1>
        <p>Musique, culture et communauté — le tout en un seul endroit à Paris !</p>
        <button onClick={() => alert('La billetterie arrive bientôt !')}>Accéder à la billetterie</button>
      </section>

      <section className="highlights">
        <h2>Ce qui vous attend</h2>
        <ul>
          <li>🎵 Concerts live avec des artistes locaux et internationaux</li>
          <li>🍔 Food trucks & village associatif</li>
          <li>📍 Accessible en transport en commun</li>
          <li>🎫 Achetez vos billets directement en ligne</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;