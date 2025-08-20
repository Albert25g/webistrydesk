'use client';

export default function LocationsSection() {
  const locations = [
    {
      city: 'New York, NY',
      address: '475 Park Ave S, New York, NY 10016',
      phone: '+1 (212) 555-0123',
      email: 'nyc@webistrydesk.com',
    },
    {
      city: 'London, UK',
      address: '1 Bishopsgate, London EC2N 3AQ',
      phone: '+44 20 7946 0958',
      email: 'london@webistrydesk.com',
    },
    {
      city: 'Berlin, DE',
      address: 'Friedrichstrasse 68, 10117 Berlin',
      phone: '+49 30 3001 2345',
      email: 'berlin@webistrydesk.com',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black to-[#071029]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-8">
          Professional Locations
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <div
              key={loc.city}
              className="bg-black/50 border border-white/5 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-2">{loc.city}</h3>
              <p className="text-gray-300">{loc.address}</p>
              <p className="mt-3 text-sm text-gray-400">
                Phone:{' '}
                <a
                  href={`tel:${loc.phone}`}
                  className="text-[#00f0ff] hover:underline"
                >
                  {loc.phone}
                </a>
              </p>
              <p className="text-sm text-gray-400">
                Email:{' '}
                <a
                  href={`mailto:${loc.email}`}
                  className="text-[#ff00ea] hover:underline"
                >
                  {loc.email}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
