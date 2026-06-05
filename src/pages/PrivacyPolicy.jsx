import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Lock, Eye, FileText, ArrowRight, Sparkles, Users } from 'lucide-react'
import MainLayout from '../components/layouts/MainLayout'
import heroBg from '../assets/projects/hero-bg.avif'

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: FileText,
      content: "We collect information you provide directly to us, such as when you create an account, make a donation, sign up for our newsletter, or contact us. This may include your name, email address, phone number, mailing address, and payment information."
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: "We use the information we collect to process donations, communicate with you about our programs, send newsletters and updates, improve our services, and comply with legal obligations."
    },
    {
      title: "Data Security",
      icon: Shield,
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
    },
    {
      title: "Sharing Your Information",
      icon: Users,
      content: "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted partners who assist us in operating our website and conducting our mission."
    },
    {
      title: "Your Rights",
      icon: Lock,
      content: "You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time."
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
                Privacy{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Policy
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
            <div className="space-y-8">
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

export default PrivacyPolicy