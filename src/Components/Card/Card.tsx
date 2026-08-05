'use client';

import React from 'react';
import { CardOpenLink } from './Card.style';
import { CaseImage, ImageCell, ImageClip, ImageInner } from '../List/List.style';
import useInViewport from '../../Hooks/useInViewport';
import { caseImageReveal } from '../../Utils/AnimationValues';

/*
 * Cards span roughly a third of the viewport in the three-column grid, half at the
 * tablet breakpoint, full width stacked. Without this the optimiser assumes 100vw and
 * ships a needlessly large derivative to every card. Exported because the intro-time
 * prefetch (Utils/prefetchAssets) must describe the images identically - a different
 * sizes string would warm the wrong derivative and the real render would fetch again.
 */
export const CASE_IMAGE_SIZES = '(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw';

type CardProps = {
    id: number;
    image: string;
    title: string;
    column: number;
    row: number;
    onOpen: (id: number) => void;
};

const Card: React.FC<CardProps> = ({ id, image, title, column, row, onOpen }) => {
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
                        sizes={CASE_IMAGE_SIZES}
                    />
                </ImageInner>
                {/*
                 * Still a real <a href="/1"> - middle-click, cmd-click and crawlers get
                 * the case route as before - but a plain left click is intercepted and
                 * opened as an in-place overlay. Letting the link actually navigate is
                 * what used to remount the whole page and throw the scroll position away.
                 */}
                <CardOpenLink
                    href={`/${id}`}
                    aria-label={`Open case: ${title}`}
                    onClick={event => {
                        // Leave modified clicks (new tab, new window) to the browser.
                        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                        event.preventDefault();
                        onOpen(id);
                    }}
                />
            </ImageClip>
        </ImageCell>
    );
};

export default Card;
