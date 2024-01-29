import { useState, useEffect } from 'react';

const useOrientation = () => window.screen?.orientation?.type;

const useScreenOrientation = () => {
    const [orientation, setOrientation] = useState(useOrientation());

    const UpdateOrientation = () => {
        setOrientation(useOrientation());
    };

    useEffect(() => {
        window.addEventListener('orientationchange', UpdateOrientation);
        return () => {
            window.removeEventListener('orientationchange', UpdateOrientation);
        };
    }, []);

    return orientation;
};

export default useScreenOrientation;
