'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

/*
 * The animated frame. next/image needs a positioned ancestor to fill, and the scroll
 * opacity/offset now animate this wrapper rather than the <img> itself - the optimiser
 * owns the image element's own styles, so it isn't ours to drive.
 */
export const BackgroundFrame = styled(motion.div)`
    width: 100vw;
    height: 150vh;
    z-index: -10;
    position: fixed;
    /* Pinned explicitly: fixed with top auto only borrows the static position, which
       any layout change above this element in the tree can quietly move. */
    top: 0;
    overflow: hidden;
    transform: translateY(-20vh);
    /* Scroll drives this element's opacity, so tell the compositor up front and let it
       keep the rasterised image on its own layer instead of re-uploading it per frame. */
    will-change: opacity;

    /*
     * A flat 10% black wash, which is what brightness(0.9) came to visually.
     * As a filter it was far more expensive: a filtered element has to be re-filtered
     * whenever it is repainted, and this one repaints continuously because its opacity is
     * scroll-linked - a full-screen filter pass on every scroll frame. An overlay is
     * composited for free.
     */
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.1);
        pointer-events: none;
    }

    /*
     * The extra half-screen exists for backgroundMovement to travel through, and that
     * offset is desktop-only - on a phone this was rasterising 1.5 screens of image to
     * show one, at the exact moment the GPU is busiest.
     */
    @media (max-width: 768px) {
        height: 100vh;
        /* Large-viewport height where supported: 100vh can resolve against the layout
           viewport with the browser chrome visible, so once the URL bar collapses
           mid-scroll the frame comes up short of the screen - which is exactly when the
           background fades back in at the bottom of the page. lvh is defined as the
           chrome-collapsed size, so the frame always covers the tallest the viewport
           can become; the overshoot while the bar is visible just clips harmlessly. */
        height: 100lvh;
        transform: none;
    }
`;

/*
 * The mobile fade layer. The frame can't animate this itself - it already owns the
 * intro variants and the desktop scroll scrub, and a second writer to the same
 * element's opacity would silently win over both.
 */
export const BackgroundFade = styled(motion.div)`
    position: absolute;
    inset: 0;
`;
