import React, { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import featuredBgImg from '../../assets/projects/featured-bg.jpg'  // ← Add this import

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Successfully subscribed to newsletter! 🎉')
      setEmail('')
      setIsLoading(false)
    }, 1000)
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${featuredBgImg})`,  // ← Changed to local image
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Stay </span>
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Updated</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-5"></div>
          
          <p className="text-gray-300 text-base md:text-lg mb-8">
            Subscribe to our newsletter for updates and impact stories.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-amber-500 transition"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 shadow-lg"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          
          <p className="text-gray-400 text-xs mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter