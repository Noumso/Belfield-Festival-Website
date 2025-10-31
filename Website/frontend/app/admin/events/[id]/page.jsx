"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getToken } from "../../../../utils/auth";

export default function EditEventPage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({});
  const [original, setOriginal] = useState({});
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  // Get token
  useEffect(() => {
    const t = getToken();
    setToken(t);
  }, []);

  // Fetch event data
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        const dateValue = data.date ? data.date.split("T")[0] : "";
        const initialData = { ...data, date: dateValue };
        setForm(initialData);
        setOriginal(initialData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (token) fetchEvent();
  }, [id, token]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Échec de la mise à jour");
      router.push("/admin/events");
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <p className="text-white text-center mt-10">Chargement...</p>;
  if (!token) return <p className="text-red-600 text-center mt-10">Non autorisé.</p>;

  // Determine input text color
  const getInputColor = (field) =>
    form[field] && form[field] !== original[field] ? "text-[#4F0F5A]" : "text-gray-400";

  return (
    <div className="min-h-screen bg-[#4F0F5A] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#FF8200]">Modifier l'événement</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={form.title || original.title || ""}
            onChange={handleChange}
            className={`border p-2 rounded w-full ${getInputColor("title")}`}
            placeholder="Titre"
          />
          <input
            type="text"
            name="description"
            value={form.description || original.description || ""}
            onChange={handleChange}
            className={`border p-2 rounded w-full ${getInputColor("description")}`}
            placeholder="Description"
          />
          <input
            type="date"
            name="date"
            value={form.date || original.date || ""}
            onChange={handleChange}
            className={`border p-2 rounded w-full ${getInputColor("date")}`}
          />
          <input
            type="time"
            name="startTime"
            value={form.startTime || original.startTime || ""}
            onChange={handleChange}
            className={`border p-2 rounded w-full ${getInputColor("startTime")}`}
          />
          <input
            type="time"
            name="endTime"
            value={form.endTime || original.endTime || ""}
            onChange={handleChange}
            className={`border p-2 rounded w-full ${getInputColor("endTime")}`}
          />
          <input
            type="text"
            name="location"
            value={form.location || original.location || ""}
            onChange={handleChange}
            className={`border p-2 rounded w-full ${getInputColor("location")}`}
            placeholder="Lieu"
          />
          <input
            type="text"
            name="stage"
            value={form.stage || original.stage || ""}
            onChange={handleChange}
            className={`border p-2 rounded w-full ${getInputColor("stage")}`}
            placeholder="Scène"
          />
          <label className="flex items-center gap-2 text-[#4F0F5A] font-medium">
            <input
              type="checkbox"
              name="featured"
              checked={form.featured || original.featured || false}
              onChange={handleChange}
            />
            Mis en avant
          </label>
          <button
            type="submit"
            className="bg-[#FF8200] text-white px-4 py-2 rounded w-full hover:bg-orange-600 transition"
          >
            Mettre à jour
          </button>
        </form>
      </div>
    </div>
  );
}
