import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Scale, Users, Shield, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      icon: Users,
      title: 'Service Agreement',
      content: [
        'SKIZENZEN Creative Lab provides digital marketing, creative design, and AI services',
        'Services are provided on a project basis with agreed-upon deliverables',
        'Client cooperation and timely feedback are essential for project success',
        'We reserve the right to refuse service to any client or project',
        'Project timelines and deliverables are subject to client approval and feedback'
      ]
    },
    {
      icon: FileText,
      title: 'Intellectual Property',
      content: [
        'Final deliverables become client property upon full payment',
        'SKIZEN retains rights to work samples for portfolio and marketing purposes',
        'Third-party assets (fonts, images, etc.) remain under their respective licenses',
        'Client provides necessary brand assets and content for project completion',
        'We maintain ownership of our proprietary processes and methodologies'
      ]
    },
    {
      icon: Scale,
      title: 'Payment Terms',
      content: [
        '50% deposit required to commence work on new projects',
        'Remaining balance due upon project completion and client approval',
        'Additional revisions beyond agreed scope may incur additional charges',
        'Late payments may result in project suspension or termination',
        'All prices are in Indian Rupees (INR) unless otherwise specified'
      ]
    },
    {
      icon: Shield,
      title: 'Confidentiality',
      content: [
        'We maintain strict confidentiality of all client information',
        'Non-disclosure agreements available upon request',
        'Client data and project details are never shared with third parties',
        'We use secure systems and processes to protect sensitive information',
        'Confidentiality obligations continue beyond project completion'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      content: [
        'Our liability is limited to the amount paid for services',
        'We are not liable for indirect, consequential, or incidental damages',
        'Client is responsible for final approval of all deliverables',
        'We cannot guarantee specific business outcomes or results',
        'Force majeure events may affect project timelines'
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
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-skizen-accent" />
              <span className="text-skizen-accent font-semibold text-xs sm:text-sm lg:text-base">Legal Terms</span>
            </motion.div>

            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-skizen-black mb-4 sm:mb-6 lg:mb-8 tracking-tight px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Terms of Service
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              These terms govern your use of our services and outline the rights and responsibilities of both parties.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-skizen-black mb-6">Agreement</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                By engaging SKIZENZEN Creative Lab for services, you agree to these Terms of Service. These terms apply to all services provided by SKIZENZEN Creative Lab, including but not limited to digital marketing, graphic design, web development, and AI automation services.
              </p>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms. We will notify clients of any material changes to these terms.
              </p>
            </div>
          </motion.div>

          {/* Terms Sections */}
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

          {/* Additional Terms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-12 sm:mt-16 bg-gradient-to-r from-skizen-accent/10 to-orange-500/10 rounded-2xl p-6 sm:p-8 border border-skizen-accent/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-skizen-black mb-4">Additional Terms</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-skizen-black mb-2">Project Cancellation</h4>
                <p className="text-sm sm:text-base">Projects may be cancelled with written notice. Refunds are provided based on work completed and expenses incurred.</p>
              </div>
              <div>
                <h4 className="font-semibold text-skizen-black mb-2">Dispute Resolution</h4>
                <p className="text-sm sm:text-base">Any disputes will be resolved through good faith negotiation. If unresolved, disputes will be settled in Warangal, India courts.</p>
              </div>
              <div>
                <h4 className="font-semibold text-skizen-black mb-2">Governing Law</h4>
                <p className="text-sm sm:text-base">These terms are governed by the laws of India. Any legal proceedings will be conducted in Warangal, India.</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-8 sm:mt-12 bg-white/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gray-200/50"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-skizen-black mb-4">Contact Information</h3>
            <div className="space-y-3 text-gray-700">
              <p>For questions about these Terms of Service, please contact us:</p>
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

export default TermsOfService; 