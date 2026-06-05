import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Briefcase, MapPin, Clock, DollarSign, Users, CheckCircle, ArrowRight, Globe, Shield, Award, Coffee, Mail, Phone, Building, GraduationCap, Sparkles } from 'lucide-react'
import MainLayout from '../../components/layouts/MainLayout'
import heroBg12 from '../../assets/projects/hero-bg12.avif'
import heroBg13 from '../../assets/projects/hero-bg13.avif'
import heroBg14 from '../../assets/projects/hero-bg14.avif'
import heroBg15 from '../../assets/projects/hero-bg15.avif'

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null)
  const [showApplyModal, setShowApplyModal] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [hoveredButton, setHoveredButton] = useState(null)

  const openPositions = [
    {
      id: 1,
      title: "Program Manager",
      department: "Programs",
      location: "Lagos, Nigeria",
      type: "Full-time",
      salary: "₦350,000 - ₦450,000/month",
      experience: "5+ years",
      description: "Lead and manage our education and healthcare programs across multiple communities."
    },
    {
      id: 2,
      title: "Fundraising Coordinator",
      department: "Fundraising",
      location: "Remote",
      type: "Full-time",
      salary: "₦250,000 - ₦350,000/month",
      experience: "3+ years",
      description: "Develop and implement fundraising strategies to support our programs."
    },
    {
      id: 3,
      title: "Social Media Manager",
      department: "Communications",
      location: "Remote",
      type: "Part-time",
      salary: "₦150,000 - ₦200,000/month",
      experience: "2+ years",
      description: "Manage our social media presence and create engaging content about our impact."
    },
    {
      id: 4,
      title: "Field Officer",
      department: "Programs",
      location: "Abuja, Nigeria",
      type: "Full-time",
      salary: "₦180,000 - ₦250,000/month",
      experience: "2+ years",
      description: "Implement and monitor program activities in the field."
    },
    {
      id: 5,
      title: "Accountant",
      department: "Finance",
      location: "Lagos, Nigeria",
      type: "Full-time",
      salary: "₦300,000 - ₦400,000/month",
      experience: "4+ years",
      description: "Manage financial records, donor reporting, and budget tracking."
    },
    {
      id: 6,
      title: "Volunteer Coordinator",
      department: "Volunteer Management",
      location: "Remote",
      type: "Part-time",
      salary: "₦120,000 - ₦180,000/month",
      experience: "2+ years",
      description: "Recruit, train, and manage our volunteer network."
    }
  ]

  const handleApply = (job) => {
    setSelectedJob(job)
    setFormData({...formData, position: job.title})
    setShowApplyModal(true)
  }

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  // --- Formspree Submission Logic ---
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // --- IMPORTANT: VERIFY YOUR FORMSPREE ENDPOINT ---
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdajqjrp'

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
          position: formData.position,
          experience: formData.experience,
          coverLetter: formData.coverLetter
        })
      })

      if (response.ok) {
        setIsSubmitting(false)
        setShowApplyModal(false)
        setShowSuccessModal(true)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          coverLetter: '',
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

  const benefits = [
    { icon: Heart, title: "Health Insurance", desc: "Comprehensive medical coverage for you and your family" },
    { icon: Clock, title: "Flexible Hours", desc: "Work-life balance with flexible working hours" },
    { icon: Award, title: "Professional Growth", desc: "Training, courses, and conference opportunities" },
    { icon: Users, title: "Great Team", desc: "Supportive, collaborative, and mission-driven culture" },
    { icon: Globe, title: "Remote Options", desc: "Work from anywhere with our hybrid model" },
    { icon: Coffee, title: "Wellness Benefits", desc: "Health and wellness programs for all staff" },
  ]

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Hero Section - hero-bg12.avif */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url(${heroBg12})`,
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
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Join Our Team</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Careers at{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  HopeNGO
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                Join a passionate team dedicated to making a real difference in children's lives.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits & Perks - hero-bg13.avif */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url(${heroBg13})`,
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
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Why Join Us</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                  Benefits &{' '}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Perks
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto"></div>
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                  We take care of our team so they can focus on changing lives.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions - hero-bg14.avif */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url(${heroBg14})`,
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
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Join Our Mission</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                  Open{' '}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Positions
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto"></div>
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                  Find the perfect role that matches your skills and passion.
                </p>
              </motion.div>
            </div>

            <div className="space-y-4">
              {openPositions.map((job, idx) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group border-b border-gray-700 hover:border-amber-500/50 transition-all duration-300 pb-6"
                >
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-3 text-sm">
                        <span className="flex items-center gap-1 text-gray-400">
                          <Building className="h-3.5 w-3.5 text-amber-400" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400">
                          <MapPin className="h-3.5 w-3.5 text-amber-400" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400">
                          <Clock className="h-3.5 w-3.5 text-amber-400" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400">
                          <DollarSign className="h-3.5 w-3.5 text-amber-400" />
                          {job.salary}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full">
                          {job.experience} experience
                        </span>
                      </div>
                    </div>
                    
                    <motion.button
                      onHoverStart={() => setHoveredButton(job.id)}
                      onHoverEnd={() => setHoveredButton(null)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleApply(job)}
                      className="relative overflow-hidden group/btn bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Apply Now
                        <ArrowRight className={`h-4 w-4 transition-all duration-300 ${hoveredButton === job.id ? 'translate-x-1' : ''}`} />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section - With hero-bg15.avif for right image */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Our Culture</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                  A Workplace Where You Can{' '}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Thrive
                  </span>
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6"></div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  At HopeNGO, we believe that happy, supported employees do their best work. 
                  We foster a culture of collaboration, innovation, and continuous learning.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-400" />
                    <span className="text-gray-300">Collaborative and inclusive environment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-400" />
                    <span className="text-gray-300">Opportunities for growth and learning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-400" />
                    <span className="text-gray-300">Mission-driven work with real impact</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-400" />
                    <span className="text-gray-300">Diverse team from around the world</span>
                  </li>
                </ul>
              </motion.div>

              {/* Right Image - hero-bg15.avif */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative flex justify-center"
              >
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 blur-3xl opacity-60 animate-pulse" />
                
                {/* Inner glow ring */}
                <div className="absolute inset-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 blur-2xl opacity-40 animate-pulse" />
                
                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={heroBg15}
                    alt="Team working together"
                    className="w-full h-auto object-cover relative z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                  
                  {/* Shine overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                {/* Floating sparkle effects */}
                <motion.div
                  animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4"
                >
                  <Sparkles className="h-6 w-6 text-amber-400" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-2 -left-2"
                >
                  <Sparkles className="h-5 w-5 text-orange-400" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              <span className="text-gray-500 text-sm">★★★★★ Great Place to Work™</span>
              <span className="text-gray-500 text-sm">Best NGO to Work For 2024</span>
              <span className="text-gray-500 text-sm">Top Employer Nigeria</span>
              <span className="text-gray-500 text-sm">Join 100+ Team Members</span>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Apply Modal */}
      {showApplyModal && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto" onClick={() => setShowApplyModal(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-gray-800 rounded-3xl max-w-2xl w-full p-6 border border-amber-500/30 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowApplyModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
              ✕
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-2">Apply for {selectedJob.title}</h3>
            <p className="text-gray-400 mb-6">{selectedJob.department} • {selectedJob.location}</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white"
                    placeholder="Enter your name"
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
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white"
                    placeholder="+234 XXX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Years of Experience</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white"
                    placeholder="e.g., 5+ years"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-1">Cover Letter *</label>
                <textarea
                  name="coverLetter"
                  required
                  rows={4}
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white"
                  placeholder="Tell us why you're passionate about this role and how you can contribute to our mission..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => setShowApplyModal(false)}
                  className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-600 transition"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 rounded-xl font-semibold hover:shadow-lg transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

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
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">Application Submitted! 🎉</h3>
            <p className="text-gray-300 mb-6">
              Thank you for applying to join our team! We'll review your application and contact you within 5-7 business days.
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

export default Careers