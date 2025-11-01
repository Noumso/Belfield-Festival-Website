'use client';
export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getToken } from "../../../../utils/auth";

export default function EditEventPage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    stage: "",
    featured: false,
  });
  const [events, setEvents] = useState([]); 
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const token = getToken();

  // ----------------------
  // Fetch single event data
  // ----------------------
  useEffect(() => {
    if (!token) return;
    const fetchEvent = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Échec du chargement des données de l’événement");
        const data = await res.json();
        setForm(data);
      } catch (err) {
        console.error("Failed to fetch event:", err);
        setStatus(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id, token]);

  // ----------------------
  // Fetch all events
  // ----------------------
  useEffect(() => {
    if (!token) return;
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Échec du chargement des événements");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvents();
  }, [token]);

  // ----------------------
  // Handle input changes
  // ----------------------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  // ----------------------
  // Update event
  // ----------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;
    setStatus("Mise à jour en cours...");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Échec de la mise à jour de l’événement");

      setStatus("Mise à jour réussie !");

      const updatedRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const updatedData = await updatedRes.json();
      setEvents(updatedData);
    } catch (err) {
      console.error(err);
      setStatus(err.message);
    }
  };

  // ----------------------
  // Delete event
  // ----------------------
  const handleDelete = async (eventId) => {
    if (!token) return;
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet événement ?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${eventId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Échec de la suppression");
      setEvents(events.filter((e) => e._id !== eventId));
    } catch (err) {
      alert(err.message);
    }
  };

  // ----------------------
  // Loading / Unauthorized
  // ----------------------
  if (loading) return <div className="p-10 text-white text-center">Chargement...</div>;
  if (!token) return <div className="p-10 text-red-300 text-center">Non autorisé</div>;

  // ----------------------
  // Render Page
  // ----------------------
  return (
    <div className="min-h-screen bg-[#4F0F5A] flex flex-col items-center py-12 px-4 text-white">
      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6 w-full max-w-md">
        <button
          type="button"
          onClick={() => router.push("/admin/events")}
          className="bg-white text-[#4F0F5A] font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
        >
          ← Retour à l’ajout d’événement
        </button>

        <button
          type="button"
          onClick={() => router.push("/admin")}
          className="bg-[#FF8200] text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition"
        >
          ← Retour au tableau de bord
        </button>
      </div>

      {/* Edit Form */}
      <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-8 w-full max-w-2xl mb-10">
        <h2 className="text-2xl font-semibold text-center text-[#4F0F5A] mb-4">
          Modifier un événement
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Titre"
            value={form.title}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-[#FF8200]"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-[#FF8200]"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-[#FF8200]"
          />
          <div className="flex gap-3">
            <input
              type="time"
              name="startTime"
              value={form.startTime}
              onChange={handleChange}
              className="border p-2 rounded w-1/2 focus:outline-none focus:ring-2 focus:ring-[#FF8200]"
            />
            <input
              type="time"
              name="endTime"
              value={form.endTime}
              onChange={handleChange}
              className="border p-2 rounded w-1/2 focus:outline-none focus:ring-2 focus:ring-[#FF8200]"
            />
          </div>
          <input
            type="text"
            name="location"
            placeholder="Lieu"
            value={form.location}
            onChange={handleChange}
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-[#FF8200]"
          />
          <input
            type="text"
            name="stage"
            placeholder="Scène"
            value={form.stage}
            onChange={handleChange}
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-[#FF8200]"
          />
          <label className="flex items-center gap-2 text-[#4F0F5A]">
            <input
              type="checkbox"
              name="featured"
              checked={form.featured}
              onChange={handleChange}
            />
            Mettre en avant
          </label>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#FF8200] text-white px-6 py-2 rounded hover:bg-[#e97500] transition font-semibold"
            >
              Mettre à jour
            </button>
          </div>
          {status && <p className="text-center text-[#4F0F5A] font-medium">{status}</p>}
        </form>
      </div>

      {/* Events List */}
      <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-[#4F0F5A] mb-4 text-center">
          Liste des événements
        </h2>
        {events.length === 0 ? (
          <p className="text-center text-gray-600">Aucun événement pour le moment.</p>
        ) : (
          <ul className="space-y-3">
            {events.map((e) => (
              <li
                key={e._id}
                className="flex justify-between items-center border rounded-lg p-3 hover:bg-[#FF8200]/10 transition"
              >
                <div>
                  <p className="font-semibold text-[#4F0F5A]">{e.title}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(e.date).toLocaleDateString("fr-FR")} — {e.stage || "Scène principale"}
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`/admin/events/${e._id}`}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                  >
                    Modifier
                  </a>
                  <button
                    onClick={() => handleDelete(e._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Supprimer
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
