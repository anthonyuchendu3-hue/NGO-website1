import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, Sparkles, Heart, Users, DollarSign, Clock, Shield, Mail, HelpCircle } from 'lucide-react'
import MainLayout from '../components/layouts/MainLayout'
import heroBg from '../assets/projects/hero-bg.avif'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How can I donate to HopeNGO?",
      answer: "You can donate directly through our website by clicking the 'Donate' button. We accept credit/debit cards, bank transfers, and mobile payments. You can also set up monthly recurring donations.",
      category: "Donations"
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes, HopeNGO is a registered non-profit organization. All donations are tax-deductible to the extent allowed by law. You will receive a receipt for your donation via email.",
      category: "Donations"
    },
    {
      question: "How do I become a volunteer?",
      answer: "Visit our Volunteer page and fill out the application form. We'll review your application and contact you within 48 hours with next steps.",
      category: "Volunteering"
    },
    {
      question: "What programs does HopeNGO run?",
      answer: "We run four main programs: Education, Healthcare, Child Protection, and Emergency Relief. Each program focuses on creating sustainable change in underserved communities.",
      category: "Programs"
    },
    {
      question: "How can I partner with HopeNGO?",
      answer: "We welcome corporate and individual partnerships. Please visit our Partners page or contact us directly to discuss partnership opportunities.",
      category: "Partnerships"
    },
    {
      question: "Where does my donation go?",
      answer: "90% of all donations go directly to our programs. The remaining 10% covers administrative and operational costs. We maintain transparent financial reporting.",
      category: "Donations"
    },
    {
      question: "Can I sponsor a child's education?",
      answer: "Yes! Through our Girls' Scholarship Fund and Education program, you can sponsor a child's education. Contact us for more details on sponsorship opportunities.",
      category: "Programs"
    },
    {
      question: "How can I stay updated on HopeNGO's work?",
      answer: "Subscribe to our newsletter, follow us on social media, or check our blog regularly for updates and impact stories from our programs.",
      category: "Updates"
    }
  ]

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
              <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 border border-amber-500/30">
                <HelpCircle className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Got Questions?</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                Find answers to common questions about our programs, donations, and how you can help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-amber-500/30 transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
                  >
                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-amber-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-700"
                      >
                        <div className="px-6 py-5">
                          <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                          <div className="mt-3">
                            <span className="inline-block px-2 py-1 bg-amber-500/20 rounded-full text-amber-400 text-xs">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Still have questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 text-center bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl p-8 border border-amber-500/30"
            >
              <Mail className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
              <p className="text-gray-400 mb-4">Can't find the answer you're looking for? Contact our support team.</p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                Contact Us
                <Mail className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </MainLayout>
  )
}

export default FAQ