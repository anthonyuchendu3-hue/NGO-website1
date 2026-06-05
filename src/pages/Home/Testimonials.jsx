import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import testimonialBg from '../../assets/projects/testimonial-bg.jpg'
import testimonial1 from '../../assets/projects/testimonial-1.jpg'
import testimonial2 from '../../assets/projects/testimonial-2.jpg'
import testimonial3 from '../../assets/projects/testimonial-3.jpg'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Amara Okonkwo",
      role: "Mother of two",
      content: "The education program changed my children's lives. They can now read and write. I am forever grateful.",
      image: testimonial1
    },
    {
      id: 2,
      name: "James Mwangi",
      role: "Community Elder",
      content: "Clean water in our village for the first time. No more walking 5 miles. Thank you.",
      image: testimonial2
    },
    {
      id: 3,
      name: "Fatima Hassan",
      role: "School Teacher",
      content: "The new school building gave hope to 200 children in our town. Education is power.",
      image: testimonial3
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${testimonialBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed"
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">What People </span>
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Say</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 text-sm uppercase tracking-wider">Real stories from those we've helped</p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-white/20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Quote Icon */}
              <Quote className="h-10 w-10 text-amber-400 mx-auto mb-6" />

              {/* Profile Image */}
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-amber-500"
              />

              {/* Testimonial Text */}
              <p className="text-white text-lg sm:text-xl italic mb-6 max-w-2xl mx-auto">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Name */}
              <h4 className="text-xl font-bold text-white">
                {testimonials[currentIndex].name}
              </h4>
              
              {/* Role */}
              <p className="text-amber-400">
                {testimonials[currentIndex].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition border border-white/20"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition border border-white/20"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'w-8 bg-amber-500' 
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials