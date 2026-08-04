'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../Utils/Colors';
import { sectionInset } from '../../Utils/Layout';

export const ListContainer = styled.div`
    width: 100%;
    padding-bottom: 3vw;
`;

/*
 * Three columns, one project per row, with the text and image cells alternating sides
 * and drifting rightward as you scroll. `grid-auto-rows` keeps every row the same
 * height so the stagger reads as deliberate rather than ragged.
 */
export const CasesGrid = styled.div`
    display: grid;
    /* minmax(0, 1fr), not a percentage: percentage columns are sized independently of
       column-gap, so three 33.3333% columns plus two 2vw gaps summed to wider than the
       container and pushed the row's content past the viewport edge. fr tracks divide
       the space left over *after* gaps are subtracted, so this always totals exactly
       100% regardless of gap size. The minmax(0, ...) additionally stops a track from
       refusing to shrink below its content's natural width - the same trap min-width:
       0 fixes on the cells themselves, just at the track level instead. */
    grid-template-columns: repeat(3, minmax(0, 1fr));
    /* A minimum, not a fixed height: 32vmin was a hard row size, so any row whose text
       needed more room than that simply overflowed into the row below it rather than
       growing - which is what was painting images on top of the enlarged titles. */
    grid-auto-rows: minmax(32vmin, auto);
    /* Real breathing room between columns, now that images no longer bleed into the
       one next to them - without this, adjacent cells sit flush against each other. */
    column-gap: 2vw;
    width: 100%;
    /* The inset is padding on a full-width box, so it has to be counted inside it. */
    box-sizing: border-box;
    ${sectionInset}

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 767px) {
        grid-template-columns: 100%;
        grid-auto-rows: auto;
        row-gap: 8px;
        padding-right: 20px;
    }
`;

type CellProps = {
    $column: number;
    $row: number;
    $mobileRow: number;
};

const GridCell = styled.div<CellProps>`
    display: grid;
    align-items: center;
    margin: 1vw 0;
    min-height: 195px;
    /* Grid items default to min-width: auto, which refuses to shrink below their
       content's full unwrapped width - without this override, TextCell's subtitle can
       never actually wrap inside its column; it just overflows past it instead. */
    min-width: 0;
    grid-column: ${({ $column }) => $column};
    grid-row: ${({ $row }) => $row};

    /* Below three columns the stagger stops reading, so cells fall back to document
       order - which is emitted left-cell-first, keeping the alternation intact. */
    @media (max-width: 1200px) {
        grid-column: auto;
        grid-row: auto;
    }

    @media (max-width: 767px) {
        grid-column: 1;
        grid-row: ${({ $mobileRow }) => $mobileRow};
        margin: 0;
        min-height: 0;
    }
`;

export const ImageCell = styled(GridCell)`
    position: relative;

    @media (max-width: 767px) {
        height: 56vw;
    }
`;

export const TextCell = styled(GridCell)<{ $indent?: string }>`
    padding-left: ${({ $indent }) => $indent ?? '0'};
    align-content: center;

    @media (max-width: 1200px) {
        padding-left: 2vw;
    }

    @media (max-width: 767px) {
        padding: 14px 0 28px;
    }
`;

/*
 * `position: absolute; inset: 0` instead of `width/height: 100%`: the latter needs a
 * definite height on ImageCell to resolve against, which it no longer has now that
 * CasesGrid's rows size to content (`minmax(32vmin, auto)`) - without one, the browser
 * falls back to the image's intrinsic aspect ratio, which is what was inflating rows to
 * an image's natural height instead of the text's. An absolutely positioned box sizes
 * against its containing block's grid area directly (a case CSS Grid handles
 * explicitly), sidestepping that percentage-resolution problem, and - just as
 * important - doesn't contribute to the row's auto-sizing at all, so only the text
 * cell's content drives how tall a row grows.
 */
export const ImageClip = styled.div`
    position: absolute;
    inset: 0;
    display: block;
    overflow: hidden;
    /* Keeps the open-link's z-index local to the card, so it can never rise above the
       case modal and stay clickable behind it. */
    isolation: isolate;

    /* Focus through contrast: hovering anywhere in the grid dims every case except the
       one under the cursor. Pure CSS - no JS hover state to keep in sync. */
    @media (min-width: 768px) {
        transition: opacity 400ms cubic-bezier(0.33, 1, 0.68, 1);

        ${CasesGrid}:hover & {
            opacity: 0.4;
        }

        ${CasesGrid}:hover &:hover {
            opacity: 1;
        }
    }
`;

export const ImageInner = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: ${theme.fontColor};
`;

export const CaseImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    will-change: transform;
    transition: transform 600ms cubic-bezier(0.33, 1, 0.68, 1);

    @media (min-width: 768px) {
        ${ImageClip}:hover & {
            transform: scale(1.06);
        }
    }
`;

export const TitleClip = styled.div`
    overflow: hidden;
    padding-bottom: 0.1em;
`;

/*
 * Sized against a reference screenshot from bepatrickdavid.com, whose case titles use
 * this same font (confirmed via its stylesheet's @font-face): its headline fills ~28%
 * of its card's height there vs. ~15% here before this change - roughly 1.8x larger,
 * not a different typeface. Estimated from pixel proportions in a static screenshot,
 * not measured live, so treat this as a strong first pass rather than an exact match.
 */
export const CaseTitle = styled(motion.h3)`
    font-family: Tusker-Bold, serif;
    font-size: 6.5vw;
    /* Below 1, not above: TitleClip wraps this in overflow: hidden for the wipe-reveal,
       and a line-height tighter than the font's natural leading gives its tall caps no
       headroom - invisible at the old smaller size, a visible crop at 2x the size. */
    line-height: 1.05;
    letter-spacing: 0.01em;
    margin: 0;
    text-transform: uppercase;
    color: ${theme.fontColor};

    @media (max-width: 1200px) {
        font-size: 9vw;
    }

    @media (max-width: 767px) {
        /* A smaller step-up than the ratio above: at full mobile card width, scaling
           the same amount risked wrapping longer titles awkwardly. */
        font-size: 3.2rem;
    }
`;

export const CaseSubtitle = styled(motion.p)`
    font-family: Neue-Montreal, serif;
    font-size: 1.3vw;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${theme.secondaryFontColor};
    margin: 0.15vw 0 0;

    @media (max-width: 1200px) {
        font-size: 2vw;
    }

    @media (max-width: 767px) {
        font-size: 0.95rem;
        margin-top: 6px;
    }
`;
