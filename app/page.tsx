import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Home - Empat Coffee and Space',
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Welcome to Empat Coffee and Space
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Tempat terbaik untuk menikmati kopi berkualitas tinggi sambil bekerja atau bersantai dengan teman-teman. 
              Kami menyediakan suasana yang nyaman, WiFi cepat, dan komunitas yang ramah.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/about"
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition font-semibold"
              >
                Learn More
              </Link>
              <Link 
                href="/contact"
                className="px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-gray-100 transition font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="relative h-96">
            <Image
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop"
              alt="Empat Coffee and Space"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">Kenapa Memilih Kami?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-4xl mb-4">☕</div>
            <h3 className="text-xl font-bold text-black mb-3">Kopi Premium</h3>
            <p className="text-gray-700">
              Setiap biji kopi dipilih dengan teliti dan di-roasting dengan sempurna oleh barista profesional kami.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-black mb-3">Workspace Nyaman</h3>
            <p className="text-gray-700">
              Ruang kerja yang dilengkapi dengan WiFi cepat, power outlet, dan suasana yang produktif untuk semua orang.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-black mb-3">Komunitas</h3>
            <p className="text-gray-700">
              Bergabunglah dengan komunitas kami yang aktif dan nikmati berbagai event dan workshop menarik.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Siap untuk Berkunjung?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Kunjungi kami sekarang dan rasakan pengalaman unik bersama Empat Coffee and Space.
        </p>
        <Link 
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition font-semibold"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
