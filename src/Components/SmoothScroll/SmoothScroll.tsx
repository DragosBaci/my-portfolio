'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
// The lock/allow styles the instance toggles via classes on <html>: `.lenis-stopped`
// gets `overflow: clip`, which is what actually freezes the page while an overlay is up.
import 'lenis/dist/lenis.css';

/*
 * Module scope so the scroll-lock sites (intro, mobile menu, case modal) can pause the
 * animation without threading a context through components that otherwise never
 * re-render on scroll. Null whenever Lenis isn't running - callers must tolerate that,
 * which also covers reduced-motion users, where it is never created at all.
 */
let lenis: Lenis | null = null;

export const getLenis = () => lenis;

/**
 * Window-level inertia scrolling. Lenis intercepts wheel input and eases the real
 * scroll position toward it each frame, so everything that reads native scroll -
 * framer-motion's useScroll animations included - follows the smoothed value for free.
 *
 * Touch input is deliberately left native (syncTouch defaults to false): phones already
 * have physical momentum scrolling on the compositor thread, and re-simulating it in JS
 * is exactly the main-thread jank the mobile fixes just removed. This changes desktop
 * feel; mobile keeps the browser's own inertia.
 */
const SmoothScroll = () => {
    useEffect(() => {
        // Inertia is still motion: honor the OS setting, same as MotionConfig does for
        // framer and globals.css does for CSS. Checked once at mount, like the intro.
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const instance = new Lenis({
            // Lenis owns its own requestAnimationFrame loop.
            autoRaf: true,
            // Intercept same-page `#section` links (the desktop navbar) so the glide is
            // Lenis's easing rather than the browser's own smooth-scroll racing it.
            anchors: true,
        });
        lenis = instance;

        return () => {
            instance.destroy();
            lenis = null;
        };
    }, []);

    return null;
};

export default SmoothScroll;
