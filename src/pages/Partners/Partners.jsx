import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Handshake, Building, Globe, Users, Award, ArrowRight, CheckCircle, Shield, Target, Coffee, Mail, Phone, MapPin, Sparkles, TrendingUp, Star } from 'lucide-react'
import MainLayout from '../../components/layouts/MainLayout'
import partnersHeroBg11 from '../../assets/projects/partners-hero-bg11.jpg'
import heroMeeting from '../../assets/projects/hero-meeting.jpg'
import partnersHeroBg22 from '../../assets/projects/partners-hero-bg22.jpg'

const Partners = () => {
  const [showPartnerModal, setShowPartnerModal] = useState(false)
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const currentPartners = [
    { name: "UNICEF", tier: "Strategic Partner" },
    { name: "World Health Organization", tier: "Strategic Partner" },
    { name: "Save the Children", tier: "Implementation Partner" },
    { name: "Global Fund", tier: "Funding Partner" },
    { name: "Red Cross", tier: "Emergency Partner" },
    { name: "Google.org", tier: "Technology Partner" },
  ]

  const partnershipTiers = [
    { 
      name: "Bronze Partner", 
      amount: "₦500,000 - ₦1M", 
      benefits: ["Logo on website", "Social media mention", "Quarterly impact report"],
      icon: "🥉",
      color: "from-amber-600 to-amber-700"
    },
    { 
      name: "Silver Partner", 
      amount: "₦1M - ₦5M", 
      benefits: ["Logo on website + events", "Social media campaign", "Quarterly impact report", "Site visit opportunity"],
      icon: "🥈",
      color: "from-gray-400 to-gray-500"
    },
    { 
      name: "Gold Partner", 
      amount: "₦5M - ₦10M", 
      benefits: ["Premium logo placement", "Dedicated social media campaign", "Quarterly impact report", "Site visit + photos", "Event speaking opportunity"],
      icon: "🥇",
      color: "from-yellow-500 to-amber-500"
    },
    { 
      name: "Platinum Partner", 
      amount: "₦10M+", 
      benefits: ["Title sponsorship", "Full marketing campaign", "Monthly impact reports", "Board meeting invitation", "Custom partnership package", "Annual recognition event"],
      icon: "💎",
      color: "from-cyan-500 to-blue-500"
    },
  ]

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  // --- Formspree Submission Logic ---
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // --- IMPORTANT: VERIFY YOUR FORMSPREE ENDPOINT ---
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbdbneyd'

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          organizationName: formData.organizationName,
          contactName: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          partnershipType: formData.partnershipType,
          message: formData.message
        })
      })

      if (response.ok) {
        setIsSubmitting(false)
        setShowPartnerModal(false)
        setShowSuccessModal(true)
        setFormData({
          organizationName: '',
          contactName: '',
          email: '',
          phone: '',
          partnershipType: '',
          message: ''
        })
      } else {
        console.error('Formspree error:', response.status, response.statusText)
        alert('Submission failed. Please try again or contact us directly.')
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error('Network error:', error)
      alert('Network error. Please check your connection and try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Hero Section - using partners-hero-bg11.jpg */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url(${partnersHeroBg11})`,
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
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Collaborate With Us</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Partner{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  With Us
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                Join forces with us to create lasting change in communities worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Partner With Us - using hero-meeting.jpg */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url(${heroMeeting})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
              }}
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Why Partner</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                  Together We Can{' '}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Achieve More
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto"></div>
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                  Partner with us to create sustainable impact and transform lives.
                </p>
              </motion.div>
            </div>

            <div className="max-w-4xl mx-auto">
              {[
                { icon: Users, title: "Community Impact", desc: "Directly impact thousands of children across 45+ countries through our programs" },
                { icon: Globe, title: "Global Reach", desc: "Access to an established network of communities, partners, and stakeholders worldwide" },
                { icon: Award, title: "Brand Recognition", desc: "Featured on our website, social media, and annual reports reaching millions" },
                { icon: TrendingUp, title: "CSR Goals", desc: "Meet your corporate social responsibility objectives with measurable impact" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5 py-5 border-b border-white/10 last:border-0 hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Partners - No cards, clean text layout */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Trusted By</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                  Our Partners
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto"></div>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                  We are proud to work with these leading organizations
                </p>
              </motion.div>
            </div>

            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {currentPartners.map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-white/80 font-medium text-base hover:text-amber-400 transition-colors cursor-pointer">
                    {partner.name}
                  </div>
                  <p className="text-xs text-amber-400/70 mt-1">{partner.tier}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers - using partners-hero-bg22.jpg */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url(${partnersHeroBg22})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
              }}
            />
            <div className="absolute inset-0 bg-black/85" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Partnership Levels</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                  Choose Your{' '}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Impact Level
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto"></div>
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                  Select the partnership tier that aligns with your organization's goals
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipTiers.map((tier, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-amber-500/50 transition-all h-full">
                    <div className="text-center mb-4">
                      <span className="text-4xl">{tier.icon}</span>
                      <h3 className={`text-xl font-bold text-white mt-2 bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                        {tier.name}
                      </h3>
                      <div className="text-2xl font-bold text-amber-400 mt-2">{tier.amount}</div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle className="h-4 w-4 text-amber-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => setShowPartnerModal(true)}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
                    >
                      Inquire Now →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner Form */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
                <h3 className="text-white font-bold text-xl">Become a Partner</h3>
                <p className="text-white/80 text-sm">Fill out the form below to start your partnership journey</p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">Organization Name *</label>
                    <input
                      type="text"
                      name="organizationName"
                      required
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white placeholder:text-gray-500"
                      placeholder="Your organization name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">Contact Person *</label>
                    <input
                      type="text"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white placeholder:text-gray-500"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white placeholder:text-gray-500"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white placeholder:text-gray-500"
                      placeholder="+234 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-1">Partnership Interest *</label>
                  <select
                    name="partnershipType"
                    required
                    value={formData.partnershipType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white"
                  >
                    <option value="">Select partnership tier</option>
                    <option value="Bronze">Bronze Partner (₦500k - ₦1M)</option>
                    <option value="Silver">Silver Partner (₦1M - ₦5M)</option>
                    <option value="Gold">Gold Partner (₦5M - ₦10M)</option>
                    <option value="Platinum">Platinum Partner (₦10M+)</option>
                    <option value="Other">Custom Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-1">Message / Questions</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white placeholder:text-gray-500"
                    placeholder="Tell us about your organization and how you'd like to partner..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Partnership Inquiry'}
                </motion.button>
              </form>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              <span className="text-gray-500 text-sm">★★★★★ Trustpilot Rating 4.9</span>
              <span className="text-gray-500 text-sm">50+ Active Partners</span>
              <span className="text-gray-500 text-sm">45+ Countries</span>
              <span className="text-gray-500 text-sm">Since 2010</span>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setShowSuccessModal(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-gray-800 rounded-3xl max-w-md w-full p-8 text-center border border-amber-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
              ✕
            </button>
            
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Handshake className="h-10 w-10 text-green-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">Partnership Inquiry Sent! 🤝</h3>
            <p className="text-gray-300 mb-6">
              Thank you for your interest in partnering with us! Our partnership team will review your inquiry and contact you within 3-5 business days.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </MainLayout>
  )
}

export default Partners