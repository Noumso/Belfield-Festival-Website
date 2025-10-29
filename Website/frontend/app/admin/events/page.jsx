"use client";
import { useState, useEffect } from "react";
import { getToken } from "../../../utils/auth";

export default function EventAdminPage() {
  const [events, setEvents] = useState([]);
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
  const [status, setStatus] = useState("");
  const token = getToken();

  const fetchEvents = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/events`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setEvents(data);
  };

  useEffect(() => {
    if (token) fetchEvents();
  }, [token]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Adding...");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to add event");
      setForm({ title: "", description: "", date: "", startTime: "", endTime: "", location: "", stage: "", featured: false });
      fetchEvents();
      setStatus("Added successfully!");
    } catch (err) {
      setStatus(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure to delete?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/events/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete");
      fetchEvents();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Event Admin</h1>

      <form onSubmit={handleSubmit} className="mb-8 space-y-3">
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
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Event</button>
        {status && <p>{status}</p>}
      </form>

      <ul>
        {events.map(e => (
          <li key={e._id} className="flex justify-between items-center mb-2 border p-2 rounded">
            <div>{e.title} ({e.date})</div>
            <div className="flex gap-2">
              <a href={`/admin/event/${e._id}`} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</a>
              <button onClick={() => handleDelete(e._id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
