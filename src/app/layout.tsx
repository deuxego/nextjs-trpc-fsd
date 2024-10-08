import { Inter as FontSans } from 'next/font/google';
import { Providers } from './_providers';
import { type Metadata } from 'next';
import './_styles/globals.css';
import { cn } from '@/shared/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'nextjs-trpc-fsd',
  description: '',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
