import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        'Personal information (name, email, phone number) when you contact us',
        'Business information (company name, project details) for service delivery',
        'Website usage data through cookies and analytics tools',
        'Communication records when you interact with our team'
      ]
    },
    {
      icon: Database,
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our digital marketing and creative services',
        'To communicate with you about projects and services',
        'To send marketing materials (with your consent)',
        'To analyze website performance and user experience',
        'To comply with legal obligations'
      ]
    },
    {
      icon: Lock,
      title: 'Data Protection',
      content: [
        'We implement industry-standard security measures',
        'Your data is encrypted during transmission and storage',
        'Access to your information is limited to authorized personnel',
        'We regularly review and update our security practices',
        'We do not sell, trade, or rent your personal information'
      ]
    },
    {
      icon: Shield,
      title: 'Your Rights',
      content: [
        'Access your personal data we hold about you',
        'Request correction of inaccurate information',
        'Request deletion of your data (subject to legal requirements)',
        'Withdraw consent for marketing communications',
        'Lodge a complaint with relevant authorities'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-skizen-gray via-white to-skizen-gray">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10 sm:opacity-20">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-skizen-accent/30 to-orange-500/30 rounded-full blur-2xl sm:blur-3xl" />
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl sm:blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-skizen-black hover:text-skizen-accent transition-colors duration-300 mb-6 sm:mb-8 group text-sm sm:text-base"
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-skizen-accent/10 to-purple-500/10 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full border border-skizen-accent/20 mb-4 sm:mb-6 lg:mb-8"
            >
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-skizen-accent" />
              <span className="text-skizen-accent font-semibold text-xs sm:text-sm lg:text-base">Privacy & Security</span>
            </motion.div>

            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-skizen-black mb-4 sm:mb-6 lg:mb-8 tracking-tight px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Privacy Policy
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-8 sm:mb-12"
          >
            <p className="text-sm text-gray-600">
              <strong>Last Updated:</strong> December 19, 2024
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-skizen-black mb-6">Introduction</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                SKIZENZEN Creative Lab ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>
              <p>
                By using our services, you agree to the collection and use of information in accordance with this policy. We are committed to ensuring that your privacy is protected and that any information you provide will only be used in accordance with this privacy statement.
              </p>
            </div>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-8 sm:space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200/50 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-skizen-accent to-orange-500 rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-skizen-black">{section.title}</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-skizen-accent to-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12 sm:mt-16 bg-gradient-to-r from-skizen-accent/10 to-orange-500/10 rounded-2xl p-6 sm:p-8 border border-skizen-accent/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-skizen-black mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-700">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="space-y-2">
                <li><strong>Email:</strong> skizen.creativelab@gmail.com</li>
                <li><strong>Phone:</strong> +91 9392898633</li>
                <li><strong>Address:</strong> Warangal, India</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 