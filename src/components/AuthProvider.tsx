'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  userEmail: string | null;
  login: (token: string) => void;
  logout: () => void;
  requestAccess: (email: string, reason: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

// Pre-approved email addresses
const APPROVED_EMAILS = [
  'suvithavijay@gmail.com',
  'catcharunkumar@gmail.com',
  'cosmacommittee@gmail.com'
];

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Only run client-side code after mounting
    if (typeof window === 'undefined') return;

    // Check for existing session on mount
    const sessionToken = localStorage.getItem('cosma_session_token');
    const sessionEmail = localStorage.getItem('cosma_user_email');
    
    if (sessionToken && sessionEmail) {
      // Verify token is still valid (simple check for now)
      try {
        const tokenData = JSON.parse(atob(sessionToken.split('.')[1]));
        const currentTime = Date.now() / 1000;
        
        if (tokenData.exp > currentTime) {
          setIsAuthenticated(true);
          setUserEmail(sessionEmail);
        } else {
          // Token expired, clear storage
          localStorage.removeItem('cosma_session_token');
          localStorage.removeItem('cosma_user_email');
        }
      } catch {
        console.error('Invalid session token');
        localStorage.removeItem('cosma_session_token');
        localStorage.removeItem('cosma_user_email');
      }
    }

    // Check for email token in URL (from email links)
    const urlParams = new URLSearchParams(window.location.search);
    const emailToken = urlParams.get('token');
    const email = urlParams.get('email');

    if (emailToken && email) {
      // Validate email token
      try {
        const tokenData = JSON.parse(atob(emailToken.split('.')[1]));
        const currentTime = Date.now() / 1000;
        
        if (tokenData.exp > currentTime && tokenData.email === email) {
          // Valid token, create session
          const sessionToken = btoa(JSON.stringify({
            email: email,
            exp: currentTime + (7 * 24 * 60 * 60), // 7 days
            type: 'session'
          }));
          
          localStorage.setItem('cosma_session_token', sessionToken);
          localStorage.setItem('cosma_user_email', email);
          
          setIsAuthenticated(true);
          setUserEmail(email);
          
          // Clean up URL
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      } catch {
        console.error('Invalid email token');
      }
    }

    // Check for local development access (for testing)
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (isLocalhost) {
      const localAccess = localStorage.getItem('cosma_local_access');
      if (localAccess === 'true') {
        setIsAuthenticated(true);
        setUserEmail('local-dev@cosma.com');
      }
    }
  }, []);

  const login = (token: string) => {
    if (typeof window === 'undefined') return;
    
    try {
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      localStorage.setItem('cosma_session_token', token);
      localStorage.setItem('cosma_user_email', tokenData.email);
      setIsAuthenticated(true);
      setUserEmail(tokenData.email);
    } catch {
      console.error('Invalid token');
    }
  };

  const logout = () => {
    if (typeof window === 'undefined') return;
    
    localStorage.removeItem('cosma_session_token');
    localStorage.removeItem('cosma_user_email');
    localStorage.removeItem('cosma_local_access');
    setIsAuthenticated(false);
    setUserEmail(null);
  };

  const requestAccess = async (email: string, reason: string) => {
    if (typeof window === 'undefined') return;
    
    // In a real application, this would send an email to the admin
    // For now, we'll simulate the request and store it locally
    const accessRequests = JSON.parse(localStorage.getItem('cosma_access_requests') || '[]');
    accessRequests.push({
      email,
      reason,
      timestamp: new Date().toISOString(),
      status: 'pending'
    });
    localStorage.setItem('cosma_access_requests', JSON.stringify(accessRequests));
    
    // Simulate email sending
    console.log('Access request sent to cosmacommittee@gmail.com:', { email, reason });
    
    // If the email is in the approved list, automatically grant access
    if (APPROVED_EMAILS.includes(email.toLowerCase())) {
      // Create a token for the approved user
      const tokenData = {
        email: email,
        exp: Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60), // 7 days
        type: 'approved'
      };
      
      const token = btoa(JSON.stringify(tokenData));
      login(token);
    }
  };

  // Don't render context until mounted to prevent hydration issues
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, userEmail, login, logout, requestAccess }}>
      {children}
    </AuthContext.Provider>
  );
} 