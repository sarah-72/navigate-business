'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/button'

export default function MembershipSuccess() {
  const [membershipDetails, setMembershipDetails] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      const params = new URLSearchParams(window.location.search)
      const sessionId = params.get('session_id')

      if (!sessionId) {
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`/api/stripe/session/${sessionId}`)

        if (!response.ok) {
          throw new Error('Failed to fetch session')
        }

        const data = await response.json()
        setMembershipDetails(data)
      } catch (error) {
        console.error('Session fetch error:', error)
      } finally {
        setLoading(false)
      }
    }

    run()
  }, [])

  return (
    <div className="min-h-screen bg-linear-to-br from-(--background) to-(--accent)/20">
      <div className="h-20 sm:h-24" />

      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-2xl">

          {/* Success header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-12 h-12 text-(--primary)" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-(--secondary) mb-4">
              Welcome to Navigate Business Membership!
            </h1>

            <p className="text-lg text-(--muted-foreground) mb-2">
              Your payment has been processed successfully.
            </p>

            <p className="text-(--muted-foreground)">
              Check your email for next steps.
            </p>
          </div>

          {/* Loading state */}
          {loading && (
            <p className="text-center text-sm text-gray-500">
              Loading your membership...
            </p>
          )}

          {/* Debug / status */}
          {membershipDetails && (
            <div className="text-center text-sm text-gray-500 mb-6">
              Payment status: {membershipDetails.paymentStatus}
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Back to Home
              </Button>
            </Link>

            <a href="mailto:hello@navigatebusiness.co.uk">
              <Button size="lg" className="w-full sm:w-auto">
                Contact Support
              </Button>
            </a>
          </div>

        </div>
      </main>
    </div>
  )
}