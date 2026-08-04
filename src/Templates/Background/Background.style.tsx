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
    filter: brightness(0.9);
`;
