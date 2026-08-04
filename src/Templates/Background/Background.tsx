'use client';

import React from 'react';
import Image from 'next/image';
import { useScroll, useTransform } from 'framer-motion';
import { BackgroundFrame } from './Background.style';
import { backgroundAnimation } from '../../Utils/AnimationValues';
import useIsMobile from '../../Hooks/useIsMobile';

/*
 * Paths into public/ rather than webpack imports, so the optimiser is handed a stable
 * URL. next/image serves AVIF/WebP derivatives sized to the requesting device, which is
 * what turns these two large JPEGs into something a phone can afford.
 */
const mobileBackground = '/images/backgroundMobile.jpg';
const computerBackground = '/images/background.jpg';

const Background = () => {
    const { isMobile } = useIsMobile();
    const { scrollYProgress } = useScroll();
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.34, 0.7, 1], [1, 0, 0, 1]);
    const backgroundMovement = useTransform(scrollYProgress, [0, 0.3, 0.7], ['0vh', '-30vh', '0vh']);

    return (
        <BackgroundFrame
            style={{
                opacity: backgroundOpacity,
                marginTop: !isMobile ? backgroundMovement : 0,
            }}
            variants={backgroundAnimation}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
        >
            <Image
                src={isMobile ? mobileBackground : computerBackground}
                alt=""
                fill
                /* This is the largest contentful paint: opt out of lazy loading and let
                   Next emit a high-priority preload for it, replacing the hand-written
                   <link rel="preload"> pair in the layout. */
                priority
                /* Always full-bleed, so the optimiser can pick a width from the viewport
                   alone rather than assuming the 100vw default at every breakpoint. */
                sizes="100vw"
                style={{ objectFit: 'cover' }}
            />
        </BackgroundFrame>
    );
};

export default Background;
