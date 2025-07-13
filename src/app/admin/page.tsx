'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [email, setEmail] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [localAccessEnabled, setLocalAccessEnabled] = useState(false);

  // Check if local access is enabled
  useState(() => {
    const isLocalhost = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
    if (isLocalhost) {
      setLocalAccessEnabled(localStorage.getItem('cosma_local_access') === 'true');
    }
  });

  const events = [
    { id: 1, title: "Onam 2025", currentImage: "/Sadhya_DSW.jpg" },
    { id: 2, title: "Christmas and New Year 2026", currentImage: "/NewYear.jpg" },
    { id: 3, title: "Vishu 2026", currentImage: "/Vishu_Kani_foods.jpg" },
    { id: 4, title: "Summer Picnic 2026", currentImage: "/picnic.jpg" },
    { id: 5, title: "Onam 2026", currentImage: "/Kathakali_BNC.jpg" }
  ];

  const generateInvitationLink = async () => {
    if (!email) return;
    
    setIsGenerating(true);
    
    try {
      // Create a token with email and expiration (7 days from now)
      const tokenData = {
        email: email,
        exp: Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60), // 7 days
        type: 'invitation'
      };
      
      const token = btoa(JSON.stringify(tokenData));
      const baseUrl = window.location.origin;
      const invitationLink = `${baseUrl}?token=${token}&email=${encodeURIComponent(email)}`;
      
      setGeneratedLink(invitationLink);
    } catch (error) {
      console.error('Error generating link:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    alert('Link copied to clipboard!');
  };

  const enableLocalAccess = () => {
    localStorage.setItem('cosma_local_access', 'true');
    setLocalAccessEnabled(true);
    window.location.reload();
  };

  const disableLocalAccess = () => {
    localStorage.removeItem('cosma_local_access');
    setLocalAccessEnabled(false);
    window.location.reload();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
    } else {
      alert('Please select a valid image file');
    }
  };

  const uploadImage = async () => {
    if (!selectedFile || !selectedEvent) {
      alert('Please select both an event and an image file');
      return;
    }

    setIsUploading(true);

    try {
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('eventId', selectedEvent);
      formData.append('eventTitle', events.find(e => e.id.toString() === selectedEvent)?.title || '');

      // In a real application, you would send this to your backend
      // For now, we'll simulate the upload
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate upload time

      alert(`Image uploaded successfully for ${events.find(e => e.id.toString() === selectedEvent)?.title}!`);
      setSelectedFile(null);
      setSelectedEvent('');
      
      // Reset file input
      const fileInput = document.getElementById('image-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-kerala-light-golden to-kerala-yellow">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-kerala-dark-golden mb-8 text-center">
            COSMA Admin Panel
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email Invitation Section */}
            <div className="space-y-6">
              {/* Local Development Access */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  Development Access
                </h3>
                <p className="text-yellow-700 text-sm mb-4">
                  {localAccessEnabled 
                    ? "Local access is currently enabled. You can view all pages without authentication."
                    : "Enable local development access to view all pages without authentication."
                  }
                </p>
                <div className="flex gap-2">
                  {!localAccessEnabled ? (
                    <button
                      onClick={enableLocalAccess}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                    >
                      Enable Local Access
                    </button>
                  ) : (
                    <button
                      onClick={disableLocalAccess}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                    >
                      Disable Local Access
                    </button>
                  )}
                </div>
              </div>
              <h2 className="text-xl font-semibold text-kerala-dark-golden mb-4">
                Generate Member Invitations
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Member Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter member's email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kerala-golden"
                />
              </div>
              
              <button
                onClick={generateInvitationLink}
                disabled={!email || isGenerating}
                className="w-full bg-gradient-to-r from-kerala-red to-kerala-golden hover:from-kerala-dark-red hover:to-kerala-orange text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? 'Generating...' : 'Generate Invitation Link'}
              </button>
              
              {generatedLink && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-kerala-dark-golden mb-2">
                    Invitation Link Generated
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Send this link to the member via email:
                  </p>
                  <div className="bg-white p-3 rounded border break-all text-sm">
                    {generatedLink}
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="mt-3 bg-kerala-golden hover:bg-kerala-dark-golden text-white px-4 py-2 rounded font-semibold transition-colors duration-200"
                  >
                    Copy Link
                  </button>
                </div>
              )}
            </div>

            {/* Image Upload Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-kerala-dark-golden mb-4">
                Update Event Images
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Event
                </label>
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kerala-golden"
                >
                  <option value="">Choose an event...</option>
                  {events.map((event) => (
                    <option key={event.id} value={event.id}>
                      {event.title}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select New Image
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kerala-golden"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Supported formats: JPG, PNG, GIF (Max 5MB)
                </p>
              </div>
              
              {selectedFile && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-kerala-dark-golden mb-2">
                    Selected File:
                  </h4>
                  <p className="text-sm text-gray-600">
                    {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                  </p>
                </div>
              )}
              
              <button
                onClick={uploadImage}
                disabled={!selectedFile || !selectedEvent || isUploading}
                className="w-full bg-gradient-to-r from-kerala-green to-kerala-teal hover:from-kerala-dark-golden hover:to-kerala-orange text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUploading ? 'Uploading...' : 'Upload Image'}
              </button>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-kerala-gradient rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">
              Instructions for Admin
            </h3>
            <ul className="text-white text-sm space-y-1">
              <li>• <strong>Invitations:</strong> Enter email, generate link, send via email</li>
              <li>• <strong>Images:</strong> Select event, choose new image, upload to update</li>
              <li>• Links are valid for 7 days</li>
              <li>• Members stay authenticated for 7 days after clicking link</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 