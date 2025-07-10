import React, { useEffect, useRef } from 'react';

// Import SVG logos
import googleMapsLogo from '/logos/GoogleMaps.svg';
import telegramLogo from '/logos/telegram-logo-svgrepo-com.svg';
import youtubeLogo from '/logos/new-youtube-logo-logo-svgrepo-com.svg';
import whatsappLogo from '/logos/whatsapp-symbol-logo-svgrepo-com.svg';
import instagramLogo from '/logos/instagram-2-1-logo-svgrepo-com.svg';
import facebookLogo from '/logos/facebook-3-logo-svgrepo-com.svg';
import googleIconLogo from '/logos/google-icon-logo-svgrepo-com.svg';

interface CompanyLogosProps {
  className?: string;
}

const CompanyLogos: React.FC<CompanyLogosProps> = ({ className = '' }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number>();

  const logos = [
    { src: googleMapsLogo, alt: 'Google Maps', name: 'Google Maps', description: 'Increase Your Store walk-ins'},
    { src: whatsappLogo, alt: 'WhatsApp', name: 'WhatsApp', description: 'Connect with your Customers' },
    { src: instagramLogo, alt: 'Instagram', name: 'Instagram', description: 'Increase Your Brand Awareness'},
    { src: facebookLogo, alt: 'Facebook', name: 'Facebook', description:'Engage with your Customers' },
    { src: googleIconLogo, alt: 'Google', name: 'Google', description: 'Rank Higher on Google' },
    { src: telegramLogo, alt: 'Telegram', name: 'Telegram', description: 'Connect with your Customers' },
    { src: youtubeLogo, alt: 'Youtube', name: 'Youtube', description: 'Increase Your Brand Awareness' },
  ];
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 1; // pixels per frame

    const animate = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Reset scroll position when we've scrolled past the first set
        const maxScroll = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    animationIdRef.current = animationId;

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
      animationIdRef.current = animationId;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={`relative w-full bg-white py-8 overflow-hidden mt-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            We Take Your Business Online
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to grow your business across all platforms
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-hidden gap-8 py-4"
            style={{
              scrollBehavior: 'auto'
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 flex items-center gap-3 bg-white rounded-lg border border-gray-200 px-6 py-3 shadow-sm hover:shadow-md transition-shadow duration-300 min-w-fit"
              >
                <div className="flex-shrink-0">
                  <img src={logo.src} alt={logo.alt} className="w-10 h-10" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-900 font-semibold whitespace-nowrap">
                    {logo.name}
                  </span>
                  <span className="text-gray-900 text-sm font-medium">
                    {logo.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
