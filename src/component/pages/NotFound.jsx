import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gray-800">404</h1>
          <p className="text-2xl font-semibold text-gray-700">Oops! Page not found</p>
          <p className="mt-4 text-gray-600">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="mt-6 inline-block px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
