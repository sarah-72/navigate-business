'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Oops!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Something went wrong. We're working to fix this.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="block w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Go Home
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">
            If this problem persists, please contact us:
          </p>
          <a
            href="mailto:hello@navigatebusiness.co.uk"
            className="text-primary hover:text-primary/80 font-medium"
          >
            hello@navigatebusiness.co.uk
          </a>
        </div>
      </div>
    </div>
  )
}