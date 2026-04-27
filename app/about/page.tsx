import Image from 'next/image';

export const metadata = {
  title: 'About - Empat Coffee and Space',
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-black mb-4">About Empat Coffee and Space</h1>
        <p className="text-xl text-gray-700">
          Cerita kami dimulai dari sebuah impian sederhana untuk menciptakan ruang di mana orang dapat berkumpul, bekerja, dan menikmati kopi berkualitas tinggi.
        </p>
      </section>

      {/* Story Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-96">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTx0BOljAwDoTL3szaV5nOit6_l7rATYybsA&s"
              alt="Our Story"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">Kisah Kami</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Empat Coffee and Space didirikan pada tahun 2022 dengan visi untuk menciptakan destinasi unik yang menggabungkan 
              kopi berkualitas premium dengan ruang kerja yang nyaman dan komunitas yang solid.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Kami percaya bahwa kopi bukan hanya minuman, tetapi juga pengalaman. Oleh karena itu, setiap aspek dari 
              tempat kami dirancang dengan cermat untuk memberikan pengalaman terbaik bagi pelanggan kami.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dengan tim yang berdedikasi dan passion terhadap excellence, kami terus berkembang dan menciptakan 
              momen-momen berkesan bagi semua orang yang mengunjungi kami.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">Misi & Visi Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">🎯 Visi</h3>
            <p className="text-gray-700">
              Menjadi ruang komunitas pilihan utama yang memberikan pengalaman kopi terbaik 
              dan lingkungan yang mendukung pertumbuhan personal dan profesional setiap individu.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">💼 Misi</h3>
            <p className="text-gray-700">
              Menyediakan kopi berkualitas tinggi dengan layanan excellent, menciptakan komunitas yang inklusif, 
              dan menjadi tempat di mana orang dapat menjalin koneksi bermakna dan berkembang bersama.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section>
        <h2 className="text-3xl font-bold text-black mb-8 text-center">Nilai Inti Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-5xl mb-4">☕</div>
            <h3 className="text-xl font-bold text-black mb-2">Kualitas</h3>
            <p className="text-gray-700">Standar excellence dalam setiap aspek layanan kami</p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-xl font-bold text-black mb-2">Kepedulian</h3>
            <p className="text-gray-700">Peduli dengan kepuasan dan kebutuhan setiap pelanggan</p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-black mb-2">Komunitas</h3>
            <p className="text-gray-700">Membangun hubungan yang kuat dan inklusif</p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-xl font-bold text-black mb-2">Inovasi</h3>
            <p className="text-gray-700">Terus berkembang dan beradaptasi dengan perubahan</p>
          </div>
        </div>
      </section>
    </div>
  );
}
