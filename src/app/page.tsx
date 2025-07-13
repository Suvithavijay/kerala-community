'use client';

import Link from 'next/link';
import getConfig from 'next/config';

export default function Home() {
  // Temporarily disable authentication for development
  // const { isAuthenticated, requestAccess } = useAuth();

  const { publicRuntimeConfig } = getConfig();
  const basePath = publicRuntimeConfig.basePath || '';

  const featuredEvents = [
    {
      id: 1,
      title: "Onam 2025",
      date: "September 5, 2025",
      description: "Join us for a grand Onam celebration with traditional feast, cultural performances, and games.",
      category: "festival",
      image: `${basePath}/Sadhya_DSW.jpg`
    },
    {
      id: 2,
      title: "Christmas and New Year 2026",
      date: "December 25, 2025 - January 1, 2026",
      description: "Celebrate the festive season with our community. Special events, carols, and New Year celebrations.",
      category: "celebration",
      image: `${basePath}/NewYear.jpg`
    },
    {
      id: 3,
      title: "Vishu 2026",
      date: "April 14, 2026",
      description: "Welcome the Malayalam New Year with traditional Vishu celebrations, Kani viewing, and festive activities.",
      category: "festival",
      image: `${basePath}/Vishu_Kani_foods.jpg`
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-kerala-gradient-vibrant py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-kerala-yellow rounded-full opacity-20 kerala-float"></div>
        <div className="absolute top-20 right-10 w-24 h-24 bg-kerala-red rounded-full opacity-30 kerala-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 left-20 w-20 h-20 bg-kerala-golden rounded-full opacity-25 kerala-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Welcome to
            <span className="block kerala-text-gradient drop-shadow-lg">COSMA Community</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto font-semibold drop-shadow-lg">
            Colorado Springs Malayali Association - Celebrating Kerala&apos;s rich culture and heritage in the heart of Colorado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/events"
              className="bg-white text-kerala-dark-golden hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 kerala-shadow-vibrant"
            >
              Explore Events
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

      {/* About Section */}
      <section className="py-16 bg-gradient-to-br from-black to-kerala-dark-golden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-kerala-golden mb-4 drop-shadow-lg">
              About COSMA
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              We are a vibrant community of Malayali families in Colorado Springs, dedicated to preserving and celebrating 
              Kerala&apos;s rich cultural heritage. Through regular events, cultural programs, and community gatherings, 
              we create a home away from home for Malayalis in Colorado.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-kerala-green to-kerala-teal rounded-full flex items-center justify-center mx-auto mb-6 kerala-float">
                <span className="text-white text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-kerala-golden mb-4">
                Community First
              </h3>
              <p className="text-gray-300">
                We believe in building strong, supportive relationships within our community. Our events bring together 
                families of all ages, creating lasting friendships and a sense of belonging in Colorado Springs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-kerala-red to-kerala-golden rounded-full flex items-center justify-center mx-auto mb-6 kerala-float" style={{animationDelay: '1s'}}>
                <span className="text-white text-3xl">🎭</span>
              </div>
              <h3 className="text-xl font-bold text-kerala-golden mb-4">
                Cultural Preservation
              </h3>
              <p className="text-gray-300">
                From traditional festivals like Onam and Vishu to cultural performances, we actively preserve and 
                share Kerala&apos;s rich traditions with our children and the broader Colorado community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kerala Culture Highlights */}
      <section className="py-16 bg-gradient-to-br from-kerala-dark-golden to-kerala-golden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Kerala Culture Highlights
            </h2>
            <p className="text-lg text-white drop-shadow-lg">
              Experience the essence of Kerala through our community events
            </p>
          </div>
            
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-kerala-red to-kerala-golden rounded-full flex items-center justify-center mx-auto mb-4 kerala-float overflow-hidden">
                <img
                  src={`${basePath}/OnamSadhya.jpg`}
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
                  src={`${basePath}/moh.jpg`}
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
                  src={`${basePath}/tug.jpg`}
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
                  src={`${basePath}/mav.jpg`}
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
                  </div>
                  <p className="text-gray-300 mb-4">
                    {event.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-kerala-golden font-semibold mb-2">Event Highlights:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li className="flex items-start">
                        <span className="text-kerala-golden mr-2">•</span>
                        Traditional Kerala feast and cultural programs
                      </li>
                      <li className="flex items-start">
                        <span className="text-kerala-golden mr-2">•</span>
                        Community bonding and networking
                      </li>
                      <li className="flex items-start">
                        <span className="text-kerala-golden mr-2">•</span>
                        Games and activities for all ages
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Link 
                      href={`/events#${event.id}`}
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
    </>
  );
}
