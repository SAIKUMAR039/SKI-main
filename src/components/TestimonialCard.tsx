// src/components/blocks/TestimonialCard.tsx

import React from 'react';

interface Props {
  message: string;
  name: string;
  title: string;
  image: string;
}

const TestimonialCard: React.FC<Props> = ({ message, name, title, image }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl transition-all hover:scale-[1.02]">
      <p className="text-lg text-gray-600 leading-relaxed">{`${message}`}</p>
      <div className="flex items-center mt-6">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="text-base font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
