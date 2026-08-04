'use client';

import React from 'react';
import { CardOpenLink } from './Card.style';
import { CaseImage, ImageCell, ImageClip, ImageInner } from '../List/List.style';
import useInViewport from '../../Hooks/useInViewport';
import { caseImageReveal } from '../../Utils/AnimationValues';

type CardProps = {
    id: number;
    image: string;
    title: string;
    column: number;
    row: number;
};

const Card: React.FC<CardProps> = ({ id, image, title, column, row }) => {
    /*
     * Observed on the cell rather than on the image: the image starts a full height below
     * its `overflow: hidden` clip, and IntersectionObserver intersects against clipping
     * ancestors, so it would report as permanently off screen and never reveal itself.
     */
    const { ref, hasEnteredViewport } = useInViewport<HTMLDivElement>({ rootMargin: '-10% 0px' });

    return (
        <ImageCell ref={ref} $column={column} $row={row}>
            <ImageClip>
                <ImageInner
                    variants={caseImageReveal}
                    initial="hidden"
                    animate={hasEnteredViewport ? 'visible' : 'hidden'}
                >
                    <CaseImage
                        src={`/images/${image}`}
                        alt={`${title} — project preview`}
                        fill
                        /* Cards span roughly a third of the viewport in the three-column
                           grid, half at the tablet breakpoint, full width stacked. Without
                           this the optimiser assumes 100vw and ships a needlessly large
                           derivative to every card. */
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </ImageInner>
                {/* Absolute, not relative: from `/1` a relative `2` resolves to `/1/2`. */}
                <CardOpenLink href={`/${id}`} aria-label={`Open case: ${title}`} />
            </ImageClip>
        </ImageCell>
    );
};

export default Card;
