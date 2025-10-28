"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getToken } from "../../../../utils/auth";

export default function EditEventPage() {
  const { id } = useParams();
  const router = useRouter();
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
  const token = getToken();

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setForm(data);
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
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/events/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to update");
      router.push("/admin/event");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Edit Event</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} required className="border p-2 rounded w-full"/>
        <input type="text" name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 rounded w-full"/>
        <input type="date" name="date" value={form.date} onChange={handleChange} required className="border p-2 rounded w-full"/>
        <input type="time" name="startTime" value={form.startTime} onChange={handleChange} className="border p-2 rounded w-full"/>
        <input type="time" name="endTime" value={form.endTime} onChange={handleChange} className="border p-2 rounded w-full"/>
        <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} className="border p-2 rounded w-full"/>
        <input type="text" name="stage" placeholder="Stage" value={form.stage} onChange={handleChange} className="border p-2 rounded w-full"/>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange}/> Featured
        </label>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
}
