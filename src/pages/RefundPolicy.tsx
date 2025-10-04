import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCw, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RefundPolicy: React.FC = () => {
  const navigate = useNavigate();

  const refundScenarios = [
    {
      icon: CheckCircle,
      title: 'Eligible for Refund',
      scenarios: [
        'Project cancelled before work begins (full refund)',
        'Project cancelled within 24 hours of deposit (full refund)',
        'Service not delivered as agreed (partial or full refund)',
        'Technical issues preventing service delivery (full refund)',
        'Client dissatisfaction with initial concepts (partial refund)'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: XCircle,
      title: 'Not Eligible for Refund',
      scenarios: [
        'Project completed and delivered as agreed',
        'Client changes mind after work has begun',
        'Client fails to provide required materials or feedback',
        'Project delays due to client unresponsiveness',
        'Additional revisions beyond agreed scope'
      ],
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    }
  ];

  const refundProcess = [
    {
      step: 1,
      title: 'Submit Request',
      description: 'Contact us via email with your refund request and reason'
    },
    {
      step: 2,
      title: 'Review Period',
      description: 'We review your request within 3-5 business days'
    },
    {
      step: 3,
      title: 'Decision',
      description: 'We notify you of our decision and next steps'
    },
    {
      step: 4,
      title: 'Processing',
      description: 'If approved, refund is processed within 7-14 business days'
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
              <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-skizen-accent" />
              <span className="text-skizen-accent font-semibold text-xs sm:text-sm lg:text-base">Refund Policy</span>
            </motion.div>

            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-skizen-black mb-4 sm:mb-6 lg:mb-8 tracking-tight px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Refund Policy
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We strive for complete client satisfaction. This policy outlines our refund terms and processes.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-skizen-black mb-6">Our Commitment</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                At SKIZENZEN Creative Lab, we are committed to delivering exceptional results and ensuring complete client satisfaction. We understand that sometimes projects may not work out as planned, and we have established this refund policy to address such situations fairly and transparently.
              </p>
              <p>
                This policy applies to all services provided by SKIZENZEN Creative Lab, including digital marketing, graphic design, web development, and AI automation services.
              </p>
            </div>
          </motion.div>

          {/* Refund Scenarios */}
          <div className="space-y-8 sm:space-y-12 mb-12 sm:mb-16">
            {refundScenarios.map((scenario, index) => (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className={`bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border ${scenario.borderColor} shadow-lg`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${scenario.bgColor} rounded-xl flex items-center justify-center`}>
                    <scenario.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${scenario.color}`} />
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold ${scenario.color}`}>{scenario.title}</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {scenario.scenarios.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${scenario.color.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`} />
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Refund Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-skizen-black mb-8">Refund Process</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {refundProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                  className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-skizen-accent to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-skizen-black mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Important Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="bg-gradient-to-r from-skizen-accent/10 to-orange-500/10 rounded-2xl p-6 sm:p-8 border border-skizen-accent/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-skizen-accent to-orange-500 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-skizen-black">Important Information</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-skizen-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-skizen-black mb-1">Processing Time</h4>
                  <p className="text-sm sm:text-base">Refunds are typically processed within 7-14 business days after approval.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RefreshCw className="w-5 h-5 text-skizen-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-skizen-black mb-1">Payment Method</h4>
                  <p className="text-sm sm:text-base">Refunds will be issued to the original payment method used for the transaction.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-skizen-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-skizen-black mb-1">Communication</h4>
                  <p className="text-sm sm:text-base">All refund requests must be submitted in writing via email to skizen.creativelab@gmail.com.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-8 sm:mt-12 bg-white/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gray-200/50"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-skizen-black mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-700">
              <p>For refund requests or questions about this policy, please contact us:</p>
              <ul className="space-y-2">
                <li><strong>Email:</strong> skizen.creativelab@gmail.com</li>
                <li><strong>Phone:</strong> +91 9392898633</li>
                <li><strong>Address:</strong> Warangal, India</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Please include your project details and reason for refund request in your email.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy; 