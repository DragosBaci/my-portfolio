import { useEffect, useState } from 'react';

const MOBILE_QUERY = '(max-width: 768px)';

/**
 * A media query listener only fires when the breakpoint is actually crossed, unlike the
 * `resize` listener it replaces, which fired (and re-rendered every consumer) on every
 * pixel of a window drag.
 */
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia(MOBILE_QUERY);
        const handleChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);

        // Re-sync in case the viewport crossed the breakpoint between render and effect.
        setIsMobile(mediaQuery.matches);

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return { isMobile };
};

export default useIsMobile;
