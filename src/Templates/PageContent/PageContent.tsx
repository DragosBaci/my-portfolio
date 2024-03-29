import React, { useEffect } from 'react';
import Background from '../Background/Background';
import AboutMe from '../AboutMe/AboutMe';
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

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';

        const timeoutId = setTimeout(() => {
            document.body.style.overflowX = 'visible';
            document.body.style.height = 'auto';
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
            <Work />
            <Connections />
            <LetsConnect />
        </>
    );
}

export default PageContent;
