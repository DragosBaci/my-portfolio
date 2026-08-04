'use client';

import React, { useEffect, useRef, useState } from 'react';
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
import useIsMobile, { MOBILE_QUERY } from '../../Hooks/useIsMobile';
import useOrientation from '../../Hooks/useOrientation';
import OrientationNotSupported from '../OrientationNotSupported/OrientationNotSupported';
import { IsClickedProvider } from '../../Context/IsClickedContext';
import SmoothScroll, { getLenis } from '../../Components/SmoothScroll/SmoothScroll';
import { prefetchCaseAssets } from '../../Utils/prefetchAssets';

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

    /*
     * Gates the navbars while the intro plays. Seeded from the module flag so shell
     * remounts (opening/closing a case) start unlocked - only the once-per-load intro
     * path below ever sees this as false.
     */
    const [introDone, setIntroDone] = useState(introHasPlayed);

    useEffect(() => {
        if (introHasPlayed) return;
        introHasPlayed = true;

        // Warm the cache regardless of layout: on desktop this rides the intro's dead
        // time, on mobile it simply starts at first paint.
        prefetchCaseAssets();

        /*
         * Mobile skips the intro outright - no clip-path reveal, no 1s delay, no 2.5s
         * scroll lock. The sequence existed to unveil the background, and mobile no
         * longer renders one; all that was left of it there was a phone that ignores
         * touches for 2.5 seconds. Checked via matchMedia rather than the isMobile
         * state, which is still at its server-safe `false` when this effect runs.
         */
        if (window.matchMedia(MOBILE_QUERY).matches) {
            setIntroDone(true);
            return;
        }

        const releaseScrollLock = () => {
            setIntroDone(true);
            document.body.style.height = 'auto';
            // With a case modal open (deep link, or opened during the intro), the modal
            // owns the scroll lock and will release it on close - don't undo it here.
            if (!openItemRef.current) {
                // Clear the shorthand rather than only `overflow-x`, otherwise
                // `overflow-y` stays pinned to `hidden` from the lock above.
                document.body.style.overflow = '';
                getLenis()?.start();
            }
        };

        // Instant, not smooth: the stop() below puts `overflow: clip` on <html> via the
        // lenis-stopped class, which cancels any scroll animation still in flight - a
        // smooth glide here would die one frame in and strand a restored-scroll reload
        // mid-page for the whole intro.
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
        // Pause the inertia animation too, or wheel input accumulates against the locked
        // page and replays as a lurch the moment the overflow lock lifts.
        getLenis()?.stop();

        const timeoutId = setTimeout(releaseScrollLock, 2500);

        return () => {
            clearTimeout(timeoutId);
            /*
             * Release on unmount too, not just on the timer. Clearing the timeout alone
             * left the page permanently unscrollable: StrictMode double-invokes effects
             * in development (mount, unmount, mount), so the cleanup destroyed the only
             * timer that would have unlocked scrolling - and the guard above then made
             * the second mount skip re-arming it. The same trap springs in production if
             * the shell unmounts within 2.5s, e.g. opening a case straight away.
             */
            releaseScrollLock();
        };
    }, []);

    if (orientation === 'landscape-primary' && isMobile) {
        return <OrientationNotSupported />;
    }

    return (
        <>
            {/* A child of this component on purpose: child effects run before the parent's,
                so the Lenis instance exists by the time the intro effect above pauses it. */}
            <SmoothScroll />
            {isMobile ? <MobileNav disabled={!introDone} /> : <NavBar disabled={!introDone} />}
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
