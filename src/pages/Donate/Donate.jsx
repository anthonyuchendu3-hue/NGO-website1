import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Clock, Lock, CheckCircle, Globe, X, Building, Gift, Target, Users, Coffee, Sparkles } from 'lucide-react'
import MainLayout from '../../components/layouts/MainLayout'
import heroBg from '../../assets/projects/hero-bg.avif'

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState('one-time')
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [donorEmail, setDonorEmail] = useState('')
  const [donorName, setDonorName] = useState('')
  const [isPaystackLoaded, setIsPaystackLoaded] = useState(false)
  const [hoveredAmount, setHoveredAmount] = useState(null)

  const presetAmounts = [
    { value: 2500, label: "Basic", icon: Coffee, impact: "School supplies for a child" },
    { value: 5000, label: "Standard", icon: Heart, impact: "Medical checkup for 10 children" },
    { value: 10000, label: "Premium", icon: Gift, impact: "Clean water for a family" },
    { value: 25000, label: "Gold", icon: Target, impact: "School fees for a child" },
    { value: 50000, label: "Platinum", icon: Building, impact: "Build a classroom" },
  ]

  // Load Paystack script manually
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://js.paystack.co/v1/inline.js'
    script.onload = () => setIsPaystackLoaded(true)
    document.body.appendChild(script)
  }, [])

  const getDisplayAmount = () => {
    return selectedAmount || (customAmount ? parseFloat(customAmount) : 0)
  }

  const handlePaystackPayment = () => {
    const amount = getDisplayAmount()
    if (amount <= 0) {
      alert('Please select or enter a donation amount')
      return
    }
    if (!donorEmail) {
      alert('Please enter your email address')
      return
    }

    const handler = window.PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email: donorEmail,
      amount: amount * 100,
      currency: 'NGN',
      ref: `HOPENG-${Date.now()}-${Math.floor(Math.random() * 1000000)}`,
      metadata: {
        custom_fields: [
          {
            display_name: "Donor Name",
            variable_name: "donor_name",
            value: donorName || "Anonymous"
          },
          {
            display_name: "Donation Type",
            variable_name: "donation_type",
            value: donationType
          }
        ]
      },
      channels: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer'],
      callback: (response) => {
        console.log('Payment Success:', response)
        alert(`Thank you for your ${donationType} donation of ₦${amount.toLocaleString()}! 🎉\n\nReference: ${response.reference}`)
        setSelectedAmount(null)
        setCustomAmount('')
        setDonorEmail('')
        setDonorName('')
      },
      onClose: () => {
        console.log('Payment modal closed')
      }
    })

    handler.openIframe()
  }

  const handleDonate = () => {
    const amount = getDisplayAmount()
    if (amount <= 0) {
      alert('Please select or enter a donation amount')
      return
    }
    if (!donorEmail) {
      alert('Please enter your email address')
      return
    }
    handlePaystackPayment()
  }

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
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
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Make a Difference</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Donate{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Now
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                Your generous donation helps us reach more children and communities in need.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Donation Section - Dark Premium Design */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            
            {/* Section Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Give Today</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                  Choose Your Donation Amount
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto"></div>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                  Every contribution, no matter the size, makes a lasting impact on children's lives.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Donation Form - Dark Card */}
              <div className="lg:col-span-2">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
                  {/* Header with gradient */}
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
                    <h3 className="text-white font-bold text-lg">Make a Donation</h3>
                    <p className="text-white/80 text-sm">Your support changes lives</p>
                  </div>
                  
                  <div className="p-6 md:p-8">
                    {/* Donation Type Toggle */}
                    <div className="mb-8">
                      <label className="block text-gray-300 font-semibold mb-3">Select Donation Type</label>
                      <div className="flex gap-3 p-1 bg-gray-700 rounded-xl w-full max-w-xs">
                        <button
                          onClick={() => setDonationType('one-time')}
                          className={`flex-1 py-2.5 px-4 rounded-lg font-semibold transition-all ${
                            donationType === 'one-time' 
                              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md' 
                              : 'text-gray-300 hover:bg-gray-600'
                          }`}
                        >
                          One-time
                        </button>
                        <button
                          onClick={() => setDonationType('monthly')}
                          className={`flex-1 py-2.5 px-4 rounded-lg font-semibold transition-all ${
                            donationType === 'monthly' 
                              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md' 
                              : 'text-gray-300 hover:bg-gray-600'
                          }`}
                        >
                          Monthly
                        </button>
                      </div>
                    </div>

                    {/* Premium Preset Amount Cards */}
                    <div className="mb-6">
                      <label className="block text-gray-300 font-semibold mb-3">Select Amount</label>
                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                        {presetAmounts.map((amount) => (
                          <motion.button
                            key={amount.value}
                            whileHover={{ y: -4 }}
                            onHoverStart={() => setHoveredAmount(amount.value)}
                            onHoverEnd={() => setHoveredAmount(null)}
                            onClick={() => {
                              setSelectedAmount(amount.value)
                              setCustomAmount('')
                            }}
                            className={`group relative overflow-hidden rounded-xl p-3 text-center transition-all ${
                              selectedAmount === amount.value
                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                                : 'bg-gray-700 border border-gray-600 hover:border-amber-500 text-gray-300'
                            }`}
                          >
                            <amount.icon className={`h-5 w-5 mx-auto mb-1 transition-all ${
                              selectedAmount === amount.value ? 'text-white' : 'text-amber-400'
                            }`} />
                            <div className="font-bold text-base">₦{amount.value.toLocaleString()}</div>
                            <div className={`text-xs mt-1 transition-all ${
                              selectedAmount === amount.value ? 'text-white/80' : 'text-gray-400'
                            }`}>
                              {amount.label}
                            </div>
                            {hoveredAmount === amount.value && (
                              <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400/50" />
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Custom Amount */}
                    <div className="mb-6">
                      <label className="block text-gray-300 font-semibold mb-2">Custom Amount (₦)</label>
                      <div className="relative group">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-bold text-xl">₦</span>
                        <input
                          type="number"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value)
                            setSelectedAmount(null)
                          }}
                          placeholder="Enter any amount"
                          className="w-full pl-10 pr-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 transition-all text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Donor Information */}
                    <div className="mb-6 space-y-4">
                      <h3 className="font-semibold text-white border-l-4 border-amber-500 pl-3">Your Information</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-400 text-sm mb-1">Full Name</label>
                          <input
                            type="text"
                            value={donorName}
                            onChange={(e) => setDonorName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 transition-all text-white placeholder:text-gray-400"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 text-sm mb-1">Email Address *</label>
                          <input
                            type="email"
                            value={donorEmail}
                            onChange={(e) => setDonorEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                            className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-xl focus:outline-none focus:border-amber-500 transition-all text-white placeholder:text-gray-400"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Anonymous Option */}
                    <div className="flex items-center gap-3 mb-8 p-3 bg-gray-700/50 rounded-xl">
                      <input
                        type="checkbox"
                        id="anonymous"
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                        className="w-5 h-5 text-amber-500 rounded focus:ring-amber-500"
                      />
                      <label htmlFor="anonymous" className="text-gray-300">
                        Make this donation anonymous
                      </label>
                    </div>

                    {/* Donate Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleDonate}
                      disabled={!isPaystackLoaded}
                      className="relative w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all overflow-hidden group"
                    >
                      <span className="relative z-10">{donationType === 'monthly' ? 'Donate Monthly' : 'Donate Now'}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>

                    {/* Secure Badge */}
                    <div className="flex items-center justify-center gap-2 mt-4 text-gray-400 text-sm">
                      <Lock className="h-4 w-4" />
                      <span>100% secure payment by Paystack</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Info - Dark Premium */}
              <div className="lg:col-span-1">
                {/* Your Impact Card */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-xl border border-gray-700 mb-6 sticky top-24">
                  <div className="px-6 py-4 border-b border-gray-700">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-amber-400" />
                      <h3 className="text-white font-bold text-lg">Your Impact</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-400 text-sm mb-4">Your donation helps provide:</p>
                    <div className="space-y-4">
                      {presetAmounts.map((amount, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`flex items-start gap-3 group cursor-pointer p-2 rounded-xl transition-all ${
                            selectedAmount === amount.value ? 'bg-amber-500/10 border border-amber-500/30' : 'hover:bg-gray-700/50'
                          }`}
                          onClick={() => {
                            setSelectedAmount(amount.value)
                            setCustomAmount('')
                          }}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition ${
                            selectedAmount === amount.value ? 'bg-amber-500' : 'bg-gray-700 group-hover:bg-gray-600'
                          }`}>
                            <amount.icon className={`h-4 w-4 ${
                              selectedAmount === amount.value ? 'text-white' : 'text-amber-400'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-white">₦{amount.value.toLocaleString()}</div>
                            <div className="text-gray-400 text-xs">{amount.impact}</div>
                          </div>
                          {selectedAmount === amount.value && (
                            <CheckCircle className="h-5 w-5 text-amber-400" />
                          )}
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-700">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Users className="h-4 w-4 text-amber-400" />
                        <span>Join 15,000+ monthly donors</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Donate Card */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-gray-700">
                  <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-amber-400" />
                    Why Donate to HopeNGO?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-emerald-400" />
                      </div>
                      <span className="text-gray-300 text-sm">90% of funds go directly to programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Globe className="h-3 w-3 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Operations in 45+ countries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-3 w-3 text-purple-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Tax-deductible receipts provided</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges - Dark */}
        <section className="py-12 bg-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              <span className="text-gray-500 text-sm">★★★★★ Trustpilot Rating 4.9</span>
              <span className="text-gray-500 text-sm">Charity Navigator ★★★★★</span>
              <span className="text-gray-500 text-sm">BBB Accredited Charity</span>
              <span className="text-gray-500 text-sm">GuideStar Gold Seal</span>
              <span className="text-gray-500 text-sm">Paystack Secured</span>
            </div>
          </div>
        </section>
      </motion.div>
    </MainLayout>
  )
}

export default Donate