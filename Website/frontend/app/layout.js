import './globals.css'
import Navbar from "../components/Navbar";


export const metadata = {
  title: 'Belfield Festival',
  description: 'Site officiel du Belfield Festival',
}

export default function RootLayout({ children }) {
 return (
    <html lang="fr">
      <body className="bg-gradient-to-b from-gray-900 to-black text-white">
        <Navbar />
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
