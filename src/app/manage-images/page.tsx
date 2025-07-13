'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ManageImages() {
  // Temporarily bypass authentication for development
  // const { isAuthenticated, userEmail } = useAuth();

  const [uploadedImages, setUploadedImages] = useState<Array<{
    id: number;
    name: string;
    size: number;
    type: string;
    uploadedAt: string;
    uploadedBy: string;
    url: string | null;
    status: string;
  }>>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');

  useEffect(() => {
    // Load existing uploaded images from localStorage
    const savedImages = localStorage.getItem('cosma_uploaded_images');
    if (savedImages) {
      setUploadedImages(JSON.parse(savedImages));
    }
  }, []);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setUploadMessage('Please select a valid image file.');
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setUploadMessage('File size must be less than 5MB.');
        return;
      }

      setSelectedFile(file);
      setUploadMessage('');

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadMessage('Please select a file first.');
      return;
    }

    setUploading(true);
    setUploadMessage('');

    try {
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create image object
      const imageData = {
        id: Date.now(),
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
        uploadedAt: new Date().toISOString(),
        uploadedBy: 'local-dev@cosma.com', // In real app, this would be the authenticated user
        url: previewUrl,
        status: 'uploaded'
      };

      // Add to uploaded images
      const newImages = [imageData, ...uploadedImages];
      setUploadedImages(newImages);
      localStorage.setItem('cosma_uploaded_images', JSON.stringify(newImages));

      // Reset form
      setSelectedFile(null);
      setPreviewUrl(null);
      setUploadMessage('Image uploaded successfully!');

      // Clear message after 3 seconds
      setTimeout(() => setUploadMessage(''), 3000);

    } catch {
      setUploadMessage('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = (imageId: number) => {
    const updatedImages = uploadedImages.filter(img => img.id !== imageId);
    setUploadedImages(updatedImages);
    localStorage.setItem('cosma_uploaded_images', JSON.stringify(updatedImages));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

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
              Manage Community
              <span className="block kerala-text-gradient drop-shadow-lg">Images</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto font-semibold drop-shadow-lg">
              Upload and manage images for our community events and gallery
            </p>
          </div>
        </section>

        {/* Upload Section */}
        <section className="py-16 bg-gradient-to-br from-kerala-dark-golden to-kerala-golden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-dark-gray rounded-lg p-8 kerala-shadow-vibrant">
              <h2 className="text-2xl font-bold text-kerala-golden mb-6">
                Upload New Image
              </h2>
              
              <div className="space-y-6">
                {/* File Selection */}
                <div>
                  <label className="block text-kerala-white font-semibold mb-2">
                    Select Image File
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="w-full p-3 border-2 border-kerala-golden rounded-lg bg-dark-gray text-kerala-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-kerala-golden file:text-kerala-dark-golden hover:file:bg-kerala-orange"
                  />
                  <p className="text-gray-400 text-sm mt-2">
                    Supported formats: JPG, PNG, GIF. Maximum size: 5MB
                  </p>
                </div>

                {/* Preview */}
                {previewUrl && (
                  <div>
                    <label className="block text-kerala-white font-semibold mb-2">
                      Preview
                    </label>
                    <div className="border-2 border-kerala-golden rounded-lg p-4 bg-dark-gray">
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="max-w-full max-h-64 object-contain mx-auto"
                      />
                    </div>
                  </div>
                )}

                {/* Upload Button */}
                <div>
                  <button
                    onClick={handleUpload}
                    disabled={!selectedFile || uploading}
                    className="w-full bg-gradient-to-r from-kerala-golden to-kerala-orange hover:from-kerala-dark-golden hover:to-kerala-red disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    {uploading ? 'Uploading...' : 'Upload Image'}
                  </button>
                </div>

                {/* Message */}
                {uploadMessage && (
                  <div className={`p-4 rounded-lg ${
                    uploadMessage.includes('successfully') 
                      ? 'bg-green-900 text-green-100' 
                      : 'bg-red-900 text-red-100'
                  }`}>
                    {uploadMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Uploaded Images */}
        <section className="py-16 bg-gradient-to-br from-black to-kerala-dark-golden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-kerala-golden mb-8 text-center">
              Uploaded Images
            </h2>
            
            {uploadedImages.length === 0 ? (
              <div className="text-center text-gray-400">
                <p className="text-lg">No images uploaded yet.</p>
                <p>Upload your first image above!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uploadedImages.map((image) => (
                  <div key={image.id} className="bg-dark-gray rounded-lg p-4 kerala-shadow-vibrant">
                    <div className="mb-4">
                      <img
                        src={image.url || ''}
                        alt={image.name}
                        className="w-full h-48 object-contain rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-kerala-golden font-semibold truncate">
                        {image.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Size: {formatFileSize(image.size)}
                      </p>
                      <p className="text-gray-400 text-sm">
                        Uploaded: {new Date(image.uploadedAt).toLocaleDateString()}
                      </p>
                      <p className="text-gray-400 text-sm">
                        By: {image.uploadedBy}
                      </p>
                      <button
                        onClick={() => handleDelete(image.id)}
                        className="w-full bg-kerala-red hover:bg-kerala-dark-red text-white px-4 py-2 rounded font-semibold transition-all duration-200"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-kerala-gradient-sunset to-kerala-gradient-vibrant">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
              Share Your Memories
            </h2>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              Help build our community gallery with your event photos and memories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/gallery"
                className="bg-white text-kerala-dark-golden hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 kerala-shadow-vibrant"
              >
                View Gallery
              </Link>
              <Link 
                href="/events"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-kerala-dark-golden px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Browse Events
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 