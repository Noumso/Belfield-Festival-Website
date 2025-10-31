"use client";
import { useEffect, useState } from "react";

function formatDateToFrench(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("http://localhost:5000/api/events", { cache: "no-store" });
        const data = await res.json();
        setEvents(Array.isArray(data) ? data : data.events || []);
      } catch (error) {
        console.error("Erreur de chargement des événements:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  // ✅ Scroll animation setup
  useEffect(() => {
  const timer = setTimeout(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideInUp");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, 300);

    return () => clearTimeout(timer);
}, []);

  if (loading) {
    return <p className="text-center text-gray-600 mt-10">Chargement des événements...</p>;
  }

  if (events.length === 0) {
    return <p className="text-center text-gray-600 mt-10">Aucun événement trouvé.</p>;
  }

  const groupedByDay = events.reduce((acc, event) => {
    const day = formatDateToFrench(event.date);
    if (!acc[day]) acc[day] = [];
    acc[day].push(event);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-[#FFF5E6] py-10 px-4 md:px-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#4F0F5A]">
        Programme du Festival
      </h1>

      {Object.entries(groupedByDay).map(([day, dayEvents]) => (
        <div
          key={day}
          className="mb-12 max-w-4xl mx-auto scroll-animate opacity-100 transition-all duration-700"
        >
          <h2 className="text-2xl font-semibold text-white bg-[#FF8200] px-4 py-2 rounded-t-lg shadow-md text-center">
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </h2>

          {Object.entries(
            dayEvents.reduce((acc, e) => {
              const stageName = e.stage || "Scène principale";
              if (!acc[stageName]) acc[stageName] = [];
              acc[stageName].push(e);
              return acc;
            }, {})
          ).map(([stage, stageEvents]) => (
            <div
              key={stage}
              className="bg-white/80 rounded-b-lg shadow-md overflow-hidden mb-6 backdrop-blur-md"
            >
              <h3 className="bg-[#4F0F5A] text-white text-lg px-4 py-2 font-semibold text-center">
                {stage}
              </h3>

              <table className="w-full text-left mx-auto max-w-4xl">
                <thead className="bg-[#FF8200]/20 text-[#4F0F5A] uppercase text-sm">
                  <tr>
                    <th className="px-4 py-2">Heure</th>
                    <th className="px-4 py-2">Titre</th>
                    <th className="px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {stageEvents
                    .sort((a, b) => (a.startTime || "").localeCompare(b.startTime || ""))
                    .map((event) => (
                      <tr
                        key={event._id}
                        className="border-t border-[#FF8200]/30 hover:bg-[#FF8200]/10 transition"
                      >
                        <td className="px-4 py-2 font-medium text-[#4F0F5A]">
                          {event.startTime || "-"} – {event.endTime || "-"}
                        </td>
                        <td className="px-4 py-2 font-semibold text-[#4F0F5A]">
                          {event.title || "-"}
                        </td>
                        <td className="px-4 py-2 text-gray-700">
                          {event.description || "-"}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
