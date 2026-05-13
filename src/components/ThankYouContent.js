'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Calendar, Mail, ArrowRight } from 'lucide-react'

export default function ThankYouContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [registration, setRegistration] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (sessionId) {
      // In a real app, you might fetch registration details from your API
      // For now, we'll just show a success message
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [sessionId])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-10 h-10 text-green-600" />
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Registration Confirmed!
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Thank you for registering for our workshop. We've sent a confirmation email with all the details.
          </p>

          {/* What's Next */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Next?</h2>

            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Check Your Email</h3>
                  <p className="text-gray-600">We've sent workshop details and preparation materials to your inbox.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Save the Date</h3>
                  <p className="text-gray-600">Add the workshop date to your calendar. We'll send reminders as the date approaches.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Prepare & Participate</h3>
                  <p className="text-gray-600">Review any pre-workshop materials and come ready to learn and engage.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/workshops"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              View More Workshops
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-2">Questions about your registration?</p>
            <a
              href="mailto:hello@navigatebusiness.co.uk"
              className="text-primary hover:text-primary/80 font-medium"
            >
              Contact our team →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}