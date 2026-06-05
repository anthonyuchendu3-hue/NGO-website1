import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Droplets, 
  BookOpen, 
  Heart, 
  Calendar, 
  Users,
  MapPin,
  TrendingUp,
  Sparkles
} from 'lucide-react'

// Import local images
import cleanWaterImg from '../../assets/projects/clean-water.jpg'
import educationImg from '../../assets/projects/education-for-all.jpg'
import healthcareImg from '../../assets/projects/featured-bg201.jpg'
import featuredBgImg from '../../assets/projects/featured-bg.jpg'

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Clean Water Initiative",
      description: "Providing sustainable clean water solutions to rural communities in Africa.",
      image: cleanWaterImg,
      goal: 50000,
      raised: 41410,
      status: "Active",
      country: "Kenya",
      beneficiaries: 5200,
      donorCount: 892,
      daysLeft: 12,
      color: "from-blue-500 to-cyan-500",
      buttonGradient: "from-blue-600 to-blue-500"
    },
    {
      id: 2,
      title: "Education for All",
      description: "Building schools and providing educational resources for underprivileged children.",
      image: educationImg,
      goal: 100000,
      raised: 84394,
      status: "Active",
      country: "Uganda",
      beneficiaries: 12500,
      donorCount: 1294,
      daysLeft: 25,
      color: "from-purple-500 to-pink-500",
      buttonGradient: "from-purple-600 to-pink-500"
    },
    {
      id: 3,
      title: "Healthcare Access",
      description: "Mobile medical clinics bringing healthcare to remote villages.",
      image: healthcareImg,
      goal: 75000,
      raised: 63821,
      status: "Active",
      country: "Tanzania",
      beneficiaries: 8300,
      donorCount: 1005,
      daysLeft: 18,
      color: "from-green-500 to-emerald-500",
      buttonGradient: "from-emerald-600 to-green-500"
    }
  ])

  const [hoveredButton, setHoveredButton] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setProjects(prevProjects => 
        prevProjects.map(project => ({
          ...project,
          raised: project.raised + Math.floor(Math.random() * 100),
          donorCount: project.donorCount + Math.floor(Math.random() * 2)
        }))
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const calculateProgress = (raised, goal) => Math.min((raised / goal) * 100, 100)

  // This function does nothing - just for visual feedback
  const handleLearnMoreClick = () => {
    // No action - just a decorative button
    console.log("Learn More clicked - decorative button")
  }

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${featuredBgImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gray-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 border border-amber-500/20"
          >
            <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-amber-500"></span>
            </span>
            <span className="text-amber-400 text-xs md:text-sm font-semibold uppercase tracking-wider">Active Campaigns</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4">
              <span className="text-white">Featured </span>
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Projects</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-4 md:mb-5"
            style={{ width: 80 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto px-4"
          >
            Your support is transforming lives through these active initiatives
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-amber-500/50 transition-all duration-300 group w-full max-w-md"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {project.status}
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                  <MapPin className="h-3 w-3 text-white" />
                  <span className="text-white text-xs">{project.country}</span>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Calendar className="h-3 w-3 text-white" />
                  <span className="text-white text-xs">{project.daysLeft} days left</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
                  <div>
                    <div className="text-gray-400 text-xs mb-1">Beneficiaries</div>
                    <div className="text-lg md:text-xl font-bold text-white">{project.beneficiaries.toLocaleString()}+</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-1">Donors</div>
                    <div className="text-lg md:text-xl font-bold text-white">{project.donorCount.toLocaleString()}</div>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-4 md:mb-5">
                  <div className="flex justify-between text-xs md:text-sm mb-1">
                    <span className="text-gray-300">Raised: ${project.raised.toLocaleString()}</span>
                    <span className="text-gray-400">Goal: ${project.goal.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5 md:h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${calculateProgress(project.raised, project.goal)}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className={`h-1.5 md:h-2 rounded-full bg-gradient-to-r ${project.color}`}
                    />
                  </div>
                  <div className="text-right text-xs md:text-sm font-semibold text-gray-300 mt-1">
                    {calculateProgress(project.raised, project.goal).toFixed(1)}% Funded
                  </div>
                </div>

                {/* Mobile Responsive Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  {/* Learn More Button - Decorative, does nothing */}
                  <motion.div 
                    className="w-full sm:flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onHoverStart={() => setHoveredButton(`learn-${project.id}`)}
                    onHoverEnd={() => setHoveredButton(null)}
                  >
                    <button
                      onClick={handleLearnMoreClick}
                      className="group/btn relative flex items-center justify-center gap-1 md:gap-2 w-full px-3 md:px-4 py-2 md:py-2.5 rounded-xl font-semibold transition-all duration-300 overflow-hidden border border-gray-600 bg-transparent text-gray-300 hover:border-amber-500 hover:text-amber-400 text-sm md:text-base cursor-pointer"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-1 md:gap-2">
                        Learn More
                        <ArrowRight className={`h-3 w-3 md:h-4 md:w-4 transition-all duration-300 ${hoveredButton === `learn-${project.id}` ? 'translate-x-1' : ''}`} />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </button>
                  </motion.div>

                  {/* Donate Now Button - Active Link */}
                  <motion.div 
                    className="w-full sm:flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onHoverStart={() => setHoveredButton(`donate-${project.id}`)}
                    onHoverEnd={() => setHoveredButton(null)}
                  >
                    <Link 
                      to={`/donate?project=${project.id}`}
                      className={`group/btn relative flex items-center justify-center gap-1 md:gap-2 w-full px-3 md:px-4 py-2 md:py-2.5 rounded-xl font-semibold text-white transition-all duration-300 overflow-hidden bg-gradient-to-r ${project.buttonGradient} shadow-lg hover:shadow-xl text-sm md:text-base`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                      <span className="relative z-10 flex items-center justify-center gap-1 md:gap-2">
                        <Sparkles className={`h-3 w-3 md:h-4 md:w-4 transition-all duration-300 ${hoveredButton === `donate-${project.id}` ? 'rotate-12' : ''}`} />
                        Donate Now
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 md:mt-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/projects" 
              className="group relative inline-flex items-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-white overflow-hidden shadow-2xl text-sm md:text-base"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 bg-[length:200%_100%] animate-shimmer" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-1 md:gap-2">
                View All Projects
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        .animate-shimmer {
          animation: shimmer 3s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default FeaturedProjects