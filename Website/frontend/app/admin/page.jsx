"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getToken, removeToken } from "../../utils/auth";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    if (!getToken()) router.push("/admin/login");
  }, []);

  const handleLogout = () => {
    removeToken();
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen w-full bg-[#FFD9A6] relative flex flex-col items-center">
      {/*logout button */}
      <button
        onClick={handleLogout}
        className="absolute top-6 right-6 bg-[#4F0F5A] text-white font-semibold px-6 py-3 rounded-xl
                   hover:bg-[#6A2380] transition-colors duration-300"
      >
        Logout
      </button>

      {/* Dashboard titre */}
      <h1 className="text-4xl font-bold text-[#4F0F5A] mt-10 text-center">
        Admin tablau de bord
      </h1>

      {/* navi card */}
      <main className="w-full max-w-5xl mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
        <a
          href="/admin/artists"
          className="block w-64 bg-[#FF8200] text-white text-center py-10 rounded-2xl
                     shadow-[0_8px_15px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)]
                     transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
        >
          Artists
        </a>
        <a
          href="/admin/events"
          className="block w-64 bg-[#FF8200] text-white text-center py-10 rounded-2xl
                     shadow-[0_8px_15px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)]
                     transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
        >
          Events
        </a>
        <a
          href="/admin/gallery"
          className="block w-64 bg-[#FF8200] text-white text-center py-10 rounded-2xl
                     shadow-[0_8px_15px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)]
                     transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
        >
          Gallery
        </a>
      </main>
    </div>
  );
}
