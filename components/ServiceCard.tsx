'use client';

import { useState } from 'react';

interface ServiceCardProps {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ id, name, description, icon }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${
        isHovered ? 'shadow-xl transform -translate-y-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-black mb-3">{name}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
      <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
        Learn More
      </button>
    </div>
  );
}
