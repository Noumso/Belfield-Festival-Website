import Link from "next/link";

export default function Navbar() {
  const links = [
    { name: "Accueil", href: "/" },
    { name: "Artistes", href: "/artistes" },
    { name: "Évènement", href: "/evenement" },
    { name: "Galerie", href: "/galerie" },
    { name: "Bénévole", href: "/benevole" },
    { name: "Billetterie", href: "/billetterie" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <nav className="flex justify-between items-center p-4 bg-black/80 sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Belfield 🦢</h1>
      <ul className="flex gap-4">
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-orange transition">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
