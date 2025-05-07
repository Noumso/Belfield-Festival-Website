import './Schedule.css';

function Schedule() {
  return (
    <div className="schedule-container">
      <h1>🎵 Programme du Festival</h1>

      <section className="day">
        <h2>Vendredi</h2>
        <ul>
          <li><strong>18h00</strong> — Cérémonie d’ouverture</li>
          <li><strong>19h00</strong> — DJ Set : DJ Nova</li>
          <li><strong>21h00</strong> — Tête d’affiche : ElectroPulse</li>
        </ul>
      </section>

      <section className="day">
        <h2>Samedi</h2>
        <ul>
          <li><strong>16h00</strong> — Session acoustique : Sunset Vibes</li>
          <li><strong>18h00</strong> — Groupe pop : The Lumis</li>
          <li><strong>20h00</strong> — Scène principale : UrbanBeats</li>
          <li><strong>22h00</strong> — Spectacle de feux d’artifice</li>
        </ul>
      </section>
    </div>
  );
}

export default Schedule;