import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Users, Globe, BookOpen, Droplet, Activity, ArrowRight, CheckCircle } from 'lucide-react'
import MainLayout from '../../components/layouts/MainLayout'
import heroBg from '../../assets/projects/hero-bg.avif'  // ← Using existing image

const Impact = () => {
  const [counts, setCounts] = useState({
    children: 0,
    schools: 0,
    medical: 0,
    volunteers: 0,
    countries: 0,
    water: 0
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  const targets = {
    children: 158000,
    schools: 287,
    medical: 250000,
    volunteers: 12456,
    countries: 45,
    water: 500
  }

  useEffect(() => {
    if (!hasAnimated) {
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
  }, [hasAnimated])

  const stats = [
    { value: counts.children, suffix: "+", label: "Children Impacted", icon: Heart },
    { value: counts.schools, suffix: "", label: "Schools Built", icon: BookOpen },
    { value: counts.medical, suffix: "+", label: "Medical Treatments", icon: Activity },
    { value: counts.volunteers, suffix: "+", label: "Active Volunteers", icon: Users },
    { value: counts.countries, suffix: "", label: "Countries Reached", icon: Globe },
    { value: counts.water, suffix: "+", label: "Clean Water Wells", icon: Droplet }
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
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Our Impact</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Measuring Our{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Progress
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                Every number represents a life transformed. Track our progress in real-time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section - Premium Cards with One Color Icons */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Image */}
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
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Real Results</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                  By the{' '}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Numbers
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto"></div>
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                  Real results that reflect our commitment to change
                </p>
              </motion.div>
            </div>

            {/* Premium Cards Grid - Icons all amber */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1">
                    <div className="relative flex items-center gap-4">
                      <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                        <stat.icon className="h-6 w-6 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {stat.value.toLocaleString()}{stat.suffix}
                        </div>
                        <div className="text-gray-300 text-sm">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Changed Background */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-2xl mb-6">
                <Heart className="h-8 w-8 text-amber-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Help Us Grow Our Impact
              </h2>
              <div className="w-20 h-0.5 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-gray-400 text-lg mb-8">
                Every donation helps us reach more children and communities in need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/donate" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
                  Donate Now
                </Link>
                <Link to="/volunteer" className="border-2 border-amber-500 text-amber-500 px-8 py-3 rounded-full font-semibold hover:bg-amber-500/10 transition-all">
                  Become a Volunteer
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </MainLayout>
  )
}

export default Impact