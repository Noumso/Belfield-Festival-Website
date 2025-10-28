"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { setToken } from "../../../utils/auth";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);
        router.push("/admin"); // ダッシュボードへ
      } else {
        setError(data.message || "Erreur login");
      }
    } catch (err) {
      setError("Impossible de contacter le serveur");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
}
