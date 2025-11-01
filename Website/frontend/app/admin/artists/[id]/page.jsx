'use client';
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getToken } from "../../../../utils/auth";

export default function EditArtistPage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    style: "",
    bio: "",
    image: "",
    socials: { instagram: "", soundcloud: "", spotify: "", youtube: "" },
    order: 0,
  });
  const [artists, setArtists] = useState([]); // 🎨 Artist list
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const token = getToken();

  // ----------------------
  // Fetch artist data (single artist)
  // ----------------------
  useEffect(() => {
    if (!token) return;

    const fetchArtist = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/artists/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!res.ok)
          throw new Error("Échec du chargement des données de l'artiste");

        const data = await res.json();
        setForm(data);
      } catch (err) {
        console.error("Failed to fetch artist:", err);
        setStatus(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArtist();
  }, [id, token]);

  // ----------------------
  // Fetch all artists for list
  // ----------------------
  useEffect(() => {
    if (!token) return;
    const fetchArtists = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/artists`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Échec du chargement des artistes");
        const data = await res.json();
        setArtists(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchArtists();
  }, [token]);

  // ----------------------
  // Handle input changes
  // ----------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in form.socials) {
      setForm({ ...form, socials: { ...form.socials, [name]: value } });
    } else {
      setForm({ ...form, [name]: name === "order" ? Number(value) : value });
    }
  };

  // ----------------------
  // Update artist
  // ----------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;

    setStatus("Mise à jour en cours...");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/artists/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error("Échec de la mise à jour de l'artiste");

      setStatus("Mise à jour réussie !");
      router.push("/admin/artists");
    } catch (err) {
      console.error("Failed to update artist:", err);
      setStatus(err.message);
    }
  };

  // ----------------------
  // Delete artist
  // ----------------------
  const handleDelete = async (artistId) => {
    if (!token) return;
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet artiste ?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/artists/${artistId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Échec de la suppression");
      setArtists(artists.filter((a) => a._id !== artistId));
    } catch (err) {
      alert(err.message);
    }
  };

  // ----------------------
  // Loading / Unauthorized
  // ----------------------
  if (loading)
    return <div className="p-10 text-white text-center">Chargement...</div>;
  if (!token)
    return <div className="p-10 text-red-600 text-center">Non autorisé</div>;

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
          onClick={() => router.push("/admin/artists")}
          className="bg-white text-[#4F0F5A] font-semibold px-4 py-2 rounded w-full sm:w-1/2 hover:bg-gray-100 transition"
        >
          ←Retour à l’ajout d’artiste
        </button>

        <button
          type="button"
          onClick={() => router.push("/admin")}
          className="bg-[#FF8200] text-white font-semibold px-4 py-2 rounded w-full sm:w-1/2 hover:bg-orange-600 transition"
        >
          ←Retour au tableau de bord
        </button>
      </div>

      {/* ---------------------- */}
      {/* Edit Form */}
      {/* ---------------------- */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 w-full max-w-md mb-8 text-black">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#FF8200]">
          Modifier un artiste
        </h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          {[
            { name: "name", placeholder: "Nom" },
            { name: "style", placeholder: "Style musical" },
            { name: "bio", placeholder: "Biographie" },
            { name: "image", placeholder: "URL de l'image" },
            { name: "instagram", placeholder: "Instagram" },
            { name: "soundcloud", placeholder: "SoundCloud" },
            { name: "spotify", placeholder: "Spotify" },
            { name: "youtube", placeholder: "YouTube" },
            { name: "order", placeholder: "Ordre", type: "number" },
          ].map((field) => (
            <input
              key={field.name}
              type={field.type || "text"}
              name={field.name}
              placeholder={field.placeholder}
              value={
                field.name in form.socials
                  ? form.socials[field.name]
                  : form[field.name]
              }
              onChange={handleChange}
              required={field.name === "name"}
              className="border border-gray-300 p-2 rounded w-full text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#FF8200] focus:outline-none"
            />
          ))}

          <button
            type="submit"
            className="bg-[#FF8200] text-white px-4 py-2 rounded w-full hover:bg-orange-600 transition"
          >
            Mettre à jour
          </button>

          {status && (
            <p className="text-center mt-2 text-[#4F0F5A] font-medium">{status}</p>
          )}
        </form>
      </div>

      {/* ---------------------- */}
      {/* Artist List */}
      {/* ---------------------- */}
      <div className="bg-white/90 backdrop-blur-sm text-gray-900 rounded-2xl shadow-lg p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-[#4F0F5A] mb-4 text-center">
          Liste des artistes
        </h2>
        {artists.length === 0 ? (
          <p className="text-center text-gray-600">Aucun artiste pour le moment.</p>
        ) : (
          <ul className="space-y-3">
            {artists.map((a) => (
              <li
                key={a._id}
                className="flex justify-between items-center border rounded-lg p-3 hover:bg-[#FF8200]/10 transition"
              >
                <div>
                  <p className="font-semibold text-[#4F0F5A]">{a.name}</p>
                  <p className="text-sm text-gray-600">{a.style}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`/admin/artists/${a._id}`}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                  >
                    Modifier
                  </a>
                  <button
                    onClick={() => handleDelete(a._id)}
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
