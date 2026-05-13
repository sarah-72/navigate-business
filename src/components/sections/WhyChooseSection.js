'use client';

import Link from 'next/link';

export default function WhyChooseSection() {
  const reasons = [
    {
      title: 'Real-World Experience',
      description: 'Decades of hands-on business experience across multiple sectors and markets.'
    },
    {
      title: 'No Corporate Waffle',
      description: 'Straight-talking, honest advice without the jargon. We say what we mean.'
    },
    {
      title: 'Engaging Delivery',
      description: 'Interactive, practical workshops and mentoring that people actually enjoy and apply.'
    },
    {
      title: 'Strong Client Outcomes',
      description: 'Our clients see real results: businesses launched, revenue growth, better decisions, confidence.'
    },
    {
      title: 'Trusted Partner Approach',
      description: 'We work as an extension of your team, invested in your success and flexible to your needs.'
    },
    {
      title: 'Virtual & In-Person',
      description: 'Flexible delivery options to suit your location and schedule. You\'re not limited by geography.'
    }
  ];

  return (
    <section className="container-section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-charcoal mb-4">
          Why Choose Navigate Business?
        </h2>
        <p className="text-xl text-center text-charcoal/70 max-w-2xl mx-auto mb-16">
          We're not just another business mentor. We're your business wingwoman.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-mint-green mb-3">{reason.title}</h3>
              <p className="text-charcoal/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
