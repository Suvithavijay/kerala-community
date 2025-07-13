export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kerala-light-golden to-kerala-yellow">
      {/* Header */}
      <section className="bg-gradient-to-r from-kerala-gradient-sunset to-kerala-gradient-vibrant py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-kerala-yellow rounded-full opacity-20 kerala-float"></div>
        <div className="absolute top-20 right-10 w-24 h-24 bg-kerala-pink rounded-full opacity-30 kerala-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 left-20 w-20 h-20 bg-kerala-cyan rounded-full opacity-25 kerala-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-kerala-white mb-4">
            About Our Community
          </h1>
          <p className="text-xl text-kerala-white max-w-3xl mx-auto">
            Celebrating the rich heritage and vibrant culture of Kerala
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-kerala-dark-golden mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We are a vibrant community of Malayalis dedicated to preserving and celebrating 
                the rich cultural heritage of Kerala. Our mission is to create a welcoming space 
                where people can connect, share traditions, and build lasting friendships.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Through cultural events, educational programs, and community gatherings, 
                we strive to keep our traditions alive while embracing modern values and 
                fostering unity among Malayalis worldwide.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-3xl kerala-float">👥</div>
                <div>
                  <div className="text-2xl font-bold text-kerala-red">5,000+</div>
                  <div className="text-gray-600">Active Members</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-kerala-gradient-vibrant to-kerala-gradient-sunset rounded-lg p-8 text-center kerala-shadow-vibrant">
              <div className="text-kerala-white text-6xl mb-4 kerala-pulse">🏺</div>
              <h3 className="text-2xl font-bold text-kerala-white mb-4">
                Preserving Traditions
              </h3>
              <p className="text-kerala-white">
                From Onam celebrations to traditional dance workshops, 
                we keep Kerala&apos;s rich cultural heritage alive and thriving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kerala Culture Section */}
      <section className="py-16 bg-gradient-to-r from-kerala-white to-kerala-light-golden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-kerala-dark-golden mb-4">
              Kerala Culture & Heritage
            </h2>
            <p className="text-lg text-gray-600">
              Discover the unique aspects that make Kerala special
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg p-6 kerala-card-hover kerala-shadow-vibrant">
              <div className="w-20 h-20 bg-gradient-to-r from-kerala-purple to-kerala-pink rounded-full flex items-center justify-center mx-auto mb-6 kerala-float">
                <span className="text-kerala-white text-3xl">🎭</span>
              </div>
              <h3 className="text-xl font-bold text-kerala-dark-golden mb-4">
                Traditional Arts
              </h3>
              <p className="text-gray-600">
                Kathakali, Mohiniyattam, and other classical dance forms that showcase 
                Kerala&apos;s artistic excellence and cultural depth.
              </p>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 kerala-card-hover kerala-shadow-vibrant">
              <div className="w-20 h-20 bg-gradient-to-r from-kerala-green to-kerala-teal rounded-full flex items-center justify-center mx-auto mb-6 kerala-float" style={{animationDelay: '1s'}}>
                <span className="text-kerala-white text-3xl">🍽️</span>
              </div>
              <h3 className="text-xl font-bold text-kerala-dark-golden mb-4">
                Authentic Cuisine
              </h3>
              <p className="text-gray-600">
                From spicy fish curries to fluffy appams, experience the authentic 
                flavors of Kerala&apos;s traditional cuisine and cooking methods.
              </p>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 kerala-card-hover kerala-shadow-vibrant">
              <div className="w-20 h-20 bg-gradient-to-r from-kerala-orange to-kerala-red rounded-full flex items-center justify-center mx-auto mb-6 kerala-float" style={{animationDelay: '2s'}}>
                <span className="text-kerala-white text-3xl">🌺</span>
              </div>
              <h3 className="text-xl font-bold text-kerala-dark-golden mb-4">
                Festivals & Celebrations
              </h3>
              <p className="text-gray-600">
                Onam, Vishu, and other traditional festivals that bring communities 
                together in celebration of our shared heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-16 bg-gradient-to-r from-kerala-green to-kerala-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-kerala-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-kerala-white opacity-90">
              The principles that guide our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-lg p-6 kerala-card-hover kerala-shadow-vibrant">
              <div className="w-16 h-16 bg-gradient-to-r from-kerala-green to-kerala-teal rounded-full flex items-center justify-center mx-auto mb-4 kerala-float">
                <span className="text-kerala-white text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-kerala-dark-golden mb-2">
                Unity
              </h3>
              <p className="text-gray-600 text-sm">
                Bringing Malayalis together regardless of background or location.
              </p>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 kerala-card-hover kerala-shadow-vibrant">
              <div className="w-16 h-16 bg-gradient-to-r from-kerala-purple to-kerala-pink rounded-full flex items-center justify-center mx-auto mb-4 kerala-float" style={{animationDelay: '1s'}}>
                <span className="text-kerala-white text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-bold text-kerala-dark-golden mb-2">
                Education
              </h3>
              <p className="text-gray-600 text-sm">
                Sharing knowledge about Kerala&apos;s culture, language, and traditions.
              </p>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 kerala-card-hover kerala-shadow-vibrant">
              <div className="w-16 h-16 bg-gradient-to-r from-kerala-orange to-kerala-red rounded-full flex items-center justify-center mx-auto mb-4 kerala-float" style={{animationDelay: '2s'}}>
                <span className="text-kerala-white text-2xl">🎉</span>
              </div>
              <h3 className="text-lg font-bold text-kerala-dark-golden mb-2">
                Celebration
              </h3>
              <p className="text-gray-600 text-sm">
                Creating joyful experiences that honor our cultural heritage.
              </p>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 kerala-card-hover kerala-shadow-vibrant">
              <div className="w-16 h-16 bg-gradient-to-r from-kerala-cyan to-kerala-teal rounded-full flex items-center justify-center mx-auto mb-4 kerala-float" style={{animationDelay: '3s'}}>
                <span className="text-kerala-white text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-bold text-kerala-dark-golden mb-2">
                Growth
              </h3>
              <p className="text-gray-600 text-sm">
                Fostering personal and community development through cultural exchange.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-kerala-gradient-vibrant to-kerala-gradient-sunset">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-kerala-white mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-kerala-white mb-8">
            Be part of a vibrant community that celebrates Kerala&apos;s rich heritage and culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/events"
              className="bg-kerala-white text-kerala-dark-golden hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 kerala-shadow-vibrant"
            >
              View Events
            </a>
            <a 
              href="/contact"
              className="bg-transparent border-2 border-kerala-white text-kerala-white hover:bg-kerala-white hover:text-kerala-dark-golden px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 