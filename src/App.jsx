import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AppRoutes from './AppRoutes'
import ScrollToTop from './components/common/ScrollToTop'
import ScrollToTopButton from './components/common/ScrollToTopButton'
import ErrorBoundary from './components/common/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToTopButton />
        <AnimatePresence mode="wait">
          <AppRoutes />
        </AnimatePresence>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App