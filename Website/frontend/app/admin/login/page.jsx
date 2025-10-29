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
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#4F0F5A" }}>
      <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-purple-900 mb-6">
          Admin Login
        </h2>
        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-900 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 text-purple-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-900 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 text-purple-900"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#FF8200] text-white py-2 rounded-lg hover:bg-[#FF9A33] transition-colors font-semibold"
          >
          Login
          </button>
        </form>
      </div>
    </div>
  );
}
