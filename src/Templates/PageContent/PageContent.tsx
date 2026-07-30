import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Background from '../Background/Background';
import AboutMe from '../AboutMe/AboutMe';
import Experience from '../Experience/Experience';
import Home from '../Home/Home';
import Work from '../Work/Work';
import Connections from '../Connections/Connections';
import LetsConnect from '../LetsConnect/LetsConnect';
import NavBar from '../NavBar/NavBar';
import useIsMobile from '../../Hooks/useIsMobile';
import useOrientation from '../../Hooks/useOrientation';
import OrientationNotSupported from '../OrientationNotSupported/OrientationNotSupported';

function PageContent() {
    const { isMobile } = useIsMobile();
    const orientation = useOrientation();
    const { id } = useParams();

    // Ref, not dependency: the intro effect must run exactly once, but the timer needs
    // to see the id as it is when it fires, not as it was on mount.
    const openItemRef = useRef(id);
    openItemRef.current = id;

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';

        const timeoutId = setTimeout(() => {
            document.body.style.height = 'auto';
            // With a case modal open (deep link, or opened during the intro), the modal
            // owns the scroll lock and will release it on close - don't undo it here.
            if (!openItemRef.current) {
                // Clear the shorthand rather than only `overflow-x`, otherwise
                // `overflow-y` stays pinned to `hidden` from the lock above.
                document.body.style.overflow = '';
            }
        }, 2500);

        return () => clearTimeout(timeoutId);
    }, []);

    if (orientation === 'landscape-primary' && isMobile) {
        return <OrientationNotSupported />;
    }

    return (
        <>
            {!isMobile && <NavBar />}
            <Background />
            <Home />
            <AboutMe />
            <Experience />
            <Work />
            <Connections />
            <LetsConnect />
        </>
    );
}

export default PageContent;
