import Image from 'next/image';

interface TeamMemberProps {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  email: string;
}

export default function TeamMember({
  id,
  name,
  position,
  image,
  bio,
  email,
}: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-black">{name}</h3>
        <p className="text-gray-600 font-semibold mb-3">{position}</p>
        <p className="text-gray-700 text-sm mb-4">{bio}</p>
        <a
          href={`mailto:${email}`}
          className="text-black hover:text-gray-700 font-semibold"
        >
          {email}
        </a>
      </div>
    </div>
  );
}
