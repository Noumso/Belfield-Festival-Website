'use client';
export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import { getToken } from "../../../utils/auth";
import Link from "next/link";

export default function EventAdminPage() {
  const [events, setEvents] = useState([]);
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
  const [status, setStatus] = useState("");
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔑 Get token only on client side
  useEffect(() => {
    const t = getToken();
    setToken(t);
    setLoading(false);
  }, []);

  // 📦 Fetch events data
  useEffect(() => {
    if (!token) return;
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvents();
  }, [token]);

  // ✏️ Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  // ➕ Add new event
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;
    setStatus("Ajout en cours...");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Échec de l’ajout de l’événement");
      setForm({
        title: "",
        description: "",
        date: "",
        startTime: "",
        endTime: "",
        location: "",
        stage: "",
        featured: false,
      });
      const updatedRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const updatedData = await updatedRes.json();
      setEvents(updatedData);
      setStatus("Ajouté avec succès !");
    } catch (err) {
      setStatus(err.message);
    }
  };

  // ❌ Delete event
  const handleDelete = async (id) => {
    if (!token) return;
    if (!confirm("Supprimer cet événement ?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Échec de la suppression");
      setEvents(events.filter((e) => e._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  // 🌀 Loading states
  if (loading) return <div className="p-10 text-center text-white">Chargement...</div>;
  if (!token) return <div className="p-10 text-center text-red-300">Non autorisé.</div>;

  return (
    <div className="min-h-screen bg-[#4F0F5A] flex flex-col items-center py-12 px-4 text-white">
      {/* 🔙 Back to Dashboard button */}
      <div className="w-full flex justify-center mb-6">
        <Link
          href="/admin"
          className="bg-[#FF8200] text-white px-6 py-2 rounded font-semibold hover:bg-[#e97500] transition shadow-md"
        >
          ← Retour au tableau de bord
        </Link>
      </div>

      {/* form card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-900 rounded-2xl shadow-lg p-8 w-full max-w-2xl space-y-4 mb-10"
      >
        <h2 className="text-2xl font-semibold text-center text-[#4F0F5A] mb-4">
          Ajouter un événement
        </h2>

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
          className="bg-[#FF8200] text-white px-5 py-2 rounded hover:bg-[#e97500] transition font-semibold"
        >
          Ajouter
        </button>
        {status && <p className="text-center text-[#4F0F5A] font-medium">{status}</p>}
        </div>
      </form>

      {/* events list */}
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
