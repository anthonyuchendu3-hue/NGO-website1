import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import ScrollToTopButton from '../common/ScrollToTopButton'

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default MainLayout