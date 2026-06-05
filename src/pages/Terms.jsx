import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, Scale, Users, DollarSign, Clock, AlertCircle, Sparkles } from 'lucide-react'
import MainLayout from '../components/layouts/MainLayout'
import heroBg from '../assets/projects/hero-bg.avif'

const Terms = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: FileText,
      content: "By accessing or using the HopeNGO website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website."
    },
    {
      title: "Use of Our Services",
      icon: Users,
      content: "You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account information."
    },
    {
      title: "Donations",
      icon: DollarSign,
      content: "All donations made to HopeNGO are final and non-refundable. Donations are used to support our programs and initiatives as described on our website."
    },
    {
      title: "Intellectual Property",
      icon: Scale,
      content: "All content on this website, including text, graphics, logos, and images, is the property of HopeNGO and is protected by copyright laws."
    },
    {
      title: "Limitation of Liability",
      icon: AlertCircle,
      content: "HopeNGO shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our website."
    },
    {
      title: "Changes to Terms",
      icon: Clock,
      content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page."
    }
  ]

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url(${heroBg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
              }}
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 border border-amber-500/30">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Legal</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Terms &{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Conditions
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                Last Updated: January 1, 2024
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="space-y-6">
              {sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <section.icon className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed ml-14">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </MainLayout>
  )
}

export default Terms