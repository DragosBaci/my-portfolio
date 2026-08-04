import React from 'react';
import type { Metadata } from 'next';
import PageShell from '@/Templates/PageContent/PageShell';

export const metadata: Metadata = {
    alternates: { canonical: '/' },
};

export default function HomePage() {
    return <PageShell />;
}
