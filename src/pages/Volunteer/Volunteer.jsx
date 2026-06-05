import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Users, Clock, Calendar, MapPin, Mail, Phone, CheckCircle, ArrowRight, HandHeart, Globe, Shield, Award, Target, Coffee, X } from 'lucide-react'
import MainLayout from '../../components/layouts/MainLayout'
import heroBg from '../../assets/projects/hero-bg.avif'
import heroMeeting from '../../assets/projects/hero-meeting.jpg'

const Volunteer = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    skills: [],
    availability: [],
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const skillOptions = [
    { value: 'Teaching', label: 'Teaching' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Fundraising', label: 'Fundraising' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'IT/Web', label: 'IT/Web' },
    { value: 'Event Planning', label: 'Event Planning' },
    { value: 'Administration', label: 'Administration' },
    { value: 'Photography', label: 'Photography' },
  ]

  const availabilityOptions = ['Weekdays', 'Weekends', 'Mornings', 'Afternoons', 'Evenings', 'Flexible']

  const handleCheckboxChange = (e, type) => {
    const value = e.target.value
    setFormData(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaqkrzyp'

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          age: formData.age,
          skills: formData.skills.join(', '),
          availability: formData.availability.join(', '),
          message: formData.message
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setShowSuccessModal(true)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          age: '',
          skills: [],
          availability: [],
          message: ''
        })
      } else {
        console.error('Formspree error:', response.status, response.statusText)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Network error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
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
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Join Our Mission</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Become a{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Volunteer
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                Join our global community of volunteers making a real difference in children's lives.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section className="relative py-16 overflow-hidden">
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
            
            {/* Section Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Give Your Time</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                  Volunteer With Us
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto"></div>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                  Your time and skills can transform lives. Join our volunteer team today.
                </p>
              </motion.div>
            </div>

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-400 text-center">
                ❌ Submission failed. Please try again or contact us directly.
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Volunteer Form */}
              <div className="lg:col-span-2">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
                    <h3 className="text-white font-bold text-lg">Volunteer Application</h3>
                    <p className="text-white/80 text-sm">Fill out the form below to join our team</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                    <div>
                      <h4 className="text-white font-semibold mb-4 border-l-4 border-amber-500 pl-3">Personal Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-400 text-sm mb-1">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white placeholder:text-gray-500"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 text-sm mb-1">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white placeholder:text-gray-500"
                            placeholder="you@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 text-sm mb-1">Phone Number</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white placeholder:text-gray-500"
                            placeholder="+234 XXX XXX XXX"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 text-sm mb-1">Age</label>
                          <input
                            type="number"
                            value={formData.age}
                            onChange={(e) => setFormData({...formData, age: e.target.value})}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white placeholder:text-gray-500"
                            placeholder="Your age"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3 border-l-4 border-amber-500 pl-3">Skills & Expertise</h4>
                      <div className="flex flex-wrap gap-3">
                        {skillOptions.map(skill => (
                          <label key={skill.value} className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-600 transition border border-gray-600 hover:border-amber-500">
                            <input
                              type="checkbox"
                              value={skill.value}
                              checked={formData.skills.includes(skill.value)}
                              onChange={(e) => handleCheckboxChange(e, 'skills')}
                              className="w-4 h-4 text-amber-500 rounded focus:ring-amber-500"
                            />
                            <span className="text-gray-300 text-sm">{skill.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3 border-l-4 border-amber-500 pl-3">Availability</h4>
                      <div className="flex flex-wrap gap-3">
                        {availabilityOptions.map(day => (
                          <label key={day} className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-600 transition border border-gray-600 hover:border-amber-500">
                            <input
                              type="checkbox"
                              value={day}
                              checked={formData.availability.includes(day)}
                              onChange={(e) => handleCheckboxChange(e, 'availability')}
                              className="w-4 h-4 text-amber-500 rounded focus:ring-amber-500"
                            />
                            <span className="text-gray-300 text-sm">{day}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2 border-l-4 border-amber-500 pl-3">Why do you want to volunteer?</h4>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white placeholder:text-gray-500"
                        placeholder="Tell us why you're passionate about helping children..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </motion.button>
                  </form>
                </div>
              </div>

              {/* Impact Info */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-xl border border-gray-700 mb-6">
                  <div className="px-6 py-4 border-b border-gray-700">
                    <div className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-amber-400" />
                      <h3 className="text-white font-bold text-lg">Your Impact</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-400 text-sm mb-4">As a volunteer, you can help:</p>
                    <div className="space-y-4">
                      {[
                        { icon: Users, title: "Teach Children", impact: "Help 50+ students learn" },
                        { icon: Heart, title: "Provide Care", impact: "Support healthcare programs" },
                        { icon: Target, title: "Raise Funds", impact: "Help raise ₦1M+ annually" },
                        { icon: Globe, title: "Global Reach", impact: "Impact 45+ countries" },
                        { icon: Award, title: "Build Skills", impact: "Gain valuable experience" },
                        { icon: Coffee, title: "Meet People", impact: "Join passionate community" },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-700/50 transition cursor-pointer"
                        >
                          <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                            <item.icon className="h-4 w-4 text-amber-400" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-white text-sm">{item.title}</div>
                            <div className="text-gray-400 text-xs">{item.impact}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-700">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Users className="h-4 w-4 text-amber-400" />
                        <span>Join 2,000+ active volunteers</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-gray-700">
                  <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-amber-400" />
                    Why Volunteer With Us?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-emerald-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Make a real difference in children's lives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Globe className="h-3 w-3 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Join a global community of changemakers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="h-3 w-3 text-purple-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Gain valuable skills and experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-3 w-3 text-amber-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Flexible time commitment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              <span className="text-gray-500 text-sm">★★★★★ Trustpilot Rating 4.9</span>
              <span className="text-gray-500 text-sm">2,000+ Active Volunteers</span>
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
              <X className="h-5 w-5" />
            </button>
            
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">Thank You! 🎉</h3>
            <p className="text-gray-300 mb-6">
              Your volunteer application has been successfully submitted. We'll review your information and contact you within 48 hours.
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

export default Volunteer