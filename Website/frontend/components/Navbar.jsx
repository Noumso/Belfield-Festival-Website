"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFestivalOpen, setIsFestivalOpen] = useState(false); 

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/info" },
    { name: "Festival", path: "/festival" },
    { name: "Artistes", path: "/artists" },
    { name: "Contact", path: "/contact" },
    { name: "Bénévole", path: "/volunteer" },
  ];

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Festival click handler
  const handleFestivalClick = (e) => {
    e.preventDefault(); // Festival page navigation prevention
    setIsFestivalOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* left：title */}
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bbh">Belfield Festival</h1>
        </div>

        {/* center：menu */}
        <ul className="hidden md:flex gap-12 relative">
          {navItems.map((item) => (
            <li key={item.path} className="relative">
              {item.name === "Festival" ? (
                <>
                  {/* Festival sub-menu open click*/}
                  <button
                    onClick={handleFestivalClick}
                    className={`hover:text-yellow-400 transition ${
                      pathname === item.path ? "text-yellow-400" : ""
                    }`}
                  >
                    {item.name}
                  </button>

                  {/* ▼ Festival sub menu*/}
                  {isFestivalOpen && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
                      <li>
                        <Link
                          href="/festival"
                          className="block px-4 py-2 hover:bg-yellow-400 hover:text-black transition"
                          onClick={() => setIsFestivalOpen(false)} // close on click
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

        {/* Right：login/logout:signup */}
        <div className="flex gap-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-full bg-yellow-400 text-black hover:bg-yellow-500 transition"
            >
              Déconnexion
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition"
              >
                Se connecter
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 rounded-full bg-yellow-400 text-black hover:bg-yellow-500 transition"
              >
                Créer un compte
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
