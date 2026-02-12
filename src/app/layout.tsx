import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { clsx } from 'clsx';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dubai TourWeb | Premium Travel Experiences',
  description: 'Experience the desert luxury of Dubai with TourWeb. Exclusive packages, world-class service.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={clsx(inter.variable, playfair.variable, 'antialiased min-h-screen flex flex-col')}>
        {children}
      </body>
    </html>
  );
}
