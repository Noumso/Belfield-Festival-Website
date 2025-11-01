'use client';
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getToken } from "../../../../utils/auth";

export default function EditGalleryPage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    caption: "",
    url: "",
    photographer: "",
    visible: true,
  });
  const [galleries, setGalleries] = useState([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const token = getToken();

  // ----------------------
  // Fetch gallery data (single item)
  // ----------------------
  useEffect(() => {
    if (!token) return;

    const fetchGalleryItem = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error("Impossible de récupérer l'élément");

        const data = await res.json();
        setForm(data); 
      } catch (err) {
        console.error("Failed to fetch gallery item:", err);
        setStatus(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryItem();
  }, [id, token]);

  // ----------------------
  // Fetch all gallery items
  // ----------------------
  useEffect(() => {
    if (!token) return;
    const fetchGalleries = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery`, {
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

  // ----------------------
  // Handle input changes
  // ----------------------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  // ----------------------
  // Update gallery
  // ----------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;

    setStatus("Mise à jour en cours...");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Échec de la mise à jour");
      setStatus("Mise à jour réussie !");
      router.push("/admin/gallery"); 
    } catch (err) {
      console.error(err);
      setStatus(err.message);
    }
  };

  // ----------------------
  // Delete gallery
  // ----------------------
  const handleDelete = async (itemId) => {
    if (!token) return;
    if (!confirm("Êtes-vous sûr de vouloir supprimer ?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery/${itemId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Échec de la suppression");
      setGalleries(galleries.filter((g) => g._id !== itemId));
    } catch (err) {
      alert(err.message);
    }
  };

  // ----------------------
  // Loading / Unauthorized
  // ----------------------
  if (loading) return <div className="p-10 text-white text-center">Chargement...</div>;
  if (!token) return <div className="p-10 text-red-600 text-center">Non autorisé</div>;

  // ----------------------
  // Render Page
  // ----------------------
  return (
    <div className="min-h-screen bg-[#4F0F5A] flex flex-col items-center py-10 px-4">

      {/* ---------------------- */}
      {/* Navigation Buttons */}
      {/* ---------------------- */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 mb-6 w-full max-w-md">
        <button
          type="button"
          onClick={() => router.push("/admin/gallery")}
          className="bg-white text-[#4F0F5A] font-semibold px-4 py-2 rounded w-full sm:w-1/2 hover:bg-gray-100 transition"
        >
          ← Retour à l’ajout d'image
        </button>

        <button
          type="button"
          onClick={() => router.push("/admin")}
          className="bg-[#FF8200] text-white font-semibold px-4 py-2 rounded w-full sm:w-1/2 hover:bg-orange-600 transition"
        >
          ← Retour au tableau de bord
        </button>
      </div>

      {/* ---------------------- */}
      {/* Edit Form */}
      {/* ---------------------- */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mb-8 text-black">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#FF8200]">Modifier l'image</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="title"
            placeholder="Titre"
            value={form.title}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full text-black placeholder-gray-400"
          />
          <input
            type="text"
            name="caption"
            placeholder="Légende"
            value={form.caption}
            onChange={handleChange}
            className="border p-2 rounded w-full text-black placeholder-gray-400"
          />
          <input
            type="text"
            name="url"
            placeholder="URL de l'image"
            value={form.url}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full text-black placeholder-gray-400"
          />
          <input
            type="text"
            name="photographer"
            placeholder="Photographe"
            value={form.photographer}
            onChange={handleChange}
            className="border p-2 rounded w-full text-black placeholder-gray-400"
          />
          <label className="flex items-center gap-2 text-[#4F0F5A] font-semibold">
            <input type="checkbox" name="visible" checked={form.visible} onChange={handleChange} /> Visible
          </label>
          <button type="submit" className="bg-[#FF8200] text-white px-4 py-2 rounded w-full hover:bg-orange-600 transition">
            Mettre à jour
          </button>
          {status && <p className="text-center mt-2 text-[#4F0F5A] font-medium">{status}</p>}
        </form>
      </div>

      {/* ---------------------- */}
      {/* Gallery List */}
      {/* ---------------------- */}
      <div className="w-full max-w-3xl space-y-6">
        {galleries.length === 0 ? (
          <p className="text-center text-white">Aucune image pour le moment.</p>
        ) : (
          galleries.map((g) => (
            <div key={g._id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <h3 className="bg-[#4F0F5A] text-white text-lg px-4 py-2 font-semibold">{g.title}</h3>
              <div className="p-4 flex flex-col md:flex-row items-center gap-4">
                <img src={g.url} alt={g.title} className="w-full md:w-48 h-32 object-cover rounded-lg shadow"/>
                <div className="flex-1">
                  <p className="text-[#4F0F5A] font-medium">{g.caption || "-"}</p>
                  <p className="text-gray-600 text-sm">Photographe : {g.photographer || "-"}</p>
                  <p className="text-gray-600 text-sm">Visible : {g.visible ? "Oui" : "Non"}</p>
                </div>
              </div>
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
