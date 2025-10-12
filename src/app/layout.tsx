import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WebAssist - Professional Web Development Services',
  description: 'Custom website building, maintenance, and consulting using modern full-stack technologies. Security-focused, reliable, and scalable web solutions.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  keywords: [
    'web development',
    'custom websites',
    'full-stack development',
    'React',
    'Next.js',
    'web maintenance',
    'web consulting',
    'secure websites',
    'responsive design',
  ],
  authors: [{ name: 'WebAssist Team' }],
  creator: 'WebAssist',
  publisher: 'WebAssist',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://webassist.com',
    siteName: 'WebAssist',
    title: 'WebAssist - Professional Web Development Services',
    description: 'Custom website building, maintenance, and consulting using modern full-stack technologies.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebAssist - Professional Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebAssist - Professional Web Development Services',
    description: 'Custom website building, maintenance, and consulting using modern full-stack technologies.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <div className="min-h-screen bg-white">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}