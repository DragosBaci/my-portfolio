'use client';

import React, { useState } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';
import { CardOpenLink } from './Card.style';
import { CaseImage, ImageCell, ImageClip, ImageInner, ViewPill } from '../List/List.style';
import useInViewport from '../../Hooks/useInViewport';
import { caseImageReveal } from '../../Utils/AnimationValues';

type CardProps = {
    id: number;
    image: string;
    title: string;
    column: number;
    row: number;
    mobileRow: number;
};

const Card: React.FC<CardProps> = ({ id, image, title, column, row, mobileRow }) => {
    /*
     * Observed on the cell rather than on the image: the image starts a full height below
     * its `overflow: hidden` clip, and IntersectionObserver intersects against clipping
     * ancestors, so it would report as permanently off screen and never reveal itself.
     */
    const { ref, hasEnteredViewport } = useInViewport<HTMLDivElement>({ rootMargin: '-10% 0px' });

    // Only enter/leave touch React state; pointer movement writes straight to motion
    // values, which framer applies to the DOM without re-rendering this component.
    const [isHovered, setIsHovered] = useState(false);
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const springConfig = { stiffness: 350, damping: 30, mass: 0.5 };
    const pillX = useSpring(pointerX, springConfig);
    const pillY = useSpring(pointerY, springConfig);

    const handlePointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        // Centre the pill on the cursor: half its 92px width/height.
        pointerX.set(event.clientX - bounds.left - 46);
        pointerY.set(event.clientY - bounds.top - 46);
    };

    return (
        <ImageCell ref={ref} $column={column} $row={row} $mobileRow={mobileRow}>
            <ImageClip
                onMouseMove={handlePointerMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <ImageInner
                    variants={caseImageReveal}
                    initial="hidden"
                    animate={hasEnteredViewport ? 'visible' : 'hidden'}
                >
                    <CaseImage
                        src={`/images/${image}`}
                        alt={`${title} — project preview`}
                        loading="lazy"
                        decoding="async"
                    />
                </ImageInner>
                <ViewPill
                    aria-hidden="true"
                    style={{ x: pillX, y: pillY }}
                    initial={false}
                    animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.6 }}
                    transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
                >
                    View
                </ViewPill>
                {/* Absolute, not relative: from `/1` a relative `2` resolves to `/1/2`. */}
                <CardOpenLink href={`/${id}`} aria-label={`Open case: ${title}`} />
            </ImageClip>
        </ImageCell>
    );
};

export default Card;
