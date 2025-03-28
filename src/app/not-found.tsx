import React from 'react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                    The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track to explore amazing destinations.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-blue-600 text-white hover:bg-blue-700 py-3 px-6 rounded-md font-medium transition-colors"
                >
                    Back to Homepage
                </Link>
            </div>
        </main>
    );
}