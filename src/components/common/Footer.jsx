import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import logo from '/src/assets/projects/logo.png'

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log("Subscribe button clicked - decorative")
  }

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* About Section with Logo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={logo} 
                alt="HopeNGO Logo" 
                className="h-10 w-10 object-contain rounded-full"
              />
              <span className="text-2xl font-bold">
                <span className="text-white">Hope</span>
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">NGO</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering communities and changing lives through sustainable development programs worldwide.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-amber-500 transition-all duration-300">
                <FaFacebook className="h-4 w-4 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-amber-500 transition-all duration-300">
                <FaTwitter className="h-4 w-4 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-amber-500 transition-all duration-300">
                <FaInstagram className="h-4 w-4 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-amber-500 transition-all duration-300">
                <FaYoutube className="h-4 w-4 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Programs</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Projects</Link></li>
              <li><Link to="/impact" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Impact</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">News</Link></li>
            </ul>
          </div>
          
          {/* Get Involved */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Get Involved</h3>
            <ul className="space-y-3">
              <li><Link to="/donate" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Donate</Link></li>
              <li><Link to="/volunteer" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Volunteer</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Careers</Link></li>
              <li><Link to="/partners" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Partner With Us</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Events</Link></li>
            </ul>
          </div>
          
          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">123 NGO Street, Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+234 (0) 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@hopengo.org</span>
              </li>
            </ul>
            
            {/* Newsletter */}
            <p className="text-gray-400 text-sm mb-3">Subscribe for updates</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-500 transition-colors text-sm"
              />
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                Subscribe
                <Send className="h-3 w-4" />
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2024 HopeNGO. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-3">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/faq" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer