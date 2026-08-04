'use client';

import styled from 'styled-components';
import { theme } from '../../Utils/Colors';

/*
 * Self-contained rather than borrowing Connections.style's Title (which is what this
 * page used to do - a leftover coupling to a section that no longer exists on the
 * page). Same background treatment as the case detail view so a 404 still feels like
 * part of the site rather than a browser default.
 */
export const NotFoundContainer = styled.div`
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 12vw;
    box-sizing: border-box;
    background:
        linear-gradient(rgba(13, 13, 13, 0.78), rgba(13, 13, 13, 0.78)),
        url('/images/background.jpg') center / cover no-repeat;

    @media (max-width: 767px) {
        padding: 0 20px;
        background:
            linear-gradient(rgba(13, 13, 13, 0.78), rgba(13, 13, 13, 0.78)),
            url('/images/backgroundMobile.jpg') center / cover no-repeat;
    }
`;

export const Code = styled.p`
    font-family: Migra-light, serif;
    font-size: clamp(1.1rem, 1.8vw, 1.8rem);
    color: ${theme.secondaryFontColor};
    margin: 0 0 1vh;
`;

export const Title = styled.h1`
    font-family: Tusker-Bold, serif;
    font-size: clamp(3.4rem, 12vw, 13rem);
    line-height: 1.05;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: ${theme.fontColor};
    margin: 0;
`;

export const Message = styled.p`
    font-family: Neue-Montreal, serif;
    font-size: clamp(0.95rem, 1.1vw, 1.15rem);
    line-height: 1.6;
    color: ${theme.fontColor}dd;
    max-width: 44ch;
    margin: 3vh 0 4vh;
`;

export const HomeLink = styled.a`
    align-self: flex-start;
    font-family: Neue-Montreal, serif;
    font-size: 0.95rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${theme.mainSurface};
    background: ${theme.fontColor};
    border-radius: 50px;
    padding: 12px 28px;
    text-decoration: none;
    transition: opacity 300ms ease;

    &:hover {
        opacity: 0.85;
    }
`;
