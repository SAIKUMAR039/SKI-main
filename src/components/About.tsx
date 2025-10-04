import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useParallax } from '../hooks/useParallax';
import { Target, Zap, Rocket, User, Code, TrendingUp, Linkedin, Globe, UserRound } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 🎛️ PARALLAX SPEED for background - adjust the speed value:
  const parallaxRef = useParallax({ speed: -0.3 }); // Try -0.1 to -0.5

  const values = [
    {
      icon: Target,
      title: 'SPARK',
      description: 'We ignite bold ideas and creative innovation, sparking transformative concepts that captivate and engage your target audience.',
    },
    {
      icon: Zap,
      title: 'KNACK',
      description: 'Our deep expertise and intuitive understanding of technology and design ensures intelligent solutions and exceptional results.',
    },
    {
      icon: Rocket,
      title: 'IGNITE',
      description: 'We deliver transformative results that empower our clients to lead in their industries and inspire lasting change.',
    },
  ];

  const stats = [
    { number: 20, suffix: '+', label: 'Campaigns Completed' },
    { number: 9.7, suffix: '/10', label: 'Client Satisfaction' },
    { number: 10, suffix: '+', label: 'Happy Clients' },
    { number: 24, suffix: '/7', label: 'Support Available' },
  ];

  const founders = [
    {
      name: 'Syed Imran',
      role: 'FOUNDER',
      title: 'Company & Marketing Head',
      description: 'Manages all marketing strategies and financial operations of the company. With expertise in Business development, Syed leads our creative vision and ensures sustainable growth with overpowered solutions that ensures success of our company.',
      specialties: ['Full Stack', 'Data analyst', 'Machine Learning', 'Marketing Strategy', 'Financial Management', 'Brand Development'],
      image: '/Imran.png',
      icon: UserRound,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
    
    },
    {
      name: 'Sai Kumar Thota',
      role: 'CO-FOUNDER',
      title: 'Web Developer & Tech Lead',
      description: 'Handles all web development and technology operations with an impressive portfolio in modern web technologies. Sai manages every aspect of our online presence and technical infrastructure.',
      specialties: ['Web Development', 'Full-Stack Development', 'Tech Management', 'Digital Solutions','Meta Ads', 'Google Ads','Social Media Management'],
      image: '/Sai.jpg',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
  
    },
    
  ];

  return (
    <section id="about" className="py-32 bg-skizen-gray relative overflow-hidden">
      {/* Parallax Background Pattern */}
      <div 
        ref={parallaxRef as React.RefObject<HTMLDivElement>}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #FF6B35 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, #0A0A0A 1px, transparent 1px)`,
          backgroundSize: '100px 100px, 80px 80px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-skizen-black mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            About SKIZEN
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              A Multidisciplinary creative and AI agency committed to driving brand growth through strategic innovation, intelligent design, and data-driven solutions.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-500 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              SKIZEN – Spark, Knack, Ignite. Our mission is to ignite bold ideas, apply deep expertise, and deliver transformative results that empower our clients to lead in their industries.
            </motion.p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-out"
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              style={{ 
                transitionDelay: `${0.3 + index * 0.05}s`,
                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <div className="text-3xl md:text-4xl font-bold text-skizen-black mb-2">
                {stat.number}{stat.suffix}
              </div>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.4 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: 3,
                  boxShadow: "0 15px 30px rgba(255, 107, 53, 0.2)"
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-8 group-hover:shadow-xl transition-all duration-300"
              >
                <value.icon className="w-10 h-10 text-skizen-accent" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-skizen-black mb-4 tracking-wide">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-skizen-accent/10 to-orange-500/10 px-6 py-3 rounded-full border border-skizen-accent/20 mb-8"
            >
              <User className="w-5 h-5 text-skizen-accent" />
              <span className="text-skizen-accent font-semibold">Meet Our Leaders</span>
            </motion.div>
            
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-skizen-black mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              The Visionaries Behind SKIZEN
            </motion.h3>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              Meet the dynamic duo driving innovation and excellence at SKIZEN Creative Lab
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                className="group"
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 lg:p-8 xl:p-10 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full">
                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${founder.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                  />

                  <div className="relative z-10">
                    {/* Founder Image and Role Badge */}
                    <div className="flex flex-col items-center mb-8">
                      {/* Profile Image Container */}
                      <div className="relative mb-6">
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: 2 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="relative"
                        >
                          {/* Animated Border Ring */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${founder.gradient} rounded-full p-1 animate-pulse`}>
                            <div className="w-full h-full bg-white rounded-full"></div>
                          </div>
                          
                          {/* Profile Image */}
                          <div className="relative w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                            <img
                              src={founder.image}
                              alt={founder.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                            {/* Overlay gradient on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                          </div>
                          

                          {/* Floating Icon Badge */}
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                            className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r ${founder.gradient} rounded-full flex items-center justify-center shadow-lg border-3 border-white`}
                          >
                            <founder.icon className="w-5 h-5 text-white" />
                          </motion.div>
                        </motion.div>
                        
                        {/* Decorative Elements */}
                        <div className={`absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r ${founder.gradient} rounded-full opacity-20 animate-float`}></div>
                        <div className={`absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r ${founder.gradient} rounded-full opacity-30 animate-float`} style={{ animationDelay: '1s' }}></div>
                      </div>
                      
                      {/* Role Badge */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`inline-flex items-center gap-2 bg-gradient-to-r ${founder.gradient} text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        {founder.role}
                      </motion.div>
                    </div>

                    {/* Name and Title */}
                    <div className="mb-6">
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-skizen-black mb-2 group-hover:text-gray-800 transition-colors duration-300">
                        {founder.name}
                      </h4>
                      <p className="text-base md:text-lg font-semibold text-skizen-accent mb-4">
                        {founder.title}
                      </p>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-sm md:text-base">
                        {founder.description}
                      </p>
                    </div>

                    {/* Specialties */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Specialties
                      </h5>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {founder.specialties.map((specialty, idx) => (
                          <motion.span
                            key={specialty}
                            className="px-3 py-1 md:px-4 md:py-2 bg-gray-100 text-gray-700 text-xs md:text-sm font-medium rounded-full border border-gray-200 hover:bg-gradient-to-r hover:from-skizen-accent/10 hover:to-orange-500/10 hover:text-skizen-accent hover:border-skizen-accent/30 transition-all duration-200"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 1.4 + index * 0.2 + idx * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {specialty}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    


                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-white/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Company Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-skizen-black to-gray-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-skizen-accent/10 to-orange-500/10 opacity-50" />
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.7 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6"
                >
                  <TrendingUp className="w-4 h-4 text-white" />
                  <span className="text-white font-semibold text-sm">Our Vision</span>
                </motion.div>
                
                <motion.h4 
                  className="text-2xl lg:text-3xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  Together, We Transform Ideas Into Impact
                </motion.h4>
                <motion.p 
                  className="text-gray-300 leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.9 }}
                >
                  With Syed's creative vision and marketing expertise combined with Sai's technical prowess and development skills, 
                  SKIZEN Creative Lab delivers comprehensive digital solutions that drive real business growth and lasting success.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;