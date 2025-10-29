'use client';

import { useEffect, useState } from "react";
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
  const [token, setToken] = useState(null); // token を state にする

  // token をクライアント側で取得
  useEffect(() => {
    const t = getToken();
    setToken(t);
  }, []);

  const fetchGalleries = async () => {
    if (!token) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/gallery`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setGalleries(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (token) fetchGalleries();
  }, [token]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;
    setStatus("Adding...");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/gallery`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to add gallery");
      setForm({ title: "", caption: "", url: "", photographer: "", visible: true });
      fetchGalleries();
      setStatus("Added successfully!");
    } catch (err) {
      setStatus(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!token) return;
    if (!confirm("Are you sure to delete?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/gallery/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete");
      fetchGalleries();
    } catch (err) {
      alert(err.message);
    }
  };

  if (!token) return <div className="p-10">Loading...</div>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Gallery Admin</h1>

      <form onSubmit={handleSubmit} className="mb-8 space-y-3">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="caption"
          value={form.caption}
          onChange={handleChange}
          placeholder="Caption"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="url"
          value={form.url}
          onChange={handleChange}
          placeholder="Image URL"
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="photographer"
          value={form.photographer}
          onChange={handleChange}
          placeholder="Photographer"
          className="border p-2 rounded w-full"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="visible"
            checked={form.visible}
            onChange={handleChange}
          />
          Visible
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Gallery
        </button>
        {status && <p>{status}</p>}
      </form>

      <ul>
        {galleries.map((g) => (
          <li key={g._id} className="flex justify-between items-center mb-2 border p-2 rounded">
            <div>
              <strong>{g.title}</strong> ({g.visible ? "Visible" : "Hidden"}) - {g.photographer}
            </div>
            <div className="flex gap-2">
              <a
                href={`/admin/gallery/${g._id}`}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </a>
              <button
                onClick={() => handleDelete(g._id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
