import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import React from "react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Travel Country Explorer',
    description: 'Explore countries around the world to plan your next trip with detailed insights on regions, culture, and travel essentials.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}