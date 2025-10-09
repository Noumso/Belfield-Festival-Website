"use client";
import { useState } from "react";

export default function Benevole() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", availability: "" });
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/benevole", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setSuccess(data.message);
    setForm({ name: "", email: "", phone: "", availability: "" });
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-4">Devenir Bénévole 🦢</h2>
      {success && <p className="text-green-400 mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Nom" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="p-2 rounded bg-gray-800 text-white" required />
        <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="p-2 rounded bg-gray-800 text-white" required />
        <input type="tel" placeholder="Téléphone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="p-2 rounded bg-gray-800 text-white" />
        <textarea placeholder="Disponibilités / commentaire" value={form.availability} onChange={e => setForm({ ...form, availability: e.target.value })} className="p-2 rounded bg-gray-800 text-white" required />
        <button type="submit" className="bg-orange text-black font-bold px-4 py-2 rounded hover:bg-mauve transition">
          Envoyer
        </button>
      </form>
    </div>
  );
}
