import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Eye, X, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase, DesignWork } from '../lib/supabase';

const GraphicDesignPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedWork, setSelectedWork] = useState<DesignWork | null>(null);
  const [imageLoading, setImageLoading] = useState<Set<number>>(new Set());
  const [designWorks, setDesignWorks] = useState<DesignWork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedMessage, setCopiedMessage] = useState('');

  useEffect(() => {
    const fetchDesignWorks = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('design_works')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          throw error;
        }

        if (data) {
          setDesignWorks(data);
        }
      } catch (error) {
        console.error('Error fetching design works:', error);
        setError('Failed to load design works. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDesignWorks();
  }, []);
  // Close modal on Escape and prevent background scroll when modal is open
  useEffect(() => {
    if (!selectedWork) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedWork(null);
    };
    const prevOverflow = document.body.style.overflow;
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedWork]);

  // Focus close button when modal opens for accessibility
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (selectedWork && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [selectedWork]);
  // Loading and error states
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-skizen-accent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-red-800 font-medium text-lg">Error</h3>
          <p className="text-red-700">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Placeholder for empty state
  if (designWorks.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Design Works Found</h2>
          <p className="text-gray-600 mb-6">There are currently no design works to display.</p>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-skizen-accent text-white rounded-md hover:bg-skizen-accent/90"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }
     
 

  
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


  const handleCopyLink = async (url?: string) => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedMessage('Link copied to clipboard');
      setTimeout(() => setCopiedMessage(''), 2000);
    } catch (e) {
      console.warn('Clipboard copy failed', e);
      setCopiedMessage('Copy failed');
      setTimeout(() => setCopiedMessage(''), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-skizen-gray via-white to-skizen-gray">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10 sm:opacity-20">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-skizen-accent/30 to-orange-500/30 rounded-full blur-2xl sm:blur-3xl" />
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-skizen-accent/10 to-purple-500/10 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full border border-skizen-accent/20 mb-4 sm:mb-6 lg:mb-8"
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-skizen-accent" />
              <span className="text-skizen-accent font-semibold text-xs sm:text-sm lg:text-base">Design Gallery</span>
            </motion.div>

            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-skizen-black mb-4 sm:mb-6 lg:mb-8 tracking-tight px-2"
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

      {/* Pinterest-style Gallery (Masonry) */}
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
                            src={work.thumbnail || work.src}
                            alt={work.title}
                            className={`w-full object-cover transition-transform duration-500 md:group-hover:scale-110 ${
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
                              className={`w-full object-cover transition-transform duration-500 md:group-hover:scale-110 ${
                                imageLoading.has(work.id) ? 'opacity-100' : 'opacity-0'
                              }`}
                              style={{ position: imageLoading.has(work.id) ? 'relative' : 'absolute' }}
                              onLoadedMetadata={() => handleImageLoad(work.id)}
                              preload="metadata"
                              playsInline
                              muted
                              controls={false}
                            />

                            {/* Video Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-skizen-black ml-1" />
                              </div>
                            </div>
                          </div>
                        )}
                    
                        {/* Overlay on Hover - apply only on md+ to avoid persistent 'hover' on touch devices */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                          <div className="absolute top-3 right-3 flex gap-2">
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
              className="bg-gradient-to-r from-skizen-black to-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-skizen-accent hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
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
                ref={closeBtnRef}
                onClick={() => setSelectedWork(null)}
                aria-label="Close preview"
                className="absolute top-4 right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              </button>

              {/* Redesigned Content: responsive media + metadata/actions */}
              <div className="p-6" role="dialog" aria-modal="true" aria-labelledby="gd-modal-title">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Media column */}
                  <div className="md:w-2/3 w-full flex items-center justify-center bg-gray-50 rounded-xl p-4 shadow-sm">
                    {selectedWork.type === 'image' ? (
                      <img
                        src={selectedWork.src}
                        alt={selectedWork.title}
                        className="max-h-[75vh] max-w-full w-auto object-contain rounded-md"
                      />
                    ) : (
                      <video
                        src={selectedWork.src}
                        poster={selectedWork.thumbnail}
                        controls
                        autoPlay={false}
                        className="max-h-[75vh] max-w-full w-auto object-contain rounded-md"
                      />
                    )}
                  </div>

                  {/* Metadata / actions column */}
                  <div className="md:w-1/3 w-full flex flex-col">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <h3 id="gd-modal-title" className="text-gray-900 text-xl sm:text-2xl font-semibold leading-snug">{selectedWork.title}</h3>
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-skizen-accent/10 text-skizen-accent border border-skizen-accent/20">{selectedWork.category}</span>
                          <span className="text-xs text-gray-500">{selectedWork.type}</span>
                        </div>
                        <div className="mt-3 text-sm text-gray-500">
                          {selectedWork.created_at ? new Date(selectedWork.created_at).toLocaleString() : ''}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-3">
                      
                      <button onClick={() => setSelectedWork(null)} className="mt-3 w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm">
                        Close
                      </button>
                    </div>

                  
                  </div>
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