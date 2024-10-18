import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/app/styles/global.scss';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Stride 2024',
  description:
    'Stride is a uniquely design-forward career fair aiming to connect aspiring designers with company representatives.'
};

const NeuePlak = localFont({
  src: '../../public/fonts/Neue-Plak-Extended-Bold.ttf',
  variable: '--font-neueplak',
  display: 'swap'
});

const NBInternational = localFont({
  src: '../../public/fonts/NB-International-Pro-Light.otf',
  variable: '--font-nbinternational',
  display: 'swap'
});

const NBInternationalMono = localFont({
  src: '../../public/fonts/NB-International-Mono.ttf',
  variable: '--font-nbinternational-mono',
  display: 'swap'
});

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${NeuePlak.variable} ${NBInternational.variable} ${NBInternationalMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
