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
        transform: none;
    }
`;
