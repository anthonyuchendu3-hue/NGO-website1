import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="relative">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-secondary-600 absolute top-0 left-0" style={{ animationDirection: 'reverse' }}></div>
      </div>
    </div>
  )
}

export default LoadingSpinner