import React, { useState, useEffect, useMemo } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Eye, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase, DesignWork } from '../lib/supabase';

const FeaturedGraphicDesign: React.FC = () => {
  const navigate = useNavigate();
  const [imageLoading, setImageLoading] = useState<Set<number>>(new Set());
  const [featuredWorks, setFeaturedWorks] = useState<DesignWork[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightbox, setLightbox] = useState<{ open: boolean; work?: DesignWork }>({ open: false });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedWorks = async () => {
      try {
        setLoading(true);
        // Fetch 8 featured works
        const { data, error } = await supabase
          .from('design_works')
          .select('*')
          .eq('featured', true)
          .order('created_at', { ascending: false })
          .limit(8);

        if (error) {
          throw error;
        }

        if (data) {
          setFeaturedWorks(data);
        }
      } catch (error) {
        console.error('Error fetching featured works:', error);
        setError('Failed to load featured works');
        
        // Fallback to static data if Supabase fails
        setFeaturedWorks([
          {
            id: 1,
            title: 'Naveen Reddy',
            src: '/media/NR.png',
            height: 'h-48',
            category: 'Portrait Design',
            type: 'image'
          },
          {
            id: 2,
            title: 'SKIZEN Poster',
            src: '/media/SKIZEN.png',
            height: 'h-64',
            category: 'Poster Design',
            type: 'image'
          },
          {
            id: 5,
            title: 'Vynika Reddy',
            src: '/media/VR.png',
            height: 'h-64',
            category: 'Portrait Design',
            type: 'image'
          },
          {
            id: 6,
            title: 'BS Infra Developers',
            src: '/media/BS1.png',
            height: 'h-80',
            category: 'Poster Design',
            type: 'image'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedWorks();
  }, []);

  const handleImageLoad = (id: number) => {
    setImageLoading(prev => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
  };

  const categories = useMemo(() => {
    const set = new Set<string>(['All']);
    featuredWorks.forEach(w => set.add(w.category || 'Other'));
    return Array.from(set);
  }, [featuredWorks]);

  const filteredWorks = useMemo(() => {
    if (activeCategory === 'All') return featuredWorks;
    return featuredWorks.filter(w => (w.category || 'Other') === activeCategory);
  }, [activeCategory, featuredWorks]);

  // Enable tilt only for fine pointers
  const [enableTilt, setEnableTilt] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      try {
        const mq = window.matchMedia('(pointer: fine)');
        setEnableTilt(!!mq.matches);
      } catch {}
    }
  }, []);

  // 3D tilt helpers
  const TiltCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (!enableTilt) {
      return <div className="transform-gpu will-change-transform">{children}</div>;
    }
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-50, 50], [8, -8]);
    const rotateY = useTransform(x, [-50, 50], [-8, 8]);

    let rafId = 0;
    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const px = e.clientX - rect.left - rect.width / 2;
        const py = e.clientY - rect.top - rect.height / 2;
        x.set(px);
        y.set(py);
        rafId = 0;
      });
    };

    const onMouseLeave = () => {
      x.set(0); y.set(0);
    };

    return (
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' as any }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="[perspective:1000px] transform-gpu will-change-transform"
      >
        {children}
      </motion.div>
    );
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-skizen-gray/30 to-white">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-skizen-accent/10 to-purple-500/10 px-4 py-2 rounded-full border border-skizen-accent/20 mb-6"
          >
            <Eye className="w-4 h-4 text-skizen-accent" />
            <span className="text-skizen-accent font-semibold text-sm">Featured Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-skizen-black mb-6 tracking-tight"
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

        {/* Filters (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="hidden sm:flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${activeCategory === cat ? 'bg-skizen-black text-white border-skizen-black' : 'bg-white text-skizen-black border-gray-200 hover:border-skizen-black/40'}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
        {/* Masonry Grid (all breakpoints, Pinterest-style) */}
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-4 xl:columns-5 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 [column-fill:_balance]"><div className="mb-8 break-inside-avoid">
          {/* spacer to help balance columns */}
        </div>
          {filteredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: (index % 6) * 0.05 }}
              viewport={{ once: true }}
              className="group cursor-pointer mb-8 break-inside-avoid"
              onClick={() => setLightbox({ open: true, work })}
            >
              <TiltCard>
              <div className="bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/60 shadow-md hover:shadow-xl transition-shadow duration-200">
                {/* Image Container */}
                <div className="relative overflow-hidden will-change-transform transform-gpu">
                  {/* Skeleton Placeholder */}
                  {!imageLoading.has(work.id) && (
                    <div className={`w-full min-h-[200px] bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse`} />
                  )}
                  
                  {/* Image (uses thumbnail if available) */}
                  <motion.img
                    src={work.thumbnail || work.src}
                    alt={work.title}
                    className={`w-full h-auto object-cover transition-transform duration-200 ease-out group-hover:scale-[1.01] transform-gpu will-change-transform ${
                      imageLoading.has(work.id) ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ position: imageLoading.has(work.id) ? 'relative' : 'absolute' }}
                    onLoad={() => handleImageLoad(work.id)}
                    loading="lazy"
                  />
                  
                  {/* Overlay (hidden on mobile; show on hover md+) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="hidden md:block bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <h3 className="text-skizen-black font-semibold text-sm mb-1">{work.title}</h3>
                        <p className="text-gray-600 text-xs">{work.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </TiltCard>
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-skizen-black to-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:from-skizen-accent hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span>View All Designs</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightbox.open && lightbox.work && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox({ open: false })}
        >
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img src={lightbox.work.src} alt={lightbox.work.title} className="w-full h-auto" />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-skizen-black">{lightbox.work.title}</h3>
                  <p className="text-sm text-gray-500">{lightbox.work.category}</p>
                </div>
                <button
                  onClick={() => navigate('/graphic-design')}
                  className="inline-flex items-center gap-2 bg-skizen-black text-white px-4 py-2 rounded-lg text-sm hover:bg-skizen-accent transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default FeaturedGraphicDesign;