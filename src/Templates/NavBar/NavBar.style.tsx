import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export const BlurBackgroundContainer = styled(motion.div)`
    position: fixed;
    width: 100%;
    top: 0;
    height: 7%;
    backdrop-filter: blur(8px);
    z-index: 10;
`;

export const NavBarContainer = styled(motion.div)`
    position: fixed;
    width: 100%;
    top: 0;
    height: 7%;
    z-index: 11;
`;

export const NavigationBar = styled(motion.div)`
    width: 96%;
    position: absolute;
    bottom: 0;
    top: 0;
    border-bottom: 2px solid #ababab;
    margin-left: 2%;
    margin-right: 2%;
    display: flex;
`;

export const NavigationBarProgress = styled(motion.div)`
    width: 96%;
    position: absolute;
    bottom: 0;
    margin-left: 2%;
    margin-right: 2%;
    height: 2px;
    background: white;
    transform-origin: 0%;
    z-index: 10;
`;

export const LeftContainer = styled.div`
    flex: 40%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`;

export const RightContainer = styled.div`
    flex: 60%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5%;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2vw;
`;

const navLinkStyles = css`
    color: white;
    text-decoration: none;
    font-family: Migra;
    font-size: 1vw;
    white-space: nowrap;
`;

export const NavbarLink = styled(Link)`
    ${navLinkStyles}
`;

/* A plain anchor, not a router Link: these scroll to an id on the current page rather
   than navigating, so the browser's native (and already `scroll-behavior: smooth`)
   hash-anchor handling is simpler and more robust than wiring up refs by hand. */
export const NavbarScrollLink = styled.a`
    ${navLinkStyles}
    position: relative;
    cursor: pointer;
    padding-bottom: 4px;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background: currentColor;
        transition: width 0.3s ease;
    }

    &:hover:after {
        width: 100%;
    }
`;
