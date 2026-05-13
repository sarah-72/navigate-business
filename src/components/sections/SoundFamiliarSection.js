'use client';

export default function SoundFamiliarSection() {
  const individualChallenges = [
    'I\'ve got an idea but no plan',
    'I feel stuck and uncertain',
    'I don\'t know what\'s working in my business',
    'I need someone to believe in my vision',
    'I\'m overwhelmed by all the decisions'
  ];

  const organisationChallenges = [
    'You need reliable delivery partners',
    'You need experienced, engaging mentors',
    'You need quality programme delivery',
    'You need real outcomes and impact',
    'You need flexibility and responsiveness'
  ];

  return (
    <section className="container-section bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-charcoal mb-16">
          Sound Familiar?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* For Individuals */}
          <div>
            <h3 className="text-2xl font-bold text-charcoal mb-8">If You're An Individual</h3>
            <div className="space-y-4">
              {individualChallenges.map((challenge) => (
                <div key={challenge} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-mint-green text-white text-sm font-bold">
                      ✓
                    </div>
                  </div>
                  <p className="ml-4 text-lg text-charcoal/80">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For Organisations */}
          <div>
            <h3 className="text-2xl font-bold text-charcoal mb-8">If You're An Organisation</h3>
            <div className="space-y-4">
              {organisationChallenges.map((challenge) => (
                <div key={challenge} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-mint-green text-white text-sm font-bold">
                      ✓
                    </div>
                  </div>
                  <p className="ml-4 text-lg text-charcoal/80">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-mint-green/10 border-l-4 border-mint-green rounded-lg">
          <p className="text-xl text-charcoal font-semibold">
            That's where Navigate Business comes in. <span className="text-mint-green">No fluff, no waffle</span> — just practical business support that works in the real world.
          </p>
        </div>
      </div>
    </section>
  );
}
