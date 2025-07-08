// src/components/sections/Testimonials.tsx

import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonialsData } from '../data/testimonialsData';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-2 bg-ski-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ski-black mb-6 sm:mb-8 tracking-tight px-4">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 px-4">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              message={testimonial.message}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
