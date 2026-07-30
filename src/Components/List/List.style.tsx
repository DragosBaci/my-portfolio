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
    grid-template-columns: repeat(3, 33.3333%);
    grid-auto-rows: 32vmin;
    width: 100%;
    /* The inset is padding on a full-width box, so it has to be counted inside it. */
    box-sizing: border-box;
    ${sectionInset}

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 50%);
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

export const ImageCell = styled(GridCell)<{ $bleed?: string }>`
    /* The negative margin lets an image hang into the column to its left. */
    margin-left: ${({ $bleed }) => $bleed ?? '0'};

    @media (max-width: 1200px) {
        margin-left: 0;
    }

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

export const ImageClip = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
    /* Keeps the open-link's z-index local to the card, so it can never rise above the
       case modal and stay clickable behind it. */
    isolation: isolate;
`;

export const ImageInner = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: ${theme.fontColor};
`;

/*
 * Filter and hover transform share one element so the browser rasterises the graded
 * image once and then only moves that layer. Splitting them across parent and child
 * forces the filter to re-run on every frame of the zoom.
 */
export const CaseImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(1) sepia(1) saturate(0.5) contrast(0.6) brightness(0.8);
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

export const CaseTitle = styled(motion.h3)`
    font-family: Tusker-Bold, serif;
    font-size: 3.6vw;
    line-height: 1.02;
    letter-spacing: 0.01em;
    margin: 0;
    text-transform: uppercase;
    color: ${theme.fontColor};

    @media (max-width: 1200px) {
        font-size: 5vw;
    }

    @media (max-width: 767px) {
        font-size: 2.4rem;
    }
`;

export const CaseSubtitle = styled(motion.p)`
    font-family: Neue-Montreal, serif;
    font-size: 0.95vw;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${theme.secondaryFontColor};
    margin: 0.6vw 0 0;

    @media (max-width: 1200px) {
        font-size: 1.4vw;
    }

    @media (max-width: 767px) {
        font-size: 0.8rem;
        margin-top: 10px;
    }
`;
