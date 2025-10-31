'use client';
export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import { getToken } from "../../../utils/auth";

export default function GalleryAdminPage() {
  const [galleries, setGalleries] = useState([]);
  const [form, setForm] = useState({
    title: "",
    caption: "",
    url: "",
    photographer: "",
    visible: true,
  });
  const [status, setStatus] = useState("");
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get token only on client side
  useEffect(() => {
    const t = getToken();
    setToken(t);
    setLoading(false);
  }, []);

  // Fetch gallery data when token is available
  useEffect(() => {
    if (!token) return;
    const fetchGalleries = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/gallery`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Impossible de récupérer les images");
        const data = await res.json();
        setGalleries(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchGalleries();
  }, [token]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  // Submit new gallery item
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;
    setStatus("Ajout en cours...");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/gallery`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Échec de l'ajout");
      setForm({ title: "", caption: "", url: "", photographer: "", visible: true });

      // Refresh gallery list
      const updatedRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/gallery`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const updatedData = await updatedRes.json();
      setGalleries(updatedData);
      setStatus("Ajout réussi !");
    } catch (err) {
      setStatus(err.message);
    }
  };

  // Delete gallery item
  const handleDelete = async (id) => {
    if (!token) return;
    if (!confirm("Êtes-vous sûr de vouloir supprimer ?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/gallery/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Échec de la suppression");
      setGalleries(galleries.filter(g => g._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <div className="p-10 text-white">Chargement...</div>;
  if (!token) return <div className="p-10 text-red-600">Vous n'êtes pas autorisé.</div>;

  return (
    <div className="min-h-screen bg-[#4F0F5A] flex flex-col items-center py-10 px-4">

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#FF8200]">Ajouter une image</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Titre" required className="border p-2 rounded w-full"/>
          <input type="text" name="caption" value={form.caption} onChange={handleChange} placeholder="Légende" className="border p-2 rounded w-full"/>
          <input type="text" name="url" value={form.url} onChange={handleChange} placeholder="URL de l'image" required className="border p-2 rounded w-full"/>
          <input type="text" name="photographer" value={form.photographer} onChange={handleChange} placeholder="Photographe" className="border p-2 rounded w-full"/>
          <label className="flex items-center gap-2 text-[#4F0F5A] font-semibold">
            <input type="checkbox" name="visible" checked={form.visible} onChange={handleChange}/> Visible
          </label>
          <button type="submit" className="bg-[#FF8200] text-white px-4 py-2 rounded w-full hover:bg-orange-600 transition">Ajouter</button>
          {status && <p className="text-center mt-2 text-[#4F0F5A]">{status}</p>}
        </form>
      </div>

      {/* Gallery List */}
      <div className="w-full max-w-3xl space-y-6">
        {galleries.length === 0 ? (
          <p className="text-center text-gray-300">Aucune image pour le moment.</p>
        ) : (
          galleries.map((g) => (
            <div key={g._id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Card Header */}
              <h3 className="bg-[#4F0F5A] text-white text-lg px-4 py-2 font-semibold">{g.title}</h3>

              {/* Card Content */}
              <div className="p-4 flex flex-col md:flex-row items-center gap-4">
                <img src={g.url} alt={g.title} className="w-full md:w-48 h-32 object-cover rounded-lg shadow"/>
                <div className="flex-1">
                  <p className="text-[#4F0F5A] font-medium">{g.caption || "-"}</p>
                  <p className="text-gray-600 text-sm">Photographe : {g.photographer || "-"}</p>
                  <p className="text-gray-600 text-sm">Visible : {g.visible ? "Oui" : "Non"}</p>
                </div>
              </div>

              {/* Card Actions */}
              <div className="flex justify-end gap-2 bg-[#FF8200]/10 px-4 py-2">
                <a href={`/admin/gallery/${g._id}`} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">Modifier</a>
                <button onClick={() => handleDelete(g._id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition">Supprimer</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
