'use client';

import styled from 'styled-components';
import { theme } from '../../Utils/Colors';

export const BottomNavbarSocialsContainer = styled.div`
    padding-right: 5vw;
`;

/* An anchor, not the h1 it used to be: these are navigation links, and a page with
   "Linkedin" as a top-level heading confuses both screen readers and search engines. */
export const BottomNavbarSocialsTitle = styled.a`
    display: inline-block;
    font-size: 1.3rem;
    font-family: 'Neue-Montreal';
    margin: 0;
    text-align: left;
    vertical-align: middle;
    padding-left: 1%;
    color: ${theme.fontColor};
    text-decoration: none;
    cursor: pointer;
    padding-right: 5%;
    position: relative;
    white-space: nowrap;
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: ${theme.fontColor};
        transition:
            width 0.3s ease,
            left 0.3s ease;
    }

    &:hover:after {
        width: 100%;
        left: 0;
    }

    @media (max-width: 767px) {
        font-size: 1.2rem;
    }
`;
