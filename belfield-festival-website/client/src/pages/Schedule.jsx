import React from 'react';
import '../styles/Schedule.css';

function Schedule() {
  const scheduleData = [
    {
      day: 'Vendredi',
      events: [
        { time: '18:00', artist: 'DJ Nova', stage: 'Scène A' },
        { time: '20:00', artist: 'Les Étoiles', stage: 'Scène B' },
      ],
    },
    {
      day: 'Samedi',
      events: [
        { time: '16:00', artist: 'Electro Pulse', stage: 'Scène A' },
        { time: '19:00', artist: 'Chanteuse Luna', stage: 'Scène C' },
        { time: '21:00', artist: 'Rock Syndicate', stage: 'Main Stage' },
      ],
    },
    {
      day: 'Dimanche',
      events: [
        { time: '14:00', artist: 'Zen Vibes', stage: 'Scène C' },
        { time: '17:00', artist: 'Finale Surprise', stage: 'Main Stage' },
      ],
    },
  ];

  return (
    <div className="schedule-container">
      <h1>Programme du Festival</h1>
      {scheduleData.map((dayBlock) => (
        <div key={dayBlock.day} className="schedule-day">
          <h2>{dayBlock.day}</h2>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Heure</th>
                <th>Artiste</th>
                <th>Scène</th>
              </tr>
            </thead>
            <tbody>
              {dayBlock.events.map((event, index) => (
                <tr key={index}>
                  <td>{event.time}</td>
                  <td>{event.artist}</td>
                  <td>{event.stage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Schedule;
