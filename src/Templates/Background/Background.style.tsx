'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

/*
 * The animated frame. next/image needs a positioned ancestor to fill, and the scroll
 * opacity/offset animate this wrapper rather than the <img> itself - the optimiser
 * owns the image element's own styles, so it isn't ours to drive.
 *
 * Desktop-only by construction: Background.tsx renders null on mobile, so this needs
 * no phone-sized variants.
 */
export const BackgroundFrame = styled(motion.div)`
    width: 100vw;
    /* Oversized by half a screen so the scroll-linked marginTop has room to travel
       without ever pulling the image's edge into view. */
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
`;
