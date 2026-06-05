import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import statisticsBg from '../../assets/projects/statistics-bg.jpg'  // ← Add this import

const Statistics = () => {
  const [counts, setCounts] = useState({
    children: 0,
    schools: 0,
    medical: 0,
    volunteers: 0,
    countries: 0,
    success: 0
  })
  
  const sectionRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [donationAmount, setDonationAmount] = useState(0)
  const [donationIncrease, setDonationIncrease] = useState(0)
  const [hoveredButton, setHoveredButton] = useState(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const targets = {
    children: 158000,
    schools: 287,
    medical: 250000,
    volunteers: 12456,
    countries: 45,
    success: 97.5
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDonationIncrease(prev => prev + Math.floor(Math.random() * 500))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setDonationAmount(15284732 + donationIncrease)
  }, [donationIncrease])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const step = 16
          const totalSteps = duration / step
          
          Object.keys(targets).forEach(key => {
            let current = 0
            const increment = targets[key] / totalSteps
            const timer = setInterval(() => {
              current += increment
              if (current >= targets[key]) {
                setCounts(prev => ({ ...prev, [key]: targets[key] }))
                clearInterval(timer)
              } else {
                setCounts(prev => ({ ...prev, [key]: Math.floor(current) }))
              }
            }, step)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  const timelineData = [
    { year: 2010, event: 'Foundation Launched', impact: 'Started operations in 3 countries' },
    { year: 2013, event: 'First 100 Schools', impact: 'Reached 50,000 children' },
    { year: 2016, event: 'Healthcare Expansion', impact: 'Mobile clinics introduced' },
    { year: 2019, event: 'Global Recognition', impact: 'UN partnership established' },
    { year: 2022, event: '1 Million Reached', impact: 'Expanded to 45 countries' },
    { year: 2025, event: '2025 Vision', impact: 'Target: 5 million children' }
  ]

  const partners = [
    "UNICEF", "World Health Org", "Save Children", "Global Fund", "Red Cross", "World Bank"
  ]

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      {/* Live Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${statisticsBg})`,  // ← Changed to local image
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Live Donation Ticker */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 md:mb-12 flex justify-center"
          >
            <div className="bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-500/30 px-4 sm:px-6 py-2 sm:py-3 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span className="text-amber-400 text-xs sm:text-sm font-semibold">LIVE DONATIONS</span>
              <span className="text-white text-xl sm:text-2xl font-bold">${donationAmount.toLocaleString()}</span>
              <span className="text-green-400 text-xs sm:text-sm">+${donationIncrease.toLocaleString()} today</span>
            </div>
          </motion.div>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-20"
          >
            <span className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">Impact Dashboard</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 md:mt-4 mb-4 md:mb-6">
              Measurable Change,
              <br />
              <span className="text-amber-400">Real Results</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Every number represents a life transformed. Track our progress in real-time.
            </p>
          </motion.div>

          {/* Impact Statement with Beautiful Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-24"
          >
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 md:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 md:mb-4">
                Together, We've Transformed Over{' '}
                <span className="text-amber-400">1.5 Million Lives</span>
              </h3>
              <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-2">
                Your support has enabled us to create sustainable change across 45 countries, 
                building schools, providing healthcare, and empowering communities.
              </p>
              
              {/* Beautiful Buttons Section */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 md:mt-8">
                {/* Read Impact Report Button - NOW LINKS TO IMPACT PAGE */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredButton('report')}
                  onHoverEnd={() => setHoveredButton(null)}
                  className="w-full sm:w-auto"
                >
                  <Link to="/impact">
                    <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 rounded-xl font-bold overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Read Impact Report
                        <motion.span
                          animate={{ x: hoveredButton === 'report' ? 5 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          📄
                        </motion.span>
                      </span>
                    </button>
                  </Link>
                </motion.div>

                {/* Watch Our Story Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredButton('story')}
                  onHoverEnd={() => setHoveredButton(null)}
                  className="w-full sm:w-auto"
                >
                  <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-white/30 text-white rounded-xl font-bold overflow-hidden hover:border-amber-400 transition-all duration-300">
                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Watch Our Story
                      <motion.span
                        animate={{ rotate: hoveredButton === 'story' ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        🎥
                      </motion.span>
                    </span>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add shimmer animation style */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}

export default Statistics