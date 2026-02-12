import type { Metadata } from 'next';
import { El_Messiri, Lato } from 'next/font/google';
import './globals.css';
import { clsx } from 'clsx';

const elMessiri = El_Messiri({
  subsets: ['latin'],
  variable: '--font-messiri',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
  weight: ['100', '300', '400', '700'],
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
      <body className={clsx(lato.variable, elMessiri.variable, 'antialiased min-h-screen flex flex-col')}>
        {children}
      </body>
    </html>
  );
}
