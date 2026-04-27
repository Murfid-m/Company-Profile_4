import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/8d427d3bdfa3f1c48791a8d0b58cc76f.png"
              alt="Empat Coffee and Space Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold">Empat Coffee</span>
          </Link>
          
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-gray-300 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition">
              About
            </Link>
            <Link href="/services" className="hover:text-gray-300 transition">
              Services
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
            <Link href="/team/1" className="hover:text-gray-300 transition">
              Team
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
