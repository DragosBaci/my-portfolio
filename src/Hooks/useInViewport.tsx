'use client';

import { useEffect, useRef, useState } from 'react';

type UseInViewportOptions = {
    /** Grows the viewport box so work can start just before the element is actually visible. */
    rootMargin?: string;
};

/**
 * Tracks whether an element is on screen.
 *
 * `hasEnteredViewport` latches on the first intersection, which makes it the right
 * signal for "start downloading/mounting this now". `isInViewport` keeps tracking,
 * which makes it the right signal for "keep animating".
 */
const useInViewport = <T extends HTMLElement>({ rootMargin = '200px' }: UseInViewportOptions = {}) => {
    const ref = useRef<T>(null);
    const [isInViewport, setIsInViewport] = useState(false);
    const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        if (typeof IntersectionObserver === 'undefined') {
            setIsInViewport(true);
            setHasEnteredViewport(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInViewport(entry.isIntersecting);
                if (entry.isIntersecting) {
                    setHasEnteredViewport(true);
                }
            },
            { rootMargin }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [rootMargin]);

    return { ref, isInViewport, hasEnteredViewport };
};

export default useInViewport;
