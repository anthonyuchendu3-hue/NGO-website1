import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const pageTitles = {
  '/': 'Home | Transforming Lives',
  '/about': 'About Us | HopeNGO',
  '/programs': 'Our Programs | HopeNGO',
  '/programs/education': 'Education Program | HopeNGO',
  '/programs/healthcare': 'Healthcare Program | HopeNGO',
  '/programs/child-protection': 'Child Protection | HopeNGO',
  '/programs/emergency': 'Emergency Relief | HopeNGO',
  '/projects': 'Our Projects | HopeNGO',
  '/donate': 'Donate | HopeNGO',
  '/volunteer': 'Volunteer | HopeNGO',
  '/careers': 'Careers | HopeNGO',
  '/partners': 'Partners | HopeNGO',
  '/impact': 'Our Impact | HopeNGO',
  '/events': 'Events | HopeNGO',
  '/blog': 'News & Stories | HopeNGO',
  '/contact': 'Contact Us | HopeNGO',
  '/privacy-policy': 'Privacy Policy | HopeNGO',
  '/terms': 'Terms & Conditions | HopeNGO',
  '/faq': 'FAQ | HopeNGO',
}

const usePageTitle = () => {
  const location = useLocation()

  useEffect(() => {
    const title = pageTitles[location.pathname] || 'HopeNGO | Transforming Lives'
    document.title = title
  }, [location])
}

export default usePageTitle