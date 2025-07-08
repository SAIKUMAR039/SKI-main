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
        { name: 'Privacy Policy', href: '#' },
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
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-ski-accent transition-all duration-300"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={18} />
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
              transition={{ duration: 0.6, delay: 0.3 + sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 SKI Agency. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;