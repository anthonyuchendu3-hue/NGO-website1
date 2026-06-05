import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  GraduationCap, 
  Stethoscope, 
  Droplet, 
  ArrowRight, 
  MapPin, 
  Calendar,
  Users,
  BookOpen,
  Home,
  Utensils,
  HandHeart
} from 'lucide-react';
import MainLayout from '../../components/layouts/MainLayout';
import childCaregiver22 from '../../assets/projects/child-caregiver22.jpg';
import featuredBg from '../../assets/projects/featured-bg.jpg';
import addressBg from '../../assets/projects/Address334.jpg';
import educationImg from '../../assets/projects/education-for-all.jpg';
import healthcareImg from '../../assets/projects/healthcare-access.jpg';
import cleanWaterImg from '../../assets/projects/clean-water.jpg';
import cleanWater4555 from '../../assets/projects/clean-water4555.jpg';
import cleanWater455533 from '../../assets/projects/clean-water455533.jpg';
import cleanWater45553344 from '../../assets/projects/clean-water45553344.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'education', 'healthcare', 'water', 'food'];

  const projects = [
    {
      id: 1,
      title: "Digital Learning Initiative",
      description: "Providing tablets and internet access to underserved schools, enabling digital education for 5,000+ students.",
      longDescription: "This program bridges the digital divide by equipping schools with modern technology, training teachers in digital literacy, and providing ongoing technical support.",
      category: "education",
      image: educationImg,
      icon: <GraduationCap className="h-6 w-6" />,
      location: "Lagos, Abuja, Port Harcourt",
      startDate: "January 2024",
      beneficiaries: "5,200+",
      status: "active",
      progress: 75,
      impact: "85% improvement in digital literacy",
      goals: ["50 schools equipped", "200 teachers trained", "10,000 students reached"]
    },
    {
      id: 2,
      title: "Community Health Outreach",
      description: "Mobile health clinics providing free medical checkups and vaccinations to rural communities.",
      longDescription: "Our mobile health units travel to remote villages, offering essential healthcare services including immunizations, maternal care, and health education.",
      category: "healthcare",
      image: healthcareImg,
      icon: <Stethoscope className="h-6 w-6" />,
      location: "Kano, Kaduna, Jos",
      startDate: "March 2024",
      beneficiaries: "12,000+",
      status: "active",
      progress: 60,
      impact: "3,500+ children vaccinated",
      goals: ["20 communities served", "15,000 patients treated", "500+ health workers trained"]
    },
    {
      id: 3,
      title: "Clean Water Wells Project",
      description: "Installing clean water wells in communities facing water scarcity and waterborne diseases.",
      longDescription: "We drill and maintain clean water wells, providing safe drinking water to thousands of families while educating communities on water conservation.",
      category: "water",
      image: cleanWaterImg,
      icon: <Droplet className="h-6 w-6" />,
      location: "Northern Nigeria",
      startDate: "June 2023",
      beneficiaries: "25,000+",
      status: "completed",
      progress: 100,
      impact: "50 wells installed, 80% reduction in waterborne diseases",
      goals: ["100 wells drilled", "50,000 people served", "Water committees formed"]
    },
    {
      id: 4,
      title: "School Feeding Program",
      description: "Providing daily nutritious meals to primary school children to improve attendance and learning outcomes.",
      longDescription: "This program ensures that children receive at least one healthy meal per day, boosting their nutrition, concentration, and school attendance rates.",
      category: "food",
      image: cleanWater4555,
      icon: <Utensils className="h-6 w-6" />,
      location: "10 states across Nigeria",
      startDate: "September 2023",
      beneficiaries: "8,500+",
      status: "active",
      progress: 45,
      impact: "30% increase in school attendance",
      goals: ["15,000 children fed daily", "Local farmers supported", "Nutrition education"]
    },
    {
      id: 5,
      title: "Girls' Scholarship Fund",
      description: "Sponsoring secondary education for girls from low-income families to reduce dropout rates.",
      longDescription: "We provide full scholarships, school supplies, and mentorship programs to keep girls in school and empower them for the future.",
      category: "education",
      image: cleanWater455533,
      icon: <BookOpen className="h-6 w-6" />,
      location: "Nationwide",
      startDate: "January 2024",
      beneficiaries: "1,200+",
      status: "active",
      progress: 55,
      impact: "95% retention rate",
      goals: ["2,000 scholarships awarded", "Mentorship program", "Career guidance"]
    },
    {
      id: 6,
      title: "Emergency Shelter Program",
      description: "Providing temporary housing and support services for families displaced by natural disasters.",
      longDescription: "We offer immediate shelter, food, medical care, and psychosocial support to families affected by floods and other emergencies.",
      category: "healthcare",
      image: cleanWater45553344,
      icon: <Home className="h-6 w-6" />,
      location: "Flood-affected regions",
      startDate: "October 2023",
      beneficiaries: "3,500+",
      status: "active",
      progress: 80,
      impact: "500+ families relocated to permanent housing",
      goals: ["Emergency response teams", "1,000 homes rebuilt", "Community resilience training"]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Hero Section with Background Image - using child-caregiver22.jpg */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${childCaregiver22})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundAttachment: "fixed"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
          
          <div className="relative z-10 container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 border border-amber-500/30">
                <Heart className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Making a Difference</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                Transforming communities through sustainable initiatives and compassionate action.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-gray-800 border-b border-gray-700">
          <div className="container-custom">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${
                    filter === cat
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid with Glass Effect Background - using Address334.jpg */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${addressBg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundAttachment: "fixed"
            }}
          />
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:shadow-amber-500/20 border border-white/20 hover:border-amber-500/50">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold shadow-lg ${
                          project.status === 'active' 
                            ? 'bg-emerald-500' 
                            : 'bg-slate-500'
                        }`}>
                          {project.status === 'active' ? '● Active' : '✓ Completed'}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 text-white text-sm mb-2">
                          <MapPin className="h-4 w-4 text-amber-400" />
                          <span className="text-gray-200">{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white text-sm">
                          <Calendar className="h-4 w-4 text-amber-400" />
                          <span className="text-gray-200">Started: {project.startDate}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-white/20 rounded-xl text-amber-400">
                          {project.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-200 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Progress Bar */}
                      {project.status === 'active' && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-300 font-medium">Project Progress</span>
                            <span className="text-amber-400 font-bold">{project.progress}%</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2.5 overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${project.progress}%` }}
                              transition={{ duration: 1, delay: 0.3 }}
                              className="bg-gradient-to-r from-amber-500 to-orange-500 h-2.5 rounded-full shadow-lg"
                            />
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/20">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-white/20 rounded-lg">
                            <Users className="h-3.5 w-3.5 text-amber-400" />
                          </div>
                          <span className="text-sm text-gray-300 font-medium">
                            {project.beneficiaries} beneficiaries
                          </span>
                        </div>
                        <button className="group/btn flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-300">
                          <span className="text-amber-400 font-semibold text-sm">Learn More</span>
                          <ArrowRight className="h-4 w-4 text-amber-400 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20 bg-white/10 backdrop-blur-sm rounded-2xl">
                <p className="text-gray-300 text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Impact Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                  <HandHeart className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Want to Make an Impact?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Your support helps us expand our projects and reach more communities in need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-amber-600 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                    Donate Now
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
                  >
                    Volunteer With Us
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </MainLayout>
  );
};

export default Projects;