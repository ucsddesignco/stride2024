import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/app/styles/global.scss';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Stride 2024',
  description:
    'Stride is a uniquely design-forward career fair aiming to connect aspiring designers with company representatives.',
  openGraph: {
    type: 'website',
    url: 'https://stride24.ucsddesign.co',
    title: 'Stride 2024',
    description:
      'Stride is a uniquely design-forward career fair aiming to connect aspiring designers with company representatives.',
    siteName: 'Stride 2024',
    images: [
      {
        url: 'https://stride24.ucsddesign.co/og-image.jpg'
      }
    ]
  }
};

const IosevkaCurly = localFont({
  src: [
    {
      path: '../../public/fonts/Iosevka-Curly-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Iosevka-Curly-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Iosevka-Curly-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Iosevka-Curly-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic'
    }
  ],
  preload: true,
  variable: '--font-iosevka'
});

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${IosevkaCurly.variable} `}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
