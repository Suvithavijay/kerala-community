/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Kerala-themed colors
        'kerala-white': '#FFFFFF',
        'kerala-golden': '#D4AF37',
        'kerala-red': '#DC143C',
        'kerala-dark-golden': '#B8860B',
        'kerala-light-golden': '#F4E4BC',
        'kerala-dark-red': '#8B0000',
        'kerala-light-red': '#FFB6C1',
        'kerala-green': '#228B22',
        'kerala-orange': '#FF8C00',
        'kerala-purple': '#9370DB',
        'kerala-teal': '#008080',
        'kerala-yellow': '#FFD700',
        'kerala-pink': '#FF69B4',
        'kerala-cyan': '#00CED1',
      },
      fontFamily: {
        'kerala': ['var(--font-geist-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'kerala-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23D4AF37\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'kerala-food': "url('https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop')",
        'kerala-kathakali': "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop')",
        'kerala-backwaters': "url('https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&h=600&fit=crop')",
        'kerala-temple': "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop')",
        'kerala-nature': "url('https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&h=600&fit=crop')",
      },
      animation: {
        'float': 'kerala-float 3s ease-in-out infinite',
        'pulse-slow': 'kerala-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
