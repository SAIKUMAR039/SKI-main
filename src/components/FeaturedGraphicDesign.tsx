import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FeaturedWork {
  id: number;
  title: string;
  src: string;
  height: string;
  category: string;
}

const FeaturedGraphicDesign: React.FC = () => {
  const navigate = useNavigate();
  const [imageLoading, setImageLoading] = useState<Set<number>>(new Set());

  // Featured graphic design works - a subset of your portfolio
  const featuredWorks: FeaturedWork[] = [
    {
      id: 1,
      title: 'Naveen Reddy',
      src: '/media/NaveenReddy.png',
      height: 'h-64',
      category: 'Portrait Design'
    },
    {
      id: 2,
      title: 'Naveen Reddy Poster',
      src: '/media/NaveenReddyPoster.png',
      height: 'h-80',
      category: 'Poster Design'
    },
    {
      id: 5,
      title: 'Vynika Reddy',
      src: '/media/VR.png',
      height: 'h-80',
      category: 'Portrait Design'
    },
    {
      id: 6,
      title: 'Vynika Reddy Collection',
      src: '/media/VR1.png',
      height: 'h-64',
      category: 'Portrait Series'
    }
  ];

  const handleImageLoad = (id: number) => {
    setImageLoading(prev => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-ski-gray/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-ski-accent/10 to-purple-500/10 px-4 py-2 rounded-full border border-ski-accent/20 mb-6"
          >
            <Eye className="w-4 h-4 text-ski-accent" />
            <span className="text-ski-accent font-semibold text-sm">Featured Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-ski-black mb-6 tracking-tight"
          >
            Featured Graphic Design
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Discover our most popular and innovative graphic design projects, 
            showcasing creativity and technical excellence.
          </motion.p>
        </motion.div>

        {/* Featured Works Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
          {featuredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => navigate('/graphic-design')}
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  {/* Skeleton Placeholder */}
                  {!imageLoading.has(work.id) && (
                    <div className={`w-full ${work.height} bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse`} />
                  )}
                  
                  {/* Image */}
                  <motion.img
                    src={work.src}
                    alt={work.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      imageLoading.has(work.id) ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ position: imageLoading.has(work.id) ? 'relative' : 'absolute' }}
                    onLoad={() => handleImageLoad(work.id)}
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <h3 className="text-ski-black font-semibold text-sm mb-1">{work.title}</h3>
                        <p className="text-gray-600 text-xs">{work.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={() => navigate('/graphic-design')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-ski-black to-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:from-ski-accent hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span>View All Designs</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedGraphicDesign; 