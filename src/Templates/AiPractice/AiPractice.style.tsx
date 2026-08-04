'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../Utils/Colors';
import { sectionGap, sectionInset } from '../../Utils/Layout';
import star from '../../Assets/images/star.png';

export const AiSection = styled.section`
    width: 100%;
    ${sectionGap}

    /* See AboutMe.style.tsx for why this is gated to when NavBar is actually rendered. */
    @media (min-width: 769px) {
        scroll-margin-top: 9vh;
    }
`;

export const AiHeader = styled.div`
    ${sectionInset}

    /* WorkTitle supplies its own 20px indent on mobile - don't stack a second one. */
    @media (max-width: 767px) {
        padding-left: 0;
    }
`;

export const AiBody = styled.div`
    ${sectionInset}
    box-sizing: border-box;
    padding-right: 12vw;

    @media (max-width: 1200px) {
        padding-right: 4vw;
    }

    @media (max-width: 767px) {
        padding-right: 20px;
    }
`;

/* Lead statement and animated mark share a row - the mark fills what was empty space
   to the right of a 30ch paragraph. */
export const AiLeadRow = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
    column-gap: 4vw;
    align-items: center;
    margin: 2vh 0 10vh;

    @media (max-width: 900px) {
        grid-template-columns: minmax(0, 1fr);
        row-gap: 32px;
        margin-bottom: 56px;
    }
`;

/* The opening statement, set larger than body copy but below headline scale. */
export const AiLead = styled(motion.p)`
    font-family: Neue-Montreal, serif;
    font-size: clamp(1.05rem, 1.7vw, 1.9rem);
    line-height: 1.5;
    color: ${theme.fontColor};
    max-width: 30ch;
    margin: 0;

    @media (max-width: 900px) {
        max-width: 40ch;
    }
`;

export const AiMarkFrame = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    width: 100%;
    max-width: 260px;
    justify-self: center;

    @media (max-width: 900px) {
        max-width: 180px;
        justify-self: flex-start;
    }
`;

/* Concentric rings pulsing outward behind the star. */
export const MarkRing = styled(motion.span)`
    position: absolute;
    inset: 0;
    border: 1px solid ${theme.fontColor};
    border-radius: 50%;
`;

export const MarkStar = styled(motion.div)`
    width: 42%;
    height: 42%;
    background-image: url(${star.src});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

/* Drop-in replacement for the coded mark: point it at a file in public/images. */
export const MarkImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

/* Numbered rows: outline numeral, then title and description in a second column. */
export const EntryRow = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 2.6fr);
    column-gap: 3vw;
    align-items: start;
    padding: 3.5vh 0;
    border-top: 1px solid ${theme.fontColor}22;

    @media (max-width: 900px) {
        grid-template-columns: minmax(0, 1fr);
        row-gap: 12px;
        padding: 28px 0;
    }
`;

/* Outline-only numerals - the same solid-versus-contour contrast the site uses to
   separate a label from the content it introduces. */
export const EntryNumber = styled(motion.span)`
    font-family: Tusker-Normal, serif;
    font-size: clamp(2.4rem, 4.5vw, 5rem);
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1.5px ${theme.fontColor};
    opacity: 0.85;
    display: block;
`;

export const TitleClip = styled.div`
    overflow: hidden;
    padding-bottom: 0.08em;
`;

/* Tusker-Normal, not Tusker-Bold: the latter is the extra-condensed cut (OS/2 width
   class 2) that reads as cramped below display scale - the same swap already applied to
   the Experience headlines. */
export const EntryTitle = styled(motion.h3)`
    font-family: Tusker-Normal, serif;
    font-size: clamp(1.8rem, 3.2vw, 3.6rem);
    /* Not below 1: the clip above crops caps that overshoot a tighter line box. */
    line-height: 1.08;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: ${theme.fontColor};
    margin: 0;
`;

export const EntryDescription = styled(motion.p)`
    font-family: Neue-Montreal, serif;
    font-size: clamp(0.9rem, 1.05vw, 1.1rem);
    line-height: 1.65;
    color: ${theme.fontColor}cc;
    max-width: 60ch;
    margin: 1.4vh 0 0;

    @media (max-width: 900px) {
        margin-top: 10px;
    }
`;
