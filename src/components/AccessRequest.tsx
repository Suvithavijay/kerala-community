'use client';

import { useState } from 'react';

interface AccessRequestProps {
  onRequestAccess: (email: string, reason: string) => void;
}

export default function AccessRequest({ onRequestAccess }: AccessRequestProps) {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !reason) return;

    setIsSubmitting(true);
    
    try {
      await onRequestAccess(email, reason);
      setIsSubmitted(true);
      setEmail('');
      setReason('');
    } catch (error) {
      console.error('Error submitting access request:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
        <div className="flex items-center">
          <div className="text-green-600 text-xl mr-2">✓</div>
          <div>
            <h4 className="text-green-800 font-semibold">Access Request Submitted</h4>
            <p className="text-green-700 text-sm">
              Your request has been sent to cosmacommittee@gmail.com. You will receive a response within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-kerala-gradient rounded-lg p-6 mt-6">
      <h3 className="text-lg font-semibold text-white mb-4">
        Request Access
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Your Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kerala-golden"
            required
          />
        </div>
        
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-white mb-2">
            Reason for Access Request
          </label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Please explain why you would like access to the COSMA community website..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kerala-golden"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={!email || !reason || isSubmitting}
          className="w-full bg-white text-kerala-dark-golden hover:bg-gray-100 py-2 px-4 rounded-md font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Access Request'}
        </button>
      </form>
      
      <p className="text-white text-sm mt-4 opacity-90">
        Your request will be sent to cosmacommittee@gmail.com for review.
      </p>
    </div>
  );
} 