'use client';

import React, { Suspense, lazy } from 'react';
import useInViewport from '../../Hooks/useInViewport';
import useIsMobile from '../../Hooks/useIsMobile';

/**
 * three.js + @react-three/fiber + drei are by far the heaviest dependencies here.
 * Keeping them behind a dynamic import moves them out of the main bundle, and the
 * viewport check means they are only fetched once the model is about to be seen.
 */
const CanvasModel = lazy(() => import('./CanvasModel'));

const DeferredCanvasModel: React.FC = () => {
    const { isMobile } = useIsMobile();
    const { ref, isInViewport, hasEnteredViewport } = useInViewport<HTMLDivElement>({ rootMargin: '300px' });

    // The placeholder reserves the model's box up front so loading it shifts nothing.
    return (
        <div ref={ref} style={{ width: '100%', height: isMobile ? '55vh' : '90vh' }}>
            {hasEnteredViewport && (
                <Suspense fallback={null}>
                    <CanvasModel active={isInViewport} />
                </Suspense>
            )}
        </div>
    );
};

export default DeferredCanvasModel;
