import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/styles/resets.scss';
import '@/app/styles/index.scss';

import { PageLoader } from '@/shared/page-loader';

export const metadata: Metadata = {
  title: 'НАЗВАНИЕ САЙТА',
  description: 'ОПИСАНИЕ САЙТА',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Светлая тема */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon/light/favicon-32x32.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/light/favicon-16x16.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon/light/apple-touch-icon.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="manifest"
          href="/favicon/light/site.webmanifest"
          media="(prefers-color-scheme: light)"
        />

        {/* Тёмная тема */}
        <link rel="icon" type="image/png" href="/favicon/dark/favicon-32x32.png" />
        <link rel="icon" type="image/png" href="/favicon/dark/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/favicon/dark/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/dark/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
