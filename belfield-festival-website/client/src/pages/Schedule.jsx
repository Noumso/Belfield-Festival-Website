import React from 'react';
import '../styles/Schedule.css';

function Schedule() {
  const scheduleData = [
    {
      day: 'Vendredi',
      events: [
        { time: '18:00', artist: "DJ D'RAM", stage: 'Scène A' },
        { time: '20:00', artist: 'Lalude', stage: 'Scène B' },
      ],
    },
    {
      day: 'Samedi',
      events: [
        { time: '16:00', artist: 'Ergasm God', stage: 'Scène A' },
        { time: '19:00', artist: 'Matrakk', stage: 'Scène C' },
        { time: '21:00', artist: 'Amygdala', stage: 'Main Stage' },
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
