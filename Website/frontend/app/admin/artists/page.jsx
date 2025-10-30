'use client';
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { getToken } from "../../../utils/auth";

export default function ArtistAdminPage() {
  const [artists, setArtists] = useState([]);
  const [form, setForm] = useState({
    name: "",
    style: "",
    bio: "",
    image: "",
    socials: { instagram: "", soundcloud: "", spotify: "", youtube: "" },
    order: 0,
  });
  const [status, setStatus] = useState("");
  const [token, setToken] = useState(null); // token state
  const [loading, setLoading] = useState(true);

  // 1️⃣ Get token only on client side
  useEffect(() => {
    const t = getToken();
    setToken(t);
    setLoading(false);
  }, []);

  // 2️⃣ Fetch artists data
  useEffect(() => {
    if (!token) return;
    const fetchArtists = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/artists`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to fetch artists");
        const data = await res.json();
        setArtists(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchArtists();
  }, [token]);

  // 3️⃣ Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in form.socials) {
      setForm({ ...form, socials: { ...form.socials, [name]: value } });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // 4️⃣ Submit new artist
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;
    setStatus("Adding...");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/artists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to add artist");
      setForm({
        name: "",
        style: "",
        bio: "",
        image: "",
        socials: { instagram: "", soundcloud: "", spotify: "", youtube: "" },
        order: 0,
      });
      // Reload artists after adding
      const updatedRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/artists`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const updatedData = await updatedRes.json();
      setArtists(updatedData);
      setStatus("Added successfully!");
    } catch (err) {
      setStatus(err.message);
    }
  };

  // 5️⃣ Delete artist
  const handleDelete = async (id) => {
    if (!token) return;
    if (!confirm("Are you sure to delete?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/artists/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete");
      // Remove deleted artist from list
      setArtists(artists.filter(a => a._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  // Show loading while fetching token
  if (loading) return <div className="p-10">Loading...</div>;
  if (!token) return <div className="p-10 text-red-600">You are not authorized.</div>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Artist Admin</h1>

      <form onSubmit={handleSubmit} className="mb-8 space-y-3">
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="border p-2 rounded w-full"/>
        <input type="text" name="style" placeholder="Style" value={form.style} onChange={handleChange} className="border p-2 rounded w-full"/>
        <input type="text" name="bio" placeholder="Bio" value={form.bio} onChange={handleChange} className="border p-2 rounded w-full"/>
        <input type="text" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="border p-2 rounded w-full"/>
        <input type="text" name="instagram" placeholder="Instagram" value={form.socials.instagram} onChange={handleChange} className="border p-2 rounded w-full"/>
        <input type="text" name="soundcloud" placeholder="SoundCloud" value={form.socials.soundcloud} onChange={handleChange} className="border p-2 rounded w-full"/>
        <input type="text" name="spotify" placeholder="Spotify" value={form.socials.spotify} onChange={handleChange} className="border p-2 rounded w-full"/>
        <input type="text" name="youtube" placeholder="YouTube" value={form.socials.youtube} onChange={handleChange} className="border p-2 rounded w-full"/>
        <input type="number" name="order" placeholder="Order" value={form.order} onChange={handleChange} className="border p-2 rounded w-full"/>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Artist</button>
        {status && <p>{status}</p>}
      </form>

      <ul>
        {artists.map(a => (
          <li key={a._id} className="flex justify-between items-center mb-2 border p-2 rounded">
            <div>{a.name} ({a.style})</div>
            <div className="flex gap-2">
              <a href={`/admin/artist/${a._id}`} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</a>
              <button onClick={() => handleDelete(a._id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
