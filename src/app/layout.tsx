import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { Header } from '@/components/Header';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Cheffy. O site mais completo de receitas.',
    template: '%s | Cheffy',
  },
  description: 'O site mais completo de receitas que você poderá encontrar.',
};

type RootLayoutProps = { children: React.ReactNode };

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-BR'>
      <body className={`qualquer coisa`}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
