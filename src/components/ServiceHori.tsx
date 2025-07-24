import React, { useEffect, useRef } from 'react';
import {

}

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description?: string;
}

const services: Service[] = [
 
  {
    id: 'facebook',
    title: 'Facebook',
    icon: <FacebookLogo className="w-6 h-6" />
  },
  {
    id: 'google',
    title: 'Google',
    icon: <GoogleLogo className="w-6 h-6" />
  },
  {
    id: 'instagram',
    title: 'Instagram',
    icon: <InstagramLogo className="w-6 h-6" />
  },
  {
    id: 'twitter',
    title: 'Twitter',
    icon: <TwitterLogo className="w-6 h-6" />
  },

 
];

const ServiceHori: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
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

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Duplicate services for seamless infinite scroll
  const duplicatedServices = [...services, ...services];

  return (
    <div className="relative w-full bg-white py-8 overflow-hidden mt-20 ">
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
            ref={scrollRef}
            className="flex overflow-x-hidden gap-8 py-4"
            style={{
              scrollBehavior: 'auto'
            }}
          >
            {duplicatedServices.map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="flex-shrink-0 flex items-center gap-3 bg-white rounded-lg border border-gray-200 px-6 py-3 shadow-sm hover:shadow-md transition-shadow duration-300 min-w-fit"
              >
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <span className="text-gray-900 font-medium whitespace-nowrap">
                  {service.title}
                </span>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHori;