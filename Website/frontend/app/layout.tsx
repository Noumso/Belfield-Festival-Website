import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Belfield Festival",
  description: "Festival de musique à Caussade – 15 & 16 août 2025"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
