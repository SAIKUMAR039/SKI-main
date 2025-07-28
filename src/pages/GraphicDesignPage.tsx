import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowLeft, Download, ExternalLink, Heart, Eye, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GraphicDesignPage: React.FC = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());

  const categories = ['All', 'Branding', 'Social Media', 'Print Design', 'Web Graphics', 'Illustrations'];

  // Sample graphic design data - replace with your actual images
  const designWorks = [
    {
      id: 1,
      title: 'Modern Brand Identity',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=600&fit=crop',
      description: 'Complete brand identity design with logo, colors, and typography',
      likes: 124,
      views: 1250,
      tags: ['Logo', 'Branding', 'Identity'],
      height: 'h-64',
    },
    {
      id: 2,
      title: 'Social Media Campaign',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=500&fit=crop',
      description: 'Instagram post designs for fashion brand',
      likes: 89,
      views: 890,
      tags: ['Instagram', 'Fashion', 'Social'],
      height: 'h-80',
    },
    {
      id: 3,
      title: 'Business Card Design',
      category: 'Print Design',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      description: 'Elegant business card design with gold foil',
      likes: 156,
      views: 2100,
      tags: ['Business Card', 'Print', 'Elegant'],
      height: 'h-48',
    },
    {
      id: 4,
      title: 'Website Hero Graphics',
      category: 'Web Graphics',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=700&fit=crop',
      description: 'Hero section graphics for tech startup',
      likes: 203,
      views: 3200,
      tags: ['Web', 'Hero', 'Tech'],
      height: 'h-96',
    },
    {
      id: 5,
      title: 'Character Illustration',
      category: 'Illustrations',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=450&fit=crop',
      description: 'Custom character design for mobile app',
      likes: 178,
      views: 1800,
      tags: ['Character', 'Mobile', 'App'],
      height: 'h-72',
    },
    {
      id: 6,
      title: 'Poster Design',
      category: 'Print Design',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=600&fit=crop',
      description: 'Event poster with bold typography',
      likes: 145,
      views: 1650,
      tags: ['Poster', 'Event', 'Typography'],
      height: 'h-80',
    },
    {
      id: 7,
      title: 'App Icon Set',
      category: 'Web Graphics',
      image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&h=400&fit=crop',
      description: 'Icon set for productivity app',
      likes: 267,
      views: 4100,
      tags: ['Icons', 'App', 'UI'],
      height: 'h-64',
    },
    {
      id: 8,
      title: 'Brand Guidelines',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=550&fit=crop',
      description: 'Comprehensive brand guideline document',
      likes: 198,
      views: 2800,
      tags: ['Guidelines', 'Brand', 'Document'],
      height: 'h-88',
    },
    {
      id: 9,
      title: 'Social Media Templates',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=350&fit=crop',
      description: 'Template pack for Instagram stories',
      likes: 312,
      views: 5200,
      tags: ['Templates', 'Stories', 'Instagram'],
      height: 'h-56',
    },
    {
      id: 10,
      title: 'Packaging Design',
      category: 'Print Design',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=650&fit=crop',
      description: 'Product packaging for organic skincare',
      likes: 189,
      views: 2300,
      tags: ['Packaging', 'Organic', 'Skincare'],
      height: 'h-84',
    },
    {
      id: 11,
      title: 'Digital Illustration',
      category: 'Illustrations',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop',
      description: 'Abstract digital art for wall decoration',
      likes: 234,
      views: 3100,
      tags: ['Digital', 'Abstract', 'Art'],
      height: 'h-76',
    },
    {
      id: 12,
      title: 'Website Banner',
      category: 'Web Graphics',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      description: 'Promotional banner for e-commerce site',
      likes: 156,
      views: 1900,
      tags: ['Banner', 'E-commerce', 'Promo'],
      height: 'h-48',
    },
  ];

  const filteredWorks = activeFilter === 'All' 
    ? designWorks 
    : designWorks.filter(work => work.category === activeFilter);

  const handleLike = (id: number) => {
    setLikedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ski-gray via-white to-ski-gray">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10 sm:opacity-20">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-ski-accent/30 to-orange-500/30 rounded-full blur-2xl sm:blur-3xl" />
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl sm:blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-ski-black hover:text-ski-accent transition-colors duration-300 mb-6 sm:mb-8 group text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Back to Home</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-ski-accent/10 to-purple-500/10 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full border border-ski-accent/20 mb-4 sm:mb-6 lg:mb-8"
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-ski-accent" />
              <span className="text-ski-accent font-semibold text-xs sm:text-sm lg:text-base">Design Gallery</span>
            </motion.div>

            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-ski-black mb-4 sm:mb-6 lg:mb-8 tracking-tight px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Graphic Design Portfolio
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Explore our creative graphic design work spanning branding, digital media, 
              print design, and custom illustrations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            {/* Mobile: Horizontal Scroll */}
            <div className="sm:hidden">
              <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-shrink-0 px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-sm whitespace-nowrap ${
                      activeFilter === category
                        ? 'bg-gradient-to-r from-ski-accent to-orange-500 text-white shadow-lg'
                        : 'bg-white/80 text-gray-700 hover:bg-white border border-gray-200 hover:border-ski-accent/30'
                    }`}
                  >
                    {category === 'All' && <Filter className="w-3 h-3" />}
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Desktop: Centered Grid */}
            <div className="hidden sm:flex flex-wrap justify-center gap-3 lg:gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-sm lg:text-base ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-ski-accent to-orange-500 text-white shadow-lg'
                      : 'bg-white/80 text-gray-700 hover:bg-white border border-gray-200 hover:border-ski-accent/30'
                  }`}
                >
                  {category === 'All' && <Filter className="w-4 h-4" />}
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pinterest-style Gallery */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Masonry Grid - 2 columns mobile, 5 columns desktop */}
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 sm:gap-6 lg:gap-8 space-y-4 sm:space-y-6 lg:space-y-8">
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="break-inside-avoid mb-4 sm:mb-6 lg:mb-8 group"
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={work.image}
                      alt={work.title}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                      loading="lazy"
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute top-3 right-3 flex gap-2">
                        <motion.button
                          onClick={() => handleLike(work.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className={`p-2 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 ${
                            likedImages.has(work.id)
                              ? 'bg-red-500 text-white'
                              : 'bg-white/20 text-white hover:bg-white/30'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${likedImages.has(work.id) ? 'fill-current' : ''}`} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 transition-all duration-300"
                        >
                          <Download className="w-4 h-4" />
                        </motion.button>
                      </div>
                      
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center gap-3 text-white text-sm">
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{work.likes + (likedImages.has(work.id) ? 1 : 0)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{work.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-3 sm:p-4 lg:p-6">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-xs sm:text-sm font-medium text-ski-accent bg-ski-accent/10 px-2 sm:px-3 py-1 rounded-full border border-ski-accent/20">
                        {work.category}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                      </motion.button>
                    </div>
                    
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-ski-black mb-2 leading-tight">
                      {work.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                      {work.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {work.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded-full border border-gray-200 hover:bg-ski-accent/10 hover:text-ski-accent hover:border-ski-accent/30 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                      {work.tags.length > 2 && (
                        <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-ski-accent/10 text-xs font-medium text-ski-accent rounded-full border border-ski-accent/30">
                          +{work.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12 sm:mt-16 lg:mt-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-ski-black to-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-ski-accent hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Load More Designs
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesignPage;