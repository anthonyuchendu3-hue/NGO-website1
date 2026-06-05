import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Target, Globe, Award, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import MainLayout from '../../components/layouts/MainLayout'
import heroBg from '../../assets/projects/hero-bg.avif'
import heroBg700 from '../../assets/projects/hero-bg700.avif'

const About = () => {
  const values = [
    { title: "Compassion", description: "We lead with empathy and understanding in everything we do.", icon: Heart },
    { title: "Integrity", description: "Transparent operations and honest communication with all stakeholders.", icon: CheckCircle },
    { title: "Excellence", description: "Striving for the highest quality in all our programs and services.", icon: Target },
    { title: "Collaboration", description: "Working together with communities and partners for lasting change.", icon: Users },
  ]

  const milestones = [
    { year: 2010, event: "Foundation Established", description: "Started with a mission to help 1,000 children" },
    { year: 2013, event: "First 100 Schools", description: "Built first schools in rural communities" },
    { year: 2016, event: "Healthcare Initiative", description: "Launched mobile medical clinics" },
    { year: 2019, event: "Global Recognition", description: "Received UN partnership status" },
    { year: 2022, event: "1 Million Reached", description: "Expanded to 45 countries worldwide" },
    { year: 2025, event: "2025 Vision", description: "Targeting 5 million children helped" },
  ]

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Hero Section - using hero-bg.avif */}
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
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Our Story</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  HopeNGO
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                Empowering communities and transforming lives through sustainable development programs since 2010.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section - No background image */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="relative p-8 md:p-10">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                    Our Mission
                  </h2>
                  
                  <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-5 group-hover:w-24 transition-all duration-300"></div>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To empower underserved communities through sustainable education, healthcare, and economic development programs, creating lasting change for children and families worldwide.
                  </p>
                  
                  <div className="absolute bottom-4 right-6 text-8xl font-bold text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    "
                  </div>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                style={{
                  background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
                }}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>
                
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
                
                <div className="relative p-8 md:p-10">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                    Our Vision
                  </h2>
                  
                  <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-5 group-hover:w-24 transition-all duration-300"></div>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    A world where every child has access to quality education, healthcare, and the opportunity to build a better future, regardless of where they are born.
                  </p>
                  
                  <div className="absolute bottom-4 right-6 text-6xl text-white/5 group-hover:text-white/10 transition-opacity duration-500">
                    ✦
                  </div>
                </div>
              </motion.div>
              
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
              }}
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Our Foundation</span>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                  Core{' '}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Values
                  </span>
                </h2>
                
                <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6"></div>
                
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  The principles that guide everything we do
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative h-full bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:border-amber-500/50 transition-all duration-300 overflow-hidden group-hover:transform group-hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative inline-block mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
                      <div className="relative w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    
                    <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-4 group-hover:w-20 transition-all duration-300"></div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {value.description}
                    </p>
                    
                    <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline - using hero-bg700.avif */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url(${heroBg700})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
              }}
            />
            <div className="absolute inset-0 bg-black/85" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Our History</span>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                  Our{' '}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Journey
                  </span>
                </h2>
                
                <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6"></div>
                
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  15 years of impact, growth, and transforming lives
                </p>
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-amber-500 via-orange-500 to-amber-500 hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:col-start-2'}`}
                  >
                    <div className="absolute top-6 left-0 md:left-auto transform md:translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full shadow-lg shadow-amber-500/50 z-10 hidden md:block"
                         style={index % 2 === 0 ? { right: '-8px', left: 'auto' } : { left: '-8px', right: 'auto' }}></div>
                    
                    <div className="absolute top-6 left-0 w-4 h-4 bg-amber-500 rounded-full shadow-lg shadow-amber-500/50 z-10 md:hidden"></div>
                    
                    <div className="relative ml-6 md:ml-0 group">
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-amber-500/50 transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                        <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full">
                          <span className="text-white font-bold text-lg">{milestone.year}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                          {milestone.event}
                        </h3>
                        
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                        
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link 
                to="/impact" 
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Full Impact Report
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </MainLayout>
  )
}

export default About