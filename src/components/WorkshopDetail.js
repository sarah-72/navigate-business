'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight, CheckCircle } from 'lucide-react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function WorkshopDetail({ workshop }) {
  const [isRegistering, setIsRegistering] = useState(false)
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
  })

  const handleRegistration = async (e) => {
    e.preventDefault()
    setIsRegistering(true)

    try {
      const stripe = await stripePromise

      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          workshopSlug: workshop.slug.current,
          userEmail: registrationData.email,
          userName: registrationData.name,
          successUrl: `${window.location.origin}/workshops/${workshop.slug.current}/thank-you`,
          cancelUrl: window.location.href,
        }),
      })

      const { url } = await response.json()

      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Registration error:', error)
      alert('There was an error processing your registration. Please try again.')
    } finally {
      setIsRegistering(false)
    }
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    }).format(price / 100)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {workshop.title}
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                {workshop.description}
              </p>

              {/* Workshop Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">
                    {new Date(workshop.startDate).toLocaleDateString('en-GB', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">{workshop.duration}</span>
                </div>

                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">{workshop.speaker}</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-gray-700 font-semibold">
                    {formatPrice(workshop.price)}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Registration Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Register for this Workshop
              </h2>

              <form onSubmit={handleRegistration} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={registrationData.name}
                    onChange={(e) => setRegistrationData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={registrationData.email}
                    onChange={(e) => setRegistrationData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isRegistering}
                  className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isRegistering ? 'Processing...' : `Register - ${formatPrice(workshop.price)}`}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4 text-center">
                Secure payment powered by Stripe
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshop Image */}
      {workshop.image && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Image
                src={workshop.image.asset.url}
                alt={workshop.title}
                width={800}
                height={400}
                className="w-full h-64 lg:h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>
      )}

      {/* Workshop Content */}
      {workshop.content && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              {workshop.content.map((block, index) => (
                <div key={index} className="mb-6">
                  {block.children?.map((child, childIndex) => (
                    <span key={childIndex}>{child.text}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Assets/Resources */}
      {workshop.assets && workshop.assets.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Workshop Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {workshop.assets.map((asset, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {asset.title}
                    </h3>
                    {asset.file?.asset?.url && (
                      <Link
                        href={asset.file.asset.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        Download Resource →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}