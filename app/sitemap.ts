import type { MetadataRoute } from 'next';
import { items } from '@/Components/List/data';

const SITE_URL = 'https://dragosbaci.com';

/*
 * Generated rather than hand-written: the case routes are derived from the same array
 * that renders them, so adding or removing a case updates the sitemap on the next build
 * instead of quietly leaving a stale URL behind.
 *
 * The cases are listed now (the old static sitemap.xml omitted them) because static
 * export gives each one a real HTML file with its own title, description and copy -
 * they are genuinely separate pages rather than one document with a modal over it.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return [
        {
            url: `${SITE_URL}/`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...items.map(item => ({
            url: `${SITE_URL}/${item.id}/`,
            lastModified,
            changeFrequency: 'yearly' as const,
            priority: 0.8,
            /* Image sitemap entry: tells image search which picture belongs to which
               case, which a crawler otherwise has to infer from page position. */
            images: [`${SITE_URL}/images/${item.image}`],
        })),
    ];
}
