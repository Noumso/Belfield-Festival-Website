import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="flex flex-col items-center justify-center gap-3">
        {/* SNSLink */}
        <p className="text-sm text-gray-300 mb-1">Follow us</p>
        <div className="flex gap-5 mb-2">
          <Link
            href="https://www.facebook.com/p/Belfield-Events-100092731103925/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/facebook_logo.png"
              alt="Facebook"
              width={30}
              height={30}
              className="hover:opacity-80 transition"
            />
          </Link>

          <Link
            href="https://www.instagram.com/belfield.festival/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/instagram_logo.png"
              alt="Instagram"
              width={30}
              height={30}
              className="hover:opacity-80 transition"
            />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">
          &copy; 2025 Belfield Festival. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
