import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageSquare, User, Briefcase, Sparkles, CheckCircle, X, Send, ArrowRight } from 'lucide-react'
import MainLayout from '../../components/layouts/MainLayout'
import heroBg from '../../assets/projects/hero-bg.avif'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const whatsappNumber = '2348123456789' // Replace with your WhatsApp number

  const handleWhatsAppSubmit = () => {
    const message = `Hello HopeNGO,%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}%0A%0AThank you for reaching out to us!`
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

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
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Get in Touch</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Contact{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Us
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                Have questions? We'd love to hear from you. Reach out to us via WhatsApp or our contact details below.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Direct WhatsApp Button - Moved to TOP */}
        <section className="py-12 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500/10 to-green-600/10 backdrop-blur-sm rounded-3xl p-8 border border-green-500/30"
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-3">Chat with Us on WhatsApp</h3>
              <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
                Get instant responses to your questions. Our team is ready to help you.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20HopeNGO%2C%20I%20have%20a%20question%20about%20your%20programs`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                <MessageSquare className="h-4 w-4" />
                Start WhatsApp Chat
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Section - Clean Writing Format */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Contact Details - Clean List */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Call Us */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      <span className="text-white">Call </span>
                      <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Us</span>
                    </h3>
                  </div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-3 ml-14"></div>
                  <div className="pl-14 space-y-1">
                    <p className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer" onClick={() => window.open('tel:+234123456789')}>
                      +234 (0) 123 456 789
                    </p>
                    <p className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer" onClick={() => window.open('tel:+234987654321')}>
                      +234 (0) 987 654 321
                    </p>
                  </div>
                </div>

                {/* Email Us */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      <span className="text-white">Email </span>
                      <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Us</span>
                    </h3>
                  </div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-3 ml-14"></div>
                  <div className="pl-14 space-y-1">
                    <p className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer" onClick={() => window.open('mailto:info@hopengo.org')}>
                      info@hopengo.org
                    </p>
                    <p className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer" onClick={() => window.open('mailto:support@hopengo.org')}>
                      support@hopengo.org
                    </p>
                  </div>
                </div>

                {/* Office Address */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      <span className="text-white">Office </span>
                      <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Address</span>
                    </h3>
                  </div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-3 ml-14"></div>
                  <div className="pl-14 space-y-1">
                    <p className="text-gray-300">123 NGO Street, Victoria Island</p>
                    <p className="text-gray-300">Lagos, Nigeria</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      <span className="text-white">Office </span>
                      <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Hours</span>
                    </h3>
                  </div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-3 ml-14"></div>
                  <div className="pl-14 space-y-1">
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-300">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-400 text-sm mt-2">Sunday: Closed</p>
                  </div>
                </div>
              </motion.div>

              {/* WhatsApp Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Send us a Message</h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                  <p className="text-gray-400 text-sm mt-3">
                    Fill out the form below and click the WhatsApp button to send us a message directly.
                  </p>
                </div>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white placeholder:text-gray-500"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white placeholder:text-gray-500"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white placeholder:text-gray-500"
                          placeholder="+234 XXX XXX XXX"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Subject *</label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <input
                          type="text"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white placeholder:text-gray-500"
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Message *</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <textarea
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white placeholder:text-gray-500"
                        placeholder="Tell us how we can help..."
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    Send via WhatsApp
                    <Send className="h-4 w-4" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              <span className="text-gray-500 text-sm">★★★★★ Trustpilot Rating 4.9</span>
              <span className="text-gray-500 text-sm">24/7 WhatsApp Support</span>
              <span className="text-gray-500 text-sm">Response within minutes</span>
              <span className="text-gray-500 text-sm">100% Confidential</span>
            </div>
          </div>
        </section>
      </motion.div>
    </MainLayout>
  )
}

export default Contact