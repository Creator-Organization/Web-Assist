import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ChatWidget } from '@/components/chatbot/ChatWidget';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    default:
      'CreatorIT - Professional Web Development & Digital Marketing Services',
    template: '%s | CreatorIT',
  },
  description:
    'CreatorIT offers professional web development, digital marketing, CMS development, and ready-to-deploy ERP systems. Based in Aurangabad, Maharashtra. 24/7 support, unique designs, modern technology.',
  keywords: [
    'web development',
    'web development aurangabad',
    'digital marketing',
    'SEO services',
    'custom websites',
    'full-stack development',
    'React development',
    'Next.js development',
    'WordPress development',
    'CMS development',
    'ERP systems',
    'software development',
    'web design',
    'responsive design',
    'ecommerce development',
    'CreatorIT',
    'web services india',
    'professional web development',
    'digital marketing aurangabad',
  ],
  authors: [{ name: 'CreatorIT', url: 'https://www.creatorit.in' }],
  creator: 'CreatorIT',
  publisher: 'CreatorIT',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.creatorit.in'),
  alternates: {
    canonical: '/',
  },
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
    url: 'https://www.creatorit.in',
    siteName: 'CreatorIT',
    title:
      'CreatorIT - Professional Web Development & Digital Marketing Services',
    description:
      'Professional web development, digital marketing, CMS development, and ready-to-deploy ERP systems. Unique designs, modern technology, 24/7 support.',
    images: [
      {
        url: '/images/creatorit-logo.png',
        width: 1200,
        height: 630,
        alt: 'CreatorIT - Professional Web Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CreatorIT - Professional Web Development & Digital Marketing',
    description:
      'Professional web development, digital marketing, and software solutions with modern technology.',
    images: ['/images/creatorit-logo.png'],
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
        <OrganizationSchema />
        <Header />
        <div className="min-h-screen bg-white">{children}</div>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
