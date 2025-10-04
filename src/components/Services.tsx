import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { Video, Users, Target, BarChart, Megaphone, Monitor, Database, ArrowUpRight, Sparkles, Bot } from 'lucide-react';

const Services: React.FC = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Video,
      title: 'Video Editing & Production',
      description: 'Professional video editing services that transform raw footage into compelling stories that engage and convert.',
      features: ['Motion Graphics', 'Color Grading', 'Audio Enhancement', 'Brand Integration'],
      color: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      iconBg: 'bg-blue-500',
    },
    {
      icon: Users,
      title: 'Social Media Management',
      description: 'Complete social media management to build your brand presence and engage with your audience effectively.',
      features: ['Content Strategy', 'Community Management', 'Posting Schedule', 'Analytics Reporting'],
      color: '#EC4899',
      gradient: 'from-pink-500 to-pink-600',
      bgGradient: 'from-pink-50 to-pink-100',
      iconBg: 'bg-pink-500',
    },
    {
      icon: Target,
      title: 'Targeted Ad Campaigns',
      description: 'Data-driven advertising campaigns across platforms that maximize ROI and reach your ideal customers.',
      features: ['Facebook Ads', 'Google Ads', 'Instagram Campaigns', 'LinkedIn Marketing'],
      color: '#10B981',
      gradient: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-50 to-emerald-100',
      iconBg: 'bg-emerald-500',
    },
    {
      icon: Monitor,
      title: 'Website Development',
      description: 'Custom website development that combines stunning design with powerful functionality to drive business growth.',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'SEO Optimization'],
      color: '#6366F1',
      gradient: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-50 to-indigo-100',
      iconBg: 'bg-indigo-500',
    },
    {
      icon: Database,
      title: 'PowerBI Dashboard Setup',
      description: 'Transform your data into actionable insights with custom PowerBI dashboards and comprehensive analytics solutions.',
      features: ['Data Visualization', 'Custom Reports', 'Real-time Analytics', 'Business Intelligence'],
      color: '#F59E0B',
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100',
      iconBg: 'bg-amber-500',
    },
    {
      icon: Bot,
      title: 'AI Automation Tools',
      description: 'AI Automation Tools that help you automate your marketing and business processes.',
      features: ['AI Automation Tools', 'AI Chatbot', 'AI Email Marketing', 'AI Analytics'],
      color: '#EF4444',
      gradient: 'from-red-500 to-red-600',
      bgGradient: 'from-red-50 to-red-100',
      iconBg: 'bg-red-500',
    },
    {
      icon: Megaphone,
      title: 'AI Marketing',
      description: 'Strategic AI marketing that amplify your brand message and reach new audiences authentically.',
      features: ['AI Marketing', 'AI Chatbot', 'AI Content Creation', 'AI Analytics'],
      color: '#8B5CF6',
      gradient: 'from-violet-500 to-violet-600',
      bgGradient: 'from-violet-50 to-violet-100',
      iconBg: 'bg-violet-500',
    },
    {
      icon: BarChart,
      title: 'Analytics & Optimization',
      description: 'Comprehensive analytics and optimization services to measure success and continuously improve performance.',
      features: ['Performance Analytics', 'A/B Testing', 'Conversion Tracking', 'ROI Analysis'],
      color: '#14B8A6',
      gradient: 'from-teal-500 to-teal-600',
      bgGradient: 'from-teal-50 to-teal-100',
      iconBg: 'bg-teal-500',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-skizen-accent/20 to-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-skizen-accent/10 to-orange-500/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-skizen-accent/20 mb-6 sm:mb-8"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-skizen-accent" />
            <span className="text-skizen-accent font-semibold text-sm sm:text-base">Our Expertise</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-skizen-black mb-6 sm:mb-8 tracking-tight px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Premium Services
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Comprehensive Digital marketing and AI services designed to elevate your brand presence and drive measurable business growth through innovative solutions.
          </motion.p>
        </motion.div>

        {/* Optimized Mobile Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative bg-white/90 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl sm:rounded-3xl`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                />

                {/* Floating Icon */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 mb-4 sm:mb-6"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${service.iconBg} rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                    {/* Icon Glow Effect */}
                    <div className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white relative z-10" />
                  </div>
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold text-skizen-black mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="text-xs sm:text-sm text-gray-500 flex items-center group-hover:text-gray-600 transition-colors duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + idx * 0.05 }}
                      >
                        <motion.div 
                          className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-skizen-accent to-orange-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.2 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => navigate('/contact')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-medium flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
                  >
                    Learn More
                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                  </motion.button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-white/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-white/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileHover={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-skizen-accent to-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100"
              >
                Popular
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="bg-gradient-to-r from-skizen-black to-gray-800 rounded-2xl sm:rounded-3xl p-8 sm:p-12 relative overflow-hidden mx-4 sm:mx-0">
            <div className="absolute inset-0 bg-gradient-to-r from-skizen-accent/10 to-orange-500/10 opacity-50" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                Let's discuss how our comprehensive services can help you achieve your digital marketing goals and drive sustainable growth.
              </p>
              <motion.button
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-skizen-accent to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold flex items-center gap-2 mx-auto hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                Get Started Today
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;