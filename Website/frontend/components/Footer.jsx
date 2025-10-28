import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#E67300] text-white py-8 mt-10">
      <div className="flex flex-col items-center justify-center gap-3">
        {/* Message */}
        <p className="text-lg md:text-xl font-roboto font-bold text-orange-100 max-w-xl text-center leading-snug whitespace-nowrap">
          Le Belfield, plus qu’un festival — une grande oie-dyssée musicale !
        </p>

        {/* SNS Links */}
        <p className="text-base text-white mb-2">Suivez-nous et vibrez avec nous</p>
        <div className="flex gap-5 mb-4">
          <Link href="https://www.facebook.com/p/Belfield-Events-100092731103925/" target="_blank" rel="noopener noreferrer">
            <div className="bg-white rounded-full p-2 shadow-lg hover:scale-110 transition transform">
              <Image src="/images/facebook_logo.png" alt="Facebook" width={30} height={30} />
            </div>
          </Link>

          <Link href="https://www.instagram.com/belfield.festival/?hl=en" target="_blank" rel="noopener noreferrer">
            <div className="bg-white rounded-full p-2 shadow-lg hover:scale-110 transition transform">
              <Image src="/images/instagram_logo.png" alt="Instagram" width={30} height={30} />
            </div>
          </Link>
          <Link href="mailto:belfield.festival@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="bg-white rounded-full p-2 shadow-lg hover:scale-110 transition transform">
              <Image src="/images/email_icon.png" alt="Email" width={30} height={30} />
            </div>
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-200 text-center">
          &copy; 2025 Belfield Festival. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
