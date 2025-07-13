'use client';

import Link from 'next/link';

export default function Events() {
  // Temporarily disable authentication for development
  // const { isAuthenticated, requestAccess } = useAuth();

  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');

  const events = [
    {
      id: 1,
      title: "Onam 2025",
      date: "September 5, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "COSMA Community Center",
      description: "Join us for a grand Onam celebration with traditional feast, cultural performances, and games.",
      image: `${basePath}/Sadhya_DSW.jpg`,
      category: "festival",
      color: "from-kerala-orange to-kerala-red",
      details: [
        "Traditional Onam Sadhya feast with 26+ dishes",
        "Kathakali and cultural performances",
        "Traditional Kerala games and activities",
        "Community bonding and networking",
        "Cultural music and dance programs",
        "Family photo sessions in traditional attire"
      ]
    },
    {
      id: 2,
      title: "Christmas and New Year 2026",
      date: "December 25, 2025 - January 1, 2026",
      time: "Various times",
      location: "COSMA Community Center & Local Venues",
      description: "Celebrate the festive season with our community. Special events, carols, and New Year celebrations.",
      image: `${basePath}/NewYear.jpg`,
      category: "celebration",
      color: "from-kerala-green to-kerala-teal",
      details: [
        "Christmas carol singing and prayers",
        "Traditional Kerala Christmas feast",
        "New Year countdown celebration",
        "Family games and entertainment",
        "Cultural exchange programs"
      ]
    },
    {
      id: 3,
      title: "Vishu 2026",
      date: "April 14, 2026",
      time: "6:00 AM - 2:00 PM",
      location: "COSMA Community Center",
      description: "Welcome the Malayalam New Year with traditional Vishu celebrations, Kani viewing, and festive activities.",
      image: `${basePath}/Vishu_Kani_foods.jpg`,
      category: "festival",
      color: "from-kerala-golden to-kerala-orange",
      details: [
        "Traditional Vishu Kani viewing at dawn",
        "Vishu Kaineettam (gift giving)",
        "Traditional Kerala breakfast feast",
        "Cultural programs and music",
        "Family activities and games"
      ]
    },
    {
      id: 4,
      title: "Summer Picnic 2026",
      date: "July 20, 2026",
      time: "10:00 AM - 6:00 PM",
      location: "Garden of the Gods Park",
      description: "Enjoy a fun-filled summer picnic with family activities, games, and delicious Kerala cuisine.",
      image: `${basePath}/picnic.jpg`,
      category: "picnic",
      color: "from-kerala-green to-kerala-teal",
      details: [
        "Outdoor games and activities",
        "Traditional Kerala picnic foods",
        "Nature walks and exploration",
        "Family photo sessions",
        "Cultural music and entertainment"
      ]
    },
    {
      id: 5,
      title: "Onam 2026",
      date: "September 15, 2026",
      time: "6:00 PM - 10:00 PM",
      location: "COSMA Community Center",
      description: "Another year of Onam celebrations with traditional feast, cultural performances, and community bonding.",
      image: `${basePath}/Kathakali_BNC.jpg`,
      category: "festival",
      color: "from-kerala-orange to-kerala-red",
      details: [
        "Grand Onam Sadhya feast",
        "Kathakali and cultural performances",
        "Traditional Kerala games",
        "Community bonding activities",
        "Cultural exhibition and displays"
      ]
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative bg-kerala-gradient-vibrant py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute top-0 left-0 w-32 h-32 bg-kerala-yellow rounded-full opacity-20 kerala-float"></div>
          <div className="absolute top-20 right-10 w-24 h-24 bg-kerala-red rounded-full opacity-30 kerala-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-10 left-20 w-20 h-20 bg-kerala-golden rounded-full opacity-25 kerala-float" style={{animationDelay: '2s'}}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Our Community
              <span className="block kerala-text-gradient drop-shadow-lg">Events</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto font-semibold drop-shadow-lg">
              Join us for exciting cultural celebrations, traditional festivals, and community gatherings throughout the year
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 bg-gradient-to-br from-kerala-dark-golden to-kerala-golden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <div key={event.id} className="bg-dark-gray rounded-lg shadow-lg overflow-hidden kerala-card-hover kerala-shadow-vibrant">
                  <div className="h-48 relative overflow-hidden rounded-lg">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-contain object-center"
                      loading={event.id === 1 ? "eager" : "lazy"}
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-kerala-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {event.category === 'festival' && '🎉 Festival'}
                        {event.category === 'celebration' && '🎄 Celebration'}
                        {event.category === 'picnic' && '🧺 Picnic'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-kerala-golden mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-kerala-red font-semibold mb-2">
                      <span className="mr-4">📅 {event.date}</span>
                      <span>🕒 {event.time}</span>
                    </div>
                    <p className="text-kerala-white font-semibold mb-3">
                      📍 {event.location}
                    </p>
                    <p className="text-gray-300 mb-4">
                      {event.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-kerala-golden font-semibold mb-2">Event Highlights:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {event.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-kerala-golden mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Link 
                        href={`#${event.id}`}
                        className="inline-block bg-gradient-to-r from-kerala-golden to-kerala-orange hover:from-kerala-dark-golden hover:to-kerala-red text-white px-4 py-2 rounded font-semibold transition-all duration-200 transform hover:scale-105"
                      >
                        Learn More
                      </Link>
                      <span className="text-kerala-golden text-sm font-semibold">
                        Event #{event.id}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-kerala-gradient-sunset to-kerala-gradient-vibrant">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
              Join Our Community Events
            </h2>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              Don&apos;t miss out on our exciting cultural celebrations and community gatherings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-kerala-dark-golden hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 kerala-shadow-vibrant"
              >
                Contact Us
              </Link>
              <Link 
                href="/gallery"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-kerala-dark-golden px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 