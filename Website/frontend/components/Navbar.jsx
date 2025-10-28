"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isFestivalOpen, setIsFestivalOpen] = useState(false);

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/info" },
    { name: "Festival", path: "/festival" },
    { name: "Artistes", path: "/artists" },
    { name: "Contact", path: "/contact" },
    { name: "Bénévole", path: "/volunteer" },
    { name: "Billetterie", path: "/tickets" },
  ];

  const handleFestivalClick = (e) => {
    e.preventDefault();
    setIsFestivalOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* titre */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bbh">Belfield Festival</h1>
        </div>

        {/* menu */}
        <ul className="flex gap-10 relative flex-1 justify-center -ml-20">
          {navItems.map((item) => (
            <li key={item.path} className="relative">
              {item.name === "Festival" ? (
                <>
                  <button
                    onClick={handleFestivalClick}
                    className={`hover:text-yellow-400 transition ${
                      pathname === item.path ? "text-yellow-400" : ""
                    }`}
                  >
                    {item.name}
                  </button>

                  {isFestivalOpen && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
                      <li>
                        <Link
                          href="/festival"
                          className="block px-4 py-2 hover:bg-yellow-400 hover:text-black transition"
                          onClick={() => setIsFestivalOpen(false)}
                        >
                          Édition 2025 🎆
                        </Link>
                      </li>
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.path}
                  className={`hover:text-yellow-400 transition ${
                    pathname === item.path ? "text-yellow-400" : ""
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
