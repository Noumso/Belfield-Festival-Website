"use client";
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
  const token = getToken();

  useEffect(() => {
    const fetchArtist = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/artists/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setForm(data);
    };
    if (token) fetchArtist();
  }, [id, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in form.socials) {
      setForm({ ...form, socials: { ...form.socials, [name]: value } });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/artists/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to update");
      router.push("/admin/artist");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Edit Artist</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="border p-2 rounded w-full"/>
        <input type="text" name="style" placeholder="Style" value={form.style} onChange={handleChange} className="border p-2 rounded w-full"/>
        <input type="text" name="bio" placeholder="Bio" value={form.bio} onChange={handleChange} className="border p-2 rounded w-full"/>
        <input type="text" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="border p-2 rounded w-full"/>
        <input type="text" name="instagram" placeholder="Instagram" value={form.socials.instagram} onChange={handleChange} className="border p-2 rounded w-full"/>
        <input type="text" name="soundcloud" placeholder="SoundCloud" value={form.socials.soundcloud} onChange={handleChange} className="border p-2 rounded w-full"/>
        <input type="text" name="spotify" placeholder="Spotify" value={form.socials.spotify} onChange={handleChange} className="border p-2 rounded w-full"/>
        <input type="text" name="youtube" placeholder="YouTube" value={form.socials.youtube} onChange={handleChange} className="border p-2 rounded w-full"/>
        <input type="number" name="order" placeholder="Order" value={form.order} onChange={handleChange} className="border p-2 rounded w-full"/>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
}
