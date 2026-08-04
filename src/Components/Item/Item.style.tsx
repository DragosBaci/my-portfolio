'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { theme } from '../../Utils/Colors';

/*
 * The detail view is a full-bleed poster: the project image IS the page, with the
 * title stamped over it and metadata pinned to the corners. Nothing floats in the
 * middle of empty space - every element anchors to an edge, which is what the two
 * previous box-based layouts lacked. The overlay behind it doubles as the
 * click-anywhere-to-close catcher (the poster itself is pointer-events: none).
 */
export const Overlay = styled(motion.div)`
    z-index: 1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    background-color: #0d0d0d;
    pointer-events: auto;
`;

export const OverlayLink = styled(Link)`
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100vw;
    left: 50%;

    transform: translateX(-50%);
`;

export const DetailStage = styled(motion.div)`
    position: fixed;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    overflow: hidden;
`;

/* Full-viewport backdrop image. Dimmed twice over: brightness on the image itself and
   a bottom-heavy gradient scrim, so the cream title stays legible over any photo. */
export const HeroImageWrap = styled(motion.div)`
    position: absolute;
    inset: 0;
`;

export const HeroImage = styled(Image)`
    object-fit: cover;
    filter: brightness(0.55);
`;

export const HeroScrim = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(13, 13, 13, 0.45) 0%, rgba(13, 13, 13, 0.05) 35%, rgba(13, 13, 13, 0.82) 100%);
`;

/* Index pinned top-left, e.g. "01 / 05" - Migra-light, the site's italic accent face. */
export const CaseIndex = styled(motion.p)`
    position: absolute;
    top: 10vh;
    left: 6vw;
    font-family: Migra-light, serif;
    font-size: clamp(1.1rem, 1.6vw, 1.6rem);
    color: ${theme.secondaryFontColor};
    margin: 0;

    @media (max-width: 767px) {
        top: 24px;
        left: 20px;
    }
`;

/* Close affordance top-right. Purely a hint - the whole screen closes on click. */
export const CloseHint = styled(motion.p)`
    position: absolute;
    top: 10vh;
    right: 6vw;
    font-family: Neue-Montreal, sans-serif;
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${theme.fontColor}99;
    margin: 0;

    @media (max-width: 767px) {
        top: 24px;
        right: 20px;
    }
`;

/* Title and description anchor to the bottom edge, above the SeeCaseBar (height 7%),
   title left and description right on desktop - Swiss-style opposed alignment. */
export const BottomBlock = styled.div`
    position: absolute;
    left: 6vw;
    right: 6vw;
    bottom: 13vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 4vw;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        left: 20px;
        right: 20px;
        bottom: 12vh;
    }
`;

export const TitleBlock = styled.div`
    min-width: 0;
`;

export const TitleClip = styled.div`
    overflow: hidden;
    padding-bottom: 0.08em;
`;

export const DetailTitle = styled(motion.h2)`
    font-family: Tusker-Bold, serif;
    font-size: clamp(3rem, 9vw, 9.5rem);
    /* Not below 1: the clip above crops anything outside the line box, and Tusker's
       caps overshoot a line box tighter than the font's own leading - the same crop
       bug fixed on the grid's CaseTitle earlier. */
    line-height: 1.08;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: ${theme.fontColor};
    margin: 0;
`;

/* Sentence case, narrow measure, right-anchored on desktop. */
export const DetailDescription = styled(motion.p)`
    font-family: Neue-Montreal, serif;
    font-size: clamp(0.9rem, 1.05vw, 1.15rem);
    line-height: 1.6;
    color: ${theme.fontColor}dd;
    max-width: 36ch;
    margin: 0;
    flex-shrink: 0;

    @media (max-width: 900px) {
        max-width: 52ch;
    }
`;
