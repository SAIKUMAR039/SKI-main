import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import TextReveal from './animations/TextReveal';
import GradientText from './animations/GradientText';
import WaveText from './animations/WaveText';
import Aurora from './Aurora';
import RotatingText from './animations/Rotating';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const typewriterWords: string[] = [' EXCELLENCE',  ' CREATIVITY', ' INNOVATION', ' AI DRIVEN'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#FF6B35", "#0A0A0A", "#FF6B35"]}
          blend={0.3}
          amplitude={0.8}
          speed={0.3}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-ski-gray/60 to-white/90 z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-30">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex justify-center mb-8"
            >
              <img 
                src="/logo.svg" 
                alt="SKI Logo"
                className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 hover:cursor-pointer transition-transform duration-300"
              />
            </motion.div>

            {/* Title */}
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 tracking-tight">
              <WaveText 
                text="SPARK" 
                className="block text-ski-black justify-center mb-2"
                delay={0.2}
              />
              <div className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black my-4">
                <GradientText 
                  text="KNACK" 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black"
                  gradient="from-ski-accent via-orange-500 to-red-500"
                />
              </div>
              <WaveText 
                text="IGNITE" 
                className="block text-ski-black justify-center mb-2"
                delay={0.2}
              />
            </div>

            {/* Responsive Subtitle */}
            <div className="text-base sm:text-lg px-4 md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-700 mb-6 px-4 text-center sm:text-left sm:justify-center sm:items-center sm:flex w-full">
              We create digital experiences with{' '}
              {/* Mobile: show rotating text */}
              <span className="inline font-bold text-ski-accent align-middle sm:hidden justify-center items-center flex w-full">
                <RotatingText
                  texts={typewriterWords}
                  mainClassName="inline font-bold text-ski-accent align-middle"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </span>
              {/* Desktop: show rotating text */}
              <span className="hidden sm:inline font-bold text-ski-accent align-middle ">
                <RotatingText
                  texts={typewriterWords}
                  mainClassName="inline font-bold text-ski-accent align-middle "
                  staggerFrom="first"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </span>
            </div>
          </motion.div>

          {/* Subheading Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-4"
          >
            <TextReveal
              text="A creative and AI-driven agency helping brands grow through smart design, innovation, and data-backed strategies."
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light"
              delay={1.8}
              duration={0.5}
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          >
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-ski-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center gap-2 transition-all duration-300 hover:bg-ski-accent hover:shadow-lg group relative overflow-hidden text-sm sm:text-base"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-ski-accent to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10">Start Your Campaign</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
            </motion.button>

            <a
              href="https://drive.google.com/file/d/18CGhA6wtSWSfjdwfNwg6sAT0RpassUI5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:cursor-pointer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-ski-black text-ski-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-ski-black hover:text-white transition-all duration-300 flex items-center gap-2 group relative overflow-hidden text-sm sm:text-base"
              >
                <motion.div
                  className="absolute inset-0 bg-ski-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  initial={false}
                />
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-200 relative z-10" />
                <span className="relative z-10">Download Business Proposal</span>
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
