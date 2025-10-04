import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

import { ExternalLink, TrendingUp, Users, Award, Filter } from 'lucide-react';

const Portfolio: React.FC = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Video Production', 'Web Development'];

 
    const projects = [
      {
        title: 'Vynika Reddy Studio E-Commerce',
        category: 'Web Development',
        description: 'A powerful AI-powered content generation platform that offers specialized tools for various content creation needs - from code analysis to professional writing.',
        image: '/vynika.png',
        link: 'https://vynika-reddy.saikumarthota.live/',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Gemini API', 'Stripe', 'Vite'],
        metrics: [
          { label: 'Year', value: '2025', icon: Award },
          { label: 'GitHub', value: 'Repo', icon: ExternalLink },
          { label: 'Live Demo', value: 'Demo', icon: TrendingUp },
        ],
        featured: false,
        isVideo: false,
      },

      
      {
        title: 'Imagine',
        category: 'Web Development',
        description: 'Imagine is an AI-powered image generation application. Users can create unique images based on text descriptions using advanced AI models.',
        image: '/imagine.png',
        link: 'https://imagine.saikumarthota.live/',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Gemini API'],
        metrics: [
          { label: 'Year', value: '2024', icon: Award },
          { label: 'GitHub', value: 'Repo', icon: ExternalLink },
          { label: 'Live Demo', value: 'Demo', icon: TrendingUp },
        ],
        featured: false,
        isVideo: false,
      },
      {
        title: 'AI Resume Screening',
        category: 'Web Development',
        description: 'AI Resume Screening is a web application that uses AI to analyze and screen resumes. It provides insights and recommendations for hiring managers.',
        image: '/resume.png',
        link: 'https://airesume-screening.vercel.app/',
        tags: ['JavaScript', 'Tailwind CSS', 'React', 'Python', 'Gemini API'],
        metrics: [
          { label: 'Year', value: '2025', icon: Award },
          { label: 'GitHub', value: 'Repo', icon: ExternalLink },
          { label: 'Live Demo', value: 'Demo', icon: TrendingUp },
        ],
        featured: false,
        isVideo: false,
      },
      {
        title: 'File Share',
        category: 'Web Development',
        description: 'File Share is a web application that allows users to share files with others. Users can upload files and share them with a unique link.',
        image: '/file-share.png',
        link: 'https://file-share.saikumarthota.live/',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'React', 'Node.js'],
        metrics: [
          { label: 'Year', value: '2024', icon: Award },
          { label: 'GitHub', value: 'Repo', icon: ExternalLink },
          { label: 'Live Demo', value: 'Demo', icon: TrendingUp },
        ],
        featured: false,
        isVideo: false,
      },
      
     
      {
        title: 'Haritha Infra Tech',
        category: 'Web Development',
        description: 'Developed a professional and informative website for Haritha Infra Tech to showcase their infrastructure projects and services.',
        image: '/haritha-infra.png', // Replace with actual screenshot if available
        link: 'https://haritha-infra.vercel.app/',
          tags: ['Infrastructure', 'Business Website', 'Next.js', 'Responsive Design'],
        metrics: [
          { label: 'Client Satisfaction', value: '100%', icon: Award },
          { label: 'Website Speed', value: '1.1s', icon: TrendingUp },
          { label: 'SEO Score', value: '94%', icon: Users },
        ],
        featured: true,
      },
     
      
    ]
    
  

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-16 sm:py-24 lg:py-32 bg-skizen-gray relative overflow-hidden">
      {/* Enhanced Background Elements using SKIZEN color palette */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-skizen-accent/30 to-orange-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-skizen-black/20 to-gray-800/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-br from-skizen-accent/20 to-skizen-black/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-skizen-accent/20 to-orange-500/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-skizen-accent/30 mb-6 sm:mb-8"
          >
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-skizen-accent" />
            <span className="text-skizen-accent font-semibold text-sm sm:text-base">Success Stories</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-skizen-black mb-6 sm:mb-8 tracking-tight px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Portfolio Showcase
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Showcasing successful digital marketing campaigns that have transformed brands 
            and delivered exceptional results for our clients across various industries.
          </motion.p>
        </motion.div>

        {/* Filter Tabs - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 sm:mb-16 px-4"
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
                      ? 'bg-gradient-to-r from-skizen-accent to-orange-500 text-white shadow-lg'
                      : 'bg-white/80 text-gray-700 hover:bg-white border border-gray-200 hover:border-skizen-accent/30'
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
                    ? 'bg-gradient-to-r from-skizen-accent to-orange-500 text-white shadow-lg'
                    : 'bg-white/80 text-gray-700 hover:bg-white border border-gray-200 hover:border-skizen-accent/30'
                }`}
              >
                {category === 'All' && <Filter className="w-4 h-4" />}
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid - Optimized Mobile Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative ${
                  project.featured 
                    ? 'md:col-span-2 xl:col-span-2' 
                    : 'col-span-1'
                }`}
              >
                {/* Main Card */}
                <a href={project.link} target="_blank" rel="noopener noreferrer">


               
  
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    {project.isVideo ? (
                      <div className="relative">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className={`w-full object-cover ${project.featured ? 'h-48 sm:h-56 lg:h-64' : 'h-40 sm:h-48 lg:h-52'}`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/80 rounded-full p-3 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-skizen-accent">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className={`w-full object-cover ${project.featured ? 'h-48 sm:h-56 lg:h-64' : 'h-40 sm:h-48 lg:h-52'}`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                    
                    {/* Gradient Overlay using SKIZEN colors */}
                    <div className="absolute inset-0 bg-gradient-to-t from-skizen-black/60 via-skizen-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gradient-to-r from-skizen-accent to-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg"
                      >
                        Featured
                      </motion.div>
                    )}

                   
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <motion.div 
                        className="text-xs sm:text-sm font-medium text-skizen-accent bg-skizen-accent/10 px-2 sm:px-3 py-1 rounded-full border border-skizen-accent/20"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      >
                        {project.category}
                      </motion.div>
                    </div>
                    
                    <motion.h3 
                      className="text-lg sm:text-xl lg:text-2xl font-bold text-skizen-black mb-3 sm:mb-4 leading-tight"
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Metrics - Mobile Optimized Grid */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
                      {project.metrics.map((metric, metricIndex) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: 0.9 + index * 0.1 + metricIndex * 0.1 }}
                          className="text-center bg-skizen-gray/50 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-gray-200/50 hover:border-skizen-accent/30 transition-colors duration-300"
                        >
                          <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 text-skizen-accent mx-auto mb-1 sm:mb-2" />
                          <div className="text-skizen-black font-bold text-sm sm:text-base lg:text-lg">{metric.value}</div>
                          <div className="text-gray-500 text-xs leading-tight">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Tags - Mobile Optimized */}
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          className="px-2 sm:px-3 py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded-full border border-gray-200 hover:bg-skizen-accent/10 hover:text-skizen-accent hover:border-skizen-accent/30 transition-colors duration-200"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 1.0 + index * 0.1 + tagIndex * 0.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 3 && (
                        <motion.span
                          className="px-2 sm:px-3 py-1 bg-skizen-accent/10 text-xs font-medium text-skizen-accent rounded-full border border-skizen-accent/30"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 1.0 + index * 0.1 + 0.15 }}
                        >
                          +{project.tags.length - 3}
                        </motion.span>
                      )}
                    </div>
                  </div>
                </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-skizen-black to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden mx-4 sm:mx-0">
            <div className="absolute inset-0 bg-gradient-to-r from-skizen-accent/10 to-orange-500/10 opacity-50" />
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                Want to See More?
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                Explore our complete graphic design portfolio with detailed case studies and creative process insights.
              </p>
              <motion.button
                onClick={() => navigate('/graphic-design')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-skizen-accent to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold flex items-center gap-2 mx-auto hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                View Full Gallery
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;