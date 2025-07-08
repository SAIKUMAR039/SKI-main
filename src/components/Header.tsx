import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Work', href: '/#work' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (href.startsWith('/#')) {
      // If we're not on home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const sectionId = href.substring(2);
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // We're already on home page, just scroll
        const sectionId = href.substring(2);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Regular navigation
      navigate(href);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl shadow-black/5' 
            : 'bg-transparent'
        }`}
        style={{
          borderBottomLeftRadius: isScrolled ? '32px' : '0px',
          borderBottomRightRadius: isScrolled ? '32px' : '0px',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        }}
      >
        {/* Glass reflection effect */}
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"
            style={{
              borderBottomLeftRadius: '32px',
              borderBottomRightRadius: '32px',
            }}
          />
        )}

        <div className="max-w-8xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
            <a href="/">
                <img 
                  src="/full_logo.png"
                  alt="SKI Logo" 
                  className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 hover:cursor-pointer transition-all duration-300 hover:drop-shadow-lg" 
                />
              </a>             
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className={`font-medium relative group transition-all duration-300 ${
                    isScrolled 
                      ? 'text-ski-black/90 hover:text-ski-accent' 
                      : 'text-ski-black hover:text-ski-accent'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {item.name}
                  {/* Glass-like underline on hover */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-ski-accent to-orange-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 shadow-lg"
                    style={{
                      borderRadius: '2px',
                      filter: 'drop-shadow(0 2px 4px rgba(255, 107, 53, 0.3))',
                    }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-3 rounded-2xl transition-all duration-300 ${
                isScrolled 
                  ? 'bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg' 
                  : 'hover:bg-gray-100/80 backdrop-blur-sm'
              }`}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              style={{
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
              }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-24 left-4 right-4 z-40 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/10"
            style={{
              borderRadius: '24px',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            }}
          >
            {/* Glass reflection effect for mobile menu */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"
              style={{ borderRadius: '24px' }}
            />
            
            <div className="px-6 py-6 space-y-2 relative z-10">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-ski-black/90 hover:text-ski-accent transition-all duration-300 font-medium py-3 px-4 rounded-2xl hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-white/30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}
                >
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ gap: '16px' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-2 h-2 bg-ski-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.name}
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;