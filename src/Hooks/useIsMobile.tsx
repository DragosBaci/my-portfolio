'use client';

import { useEffect, useState } from 'react';

const MOBILE_QUERY = '(max-width: 768px)';

/**
 * A media query listener only fires when the breakpoint is actually crossed, unlike the
 * `resize` listener it replaces, which fired (and re-rendered every consumer) on every
 * pixel of a window drag.
 *
 * Starts `false` rather than measuring during render: the first render also happens on
 * the server at build time, where `window` doesn't exist, and a server/client mismatch
 * would break hydration. The effect corrects it immediately on mount.
 */
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(MOBILE_QUERY);
        const handleChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);

        // Sync to the real viewport as soon as we're in the browser.
        setIsMobile(mediaQuery.matches);

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return { isMobile };
};

export default useIsMobile;
