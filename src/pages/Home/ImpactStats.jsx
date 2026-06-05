import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Heart, BookOpen, Droplet, Users, Activity, Home, TrendingUp, Award, Globe, Coffee, Tree, School } from 'lucide-react'

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2000, suffix = '+' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = value / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="inline-block">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

// Circular Progress Component
const CircularProgress = ({ percentage, label, value, color }) => {
  const [progress, setProgress] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const interval = setInterval(() => {
        if (start >= percentage) {
          clearInterval(interval)
        } else {
          start++
          setProgress(start)
        }
      }, 20)
      return () => clearInterval(interval)
    }
  }, [isInView, percentage])

  const circumference = 2 * Math.PI * 90
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div ref={ref} className="relative group">
      <div className="relative w-48 h-48 mx-auto">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="90"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="96"
            cy="96"
            r="90"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-gray-900">{progress}%</span>
          <span className="text-sm text-gray-500 mt-1">{label}</span>
        </div>
      </div>
      <div className="text-center mt-4">
        <div className="text-2xl font-bold text-gray-800">{value}</div>
      </div>
    </div>
  )
}

// Animated Timeline Card
const TimelineCard = ({ year, title, description, impact, color, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className={`bg-gradient-to-r ${color} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
        <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
          <span className="text-lg font-bold" style={{ color: color.split(' ')[2] }}>{year}</span>
        </div>
        <h3 className="text-xl font-bold text-white mt-4 mb-2">{title}</h3>
        <p className="text-white/90 text-sm mb-3">{description}</p>
        <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
          {impact}
        </div>
      </div>
    </motion.div>
  )
}

// Main Impact Stats Component
const ImpactStats = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const stats = [
    { 
      icon: Heart, 
      end: 150000, 
      label: 'Children Reached', 
      suffix: '+',
      description: 'Lives transformed through our programs',
      color: 'from-rose-500 to-pink-500',
      bgPattern: '❤️'
    },
    { 
      icon: School, 
      end: 520, 
      label: 'Schools Built', 
      suffix: '+',
      description: 'Creating safe learning environments',
      color: 'from-blue-500 to-cyan-500',
      bgPattern: '📚'
    },
    { 
      icon: Droplet, 
      end: 500000, 
      label: 'Clean Water Wells', 
      suffix: '+',
      description: 'Providing sustainable water access',
      color: 'from-teal-500 to-emerald-500',
      bgPattern: '💧'
    },
    { 
      icon: Users, 
      end: 8000, 
      label: 'Active Volunteers', 
      suffix: '+',
      description: 'Dedicated to making a difference',
      color: 'from-purple-500 to-indigo-500',
      bgPattern: '🤝'
    },
    { 
      icon: Activity, 
      end: 250000, 
      label: 'Medical Checkups', 
      suffix: '+',
      description: 'Healthcare services provided',
      color: 'from-green-500 to-lime-500',
      bgPattern: '🏥'
    },
    { 
      icon: Tree, 
      end: 1000000, 
      label: 'Trees Planted', 
      suffix: '+',
      description: 'Environmental sustainability',
      color: 'from-emerald-500 to-green-600',
      bgPattern: '🌳'
    },
  ]

  const goals = [
    { percentage: 85, label: 'Education Access', value: 'Target: 500,000 children', color: '#3b82f6' },
    { percentage: 72, label: 'Healthcare Coverage', value: 'Target: 1M people', color: '#10b981' },
    { percentage: 68, label: 'Clean Water Access', value: 'Target: 750K people', color: '#06b6d4' },
  ]

  const timelineData = [
    { year: 2010, title: 'Foundation', description: 'Organization founded to help underprivileged children', impact: 'Started with 50 children', color: 'from-orange-500 to-red-500' },
    { year: 2015, title: 'Education Initiative', description: 'Launched major education program across 5 countries', impact: '10,000+ enrolled', color: 'from-blue-500 to-indigo-500' },
    { year: 2018, title: 'Healthcare Expansion', description: 'Mobile clinics introduced in remote areas', impact: '100K+ treated', color: 'from-green-500 to-teal-500' },
    { year: 2022, title: 'Global Reach', description: 'Expanded to 25 countries worldwide', impact: '1M+ impacted', color: 'from-purple-500 to-pink-500' },
    { year: 2025, title: '2025 Vision', description: 'Ambitious goals to reach 5M children', impact: 'Target: $50M funds', color: 'from-yellow-500 to-orange-500' },
  ]

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary-400 rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{
            y: [null, -100, -200],
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full px-4 py-2 mb-6 shadow-lg"
          >
            <Award className="h-5 w-5 text-white" />
            <span className="text-white font-semibold text-sm">Trusted by 500,000+ Supporters</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 bg-clip-text text-transparent mb-6">
            Transforming Lives
            <br />
            <span className="text-4xl md:text-5xl">Through Measurable Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every number represents a real life changed. Here's what we've achieved together with your incredible support.
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group cursor-pointer"
            >
              {/* Animated Border Gradient */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 text-8xl opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  {stat.bgPattern}
                </div>

                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <motion.div
                    animate={{ rotate: hoveredCard === index ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl"
                  >
                    ✨
                  </motion.div>
                </div>

                <div className="mb-4">
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter value={stat.end} suffix={stat.suffix} />
                  </div>
                  <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
                  <div className="text-gray-500 text-sm">{stat.description}</div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${Math.min(100, (stat.end / (stat.end + 100000)) * 100)}%` } : {}}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Progress 2024</span>
                    <span>{Math.floor((stat.end / (stat.end + 100000)) * 100)}%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Circular Goals Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our 2025 Goals
            </h3>
            <p className="text-lg text-gray-600">Track our progress towards ambitious targets</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                className="flex justify-center"
              >
                <CircularProgress {...goal} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey of Impact
            </h3>
            <p className="text-lg text-gray-600">15 years of transforming communities worldwide</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {timelineData.map((item, index) => (
              <TimelineCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="relative bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of supporters who are helping us reach even more children in need
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Donate Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Become a Volunteer
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ImpactStats