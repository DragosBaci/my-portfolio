import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageShell from '@/Templates/PageContent/PageShell';
import { items } from '@/Components/List/data';
import { SITE_URL } from '@/Utils/Site';


type CaseParams = { params: { id: string } };

/*
 * Enumerating the cases lets Next prerender each one to static HTML at build time, so a
 * shared link to /3 arrives with that case's content already in the document rather than
 * waiting on the client. The data is local and never changes between requests, so there
 * is nothing to gain from rendering these on demand.
 */
export function generateStaticParams() {
    return items.map(item => ({ id: String(item.id) }));
}

/* Anything outside that list 404s rather than rendering an empty case view. */
export const dynamicParams = false;

/*
 * Per-case metadata - the main thing the migration unlocked. Previously every case URL
 * inherited one generic title and description; now each is a separately indexable page
 * describing its own project, and sharing a case link previews that project's image
 * rather than the site background.
 */
export function generateMetadata({ params }: CaseParams): Metadata {
    const caseItem = items.find(item => String(item.id) === params.id);
    if (!caseItem) return {};

    const title = `${caseItem.title} — Dragos Baci`;
    const url = `${SITE_URL}/${caseItem.id}/`;
    const image = {
        url: `/images/${caseItem.image}`,
        width: caseItem.imageWidth,
        height: caseItem.imageHeight,
        alt: `${caseItem.title} — ${caseItem.subtitle}`,
    };

    return {
        title,
        description: caseItem.description,
        // Self-canonical, not pointing back at the homepage: each case carries its own
        // copy about its own project, so it earns its own place in the index.
        alternates: { canonical: `/${caseItem.id}/` },
        openGraph: {
            type: 'article',
            title,
            description: caseItem.description,
            url,
            images: [image],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: caseItem.description,
            images: [image.url],
        },
    };
}

export default function CasePage({ params }: CaseParams) {
    const caseItem = items.find(item => String(item.id) === params.id);
    if (!caseItem) notFound();

    /*
     * Describes the case itself, separately from the Person schema in the root layout,
     * and links the two so a crawler can tell who made it. The breadcrumb gives search
     * results the "dragosbaci.com › Selected Cases › <case>" trail instead of a bare URL.
     */
    const caseJsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'CreativeWork',
                name: caseItem.title,
                headline: caseItem.title,
                description: caseItem.description,
                url: `${SITE_URL}/${caseItem.id}/`,
                image: `${SITE_URL}/images/${caseItem.image}`,
                genre: caseItem.subtitle,
                author: { '@type': 'Person', name: 'Dragos Baci', url: `${SITE_URL}/` },
                sameAs: caseItem.link,
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                    { '@type': 'ListItem', position: 2, name: 'Selected Cases', item: `${SITE_URL}/#work` },
                    { '@type': 'ListItem', position: 3, name: caseItem.title },
                ],
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(caseJsonLd) }}
            />
            {/* Passing the id explicitly rather than leaving Work to read the router:
                this value exists at build time, so the open case is guaranteed to be in
                the exported HTML. */}
            <PageShell caseId={caseItem.id.toString()} />
        </>
    );
}
