import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Navbar } from './_components';
import Link from 'next/link';
import { APP_ROUTS } from '@/constants/routes';
import { Toaster } from '@/components/ui/toaster';
import QueryProvider from '@/providers/queryProvider';
import { PawPrint } from 'lucide-react';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Cats & Dogs App',
  description: 'Application about cats and dogs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased container py-2', fontSans.variable)}>
        <header className="flex gap-5 items-center py-2 border-b border-stone-200 mb-6">
          <Link
            href={APP_ROUTS.App.Main.Root.path}
            className="flex justify-center items-center font-bold text-lg w-10 h-10 rounded-full bg-black"
          >
            <PawPrint className="h-8 w-8 text-white" />
          </Link>
          <Navbar />
        </header>
        <QueryProvider>{children}</QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
