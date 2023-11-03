import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Orinime TV',
  description: 'My lovely Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-color-base`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
