import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
  
    { icon: Mail, href: 'mailto:ski.creativelab@gmail.com', label: 'Email' },
    { icon: Instagram, href: 'https://www.instagram.com/ski.creativelab/', label: 'Instagram' },
  ];  

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Video Editing', href: '#services' },
        { name: 'Web Development', href: '#services' },
        { name: 'Graphic Design', href: '#services' },
        { name: 'Paid Advertising', href: '#services' },
        { name: 'Content Creation', href: '#services' },
        { name: 'Social Media Management', href: '#services' },
        
        
        { name: 'SEO', href: '#services' },
        { name: 'Social Media Marketing', href: '#services' },
        { name: 'Email Marketing', href: '#services' },
        { name: 'Branding', href: '#services' },
        { name: 'Digital Marketing', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Work', href: '#work' },
        { name: 'Contact', href: '#contact' },
        { name: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '#' },
        { name: 'Marketing Tips', href: '#' },
        { name: 'Support', href: '#' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Refund Policy', href: '/refund-policy' },
      ],
    },
  ];

  return (
    <footer className="bg-ski-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src="/full_logo.png" alt="SKI Logo" className=" h-12 w-auto filter invert" />
            </motion.div>
            
            <motion.p 
              className="text-gray-400 leading-relaxed mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We spark creativity, demonstrate our knack for excellence, and ignite growth 
              through exceptional digital marketing solutions.
            </motion.p>
            
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <link.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © 2024 SKI Creative Lab. All rights reserved. | Warangal, India
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;