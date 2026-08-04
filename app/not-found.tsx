import React from 'react';
import type { Metadata } from 'next';
import NotFound from '@/Templates/NotFound/NotFound';

export const metadata: Metadata = {
    title: 'Page not found — Dragos Baci',
    // A 404 shouldn't compete with the real page in search results.
    robots: { index: false, follow: true },
};

export default function NotFoundPage() {
    return <NotFound />;
}
