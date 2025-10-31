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
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const token = getToken();

  // ----------------------
  // Récupération des données de l'artiste au chargement
  // ----------------------
  useEffect(() => {
    if (!token) return;

    const fetchArtist = async () => {
      try {
        // ✅ URL backend via environment variable
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/artists/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!res.ok) throw new Error("Échec du chargement des données de l'artiste");

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
  // Gestion des changements de formulaire
  // ----------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in form.socials) {
      setForm({ ...form, socials: { ...form.socials, [name]: value } });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // ----------------------
  // Soumission du formulaire pour mettre à jour l'artiste
  // ----------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;

    setStatus("Mise à jour en cours...");

    try {
      // ✅ Utiliser l'API admin pour PUT
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
      router.push("/admin/artists"); // redirection vers la liste des artistes
    } catch (err) {
      console.error("Failed to update artist:", err);
      setStatus(err.message);
    }
  };

  if (loading)
    return <div className="p-10 text-white text-center">Chargement...</div>;
  if (!token)
    return <div className="p-10 text-red-600 text-center">Non autorisé</div>;

  return (
    <div className="min-h-screen bg-[#4F0F5A] flex flex-col items-center py-10 px-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#FF8200]">
          Modifier un artiste
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          {[
            { name: "name", placeholder: "Nom", required: true },
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
                field.name in form.socials ? form.socials[field.name] : form[field.name]
              }
              onChange={handleChange}
              required={field.required}
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
    </div>
  );
}
