import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CardContentContainerOpen = styled.div`
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 1;
    overflow: hidden;
    padding: 40px 0;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 100%;
    pointer-events: none;
    margin-left: 0;
    @media (max-width: 767px) {
        padding: 0;
    }
`;

export const CardContent = styled(motion.div)`
    overflow: hidden;
    margin: 0 auto;
    pointer-events: none;
    max-width: 80%;
    max-height: 40%;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    @media (max-width: 767px) {
        max-height: 100%;
        max-width: 100%;
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: repeat(2, 45%);
    }
`;

export const CardImageContainer = styled.div`
    filter: brightness(0.7);
    order: 2;
    @media (max-width: 767px) {
        margin-top: 10%;
        height: 120%;
    }
`;

export const CardImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    grid-column: 2;
    @media (max-width: 767px) {
        margin-top: 10%;
        height: 80%;
    }
`;

export const ContentContainer = styled.div`
    color: white;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    padding-left: 10%;
    display: flex;
    padding-bottom: 10%;
    @media (max-width: 767px) {
        padding-left: 5%;
    }
`;

export const ContentTitleContainer = styled.div``;

export const ContentTitle = styled.div`
    font-size: 7.875rem;
    font-family: Tusker-Bold;
    color: white;
    text-transform: uppercase;
    height: 9.5rem;
    @media (max-width: 1024px) {
        font-size: 6rem;
        height: 7rem;
    }
`;

export const Subtitle = styled.div`
    font-size: 1.2vw;
    font-family: Neue-Montreal;
    color: white;
    font-weight: normal;
    @media (max-width: 1024px) {
        font-size: 1vw;
    }
    @media (max-width: 767px) {
        font-size: 1rem;
    }
`;

/*
 * Paints its own dimmed copy of the site background image, rather than trying to let
 * the real `<Background />` show through via transparency: that was the previous
 * attempt, and it broke because the Selected Cases grid sits in the stacking order
 * between this overlay and Background (z-index: -10, far behind) - a translucent
 * overlay reveals *everything* underneath it, not just the intended layer, so the grid
 * ghosted through along with the fresco. Painting the image here directly, fully
 * opaque, blocks the grid entirely and gives the same darkened-backdrop look as the
 * reference site's case detail view. Same URL Background.tsx already uses, so this is
 * a cache hit, not a second download.
 */
export const Overlay = styled(motion.div)`
    z-index: 1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    background:
        linear-gradient(rgba(13, 13, 13, 0.72), rgba(13, 13, 13, 0.72)),
        url('/images/background.jpg') center / cover no-repeat;

    @media (max-width: 768px) {
        background:
            linear-gradient(rgba(13, 13, 13, 0.72), rgba(13, 13, 13, 0.72)),
            url('/images/backgroundMobile.jpg') center / cover no-repeat;
    }

    /* The parent container is pointer-events: none so the panel doesn't swallow scroll;
       the overlay must opt back in for its close-on-click link to work. */
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
