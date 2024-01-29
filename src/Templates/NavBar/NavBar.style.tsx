import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../Fonts/fonts.css';
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
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`;

export const RightContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5%;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: small;
    text-decoration: none;
    font-family: Migra;
    font-size: 1vw;
`;
