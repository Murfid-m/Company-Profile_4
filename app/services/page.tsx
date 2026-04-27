import ServiceCard from '@/components/ServiceCard';

export const metadata = {
  title: 'Services - Empat Coffee and Space',
};

const services = [
  {
    id: 1,
    name: 'Specialty Coffee',
    description: 'Kopi pilihan dari berbagai daerah dengan proses roasting yang sempurna, disajikan oleh barista profesional.',
    icon: '☕'
  },
  {
    id: 2,
    name: 'Workspace & Meeting',
    description: 'Ruang kerja yang nyaman dengan WiFi cepat, power outlet lengkap, dan suasana yang mendukung produktivitas.',
    icon: '💼'
  },
];

export default function Services() {

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-black mb-4">Our Services</h1>
        <p className="text-lg text-gray-700">
          Kami menawarkan berbagai layanan dirancang khusus untuk memenuhi kebutuhan Anda.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            name={service.name}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </section>

      {/* Additional Info */}
      <section className="bg-gray-50 rounded-lg p-8 shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-black mb-4">Paket Custom</h2>
        <p className="text-gray-700 mb-4">
          Kami juga menyediakan paket custom sesuai dengan kebutuhan spesifik Anda. Hubungi tim kami untuk 
          mendiskusikan paket yang paling sesuai dengan budget dan requirement Anda.
        </p>
        <div className="bg-white p-4 rounded-lg border-l-4 border-black">
          <p className="font-semibold text-black">
            📞 Hubungi kami: +62 8213-7892-1717
          </p>
          <p className="text-gray-800">
            📧 Email: empatcoffe@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
