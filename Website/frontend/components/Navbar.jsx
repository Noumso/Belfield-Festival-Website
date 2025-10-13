"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Acceuil", path: "/" },
    { name: "À propos", path: "/info" },
    { name: "Festival & Events", path: "/festival" },
    { name: "Artistes", path: "/artists" },
    { name: "Contact", path: "/contact" },
    { name: "Articles", path: "/articles" },
  ];

  // Temporary state for login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    //Add logout logic here
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* left：title */}
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bbh">Belfield Festival</h1>
        </div>

        {/* center：menu */}
        <ul className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`hover:text-yellow-400 transition ${
                  pathname === item.path ? "text-yellow-400" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right：se connecter / créer un compte*/}
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
