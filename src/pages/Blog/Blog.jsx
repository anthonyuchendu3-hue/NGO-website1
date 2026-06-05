import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight, Search, Heart, MessageCircle, Clock, TrendingUp, Sparkles } from 'lucide-react'
import MainLayout from '../../components/layouts/MainLayout'
import heroNew2 from '../../assets/projects/hero-New2.jpg'
import heroBg10 from '../../assets/projects/hero-bg10.avif'
import statisticsBg from '../../assets/projects/statistics-bg.jpg'
import statisticsBg50 from '../../assets/projects/statistics-bg50.jpg'
import featuredBg from '../../assets/projects/featured-bg.jpg'
import featuredBg100 from '../../assets/projects/featured-bg100.jpg'
import featuredBg200 from '../../assets/projects/featured-bg200.jpg'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Education', 'Healthcare', 'Success Stories', 'Events', 'Partners', 'Announcements']

  const blogPosts = [
    {
      id: 1,
      title: "New School Opens in Rural Kenya",
      excerpt: "Thanks to our generous donors, we've opened a new school serving 500 children in the Kisumu region. This school provides quality education to children who previously had no access to schooling.",
      image: statisticsBg,
      date: "March 15, 2024",
      author: "Sarah Johnson",
      category: "Education",
      readTime: "5 min read",
      likes: 124,
      comments: 18
    },
    {
      id: 2,
      title: "Clean Water Project Reaches 10,000 Families",
      excerpt: "Our clean water initiative has successfully provided safe drinking water to over 10,000 families in Tanzania. This project has reduced waterborne diseases significantly.",
      image: featuredBg,
      date: "March 10, 2024",
      author: "Michael Chen",
      category: "Healthcare",
      readTime: "4 min read",
      likes: 89,
      comments: 12
    },
    {
      id: 3,
      title: "Annual Fundraising Gala 2024",
      excerpt: "Join us for our annual fundraising gala celebrating the impact we've made together over the past year. Save the date for this special evening.",
      image: featuredBg200,
      date: "March 5, 2024",
      author: "Emily Williams",
      category: "Events",
      readTime: "3 min read",
      likes: 56,
      comments: 8
    },
    {
      id: 4,
      title: "Amina's Journey: From Struggle to Success",
      excerpt: "Read the inspiring story of Amina, a young girl who overcame incredible odds with the help of our education program.",
      image: featuredBg100,
      date: "February 28, 2024",
      author: "David Okonkwo",
      category: "Success Stories",
      readTime: "6 min read",
      likes: 234,
      comments: 45
    },
    {
      id: 5,
      title: "New Partnership with Global Health Foundation",
      excerpt: "We're excited to announce our new partnership with the Global Health Foundation to expand healthcare access across Africa.",
      image: statisticsBg50,
      date: "February 20, 2024",
      author: "Dr. James Wilson",
      category: "Partners",
      readTime: "4 min read",
      likes: 67,
      comments: 9
    },
    {
      id: 6,
      title: "Volunteer Spotlight: Meet Our Heroes",
      excerpt: "Highlighting the incredible volunteers who dedicate their time and energy to make our mission possible.",
      image: heroBg10,
      date: "February 15, 2024",
      author: "Lisa Martinez",
      category: "Announcements",
      readTime: "5 min read",
      likes: 178,
      comments: 32
    }
  ]

  const featuredPost = blogPosts[0]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Hero Section - using hero-New2.jpg */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url(${heroNew2})`,
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
              <div className="inline-flex items-center gap-2 bg-amber-500/20 rounded-full px-4 py-1.5 mb-4 border border-amber-500/30">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Latest Updates</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                News &{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                Stay updated with the latest news, impact stories, and announcements from HopeNGO.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-gray-900 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search news and stories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-amber-500 text-white placeholder:text-gray-500"
                />
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:bg-gradient-to-r" />
                </div>
                <div className="p-8 lg:p-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 rounded-full mb-4">
                    <TrendingUp className="h-3 w-3 text-amber-400" />
                    <span className="text-amber-400 text-xs font-semibold">Featured Story</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                    Read Full Story
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid - 6 Cards with local images */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold rounded-full shadow-lg">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                      <Heart className="h-3 w-3 text-amber-400" />
                      <span className="text-white text-xs">{post.likes}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-amber-400" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-amber-400" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                          <User className="h-3 w-3 text-amber-400" />
                        </div>
                        <span className="text-gray-500 text-xs">{post.author}</span>
                      </div>
                      <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                        Read More
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">No posts found. Try a different search term.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-white/90 mb-6 max-w-md mx-auto">
                Get the latest stories and updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                />
                <button className="bg-white text-amber-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
                  Subscribe
                </button>
              </div>
              <p className="text-white/70 text-xs mt-4">No spam. Unsubscribe anytime.</p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </MainLayout>
  )
}

export default Blog