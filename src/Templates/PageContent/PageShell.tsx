'use client';

import React, { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { MotionConfig } from 'framer-motion';
import Background from '../Background/Background';
import AboutMe from '../AboutMe/AboutMe';
import Experience from '../Experience/Experience';
import Home from '../Home/Home';
import Work from '../Work/Work';
import AiPractice from '../AiPractice/AiPractice';
import LetsConnect from '../LetsConnect/LetsConnect';
import NavBar from '../NavBar/NavBar';
import MobileNav from '../MobileNav/MobileNav';
import useIsMobile from '../../Hooks/useIsMobile';
import useOrientation from '../../Hooks/useOrientation';
import OrientationNotSupported from '../OrientationNotSupported/OrientationNotSupported';
import { IsClickedProvider } from '../../Context/IsClickedContext';

/*
 * Module scope, deliberately: `/` and `/[id]` are separate route components, so opening
 * or closing a case unmounts and remounts this shell. Without this flag the intro would
 * replay on every card click - yanking the reader back to the top and locking scroll for
 * 2.5s. It resets on a real page load, which is when the intro should actually run.
 */
let introHasPlayed = false;

type PageShellProps = {
    /* Known at build time on the case routes; see Work for why it beats the router. */
    caseId?: string;
};

/*
 * The whole interactive page. Rendered by both `/` and `/[id]`: the case routes show the
 * same document with a detail view over it, so they share one shell rather than
 * duplicating the sections.
 */
function PageShellContent({ caseId }: PageShellProps) {
    const { isMobile } = useIsMobile();
    const orientation = useOrientation();
    // next/navigation types params as string | string[]; the route only ever has one.
    const params = useParams<{ id?: string }>();
    const routeId = typeof params?.id === 'string' ? params.id : undefined;
    const id = caseId ?? routeId;

    // Ref, not dependency: the intro effect must run exactly once, but the timer needs
    // to see the id as it is when it fires, not as it was on mount.
    const openItemRef = useRef(id);
    openItemRef.current = id;

    useEffect(() => {
        if (introHasPlayed) return;
        introHasPlayed = true;

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
            {isMobile ? <MobileNav /> : <NavBar />}
            <Background />
            <Home />
            <AboutMe />
            <Experience />
            <Work caseId={caseId} />
            <AiPractice />
            <LetsConnect />
        </>
    );
}

/*
 * The providers that used to wrap <App /> in the deleted CRA entrypoint. They live here
 * rather than in app/layout.tsx so the layout can stay a server component: MotionConfig
 * and IsClickedProvider are both client-only.
 */
function PageShell({ caseId }: PageShellProps) {
    return (
        /* Honors the OS-level reduced-motion setting for every framer-motion animation.
           CSS-driven motion gets the same treatment in globals.css. */
        <MotionConfig reducedMotion="user">
            <IsClickedProvider>
                <PageShellContent caseId={caseId} />
            </IsClickedProvider>
        </MotionConfig>
    );
}

export default PageShell;
