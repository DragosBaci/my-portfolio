'use client';

import React from 'react';
import { AiMarkFrame, MarkImage, MarkRing, MarkStar } from './AiPractice.style';
import useInViewport from '../../Hooks/useInViewport';
import { aiMarkSrc } from './aiConstants';

/*
 * The AI section's visual. By default this is a coded mark - the site's own star
 * turning inside two pulsing rings - rather than a third-party mascot: a vendor's
 * trademarked character on a personal portfolio reads as implied affiliation, and the
 * star is already the site's accent everywhere else.
 *
 * To use a GIF or image instead, drop the file in public/images and set `aiMarkSrc` in
 * aiConstants.ts; this component swaps automatically, no other change needed.
 *
 * Looping animation is gated on visibility so it isn't burning frames off screen, the
 * same reasoning behind the 3D canvas pausing its render loop. Reduced-motion users are
 * covered globally by MotionConfig in App.tsx.
 */
const AiMark: React.FC = () => {
    const { ref, isInViewport } = useInViewport<HTMLDivElement>({ rootMargin: '0px' });

    if (aiMarkSrc) {
        return (
            <AiMarkFrame ref={ref}>
                <MarkImage src={aiMarkSrc} alt="" aria-hidden="true" loading="lazy" decoding="async" />
            </AiMarkFrame>
        );
    }

    return (
        <AiMarkFrame ref={ref} aria-hidden="true">
            {[0, 1].map(index => (
                <MarkRing
                    key={index}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={
                        isInViewport
                            ? { opacity: [0, 0.35, 0], scale: [0.6, 1, 1.15] }
                            : { opacity: 0, scale: 0.6 }
                    }
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 2,
                        ease: 'easeOut',
                    }}
                />
            ))}
            <MarkStar
                animate={isInViewport ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            />
        </AiMarkFrame>
    );
};

export default AiMark;
