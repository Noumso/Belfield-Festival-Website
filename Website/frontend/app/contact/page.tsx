"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setSuccess(data.message);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
      {success && <p className="text-green-400 mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nom"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="p-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          className="p-2 rounded bg-gray-800 text-white"
          required
        />
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          className="p-2 rounded bg-gray-800 text-white"
          required
        />
        <button
          type="submit"
          className="bg-orange text-black font-bold px-4 py-2 rounded hover:bg-mauve transition"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
