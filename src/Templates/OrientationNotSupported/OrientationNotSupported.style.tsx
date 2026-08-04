'use client';

import styled from 'styled-components';
import { theme } from '../../Utils/Colors';

/* Self-contained, rather than borrowing the deleted Connections section's Title. */
export const OrientationNotSupportedContainer = styled.div`
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    box-sizing: border-box;
    background: #131313;
`;

export const Title = styled.h1`
    font-family: Tusker-Bold, serif;
    font-size: clamp(2.6rem, 11vw, 6rem);
    line-height: 1.08;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: ${theme.fontColor};
    margin: 0;
`;

export const Message = styled.p`
    font-family: Neue-Montreal, serif;
    font-size: 1rem;
    line-height: 1.6;
    color: ${theme.secondaryFontColor};
    margin: 3vh 0 0;
    max-width: 36ch;
`;
