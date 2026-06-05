import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, Heart, Shield, Truck, ArrowRight, Sparkles, TrendingUp, Globe, Target, Users } from 'lucide-react'
import MainLayout from '../../components/layouts/MainLayout'
import heroBg from '../../assets/projects/hero-bg.avif'
import educationImg from '../../assets/projects/education-for122-all.jpg'
import healthcareImg from '../../assets/projects/healthcare-access344.jpg'
import childProtectionImg from '../../assets/projects/hero-bg1222.avif'
import emergencyReliefImg from '../../assets/projects/statistics-bg56.jpg'
import addressBg from '../../assets/projects/Address.jpg22.avif'

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Education",
      description: "Building schools, training teachers, and providing learning materials to children in underserved communities.",
      icon: BookOpen,
      path: "/programs/education",
      stats: "287+ Schools Built",
      image: educationImg
    },
    {
      id: 2,
      title: "Healthcare",
      description: "Mobile medical clinics, vaccinations, and health education for remote communities.",
      icon: Heart,
      path: "/programs/healthcare",
      stats: "250K+ Treatments",
      image: healthcareImg
    },
    {
      id: 3,
      title: "Child Protection",
      description: "Creating safe spaces, preventing child labor, and supporting vulnerable children.",
      icon: Shield,
      path: "/programs/child-protection",
      stats: "15K+ Children Protected",
      image: childProtectionImg
    },
    {
      id: 4,
      title: "Emergency Relief",
      description: "Rapid response to natural disasters and humanitarian crises worldwide.",
      icon: Truck,
      path: "/programs/emergency",
      stats: "500K+ People Helped",
      image: emergencyReliefImg
    }
  ]

  const impactStats = [
    { value: "45+", label: "Countries", icon: Globe },
    { value: "1.5M+", label: "Lives Impacted", icon: Users },
    { value: "90%", label: "Program Efficiency", icon: Target },
    { value: "15+", label: "Years of Service", icon: TrendingUp }
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
                backgroundPosition: "center 30%",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 border border-amber-500/30">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">What We Do</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Programs
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                Transforming lives through sustainable programs that create lasting change.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Impact Stats Strip - with Glass Effect Background */}
        <section className="relative py-16 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url(${addressBg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
              }}
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {impactStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 hover:border-amber-500/50 transition-all duration-300"
                >
                  <stat.icon className="h-8 w-8 text-amber-400" />
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Grid - with Glass Effect */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url(${addressBg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
              }}
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-amber-500/50 transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-4 right-4 p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <program.icon className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5">
                        <span className="text-amber-400 text-sm font-semibold">{program.stats}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-gray-200 mb-5 leading-relaxed">
                        {program.description}
                      </p>
                      
                      <Link 
                        to={program.path}
                        className="inline-flex items-center gap-2 text-amber-400 font-semibold group/btn hover:gap-3 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Support Our{' '}
                <span className="border-b-4 border-white/30 pb-2">Programs</span>
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Your donation helps us reach more children and communities in need.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/donate" className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  Donate Now
                  <Heart className="h-4 w-4" />
                </Link>
              </motion.div>
              <p className="text-white/50 text-xs mt-6">100% of donations go directly to programs</p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </MainLayout>
  )
}

export default Programs