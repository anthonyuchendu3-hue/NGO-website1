import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/common/ScrollToTop'

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Programs from './pages/Programs/Programs'
import Projects from './pages/Projects/Projects'
import Donate from './pages/Donate/Donate'
import Volunteer from './pages/Volunteer/Volunteer'
import Careers from './pages/Careers/Careers'
import Partners from './pages/Partners/Partners'
import Impact from './pages/Impact/Impact'
import Events from './pages/Events/Events'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'

// Legal Pages
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import FAQ from './pages/FAQ'

// Program Sub-pages
import Education from './pages/Programs/Education'
import Healthcare from './pages/Programs/Healthcare'
import ChildProtection from './pages/Programs/ChildProtection'
import EmergencyRelief from './pages/Programs/EmergencyRelief'

// Page titles mapping
const pageTitles = {
  '/': 'Home | HopeNGO - Transforming Lives',
  '/about': 'About Us | HopeNGO',
  '/programs': 'Our Programs | HopeNGO',
  '/programs/education': 'Education Program | HopeNGO',
  '/programs/healthcare': 'Healthcare Program | HopeNGO',
  '/programs/child-protection': 'Child Protection | HopeNGO',
  '/programs/emergency': 'Emergency Relief | HopeNGO',
  '/projects': 'Our Projects | HopeNGO',
  '/donate': 'Donate | HopeNGO - Make a Difference',
  '/volunteer': 'Volunteer | HopeNGO - Join Our Mission',
  '/careers': 'Careers | HopeNGO - Work With Us',
  '/partners': 'Partners | HopeNGO - Collaborate With Us',
  '/impact': 'Our Impact | HopeNGO - By the Numbers',
  '/events': 'Events | HopeNGO - Join Us',
  '/blog': 'News & Stories | HopeNGO',
  '/contact': 'Contact Us | HopeNGO',
  '/privacy-policy': 'Privacy Policy | HopeNGO',
  '/terms': 'Terms & Conditions | HopeNGO',
  '/faq': 'FAQ | HopeNGO - Frequently Asked Questions',
}

// Component to handle page title updates
const PageTitleUpdater = () => {
  const location = useLocation()

  useEffect(() => {
    const title = pageTitles[location.pathname] || 'HopeNGO | Transforming Lives'
    document.title = title
  }, [location])

  return null
}

const AppRoutes = () => {
  return (
    <>
      <PageTitleUpdater />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        
        <Route path="/programs/education" element={<Education />} />
        <Route path="/programs/healthcare" element={<Healthcare />} />
        <Route path="/programs/child-protection" element={<ChildProtection />} />
        <Route path="/programs/emergency" element={<EmergencyRelief />} />
        
        <Route path="/projects" element={<Projects />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Legal Routes */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  )
}

export default AppRoutes