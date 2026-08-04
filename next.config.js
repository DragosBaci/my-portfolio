/** @type {import('next').NextConfig} */
const nextConfig = {
    /*
     * No `output: 'export'` - the site is hosted on Vercel, which runs Next natively.
     * Static export was written for a dumb static host and only cost us features: the
     * pages here have no dynamic data, so Next prerenders them to static HTML anyway
     * (same crawlable markup the export produced), while image optimisation, route
     * handlers and ISR stay available.
     */

    images: {
        /*
         * Modern formats, generated on demand and cached at the edge. AVIF first, WebP
         * as the fallback - this is what replaces hand-converting the source files,
         * which was impossible locally for lack of an encoder.
         */
        formats: ['image/avif', 'image/webp'],
        /* Long cache on optimised derivatives: sources are content-stable. */
        minimumCacheTTL: 31536000,
    },

    compiler: {
        /* Lets styled-components generate stable class names on both server and client;
           without it, SSR markup and the client hydration disagree. */
        styledComponents: true,
    },
};

module.exports = nextConfig;
