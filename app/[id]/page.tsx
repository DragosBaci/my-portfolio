import React from 'react';
import PageShell from '@/Templates/PageContent/PageShell';
import { items } from '@/Components/List/data';

/*
 * `output: 'export'` has no server to resolve dynamic segments at request time, so every
 * case route has to be enumerated at build time. Each one is written out as a real HTML
 * file, which is what makes a shared link to /3/ load with content already in it.
 */
export function generateStaticParams() {
    return items.map(item => ({ id: String(item.id) }));
}

/* Anything outside that list 404s rather than rendering an empty case view. */
export const dynamicParams = false;

export default function CasePage() {
    return <PageShell />;
}
