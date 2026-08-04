'use client';

import React from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { BackgroundImage } from './Background.style';
import { backgroundAnimation } from '../../Utils/AnimationValues';
import useIsMobile from '../../Hooks/useIsMobile';

/*
 * Served from `public/` rather than imported, so these keep stable URLs that index.html
 * can preload. Imported through webpack they sit behind the JS bundle in the dependency
 * graph, and the browser cannot discover the largest contentful paint until React runs.
 */
const mobileBackground = '/images/backgroundMobile.jpg';
const computerBackground = '/images/background.jpg';

const Background = () => {
    const { isMobile } = useIsMobile();
    const { scrollYProgress } = useScroll();
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.34, 0.7, 1], [1, 0, 0, 1]);
    const backgroundMovement = useTransform(scrollYProgress, [0, 0.3, 0.7], ['0vh', '-30vh', '0vh']);

    return (
        <BackgroundImage
            src={isMobile ? mobileBackground : computerBackground}
            style={{
                opacity: backgroundOpacity,
                marginTop: !isMobile ? backgroundMovement : 0,
            }}
            variants={backgroundAnimation}
            initial="hidden"
            animate="visible"
            alt=""
            aria-hidden="true"
            // Decode off the main thread so the intro animation is not blocked by it.
            decoding="async"
        />
    );
};

export default Background;
