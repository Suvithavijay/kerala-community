'use client';

import { useState } from 'react';

interface Photo {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  uploadedBy: string;
  date: string;
  category: string;
  gradient: string;
}

export default function GalleryPage() {
  const basePath = process.env.NODE_ENV === 'production' ? '/kerala-community' : '';
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos', gradient: 'from-kerala-gradient-vibrant to-kerala-gradient-sunset' },
    { id: 'events', name: 'Events', gradient: 'from-kerala-orange to-kerala-red' },
    { id: 'food', name: 'Food & Cuisine', gradient: 'from-kerala-green to-kerala-teal' },
    { id: 'culture', name: 'Culture & Arts', gradient: 'from-kerala-purple to-kerala-pink' },
    { id: 'community', name: 'Community', gradient: 'from-kerala-cyan to-kerala-teal' },
  ];

  const photos: Photo[] = [
    {
      id: 1,
      title: "Onam Celebration 2023",
      description: "Beautiful Onam celebration with traditional pookalam and feast",
      imageUrl: `${basePath}/onam-2023.jpg`,
      uploadedBy: "Priya Menon",
      date: "September 2023",
      category: "events",
      gradient: "from-kerala-orange to-kerala-red"
    },
    {
      id: 2,
      title: "Traditional Kerala Sadya",
      description: "Authentic Kerala feast with 26 different dishes served on banana leaf",
      imageUrl: `${basePath}/kerala-sadya.jpg`,
      uploadedBy: "Rajesh Kumar",
      date: "October 2023",
      category: "food",
      gradient: "from-kerala-green to-kerala-teal"
    },
    {
      id: 3,
      title: "Kathakali Performance",
      description: "Traditional Kathakali dance performance at our cultural event",
      imageUrl: `${basePath}/kathakali.jpg`,
      uploadedBy: "Anita Nair",
      date: "November 2023",
      category: "culture",
      gradient: "from-kerala-purple to-kerala-pink"
    },
    {
      id: 4,
      title: "Community Cooking Class",
      description: "Learning to make traditional Kerala dishes together",
      imageUrl: `${basePath}/cooking-class.jpg`,
      uploadedBy: "Suresh Pillai",
      date: "December 2023",
      category: "community",
      gradient: "from-kerala-cyan to-kerala-teal"
    },
    {
      id: 5,
      title: "Vishu Celebration",
      description: "Vishukkani arrangement and New Year celebrations",
      imageUrl: `${basePath}/vishu.jpg`,
      uploadedBy: "Lakshmi Devi",
      date: "April 2024",
      category: "events",
      gradient: "from-kerala-yellow to-kerala-orange"
    },
    {
      id: 6,
      title: "Kerala Fish Curry",
      description: "Authentic Kerala fish curry with traditional spices",
      imageUrl: `${basePath}/fish-curry.jpg`,
      uploadedBy: "Mohan Das",
      date: "January 2024",
      category: "food",
      gradient: "from-kerala-green to-kerala-teal"
    },
    {
      id: 7,
      title: "Malayalam Poetry Night",
      description: "Community members sharing beautiful Malayalam poetry",
      imageUrl: `${basePath}/poetry-night.jpg`,
      uploadedBy: "Kavya Sreekumar",
      date: "February 2024",
      category: "culture",
      gradient: "from-kerala-purple to-kerala-pink"
    },
    {
      id: 8,
      title: "Community Picnic",
      description: "Fun day out with community members and families",
      imageUrl: `${basePath}/community-picnic.jpg`,
      uploadedBy: "Sunil Nambiar",
      date: "March 2024",
      category: "community",
      gradient: "from-kerala-cyan to-kerala-teal"
    },
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'events': return '🎉';
      case 'food': return '🍽️';
      case 'culture': return '🎭';
      case 'community': return '👥';
      default: return '📸';
    }
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
            Community Gallery
          </h1>
          <p className="text-xl text-kerala-white max-w-3xl mx-auto">
            Share and view beautiful moments from our Kerala community events and celebrations
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-r from-kerala-white to-kerala-light-golden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-kerala-red to-kerala-pink text-kerala-white kerala-shadow-vibrant'
                    : 'bg-gradient-to-r from-kerala-light-golden to-kerala-yellow text-kerala-dark-golden hover:from-kerala-golden hover:to-kerala-orange hover:text-kerala-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div 
                key={photo.id} 
                className="bg-kerala-white rounded-lg shadow-lg overflow-hidden kerala-card-hover kerala-shadow-vibrant cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className={`h-48 bg-gradient-to-r ${photo.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="text-kerala-white text-4xl relative z-10 kerala-pulse">
                    {getCategoryIcon(photo.category)}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-kerala-dark-golden mb-2">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {photo.description}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>By {photo.uploadedBy}</span>
                    <span>{photo.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 kerala-float">📷</div>
              <h3 className="text-xl font-semibold text-kerala-dark-golden mb-2">
                No photos found
              </h3>
              <p className="text-gray-600">
                No photos available for this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Upload Section (for logged-in members) */}
      <section className="py-16 bg-gradient-to-r from-kerala-white to-kerala-light-golden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-kerala-light-golden to-kerala-yellow rounded-lg p-8 kerala-shadow-vibrant">
            <div className="text-6xl mb-4 kerala-float">📤</div>
            <h2 className="text-2xl font-bold text-kerala-dark-golden mb-4">
              Share Your Memories
            </h2>
            <p className="text-gray-600 mb-6">
              Members can upload photos from community events and celebrations. 
              All uploads are moderated to ensure quality and appropriateness.
            </p>
            <button className="bg-gradient-to-r from-kerala-red to-kerala-pink hover:from-kerala-dark-red hover:to-kerala-purple text-kerala-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 kerala-shadow-vibrant">
              Login to Upload Photos
            </button>
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-kerala-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto kerala-shadow-vibrant">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-kerala-dark-golden">
                  {selectedPhoto.title}
                </h3>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className={`h-64 bg-gradient-to-r ${selectedPhoto.gradient} flex items-center justify-center mb-4 rounded relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="text-kerala-white text-6xl relative z-10">
                  {getCategoryIcon(selectedPhoto.category)}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                {selectedPhoto.description}
              </p>
              
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Uploaded by {selectedPhoto.uploadedBy}</span>
                <span>{selectedPhoto.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 