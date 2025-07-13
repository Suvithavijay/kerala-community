'use client';

import Link from "next/link";

export default function Home() {
  // Temporarily bypass authentication for development
  // const { isAuthenticated, requestAccess } = useAuth();

  const featuredEvents = [
    {
      id: 1,
      title: "Onam 2025",
      date: "September 5, 2025",
      description: "Join us for a grand Onam celebration with traditional feast, cultural performances, and games.",
      image: "/Sadhya_DSW.jpg",
      category: "festival",
      color: "from-kerala-orange to-kerala-red"
    },
    {
      id: 2,
      title: "Christmas and New Year 2026",
      date: "December 25, 2025 - January 1, 2026",
      description: "Celebrate the festive season with our community. Special events, carols, and New Year celebrations.",
      image: "/NewYear.jpg",
      category: "celebration",
      color: "from-kerala-green to-kerala-teal"
    },
    {
      id: 3,
      title: "Vishu 2026",
      date: "April 14, 2026",
      description: "Welcome the Malayalam New Year with traditional Vishu celebrations, Kani viewing, and festive activities.",
      image: "/Vishu_Kani_foods.jpg",
      category: "festival",
      color: "from-kerala-golden to-kerala-orange"
    },
    {
      id: 4,
      title: "Summer Picnic 2026",
      date: "July 20, 2026",
      description: "Enjoy a fun-filled summer picnic with family activities, games, and delicious Kerala cuisine.",
      image: "/picnic.jpg",
      category: "picnic",
      color: "from-kerala-green to-kerala-teal"
    },
    {
      id: 5,
      title: "Onam 2026",
      date: "September 15, 2026",
      description: "Another year of Onam celebrations with traditional feast, cultural performances, and community bonding.",
      image: "/Kathakali_BNC.jpg",
      category: "festival",
      color: "from-kerala-orange to-kerala-red"
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
              Welcome to Our
              <span className="block kerala-text-gradient drop-shadow-lg">COSMA Community</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-4 max-w-4xl mx-auto font-semibold drop-shadow-lg">
              <span className="font-bold">COSMA</span> - Colorado Springs Malayali Community
            </p>
            <p className="text-lg md:text-xl text-white mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-lg">
              Celebrating the rich culture, traditions, and vibrant spirit of Kerala in the heart of Colorado Springs. 
              We bring together Malayali families to create a warm, inclusive environment where everyone feels at home. 
              Join our community to experience the joy of cultural celebrations, traditional cuisine, and the warmth of extended family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/events"
                className="bg-kerala-red hover:bg-kerala-dark-red text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 kerala-shadow-vibrant drop-shadow-lg"
              >
                View Events
              </Link>
              <Link 
                href="/gallery"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-kerala-dark-golden px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 drop-shadow-lg"
              >
                Browse Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* Kerala Highlights Section */}
        <section className="py-16 bg-gradient-to-br from-kerala-green to-kerala-teal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Experience Kerala&apos;s Rich Heritage
              </h2>
              <p className="text-lg text-white opacity-95 drop-shadow-lg">
                Discover the beauty of God&apos;s Own Country in our very own Colorado Springs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-dark-gray rounded-lg p-6 kerala-card-hover kerala-shadow-vibrant">
                <div className="w-16 h-16 bg-kerala-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🍽️</span>
                </div>
                <h3 className="text-xl font-bold text-kerala-golden mb-2 text-center">
                  Authentic Cuisine
                </h3>
                <p className="text-gray-300 text-center">
                  From spicy fish curries to fluffy appams, experience the authentic flavors of Kerala&apos;s traditional cuisine.
                </p>
              </div>
              
              <div className="bg-dark-gray rounded-lg p-6 kerala-card-hover kerala-shadow-vibrant">
                <div className="w-16 h-16 bg-kerala-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎭</span>
                </div>
                <h3 className="text-xl font-bold text-kerala-golden mb-2 text-center">
                  Cultural Arts
                </h3>
                <p className="text-gray-300 text-center">
                  Kathakali, Mohiniyattam, and other classical dance forms that showcase Kerala&apos;s artistic excellence.
                </p>
              </div>
              
              <div className="bg-dark-gray rounded-lg p-6 kerala-card-hover kerala-shadow-vibrant">
                <div className="w-16 h-16 bg-kerala-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌺</span>
                </div>
                <h3 className="text-xl font-bold text-kerala-golden mb-2 text-center">
                  Traditional Festivals
                </h3>
                <p className="text-gray-300 text-center">
                  Onam, Vishu, and other traditional festivals that bring communities together in celebration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kerala Culture Showcase */}
        <section className="py-16 bg-gradient-to-br from-black to-kerala-dark-golden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-kerala-golden mb-4 drop-shadow-lg">
                Kerala Culture Highlights
              </h2>
              <p className="text-lg text-gray-300">
                Experience the essence of Kerala through our community events
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-kerala-red to-kerala-golden rounded-full flex items-center justify-center mx-auto mb-4 kerala-float overflow-hidden">
                  <img
                    src="/kerala-community/OnamSadhya.jpg"
                    alt="Sadhya Feast"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-kerala-golden mb-2">
                  Sadhya Feast
                </h3>
                <p className="text-gray-300 text-sm">
                  Traditional Onam sadhya with 26+ dishes served on banana leaf
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-kerala-purple to-kerala-pink rounded-full flex items-center justify-center mx-auto mb-4 kerala-float overflow-hidden" style={{animationDelay: '1s'}}>
                  <img
                    src="/kerala-community/moh.jpg"
                    alt="Music & Dance"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-kerala-golden mb-2">
                  Music & Dance
                </h3>
                <p className="text-gray-300 text-sm">
                  Enjoy Kerala&apos;s vibrant music, classical and folk dances like Kathakali, Mohiniyattam, and more
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-kerala-green to-kerala-teal rounded-full flex items-center justify-center mx-auto mb-4 kerala-float" style={{animationDelay: '2s'}}>
                  <img
                    src="/kerala-community/tug.jpg"
                    alt="Traditional Games"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-kerala-golden mb-2">
                  Games
                </h3>
                <p className="text-gray-300 text-sm">
                  Traditional Kerala games and fun activities for all ages at every event
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-kerala-orange to-kerala-red rounded-full flex items-center justify-center mx-auto mb-4 kerala-float overflow-hidden" style={{animationDelay: '3s'}}>
                  <img
                    src="/kerala-community/mav.jpg"
                    alt="Festivals"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-kerala-golden mb-2">
                  Festivals
                </h3>
                <p className="text-gray-300 text-sm">
                  Onam, Vishu, Christmas, and more—celebrating Kerala&apos;s rich festival traditions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Events Section */}
        <section className="py-16 bg-gradient-to-br from-kerala-dark-golden to-kerala-golden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Upcoming Events
              </h2>
              <p className="text-lg text-white drop-shadow-lg">
                Don&apos;t miss out on our exciting community events
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredEvents.map((event) => (
                <div key={event.id} className="bg-dark-gray rounded-lg shadow-lg overflow-hidden kerala-card-hover kerala-shadow-vibrant">
                  <div className="h-40 relative overflow-hidden rounded-lg">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-contain object-center"
                      loading={event.id === 1 ? "eager" : "lazy"}
                      style={{ 
                        maxWidth: '100%', 
                        maxHeight: '100%',
                        objectFit: 'contain',
                        objectPosition: 'center'
                      }}
                    />
                    <div className="absolute bottom-2 left-2 text-white z-10">
                      <div className="text-2xl mb-1">
                        {event.category === 'festival' && '🎉'}
                        {event.category === 'celebration' && '🎄'}
                        {event.category === 'picnic' && '🧺'}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-kerala-golden mb-2">
                      {event.title}
                    </h3>
                    <p className="text-kerala-red font-semibold mb-3">
                      {event.date}
                    </p>
                    <p className="text-gray-300 mb-4">
                      {event.description}
                    </p>
                    <Link 
                      href={`/events#${event.id}`}
                      className="inline-block bg-gradient-to-r from-kerala-golden to-kerala-orange hover:from-kerala-dark-golden hover:to-kerala-red text-white px-4 py-2 rounded font-semibold transition-all duration-200 transform hover:scale-105"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/events"
                className="inline-block bg-gradient-to-r from-kerala-red to-kerala-golden hover:from-kerala-dark-red hover:to-kerala-orange text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 kerala-shadow-vibrant"
              >
                View All Events
              </Link>
            </div>
          </div>
        </section>

        {/* Community Highlights */}
        <section className="py-16 bg-gradient-to-br from-black to-kerala-dark-golden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-kerala-golden mb-4 drop-shadow-lg">
                What Makes COSMA Special
              </h2>
              <p className="text-lg text-gray-300">
                Discover why our Colorado Springs Malayali community is unique
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-kerala-green to-kerala-teal rounded-full flex items-center justify-center mx-auto mb-6 kerala-float">
                  <span className="text-white text-3xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-kerala-golden mb-4">
                  Inclusive Family Environment
                </h3>
                <p className="text-gray-300">
                  We welcome all Malayali families in Colorado Springs, creating a warm, inclusive environment 
                  where everyone feels like they&apos;re among extended family. Our community celebrates diversity 
                  and fosters lasting friendships across generations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-kerala-red to-kerala-golden rounded-full flex items-center justify-center mx-auto mb-6 kerala-float" style={{animationDelay: '1s'}}>
                  <span className="text-white text-3xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold text-kerala-golden mb-4">
                  Home Away from Home
                </h3>
                <p className="text-gray-300">
                  Experience the comfort of being at home while celebrating Kerala culture in Colorado Springs. 
                  From traditional festivals to cultural workshops, we create authentic experiences that bring 
                  the warmth and joy of Kerala to our mountain community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-kerala-gradient-sunset to-kerala-gradient-vibrant">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
              Join Our COSMA Community Today
            </h2>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              Be part of a vibrant community that celebrates Kerala&apos;s rich heritage and culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-kerala-dark-golden hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 kerala-shadow-vibrant"
              >
                Get Started
              </Link>
              <Link 
                href="/about"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-kerala-dark-golden px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
