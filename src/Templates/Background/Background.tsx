'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { BackgroundFrame, BackgroundFade } from './Background.style';
import { backgroundAnimation } from '../../Utils/AnimationValues';
import useIsMobile from '../../Hooks/useIsMobile';

/*
 * Paths into public/ rather than webpack imports, so the optimiser is handed a stable
 * URL. next/image serves AVIF/WebP derivatives sized to the requesting device, which is
 * what turns these two large JPEGs into something a phone can afford.
 */
const mobileBackground = '/images/backgroundMobile.jpg';
const computerBackground = '/images/background.jpg';

/*
 * Mobile swap-over points for the binary fade below, chosen to sit inside the desktop
 * scrub's ramps (0-0.34 out, 0.7-1 back): hide once the fade-out would be well under
 * way, return when the contact section is coming up.
 */
const MOBILE_HIDE_AFTER = 0.2;
const MOBILE_SHOW_AFTER = 0.85;

const Background = () => {
    const { isMobile } = useIsMobile();
    const { scrollYProgress } = useScroll();
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.34, 0.7, 1], [1, 0, 0, 1]);
    const backgroundMovement = useTransform(scrollYProgress, [0, 0.3, 0.7], ['0vh', '-30vh', '0vh']);

    /*
     * On phones the desktop treatment - opacity scrubbed against scroll position - was
     * the page's biggest source of scroll lag: every touch-scroll frame ran a JS style
     * write on a screen-sized fixed layer, and any frame the main thread missed showed
     * up as visible stutter. Instead of scrubbing, mobile flips a boolean at two scroll
     * thresholds and lets a self-running tween do the fading: the scroll handler is
     * reduced to a comparison, and the fade itself plays out frame-perfectly regardless
     * of what scrolling is doing to the main thread. The design survives - background
     * behind the hero, gone behind the text sections, back for the contact block.
     */
    const [mobileHidden, setMobileHidden] = useState(false);
    useMotionValueEvent(scrollYProgress, 'change', value => {
        if (!isMobile) return;
        setMobileHidden(value > MOBILE_HIDE_AFTER && value < MOBILE_SHOW_AFTER);
    });

    return (
        <BackgroundFrame
            /* The scrubbed values stay desktop-only; attaching a MotionValue here on
               mobile would reinstate the per-frame writes the boolean fade replaces. */
            style={isMobile ? undefined : { opacity: backgroundOpacity, marginTop: backgroundMovement }}
            variants={backgroundAnimation}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
        >
            {/* Separate layer so the tween can't fight the frame: the frame owns the
                intro variants (and the desktop scrub), this owns the mobile fade. */}
            <BackgroundFade
                animate={{ opacity: isMobile && mobileHidden ? 0 : 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
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
            </BackgroundFade>
        </BackgroundFrame>
    );
};

export default Background;
