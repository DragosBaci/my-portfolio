/**
 * Canonical origin, in one place because it appears in metadata, canonicals, JSON-LD,
 * the sitemap and robots.txt - and any drift between them is a live SEO bug.
 *
 * Must be the host that serves the site *without* redirecting: the apex
 * (dragosbaci.com) 301s to www, so canonicals pointing at the apex would name a URL
 * that immediately redirects, and every sitemap entry would resolve to a redirect.
 * If the hosting is ever flipped so www redirects to the apex, change this line.
 */
export const SITE_URL = 'https://www.dragosbaci.com';
