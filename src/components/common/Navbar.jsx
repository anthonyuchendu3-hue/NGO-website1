import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

// Try different import syntax
import logo from '/src/assets/projects/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'What We Do', dropdown: [
      { name: 'Education', path: '/programs/education' },
      { name: 'Healthcare', path: '/programs/healthcare' },
      { name: 'Child Protection', path: '/programs/child-protection' },
      { name: 'Emergency Relief', path: '/programs/emergency' },
    ]},
    { name: 'Get Involved', dropdown: [
      { name: 'Donate', path: '/donate' },
      { name: 'Volunteer', path: '/volunteer' },
      { name: 'Careers', path: '/careers' },
      { name: 'Partner With Us', path: '/partners' },
    ]},
    { name: 'Impact', path: '/impact' },
    { name: 'News', path: '/blog' },
    { name: 'Resources', dropdown: [
      { name: 'Programs', path: '/programs' },
      { name: 'Events', path: '/events' },
      { name: 'Projects', path: '/projects' },
    ]},
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md shadow-2xl py-3 border-b border-white/10' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo with Image */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img 
                src={logo} 
                alt="HopeNGO Logo" 
                className="h-10 w-10 object-contain rounded-full group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  console.error('Logo failed to load');
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <span className="text-xl md:text-2xl font-bold">
              <span className="text-white">Hope</span>
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">NGO</span>
            </span>
          </Link>

          {/* Mobile: Donate Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <Link 
              to="/donate" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1.5 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300"
            >
              Donate
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, idx) => (
              link.dropdown ? (
                <div key={idx} className="relative group">
                  <button className="flex items-center space-x-1 text-gray-300 hover:text-amber-400 font-medium transition-colors duration-300">
                    <span>{link.name}</span>
                    <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-black/90 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        to={item.path}
                        className="block px-4 py-3 text-gray-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={idx}
                  to={link.path}
                  className="text-gray-300 hover:text-amber-400 font-medium transition-all duration-300 hover:translate-y-[-2px]"
                >
                  {link.name}
                </Link>
              )
            ))}
            
            <Link to="/contact" className="text-gray-300 hover:text-amber-400 font-medium transition-all duration-300">
              Contact
            </Link>
            <Link to="/donate" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-300">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md shadow-2xl border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              {navLinks.map((link, idx) => (
                link.dropdown ? (
                  <div key={idx} className="py-2">
                    <div className="font-semibold text-white mb-2">{link.name}</div>
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        to={item.path}
                        className="block py-2 pl-4 text-gray-400 hover:text-amber-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={idx}
                    to={link.path}
                    className="block py-2 text-gray-300 hover:text-amber-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              
              <div className="pt-4 mt-2 border-t border-white/10">
                <Link 
                  to="/contact" 
                  className="block py-2 text-gray-300 hover:text-amber-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar