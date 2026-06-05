import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Stethoscope, Ambulance, Activity, ArrowRight, Shield } from 'lucide-react'
import MainLayout from '../../components/layouts/MainLayout'
import statisticsBg50 from '../../assets/projects/statistics-bg50.jpg'
import healthcareImage from '../../assets/projects/statistics-bg51.jpg'

const Healthcare = () => {
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
                backgroundImage: `url(${statisticsBg50})`,
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
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Our Program</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Healthcare{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Access
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                Bringing quality healthcare to remote and underserved communities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section - Clean with Dark Overlay + Right Image */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url(${statisticsBg50})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
              }}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <div className="inline-block mb-4 px-3 py-1 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-400/30">
                  <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Our Mission</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Every Life Deserves{' '}
                  <span className="text-amber-400">
                    Quality Healthcare
                  </span>
                </h2>
                <div className="w-16 h-0.5 bg-amber-500 rounded-full mb-6"></div>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  We provide essential healthcare services to communities that lack access to medical facilities. Our mobile clinics, vaccination programs, and health education initiatives save lives every day.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                      <Stethoscope className="h-5 w-5 text-amber-400 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Mobile Clinics</h3>
                      <p className="text-gray-300 text-sm">Bringing doctors and medical care directly to remote villages</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                      <Activity className="h-5 w-5 text-amber-400 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Vaccination Programs</h3>
                      <p className="text-gray-300 text-sm">Protecting children from preventable diseases</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                      <Heart className="h-5 w-5 text-amber-400 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Health Education</h3>
                      <p className="text-gray-300 text-sm">Teaching preventive care and healthy practices</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Stunning Image using healthcare-access.jpg */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={healthcareImage}
                    alt="Doctor caring for child"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Decorative elements around image */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-500/30 rounded-tl-2xl hidden lg:block"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-amber-500/30 rounded-br-2xl hidden lg:block"></div>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </MainLayout>
  )
}

export default Healthcare