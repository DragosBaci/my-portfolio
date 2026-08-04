'use client';

import { useState, useEffect } from 'react';

const getOrientationType = () => window.screen?.orientation?.type;

/**
 * Starts undefined rather than reading `window.screen` during render - that first render
 * also runs on the server at build time. The effect fills it in on mount.
 */
const useScreenOrientation = () => {
    const [orientation, setOrientation] = useState<OrientationType | undefined>(undefined);

    useEffect(() => {
        const screenOrientation = window.screen?.orientation;
        const handleChange = () => setOrientation(getOrientationType());

        // Sync to the real device orientation now that we're in the browser.
        handleChange();

        // The Screen Orientation API is the accurate source; the deprecated window
        // `orientationchange` event is only a fallback for browsers without it.
        if (screenOrientation) {
            screenOrientation.addEventListener('change', handleChange);
            return () => screenOrientation.removeEventListener('change', handleChange);
        }

        window.addEventListener('orientationchange', handleChange);
        return () => window.removeEventListener('orientationchange', handleChange);
    }, []);

    return orientation;
};

export default useScreenOrientation;
