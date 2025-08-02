import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', index: '01' },
    { name: 'About', href: '/#about', index: '02' },
    { name: 'Services', href: '/#services', index: '03' },
    { name: 'Work', href: '/#work', index: '04' },
    { name: 'Gallery', href: '/graphic-design', index: '05' },
    { name: 'Contact', href: '/contact', index: '06' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    console.log(`Navigating to: ${href}`);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out rounded-b-3xl ${
          isScrolled 
            ? 'bg-white/15 backdrop-blur-xl border-b border-gray-100 shadow-sm' 
            : 'bg-white/15 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <div className="flex items-center">
              <div 
                className="group cursor-pointer"
                onClick={() => handleNavClick('/')}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12  rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                   <img src="/full_logo.png" alt="logo" />
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-ski-black font-bold text-xl lg:text-2xl tracking-tight font-inter">
                      SKI
                    </span>
                    <div className="text-gray-500 text-xs tracking-wider uppercase font-inter">
                      Studio
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a href={item.href} key={item.name}>
                <button
                  key={item.name}
                 
                  className="group relative text-ski-black transition-all duration-300 font-inter focus:outline-none focus:ring-0"
                >
                  <span className="relative z-10 text-sm font-medium tracking-wide">
                    {item.name}
                  </span>
                   
                  {/* Hover underline */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-ski-accent group-hover:w-full transition-all duration-300" />
                </button>
                </a>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center">
              <button 
                onClick={() => handleNavClick('/contact')}
                className="group relative bg-ski-accent text-white px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-ski-accent/30 hover:scale-105 font-inter focus:outline-none focus:ring-0"
              >
                <span className="flex items-center space-x-2">
                  <span>Let's Talk</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative p-2 text-ski-black hover:text-ski-accent transition-colors duration-300 focus:outline-none focus:ring-0"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-ski-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-16 left-4 right-4 bg-white border border-gray-100 rounded-2xl shadow-2xl">
            <div className="p-6">
              
             

              {/* Navigation Links */}
              <div className="space-y-2 mb-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="group w-full flex items-center justify-between p-4 text-left text-ski-black hover:text-ski-accent hover:bg-ski-gray rounded-xl transition-all duration-300 focus:outline-none focus:ring-0"
                  >
                    <div className="flex items-center space-x-4">
                       
                      <span className="font-medium font-inter text-base">
                        {item.name}
                      </span>
                    </div>
                    <ArrowUpRight 
                      size={18} 
                      className="text-gray-400 group-hover:text-ski-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </button>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-6 border-t border-gray-100">
                <button 
                  onClick={() => handleNavClick('/contact')}
                  className="w-full bg-ski-accent text-white py-4 rounded-xl font-medium text-center transition-all duration-300 hover:shadow-lg hover:shadow-ski-accent/30 hover:scale-[1.02] font-inter focus:outline-none focus:ring-0"
                >
                  Start a Project
                </button>
                
                {/* Contact Info */}
                <div className="mt-4 text-center">
                  <p className="text-gray-500 text-sm font-inter">
                    Ready to create something amazing?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Contact Button - Mobile Only */}
      <div className="lg:hidden fixed bottom-6 right-6 z-30">
        <button
          onClick={() => handleNavClick('/contact')}
          className="bg-ski-accent text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse-glow focus:outline-none focus:ring-0"
        >
          <ArrowUpRight size={20} />
        </button>
      </div>
    </>
  );
};

export default Header;