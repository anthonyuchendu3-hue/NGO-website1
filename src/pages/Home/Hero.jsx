import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'
import heroBg from '../../assets/projects/hero-bg.avif'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>
        <img 
          src={heroBg}
          alt="Children learning"
          className="w-full h-full object-cover scale-110 animate-[scale_20s_ease-in-out_infinite]"
        />
      </div>

      <div className="container-custom relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-white text-sm">Help us reach 1M children by 2025</span>
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-[1.2]">
            Every Child
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent block">
              Deserves a Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Join us in providing education, healthcare, and protection to children in need around the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/donate" className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-xl transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Donate Now</span>
                <ArrowRight className="relative z-10 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/volunteer" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300">
                Become a Volunteer
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="inline-flex items-center gap-3 px-6 py-4 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="h-5 w-5 ml-0.5" />
                </div>
                Watch Impact Video
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <ChevronDown className="h-8 w-8 text-white animate-bounce" />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero