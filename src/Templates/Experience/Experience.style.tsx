import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../Utils/Colors';
import { sectionInset } from '../../Utils/Layout';

export const ExperienceContainer = styled.div`
    width: 100%;
    padding: 6vw 0 8vw;
`;

export const TimelineHeader = styled.div`
    ${sectionInset}
`;

/* The center line sits at the horizontal middle of this box, not of the section - it is
   intentionally wider than the header's inset so the line reads as centered in the
   viewport, distinct from the left-aligned heading above it. */
export const TimelineList = styled.div`
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 2vw 8vw;

    @media (max-width: 900px) {
        padding: 2vw 6vw 2vw 0;
    }
`;

export const TimelineTrack = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: ${theme.fontColor}33;
    transform: translateX(-50%);

    @media (max-width: 900px) {
        left: 16px;
    }
`;

/* Fills in sync with scroll progress through the list, transform-origin: top - the same
   idea as NavBar's scroll progress bar, applied vertically. */
export const TimelineProgress = styled(motion.div)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: ${theme.secondaryFontColor};
    transform-origin: top center;
    transform: translateX(-50%);

    @media (max-width: 900px) {
        left: 16px;
    }
`;

export const EntryRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 56px 1fr;
    align-items: center;
    padding: 2.4vw 0;

    @media (max-width: 900px) {
        grid-template-columns: 32px 1fr;
        padding: 28px 0;
    }
`;

type SideProps = { $side: 'left' | 'right' };

export const EntryContent = styled(motion.div)<SideProps>`
    grid-column: ${({ $side }) => ($side === 'left' ? 1 : 3)};
    padding: ${({ $side }) => ($side === 'left' ? '0 2.4vw 0 0' : '0 0 0 2.4vw')};

    @media (max-width: 900px) {
        grid-column: 2;
        padding: 0 0 0 24px;
    }
`;

export const EntryNode = styled.div`
    grid-column: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
        grid-column: 1;
    }
`;

export const EntryDot = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${theme.secondaryFontColor};
    border: 2px solid ${theme.mainSurface};
    box-shadow: 0 0 14px 2px ${theme.fontColor}33;
`;

export const TitleRow = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

/* Order, not text-align or flex-direction: the line's length has to be "whatever space
   is left after the title text", which only a flex `order` + `flex: 1` on the line
   achieves - and it lets the mobile override collapse to a single fixed arrangement
   (line before title) without touching the desktop rule for the other side. */
export const TitleLine = styled.div<SideProps>`
    flex: 1 1 auto;
    height: 1px;
    background: ${theme.fontColor}55;
    order: ${({ $side }) => ($side === 'left' ? 2 : 1)};

    @media (max-width: 900px) {
        order: 1;
    }
`;

/*
 * Tusker Grotesk here is the same condensed cut used at 17.7vw on the hero - fine at
 * that scale, but cramped at this one. Letter-spacing is the standard fix for a
 * condensed face used below its ideal size, rather than swapping the font itself.
 */
export const EntryHeadline = styled.h3<SideProps>`
    font-family: Tusker-Bold, serif;
    font-size: 2.9vw;
    line-height: 1.1;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${theme.fontColor};
    margin: 0;
    order: ${({ $side }) => ($side === 'left' ? 1 : 2)};

    @media (max-width: 900px) {
        order: 2;
        font-size: 5.4vw;
        letter-spacing: 0.03em;
    }

    @media (max-width: 767px) {
        font-size: 1.85rem;
        letter-spacing: 0.02em;
    }
`;

export const EntryPeriod = styled.p`
    font-family: Neue-Montreal, serif;
    font-size: 0.85vw;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${theme.secondaryFontColor};
    margin: 0.8vw 0 0.2vw;

    @media (max-width: 900px) {
        font-size: 1.6vw;
        margin-top: 12px;
    }

    @media (max-width: 767px) {
        font-size: 0.75rem;
    }
`;

export const EntryContext = styled.p`
    font-family: Neue-Montreal, serif;
    font-weight: 600;
    font-size: 1vw;
    color: ${theme.fontColor};
    margin: 0 0 0.4vw;

    @media (max-width: 900px) {
        font-size: 1.8vw;
    }

    @media (max-width: 767px) {
        font-size: 0.9rem;
    }
`;

export const EntryDescription = styled.p`
    font-family: Neue-Montreal, serif;
    font-size: 0.9vw;
    line-height: 1.5;
    color: ${theme.fontColor}cc;
    max-width: 32ch;
    margin: 0;

    @media (max-width: 900px) {
        font-size: 1.8vw;
        max-width: 40ch;
    }

    @media (max-width: 767px) {
        font-size: 0.85rem;
        max-width: none;
    }
`;
