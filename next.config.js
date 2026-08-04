/** @type {import('next').NextConfig} */
const nextConfig = {
    /*
     * Static HTML export: every route is rendered to a real .html file at build time and
     * written to `out/`, which is what makes the content crawlable without running JS -
     * the whole point of the migration - while still deploying to a static host exactly
     * as before. `npm run deploy` publishes `out/` instead of the old `build/`.
     */
    output: 'export',

    /* Emits `/case/index.html` rather than `/case.html`, so static hosts resolve the
       routes without needing per-path rewrite rules. */
    trailingSlash: true,

    images: {
        /* The export target has no server to run Next's image optimiser on. The site
           uses plain <img> tags anyway, so this only guards against a build error if a
           next/image is ever added. */
        unoptimized: true,
    },

    compiler: {
        /* Lets styled-components generate stable class names on both server and client;
           without it, SSR markup and the client hydration disagree. */
        styledComponents: true,
    },
};

module.exports = nextConfig;
