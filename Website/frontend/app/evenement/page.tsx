export default async function Evenement() {
    const res = await fetch("http://localhost:5000/api/events");
    const events = await res.json();
  
    return (
      <div className="p-8">
        <h2 className="text-4xl font-bold text-center mb-8">Événements 🦢</h2>
        <div className="space-y-6">
          {events.map((event: any) => (
            <div key={event._id} className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-400 mb-2">{new Date(event.date).toLocaleDateString()}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  