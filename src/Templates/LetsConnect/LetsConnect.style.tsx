'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../Utils/Colors';

export const LetsConnectContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    margin-bottom: 3%;

    /* See AboutMe.style.tsx for why this is gated to when NavBar is actually rendered. */
    @media (min-width: 769px) {
        scroll-margin-top: 9vh;
    }

    @media (max-width: 767px) {
        display: block;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        margin-bottom: 0;
    }
`;

export const SplitContainerItemsLeft = styled.div`
    max-width: 40%;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 1%;
    @media (max-width: 767px) {
        width: 90%;
        text-align: left;
        padding-left: 2%;
    }
`;

export const SplitContainerItemsRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 80%;
    @media (max-width: 767px) {
        width: 95%;
        text-align: left;
        padding-left: 2%;
    }
`;

export const Title = styled(motion.span)`
    color: ${theme.fontColor};
    font-size: 17.7vw;
    font-family: Tusker-Bold, serif;
    margin: 0;
    box-sizing: border-box;
    line-height: 1.03;
    text-transform: uppercase;
    text-align: center;
    @media (max-width: 767px) {
        font-size: 20vh;
        line-height: 21vh;
        text-align: left;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const ButtonContainer2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10%;
    @media (max-width: 767px) {
        flex-direction: column;
        margin-left: 0;
    }
`;

export const ButtonContainer3 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20%;
    padding-bottom: 15%;
    @media (max-width: 767px) {
        flex-direction: row;
        margin-left: 0;
        align-items: baseline;
    }
`;

export const BottomNavbarContainer = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 767px) {
        margin-bottom: 10%;
    }
`;

/* Symmetrical inset via border-box, so the row's right edge lands at 98% - level with
   the rule underneath (3% + 95%) - instead of running to the viewport edge. */
export const BottomNavbarSplitter = styled.div`
    box-sizing: border-box;
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 1.5% 2%;
    @media (max-width: 767px) {
        margin-bottom: 5%;
        margin-top: 3%;
    }
`;

export const BottomNavbarBorderBottom = styled.div`
    border-bottom: 1px solid ${theme.fontColor};
    height: 1%;
    width: 95%;
    display: flex;
    align-items: center;
    opacity: 70%;
    margin-left: 3%;
`;

/* Sits on the CONTACT row rather than a line of its own; margin-left: auto pushes it
   to the far right of that flex row, opposite the heading. */
export const BackToTop = styled.button`
    margin-left: auto;
    font-family: Neue-Montreal, serif;
    font-size: 0.85rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${theme.fontColor}99;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    white-space: nowrap;
    transition: color 300ms ease;

    &:hover {
        color: ${theme.fontColor};
    }
`;

/* p, not h1: a call to action, not a document heading - and the page's single h1 is
   the hero headline. */
export const BottomNavbarTitle = styled.p`
    font-size: 2rem;
    font-family: 'Neue-Montreal', serif;
    margin: 0;
    text-align: left;
    vertical-align: middle;
    padding-left: 1%;
    color: ${theme.fontColor};
    /* Spacing to the CONTACT button comes from the row's gap now. */
    padding-right: 1%;
    text-transform: uppercase;
    @media (max-width: 767px) {
        /* Was "1 rem" - the space made it invalid, so mobile silently kept 2rem. */
        font-size: 1rem;
        width: 40%;
    }
`;
