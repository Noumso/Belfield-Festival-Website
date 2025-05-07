import './Schedule.css';

const events = [
  {
    jour: 'Vendredi',
    horaires: [
      { heure: '18h00', artiste: 'Cérémonie d’ouverture', description: 'Lancement officiel du festival avec discours et animation musicale.' },
      { heure: '19h30', artiste: 'DJ Nova', description: 'DJ set électro pour débuter la soirée.' },
      { heure: '21h00', artiste: 'ElectroPulse', description: 'Performance live de notre tête d’affiche électro.' },
    ],
  },
  {
    jour: 'Samedi',
    horaires: [
      { heure: '16h00', artiste: 'Sunset Vibes', description: 'Concert acoustique ambiance coucher de soleil.' },
      { heure: '18h00', artiste: 'The Lumis', description: 'Pop moderne en live - scène principale.' },
      { heure: '20h00', artiste: 'UrbanBeats', description: 'Hip-hop/RnB avec invités surprise.' },
      { heure: '22h00', artiste: 'Feux d’artifice', description: 'Grand final visuel et musical du festival.' },
    ],
  },
];

function Schedule() {
  return (
    <div className="schedule-container">
      <h1>🎵 Programme du Festival</h1>

      {events.map((journee, index) => (
        <div key={index}>
          <h2 className="jour">{journee.jour}</h2>
          <div className="cards">
            {journee.horaires.map((event, idx) => (
              <div className="card" key={idx}>
                <h3>{event.artiste}</h3>
                <p><strong>Heure :</strong> {event.heure}</p>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Schedule;