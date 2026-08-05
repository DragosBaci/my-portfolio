'use client';

import styled, { keyframes } from 'styled-components';
import { theme } from '../../Utils/Colors';

/*
 * The hero entrance lives in CSS, not framer-motion, and the distinction is the whole
 * point: a framer entrance is server-rendered at its hidden first frame and stays
 * there until the full JS bundle has downloaded, parsed and hydrated - which made
 * first paint a blank page for as long as the network needed. A CSS animation ships
 * inside the server-rendered stylesheet and starts on first paint, before any
 * JavaScript exists. Same reveal, seconds earlier.
 *
 * The keyframes replicate the old titleAnimation variant: rise from below with a
 * slight swing, wiping up through a bottom clip. globals.css's reduced-motion rule
 * flattens it for users who ask.
 */
const heroReveal = keyframes`
    from {
        transform: translate(20px, 100px) rotate(10deg);
        clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
    }
    to {
        transform: translate(0px, 0px) rotate(0deg);
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
`;

/* caseEase, in CSS clothing. `both` keeps the pre-delay frames at `from` rather than
   flashing the settled state for the first 150ms. */
const heroEntrance = '0.9s cubic-bezier(0.22, 0.61, 0.36, 1) 0.15s both';

export const HomeContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        flex-wrap: wrap;
    }
`;

export const SplitContainerItems = styled.div`
    max-width: 40%;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 1%;
    @media (max-width: 767px) {
        max-width: 90%;
        text-align: left;
        padding-left: 2%;
    }
`;

/* Wraps the two title lines so the page has exactly one h1 carrying the real headline,
   rather than the section labels each rendering their own (which they used to). */
export const TitleHeading = styled.h1`
    margin: 0;
    padding: 0;
    font-weight: inherit;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Title = styled.span`
    animation: ${heroReveal} ${heroEntrance};
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

export const SubTitle = styled.div`
    font-size: 2.1vw;
    font-family: Migra, serif;
    color: ${theme.secondaryFontColor};
    text-align: left;
    align-self: baseline;
    padding-left: 0.5vw;
    margin: 0;
    @media (max-width: 767px) {
        font-size: 4vh;
        line-height: 4vh;
        text-align: left;
        width: auto;
    }
`;

export const DetailsText = styled.p`
    animation: ${heroReveal} ${heroEntrance};
    font-family: Neue-Montreal, serif;
    font-size: 2vw;
    text-transform: uppercase;
    color: ${theme.fontColor};
    margin-bottom: 15px;
    text-indent: 10vw;
    @media (max-width: 767px) {
        text-indent: 15vh;
        font-size: 1.8vh;
        width: 100%;
        justify-content: left;
    }
`;
