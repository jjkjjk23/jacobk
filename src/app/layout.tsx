import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import * as React from "react";
import { NextUIProvider } from '@nextui-org/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jacob Keller',
  description: 'Jacob Keller\'s portfolio website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
