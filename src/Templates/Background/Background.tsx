'use client';

import React from 'react';
import Image from 'next/image';
import { useScroll, useTransform } from 'framer-motion';
import { BackgroundFrame } from './Background.style';
import { backgroundAnimation } from '../../Utils/AnimationValues';
import useIsMobile from '../../Hooks/useIsMobile';

/*
 * A path into public/ rather than a webpack import, so the optimiser is handed a stable
 * URL. next/image serves AVIF/WebP derivatives sized to the requesting device, which is
 * what turns this large JPEG into something any screen can afford.
 */
const computerBackground = '/images/background.jpg';

/*
 * Desktop-only. On phones the scroll-linked treatment was the page's biggest source of
 * scroll lag, and rather than a cheaper fade the call was to drop the background
 * entirely - the sections sit on the body's flat dark instead. Rendering null (rather
 * than hiding with CSS) also keeps the <img> out of the mobile DOM, so the file is
 * never downloaded there; the SSR markup does still carry the desktop preload hint,
 * which a phone may start fetching before hydration removes the frame - unavoidable
 * with a static prerender that can't know the device, and it was already the pre-swap
 * behaviour when this component served both layouts. There is no flash before that
 * removal: the intro variant starts at opacity 0, and hydration unmounts the frame
 * long before the 1s-delayed reveal begins.
 */
type BackgroundProps = {
    /* Fired when the mount reveal finishes - PageShell uses it to end the intro's
       scroll lock at the exact moment the choreography is over, instead of trusting a
       hardcoded timer to stay in sync with the animation values. */
    onRevealComplete?: () => void;
};

const Background = ({ onRevealComplete }: BackgroundProps) => {
    const { isMobile } = useIsMobile();
    const { scrollYProgress } = useScroll();
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.34, 0.7, 1], [1, 0, 0, 1]);
    const backgroundMovement = useTransform(scrollYProgress, [0, 0.3, 0.7], ['0vh', '-30vh', '0vh']);

    if (isMobile) return null;

    return (
        <BackgroundFrame
            style={{
                opacity: backgroundOpacity,
                marginTop: backgroundMovement,
            }}
            variants={backgroundAnimation}
            initial="hidden"
            animate="visible"
            onAnimationComplete={definition => {
                if (definition === 'visible') onRevealComplete?.();
            }}
            aria-hidden="true"
        >
            <Image
                src={computerBackground}
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
