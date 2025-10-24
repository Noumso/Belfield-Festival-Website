import './globals.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export const metadata = {
  title: 'Belfield Festival',
  description: 'Site officiel du Belfield Festival',
}

export default function RootLayout({ children }) {
 return (
    <html lang="fr">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=BBH+Sans+Hegarty&family=Ultra&display=swap" rel="stylesheet" 
      />
      <link href="https://fonts.googleapis.com/css2?family=BBH+Sans+Hegarty&family=Comic+Relief:wght@400;700&family=Ultra&display=swap" rel="stylesheet"
      />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"
      />
      </head>
      <body className="text-white min-h-screen">
        <Navbar />
        <div className="bg-gradient-to-b from-gray-900 to-black">
          <main className="w-full">{children}</main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
