'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../Utils/Colors';

/*
 * Sits above the case-detail overlay's stacking range (z-index 1) but below nothing
 * else - the menu is the topmost surface on mobile when open.
 */
export const MenuButton = styled.button`
    position: fixed;
    top: 16px;
    right: 16px;
    z-index: 40;
    width: 46px;
    height: 46px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 0;
    border: none;
    border-radius: 50%;
    /*
     * Opaque enough to read on its own instead of blurring what is behind it. This button
     * is fixed, always on screen, and mobile-only, so a backdrop-filter here meant the
     * compositor re-sampling and re-blurring the page behind it on every scroll frame -
     * the one place on the site where that cost is paid continuously.
     */
    background: rgba(19, 19, 19, 0.78);
    cursor: pointer;
`;

/* Two bars that cross into an X when open - transform-only, so it stays cheap. */
export const MenuBar = styled.span<{ $open: boolean; $top?: boolean }>`
    display: block;
    width: 20px;
    height: 2px;
    background: ${theme.fontColor};
    transition: transform 300ms cubic-bezier(0.33, 1, 0.68, 1);
    transform: ${({ $open, $top }) => {
        if (!$open) return 'none';
        return $top ? 'translateY(4px) rotate(45deg)' : 'translateY(-4px) rotate(-45deg)';
    }};
`;

export const MenuOverlay = styled(motion.nav)`
    position: fixed;
    inset: 0;
    z-index: 35;
    background: linear-gradient(rgba(13, 13, 13, 0.94), rgba(13, 13, 13, 0.94)),
        url('/images/backgroundMobile.jpg') center / cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    box-sizing: border-box;
`;

export const MenuLinkClip = styled.div`
    overflow: hidden;
    padding-bottom: 0.08em;
`;

export const MenuLink = styled(motion.a)`
    display: block;
    font-family: Tusker-Bold, serif;
    font-size: 3.4rem;
    line-height: 1.08;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: ${theme.fontColor};
    text-decoration: none;

    @media (max-width: 360px) {
        font-size: 2.8rem;
    }
`;

export const MenuFooter = styled(motion.p)`
    position: absolute;
    left: 20px;
    bottom: 32px;
    font-family: Migra-light, serif;
    font-size: 1rem;
    color: ${theme.secondaryFontColor};
    margin: 0;
`;
