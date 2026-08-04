import React from 'react';
import type { Metadata, Viewport } from 'next';
import StyledComponentsRegistry from './registry';
import './globals.css';
import { SITE_URL } from '@/Utils/Site';

const DESCRIPTION =
    'Software engineer in Cluj-Napoca building AI-assisted financial reporting at Caseware. Previously video monetization at JWX Connatix and streaming UI at 3SS.';

/*
 * Everything that used to live in public/index.html's <head>. Next emits these into the
 * exported HTML at build time, so crawlers and social scrapers see them without running
 * any JavaScript - same as before, but now type-checked and colocated with the app.
 */
export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    // Name first: results truncate near 60 characters, and the name is the query most
    // likely to land here.
    title: 'Dragos Baci — Software Engineer | Cluj-Napoca',
    description:
        'Dragos Baci is a software engineer in Cluj-Napoca, Romania, building AI-assisted financial reporting at Caseware. Previously video monetization at JWX Connatix and streaming UI at 3SS, with React, TypeScript and Angular.',
    authors: [{ name: 'Dragos Baci' }],
    // No canonical here: layout metadata is inherited by every route, and each page
    // declares its own so the case routes don't all point back at the homepage.
    robots: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
    },
    manifest: '/manifest.json',
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon.ico' },
        ],
        apple: '/logo192.png',
    },
    openGraph: {
        type: 'website',
        siteName: 'Dragos Baci',
        locale: 'en_US',
        title: 'Dragos Baci — Software Engineer',
        description: DESCRIPTION,
        url: SITE_URL,
        images: [
            {
                url: '/images/background.jpg',
                width: 2160,
                height: 2028,
                alt: 'Dragos Baci — software engineer portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dragos Baci — Software Engineer',
        description: DESCRIPTION,
        images: ['/images/background.jpg'],
    },
};

export const viewport: Viewport = {
    themeColor: '#131313',
    width: 'device-width',
    initialScale: 1,
};

/*
 * The one machine-readable statement of who this site is about. Feeds knowledge panels
 * and entity matching, and is read without executing the app.
 */
const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dragos Baci',
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/images/background.jpg`,
    jobTitle: 'Software Engineer',
    description:
        'Software engineer building AI-assisted financial reporting at Caseware, previously video monetization at JWX Connatix and streaming interfaces at 3 Screen Solutions.',
    email: 'mailto:dragos617@yahoo.com',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cluj-Napoca',
        addressCountry: 'RO',
    },
    alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Technical University of Cluj-Napoca',
    },
    worksFor: {
        '@type': 'Organization',
        name: 'Caseware',
    },
    /* Employment history, mirroring the Experience timeline. Gives a crawler the same
       career facts the page shows, in a form it doesn't have to parse out of markup. */
    hasOccupation: [
        {
            '@type': 'EmployeeRole',
            startDate: '2026-04',
            worksFor: { '@type': 'Organization', name: 'Caseware' },
            roleName: 'Software Engineer, Financials Squad',
        },
        {
            '@type': 'EmployeeRole',
            startDate: '2024-09',
            endDate: '2026-04',
            worksFor: { '@type': 'Organization', name: 'JWX (formerly Connatix)' },
            roleName: 'Software Engineer, Monetization Team',
        },
        {
            '@type': 'EmployeeRole',
            startDate: '2022-09',
            endDate: '2024-08',
            worksFor: { '@type': 'Organization', name: '3 Screen Solutions' },
            roleName: 'Software Engineer',
        },
    ],
    knowsLanguage: ['Romanian', 'English'],
    knowsAbout: [
        'TypeScript',
        'React',
        'Angular',
        'React Native',
        'GraphQL',
        'Docker',
        'Kubernetes',
        'AWS',
        'Web Performance Optimization',
        'AI Integration',
    ],
    sameAs: ['https://github.com/DragosBaci', 'https://www.linkedin.com/in/dragosbaci21/'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                {/*
                  Critical-path preloads. Font requests use CORS mode even same-origin,
                  so a preload without `crossOrigin` is discarded and fetched twice.
                */}
                <link
                    rel="preload"
                    as="font"
                    type="font/otf"
                    href="/fonts/TuskerGrotesk-2600Semibold.otf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    as="font"
                    type="font/otf"
                    href="/fonts/TuskerGrotesk-5600Semibold.otf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    as="font"
                    type="font/woff2"
                    href="/fonts/Migra-Extrabold.woff2"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    as="font"
                    type="font/woff2"
                    href="/fonts/MigraItalic-ExtraboldItalic.woff2"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    as="font"
                    type="font/otf"
                    href="/fonts/NeueMontreal-Medium.otf"
                    crossOrigin="anonymous"
                />

                {/*
                  No image preloads or prefetches here any more. next/image requests
                  optimised derivatives (/_next/image?url=...), which are different URLs
                  from the raw files in public/ - hinting the originals would download
                  every one of them a second time and never be used. The background's
                  `priority` flag makes Next emit the correct preload for the LCP itself.

                  The 3D model isn't an image, so it still benefits from a hint - kept to
                  wide viewports because it's 2.1 MB and "idle priority" still competes
                  for bandwidth on a throttled connection.
                */}
                <link
                    rel="prefetch"
                    href="/snake_statue.glb"
                    as="fetch"
                    crossOrigin="anonymous"
                    media="(min-width: 769px)"
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
                />
            </head>
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
