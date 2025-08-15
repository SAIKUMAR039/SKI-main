import React, { useState, } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Download, Heart, Eye, X, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DesignWork {
  id: number;
  title: string;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  height: string;
}

const GraphicDesignPage: React.FC = () => {
  const navigate = useNavigate();
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());
  const [selectedWork, setSelectedWork] = useState<DesignWork | null>(null);
  const [imageLoading, setImageLoading] = useState<Set<number>>(new Set());

  // Sample graphic design data - replace with your actual images/videos
  const designWorks: DesignWork[] = [
    {
      id: 1,
      title: 'Naveen Reddy',
      type: 'image',
      src: '/media/NaveenReddy.png',
      height: 'h-64',
    },
    {
      id: 2,
      title: 'Naveen Reddy',
      type: 'video',
      src: '/media/NaveenReddyAd.mp4',
      height: 'h-80',
    },
    {
      id: 2,
      title: 'Naveen Reddy',
      type: 'image',
      src: '/media/NaveenReddyPoster.png',
      height: 'h-80',
    },
   
    {
      id: 4,
      title: 'Naveen Reddy',
      type: 'image',
      src: '/media/NaveenReddyPoster3.png',
      height: 'h-80',
    },
    {
      id: 5,
      title: 'Vynika Reddy',
      type: 'image',
      src: '/media/VR.png',
      height: 'h-80',
    },
    {
      id: 6,
      title: 'Vynika Reddy',
      type: 'image',
      src: '/media/VR1.png',
      height: 'h-80',
    },
    {
      id: 7,
      title: 'Vynika Reddy',
      type: 'image',
      src: '/media/VR2.png',
      height: 'h-80',
    },
    {
      id: 8,
      title: 'Vynika Reddy',
      type: 'image',
      src: '/media/VR3.png',
      height: 'h-80',
    },
    {
      id: 9,
      title: 'Vynika Reddy',
      type: 'image',
      src: '/media/VR4.png',
      height: 'h-80',
    },
    {
      id: 10,
      title: 'SKI Poster',
      type: 'image',
      src: '/media/SKI.png',
      height: 'h-80',
    },
    {
      id: 11,
      title: 'BS Infra Developers',
      type: 'image',
      src: '/media/BS1.png',
      height: 'h-80',
    },
    {
      id: 12,
      title: 'Naveen Reddy Poster',
      type: 'image',
      src: '/media/NR.png',
      height: 'h-80',
    },
  ];

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

  const handleImageLoad = (id: number) => {
    setImageLoading(prev => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
  };

  const handleWorkClick = (work: DesignWork) => {
    setSelectedWork(work);
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

      {/* Pinterest-style Gallery */}
      <section className="py-8 sm:py-12 lg:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Masonry Grid - 2 columns mobile, 5 columns desktop */}
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 sm:gap-6 lg:gap-8 space-y-4 sm:space-y-6 lg:space-y-8">
            {designWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="break-inside-avoid mb-4 sm:mb-6 lg:mb-8 group cursor-pointer"
                onClick={() => handleWorkClick(work)}
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Media Container */}
                  <div className="relative overflow-hidden">
                    {/* Skeleton Placeholder */}
                    {!imageLoading.has(work.id) && (
                      <div className={`w-full ${work.height} bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse`} />
                    )}
                    
                    {/* Image */}
                    {work.type === 'image' && (
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
                    )}
                    
                    {/* Video */}
                    {work.type === 'video' && (
                      <div className="relative">
                        <motion.video
                          src={work.src}
                          poster={work.thumbnail}
                          className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                            imageLoading.has(work.id) ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{ position: imageLoading.has(work.id) ? 'relative' : 'absolute' }}
                          onLoadedData={() => handleImageLoad(work.id)}
                          muted
                          loop
                          playsInline
                        />
                        
                        {/* Video Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-ski-black ml-1" />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute top-3 right-3 flex gap-2">
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLike(work.id);
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-2 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 ${
                            likedImages.has(work.id)
                              ? 'bg-red-500 text-white'
                              : 'bg-white/20 text-white hover:bg-white/30'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${likedImages.has(work.id) ? 'fill-current' : ''}`} />
                        </motion.button>
                        <motion.button
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 transition-all duration-300"
                        >
                          <Download className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
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

      {/* Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              </button>

              {/* Content */}
              <div className="relative">
                {selectedWork.type === 'image' ? (
                  <img
                    src={selectedWork.src}
                    alt={selectedWork.title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                ) : (
                  <div className="relative">
                    <video
                      src={selectedWork.src}
                      poster={selectedWork.thumbnail}
                      className="w-full h-auto max-h-[80vh] object-contain"
                      controls
                      autoPlay
                      muted
                    />
                  </div>
                )}
                
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                  <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold">
                    {selectedWork.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GraphicDesignPage;