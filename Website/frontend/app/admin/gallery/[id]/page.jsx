"use client";
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
  const token = getToken();

  useEffect(() => {
    const fetchGallery = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/gallery/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setForm(data);
    };
    if (token) fetchGallery();
  }, [id, token]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/gallery/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to update");
      router.push("/admin/gallery");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Edit Gallery</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
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
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
}
