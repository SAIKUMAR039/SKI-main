import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Initialize EmailJS with your public key
      emailjs.init('DTYHmoVtuW1mQA8wL'); // Replace with your actual public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        to_name: 'SKI Team',
      };

      // Send main email to SKI team
      await emailjs.send(
        'service_uty2ypf', // Replace with your service ID
        'template_9lrewlc', // Replace with your template ID
        templateParams
      );

      // Send auto-reply to the user
      await emailjs.send(
        'service_uty2ypf', // Same service ID
        'template_zw9a3d6', // Your auto-reply template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: formData.email, // Send to the user
        }
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ski.creativelab@gmail.com',
      link: 'mailto:ski.creativelab@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9392898633',
      link: 'tel:+919392898633',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Warangal, India',
      link: '/',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-ski-gray via-white to-ski-gray">
      {/* Hero Section - Optimized for Mobile */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 relative overflow-hidden">
        {/* Background Elements - Responsive */}
        <div className="absolute inset-0 opacity-10 sm:opacity-20">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-ski-accent/30 to-orange-500/30 rounded-full blur-2xl sm:blur-3xl" />
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-br from-ski-black/20 to-gray-800/20 rounded-full blur-2xl sm:blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button - Mobile Optimized */}
          <motion.button
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-ski-black hover:text-ski-accent transition-colors duration-300 mb-6 sm:mb-8 group text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Back to Home</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-ski-accent/10 to-orange-500/10 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full border border-ski-accent/20 mb-4 sm:mb-6 lg:mb-8"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5 text-ski-accent" />
              <span className="text-ski-accent font-semibold text-xs sm:text-sm lg:text-base">Get In Touch</span>
            </motion.div>

            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-ski-black mb-4 sm:mb-6 lg:mb-8 tracking-tight px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Let's Create Something Amazing
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Ready to transform your digital presence? Let's discuss your marketing goals 
              and bring your vision to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section - Fully Responsive */}
      <section className="py-8 sm:py-12 lg:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form - Mobile First Design */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 border border-gray-200/50 shadow-2xl order-1"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-ski-black mb-4 sm:mb-6 lg:mb-8">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ski-accent focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-white/50 backdrop-blur-sm text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ski-accent focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-white/50 backdrop-blur-sm text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ski-accent focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-white/50 backdrop-blur-sm text-sm sm:text-base"
                    placeholder="Your company"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ski-accent focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed bg-white/50 backdrop-blur-sm text-sm sm:text-base"
                    placeholder="Tell us about your marketing goals..."
                  />
                </motion.div>

                {/* Status Messages - Mobile Optimized */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 sm:gap-3 text-green-600 bg-green-50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-green-200"
                  >
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Message sent successfully! Check your email for confirmation.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 sm:gap-3 text-red-600 bg-red-50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-red-200"
                  >
                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Failed to send message. Please try again or contact us directly.</span>
                  </motion.div>
                )}
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-ski-black to-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium flex items-center justify-center gap-2 hover:from-ski-accent hover:to-orange-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-sm sm:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span className="hidden sm:inline">Sending...</span>
                      <span className="sm:hidden">Sending</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 sm:space-y-8 order-2"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 border border-gray-200/50 shadow-2xl">
                <motion.h3 
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-ski-black mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  Get in Touch
                </motion.h3>
                <motion.p 
                  className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  We're here to help bring your digital marketing vision to life. Whether you need video content, social media management, or advertising campaigns, we'd love to hear from you.
                </motion.p>

                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-ski-gray/50 to-white/50 rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 group border border-gray-200/50"
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-ski-accent to-orange-500 rounded-lg sm:rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0">
                        <info.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm text-gray-500 font-medium">
                          {info.title}
                        </div>
                        <div className="text-ski-black font-semibold text-sm sm:text-base lg:text-lg break-words">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <motion.div 
                  className="mt-6 sm:mt-8 bg-gradient-to-r from-ski-accent/10 to-orange-500/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-ski-accent/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <h4 className="text-base sm:text-lg font-bold text-ski-black mb-2 sm:mb-3">
                    Campaign Timeline
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Most campaigns are launched within 2-4 weeks, depending on complexity. 
                    We'll provide a detailed timeline and milestones during our initial consultation.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;