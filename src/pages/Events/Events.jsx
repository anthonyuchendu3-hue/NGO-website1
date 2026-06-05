import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Ticket, ArrowRight, Sparkles, Search, X, CheckCircle } from 'lucide-react';
import MainLayout from '../../components/layouts/MainLayout';
import statisticsBg99 from '../../assets/projects/statistics-bg99.jpg';
import featuredBg200 from '../../assets/projects/featured-bg200.jpg';
import educationImg from '../../assets/projects/education-for-all.jpg';
import heroBg14 from '../../assets/projects/hero-bg14.avif';
import healthcareImg from '../../assets/projects/healthcare-access.jpg';
import childCaregiver22 from '../../assets/projects/child-caregiver22.jpg';
import childCaregiver22333 from '../../assets/projects/child-caregiver22333.jpg';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventName: '',
    guests: 1
  });

  const categories = ['All', 'Upcoming', 'Workshops', 'Fundraising', 'Community', 'Virtual'];

  const events = [
    {
      id: 1,
      title: "Annual Fundraising Gala 2024",
      description: "Join us for an elegant evening of dinner, dancing, and inspiring stories from the children we've helped. All proceeds support our education programs.",
      date: "April 20, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Grand Ballroom, Lagos Continental Hotel",
      category: "Fundraising",
      image: featuredBg200,
      attendees: 245,
      capacity: 300,
      price: "₦50,000",
      featured: true
    },
    {
      id: 2,
      title: "Education for All Workshop",
      description: "Learn about our education initiatives and how you can support children's access to quality education.",
      date: "May 5, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "HopeNGO Learning Center, Abuja",
      category: "Workshops",
      image: educationImg,
      attendees: 45,
      capacity: 60,
      price: "Free",
      featured: false
    },
    {
      id: 3,
      title: "Virtual Volunteer Orientation",
      description: "New volunteers welcome! Join our online orientation to learn how you can make a difference from anywhere in the world.",
      date: "May 12, 2024",
      time: "3:00 PM - 4:30 PM",
      location: "Online (Zoom)",
      category: "Virtual",
      image: heroBg14,
      attendees: 120,
      capacity: 500,
      price: "Free",
      featured: false
    },
    {
      id: 4,
      title: "Community Health Fair",
      description: "Free health screenings, vaccinations, and health education for families in underserved communities.",
      date: "May 18, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Community Center, Kano",
      category: "Community",
      image: healthcareImg,
      attendees: 0,
      capacity: 500,
      price: "Free",
      featured: true
    },
    {
      id: 5,
      title: "Youth Leadership Summit",
      description: "Empowering the next generation of leaders through mentorship and skill-building workshops.",
      date: "June 8, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Conference Center, Port Harcourt",
      category: "Workshops",
      image: childCaregiver22,
      attendees: 85,
      capacity: 150,
      price: "₦15,000",
      featured: false
    },
    {
      id: 6,
      title: "Charity Run for Education",
      description: "5K run/walk to raise funds for school supplies. Family-friendly event with activities for all ages.",
      date: "June 15, 2024",
      time: "7:00 AM - 12:00 PM",
      location: "National Stadium, Lagos",
      category: "Fundraising",
      image: childCaregiver22333,
      attendees: 0,
      capacity: 1000,
      price: "₦10,000",
      featured: false
    }
  ];

  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const featuredEvent = events.find(event => event.featured);

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setRegistrationData({...registrationData, eventName: event.title});
    setShowRegisterModal(true);
  };

  const handleInputChange = (e) => {
    setRegistrationData({...registrationData, [e.target.name]: e.target.value});
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mykagzjr';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          fullName: registrationData.fullName,
          email: registrationData.email,
          phone: registrationData.phone,
          eventName: registrationData.eventName,
          guests: registrationData.guests,
          eventDate: selectedEvent?.date,
          eventLocation: selectedEvent?.location
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setShowRegisterModal(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        setRegistrationData({
          fullName: '',
          email: '',
          phone: '',
          eventName: '',
          guests: 1
        });
      } else {
        console.error('Formspree error:', response.status);
        alert('Registration failed. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Hero Section - using statistics-bg99.jpg */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url(${statisticsBg99})`,
                backgroundPosition: "center",
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
                <Calendar className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Join Us</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Upcoming{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Events
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                Join us at our upcoming events and be part of the change.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-gray-900 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
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

        {/* Featured Event */}
        {featuredEvent && (
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
                      src={featuredEvent.image} 
                      alt={featuredEvent.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-amber-500 text-white text-xs rounded-full">Featured Event</span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                      {featuredEvent.title}
                    </h2>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 text-amber-400" />
                        {featuredEvent.date} • {featuredEvent.time}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MapPin className="h-4 w-4 text-amber-400" />
                        {featuredEvent.location}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Ticket className="h-4 w-4 text-amber-400" />
                        {featuredEvent.price}
                      </div>
                    </div>
                    <p className="text-gray-400 mb-6 line-clamp-3">
                      {featuredEvent.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Users className="h-4 w-4 text-amber-400" />
                        {featuredEvent.attendees} / {featuredEvent.capacity} registered
                      </div>
                      <button 
                        onClick={() => handleRegisterClick(featuredEvent)}
                        className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-amber-500/30"
                      >
                        Register Now →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Events Grid */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-amber-500/30 transition-all duration-300 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-amber-500 text-white text-xs rounded-full">
                          {event.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
                        <span className="text-amber-400 text-xs">{event.price}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-1">
                        {event.title}
                      </h3>
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <Calendar className="h-3 w-3 text-amber-400" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <MapPin className="h-3 w-3 text-amber-400" />
                          {event.location.length > 30 ? event.location.substring(0, 30) + '...' : event.location}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {event.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                          <Users className="h-3 w-3" />
                          {event.attendees} / {event.capacity}
                        </div>
                        <button 
                          onClick={() => handleRegisterClick(event)}
                          className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold px-4 py-1.5 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-amber-500/25"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">No events found. Check back soon!</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Want to Host an Event?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Partner with us to host an event that supports our mission and makes a difference.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="/contact" className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-3.5 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>

      {/* Registration Modal */}
      <AnimatePresence>
        {showRegisterModal && selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto" onClick={() => setShowRegisterModal(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative bg-gray-800 rounded-3xl max-w-md w-full p-6 border border-amber-500/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowRegisterModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Register for Event</h3>
                <p className="text-gray-400 text-sm">{selectedEvent.title}</p>
                <p className="text-gray-500 text-xs mt-1">{selectedEvent.date} • {selectedEvent.location}</p>
              </div>

              <form onSubmit={handleRegistrationSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={registrationData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={registrationData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={registrationData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white"
                    placeholder="+234 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-1">Number of Guests</label>
                  <select
                    name="guests"
                    value={registrationData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 text-white"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowRegisterModal(false)}
                    className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-amber-500/30 disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Submitting...' : 'Register'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2"
          >
            <CheckCircle className="h-5 w-5" />
            Registration submitted successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </MainLayout>
  );
};

export default Events;