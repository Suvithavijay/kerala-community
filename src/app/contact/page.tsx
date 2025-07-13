'use client';

import { useState } from 'react';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the contact form data to your backend
    console.log('Contact form submitted:', contactForm);
    
    // For now, just show success message
    setIsSubmitted(true);
    setContactForm({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-kerala-light-golden to-kerala-yellow">
      {/* Header */}
      <section className="bg-gradient-to-r from-kerala-gradient-sunset to-kerala-gradient-vibrant py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-kerala-yellow rounded-full opacity-20 kerala-float"></div>
        <div className="absolute top-20 right-10 w-24 h-24 bg-kerala-pink rounded-full opacity-30 kerala-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 left-20 w-20 h-20 bg-kerala-cyan rounded-full opacity-25 kerala-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-kerala-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-kerala-white max-w-3xl mx-auto">
            Get in touch with our Kerala community. We&apos;d love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-kerala-white rounded-lg shadow-lg p-8 kerala-card-hover kerala-shadow-vibrant">
              <h2 className="text-2xl font-bold text-kerala-dark-golden mb-6">
                Send us a Message
              </h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-gradient-to-r from-green-100 to-green-200 border border-green-400 text-green-700 rounded kerala-shadow">
                  Thank you for your message! We&apos;ll get back to you soon.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kerala-golden focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kerala-golden focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kerala-golden focus:border-transparent transition-all duration-200"
                    placeholder="What is this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kerala-golden focus:border-transparent transition-all duration-200"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-kerala-red to-kerala-pink hover:from-kerala-dark-red hover:to-kerala-purple text-kerala-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 kerala-shadow-vibrant"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-kerala-dark-golden mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-6">
                  Have questions about our community events, want to join our community, 
                  or need information about Kerala culture? We&apos;re here to help!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white rounded-lg p-4 kerala-card-hover kerala-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-kerala-red to-kerala-pink rounded-full flex items-center justify-center flex-shrink-0 kerala-float">
                    <span className="text-kerala-white text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-kerala-dark-golden mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">info@keralacommunity.com</p>
                    <p className="text-gray-600">events@keralacommunity.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white rounded-lg p-4 kerala-card-hover kerala-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-kerala-green to-kerala-teal rounded-full flex items-center justify-center flex-shrink-0 kerala-float" style={{animationDelay: '1s'}}>
                    <span className="text-kerala-white text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-kerala-dark-golden mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Monday - Friday, 9 AM - 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white rounded-lg p-4 kerala-card-hover kerala-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-kerala-purple to-kerala-pink rounded-full flex items-center justify-center flex-shrink-0 kerala-float" style={{animationDelay: '2s'}}>
                    <span className="text-kerala-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-kerala-dark-golden mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      Kerala Community Center<br />
                      123 Cultural Street<br />
                      Downtown, City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white rounded-lg p-4 kerala-card-hover kerala-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-kerala-cyan to-kerala-teal rounded-full flex items-center justify-center flex-shrink-0 kerala-float" style={{animationDelay: '3s'}}>
                    <span className="text-kerala-white text-xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-kerala-dark-golden mb-1">
                      Office Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-kerala-light-golden to-kerala-yellow rounded-lg p-6 kerala-shadow-vibrant">
                <h3 className="text-lg font-semibold text-kerala-dark-golden mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gradient-to-r from-kerala-red to-kerala-pink rounded-full flex items-center justify-center hover:from-kerala-dark-red hover:to-kerala-purple transition-all duration-200 transform hover:scale-110 kerala-shadow">
                    <span className="text-kerala-white text-lg">📘</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gradient-to-r from-kerala-green to-kerala-teal rounded-full flex items-center justify-center hover:from-kerala-dark-golden hover:to-kerala-orange transition-all duration-200 transform hover:scale-110 kerala-shadow">
                    <span className="text-kerala-white text-lg">📷</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gradient-to-r from-kerala-purple to-kerala-pink rounded-full flex items-center justify-center hover:from-kerala-cyan hover:to-kerala-teal transition-all duration-200 transform hover:scale-110 kerala-shadow">
                    <span className="text-kerala-white text-lg">🐦</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gradient-to-r from-kerala-cyan to-kerala-teal rounded-full flex items-center justify-center hover:from-kerala-orange hover:to-kerala-red transition-all duration-200 transform hover:scale-110 kerala-shadow">
                    <span className="text-kerala-white text-lg">📺</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 