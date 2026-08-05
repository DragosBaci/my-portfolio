'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import useInViewport from '../../Hooks/useInViewport';
import useIsMobile from '../../Hooks/useIsMobile';

/**
 * three.js + @react-three/fiber + drei are by far the heaviest dependencies here.
 *
 * `next/dynamic` with `ssr: false` rather than React.lazy: it guarantees the chunk is
 * split out AND excluded from server rendering, so none of three.js is evaluated during
 * the static export or shipped in the initial payload. The viewport check then delays
 * the fetch until the model is about to be seen.
 */
const CanvasModel = dynamic(
    /* webpackPrefetch emits a <link rel="prefetch"> for the three.js chunk as soon as
       the page's own JS is up, so the code is already in cache when the viewport check
       finally imports it - downloading early without also evaluating early, which is
       the part that would cost main-thread time. */
    () => import(/* webpackPrefetch: true */ './CanvasModel'),
    {
        ssr: false,
        loading: () => null,
    }
);

const DeferredCanvasModel: React.FC = () => {
    const { isMobile } = useIsMobile();
    const { ref, isInViewport, hasEnteredViewport } = useInViewport<HTMLDivElement>({ rootMargin: '300px' });

    // The placeholder reserves the model's box up front so loading it shifts nothing.
    return (
        <div ref={ref} style={{ width: '100%', height: isMobile ? '55vh' : '90vh' }}>
            {hasEnteredViewport && <CanvasModel active={isInViewport} />}
        </div>
    );
};

export default DeferredCanvasModel;
