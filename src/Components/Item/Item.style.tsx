'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { theme } from '../../Utils/Colors';

/*
 * The detail view is a drawer, not a poster. The page stays visible - dimmed - behind
 * it, which keeps the reader oriented: they never "left" the grid, so closing feels
 * like putting something down rather than navigating back. The project image is one
 * contained block inside the panel instead of a full-bleed backdrop, so type sits on
 * solid ground and legibility never depends on what the photo happens to contain.
 */

/* Dimmer + click-anywhere-to-close. Flat alpha, no backdrop blur: a full-screen blur
   would tax exactly the moment the drawer is animating. */
export const Backdrop = styled(motion.button)`
    position: fixed;
    inset: 0;
    z-index: 30;
    background: rgba(13, 13, 13, 0.72);
    border: none;
    padding: 0;
    cursor: pointer;
`;

/*
 * The drawer. dvh so the browser chrome collapsing on mobile can't leave a dead strip;
 * data-lenis-prevent (set in Item.tsx) lets the panel scroll its own overflow while
 * Lenis holds the page behind it still.
 */
export const Panel = styled(motion.aside)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 31;
    width: min(640px, 100vw);
    height: 100dvh;
    background: #121212;
    border-left: 1px solid rgba(245, 238, 230, 0.08);
    overflow-y: auto;
    overscroll-behavior: contain;
    display: flex;
    flex-direction: column;
    padding: clamp(20px, 3vh, 40px) clamp(20px, 3vw, 48px);
    box-sizing: border-box;

    @media (max-width: 767px) {
        width: 100vw;
        border-left: none;
    }
`;

/* Index left, close right - the panel's one fixed anchor row. */
export const PanelHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-bottom: clamp(16px, 2.5vh, 28px);
`;

export const CaseIndex = styled(motion.p)`
    font-family: Migra-light, serif;
    font-size: 1.1rem;
    color: ${theme.secondaryFontColor};
    margin: 0;
`;

export const CloseButton = styled.button`
    font-family: Neue-Montreal, sans-serif;
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${theme.fontColor};
    background: none;
    border: none;
    padding: 4px 0;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 200ms ease;

    &:hover {
        opacity: 1;
    }
`;

/* The image as an object in the layout - fixed ratio, clipped, never a background. */
export const MediaBlock = styled(motion.div)`
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    flex-shrink: 0;
`;

export const MediaImage = styled(Image)`
    object-fit: cover;
`;

export const CaseCategory = styled(motion.p)`
    font-family: Neue-Montreal, sans-serif;
    font-size: 0.85rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${theme.secondaryFontColor};
    margin: clamp(20px, 3.5vh, 36px) 0 0;
`;

export const TitleClip = styled.div`
    overflow: hidden;
    padding-bottom: 0.08em;
    margin-top: 6px;
`;

export const DetailTitle = styled(motion.h2)`
    font-family: Tusker-Bold, serif;
    font-size: clamp(2.8rem, 7vw, 4.8rem);
    /* Tusker's caps overshoot tight line boxes; anything below this crops inside the
       clip above - same bug fixed twice elsewhere, not making it a third time. */
    line-height: 1.08;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: ${theme.fontColor};
    margin: 0;
`;

export const DetailDescription = styled(motion.p)`
    font-family: Neue-Montreal, serif;
    font-size: 1rem;
    line-height: 1.65;
    color: ${theme.fontColor}dd;
    max-width: 58ch;
    margin: clamp(14px, 2vh, 24px) 0 0;
`;

/*
 * CTA pinned to the panel's bottom edge by the spacer margin; a top rule separates it
 * from the copy the way the grid separates rows. The arrow is the same glyph language
 * as the old bar's external links.
 */
export const PanelFooter = styled(motion.div)`
    margin-top: auto;
    padding-top: clamp(16px, 2.5vh, 28px);
    border-top: 1px solid rgba(245, 238, 230, 0.12);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
`;

export const VisitLink = styled.a`
    font-family: Neue-Montreal, sans-serif;
    font-size: 1rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${theme.fontColor};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;

    &:after {
        content: '';
        display: inline-block;
        width: 14px;
        height: 14px;
        background: url("data:image/svg+xml;utf8,<svg width='17' height='17' xmlns='http://www.w3.org/2000/svg'><path d='M14.875 13.357V3.643L1.518 17 0 15.482 13.357 2.125H3.643V0H17v13.357z' fill='%23F5EEE6' fill-rule='nonzero'></path></svg>")
            center / contain no-repeat;
        transition: transform 250ms cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    &:hover:after {
        transform: translate(3px, -3px);
    }
`;

export const FooterLabel = styled.span`
    font-family: Neue-Montreal, sans-serif;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${theme.secondaryFontColor};
    text-align: right;
`;
