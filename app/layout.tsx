import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Empat Coffee and Space',
  description: 'Ruang komunitas nyaman dengan kopi berkualitas tinggi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

