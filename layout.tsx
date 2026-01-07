import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '615 Learning For All - Nashville Neurodiversity-Affirming Tutoring',
  description: 'Nashville-based, neurodiversity-affirming tutoring with supervised tutors trained by a lead specialist. Expert support for all learners.',
  openGraph: {
    title: '615 Learning For All',
    description: 'Nashville neurodiversity-affirming tutoring platform',
    images: [
      {
        url: 'https://www.615learningforall.com/og-image.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '615 Learning For All',
    description: 'Nashville neurodiversity-affirming tutoring platform',
    images: [
      {
        url: 'https://www.615learningforall.com/og-image.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
