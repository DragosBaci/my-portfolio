import React, { useEffect } from 'react';
import Background from '../Background/Background';
import AboutMe from '../AboutMe/AboutMe';
import Home from '../Home/Home';
import Work from '../Work/Work';
import Connections from '../Connections/Connections';
import LetsConnect from '../LetsConnect/LetsConnect';
import NavBar from '../NavBar/NavBar';
import useIsMobile from '../../Hooks/useIsMobile';

export function PageContent() {
    const { isMobile } = useIsMobile();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        document.body.style.overflow = 'hidden';

        const timeoutId = setTimeout(() => {
            document.body.style.overflow = 'visible';
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, []);
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
