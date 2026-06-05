import React from 'react'
import { motion } from 'framer-motion'
import Hero from './Hero'
import Statistics from './Statistics'
import FeaturedProjects from './FeaturedProjects'
import Testimonials from './Testimonials'
import Newsletter from './Newsletter'
import MainLayout from '../../components/layouts/MainLayout'

const Home = () => {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Hero />
        <Statistics />
        <FeaturedProjects />
        <Testimonials />
        <Newsletter />
      </motion.div>
    </MainLayout>
  )
}

export default Home