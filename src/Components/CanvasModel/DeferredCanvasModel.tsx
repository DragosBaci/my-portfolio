'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import useInViewport from '../../Hooks/useInViewport';
import useIsMobile from '../../Hooks/useIsMobile';

/**
 * three.js + @react-three/fiber + drei are by far the heaviest dependencies here.
 *
 * `next/dynamic` with `ssr: false` rather than React.lazy: it guarantees the chunk is
 * split out AND excluded from server rendering, so none of three.js is evaluated during
 * the static export or shipped in the initial payload.
 */
const CanvasModel = dynamic(
    /* webpackPrefetch emits a <link rel="prefetch"> for the three.js chunk as soon as
       the page's own JS is up, so the bytes are already local when the idle warm-up
       below imports them. */
    () => import(/* webpackPrefetch: true */ './CanvasModel'),
    {
        ssr: false,
        loading: () => null,
    }
);

/**
 * Waiting for the section to *approach* before mounting looked lazy-loading-correct but
 * produced a visibly empty box: cached bytes still aren't a running model. At 300px out
 * the page had yet to evaluate the three.js chunk, parse the GLB, meshopt-decode the
 * geometry, PMREM-process the environment and compile the PBR shaders - seconds of
 * serial main-thread and GPU work, all spent while the visitor watched the gap where
 * the statue should be.
 *
 * So mounting is now driven by idle time, not proximity: once the browser reports the
 * load work has quieted down (with a timeout so a busy page can't postpone it forever),
 * the whole stack spins up invisibly below the fold and all of that cost is paid before
 * anyone scrolls. The viewport check keeps two jobs: an early mount for someone who
 * outruns idle by scrolling immediately, and - via `active` - keeping the render loop
 * stopped whenever the statue is off screen, which is what actually protects scrolling
 * performance. requestIdleCallback is feature-checked for Safari, which still doesn't
 * ship it; there a short timer approximates "after the load dust settles".
 */
const DeferredCanvasModel: React.FC = () => {
    const { isMobile } = useIsMobile();
    const { ref, isInViewport, hasEnteredViewport } = useInViewport<HTMLDivElement>({ rootMargin: '300px' });
    const [idleReached, setIdleReached] = useState(false);

    useEffect(() => {
        const arm = () => setIdleReached(true);

        if ('requestIdleCallback' in window) {
            const idleId = window.requestIdleCallback(arm, { timeout: 3000 });
            return () => window.cancelIdleCallback(idleId);
        }

        const timeoutId = setTimeout(arm, 1500);
        return () => clearTimeout(timeoutId);
    }, []);

    // The placeholder reserves the model's box up front so loading it shifts nothing.
    return (
        <div ref={ref} style={{ width: '100%', height: isMobile ? '55vh' : '90vh' }}>
            {(idleReached || hasEnteredViewport) && <CanvasModel active={isInViewport} />}
        </div>
    );
};

export default DeferredCanvasModel;
