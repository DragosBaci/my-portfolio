import { useState, useEffect } from 'react';

const getOrientationType = () => window.screen?.orientation?.type;

const useScreenOrientation = () => {
    const [orientation, setOrientation] = useState(getOrientationType);

    useEffect(() => {
        const screenOrientation = window.screen?.orientation;
        const handleChange = () => setOrientation(getOrientationType());

        // Re-sync in case the device rotated between render and effect.
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
