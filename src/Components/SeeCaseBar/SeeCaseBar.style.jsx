'use client';

import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../Utils/Colors";

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
  bottom: 0;
  height: 7%;
  z-index: 11;
`;

export const NavigationBar = styled(motion.div)`
  width: 96%;
  position: absolute;
  bottom: 0;
  top: 0;
  border-top: 2px solid #ababab;
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
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

/* Category label in the bar's left slot - mirrors the reference's detail-view footer
   (category bottom-left, "see case" bottom-right). */
export const BarLabel = styled.span`
  font-family: Neue-Montreal, sans-serif;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${theme.secondaryFontColor};
  white-space: nowrap;

  @media (max-width: 767px) {
    font-size: 0.75rem;
    white-space: normal;
  }
`;

export const NavbarLink = styled.a`
  color: white;
  font-size: small;
  text-decoration: none;
  margin-right: 10px;
  font-size: 20px;
  z-index: 99;
  &:after {
    content: "";
    display: inline-block;
    background: url("data:image/svg+xml;utf8,<svg width='17' height='17' xmlns='http://www.w3.org/2000/svg'><path d='M14.875 13.357V3.643L1.518 17 0 15.482 13.357 2.125H3.643V0H17v13.357z' fill='%23FFF' fill-rule='nonzero'></path></svg>")
      center center no-repeat;
    height: 15px;
    width: 15px;
    margin-left: 5px;
  }
  @media (max-width: 767px) {
    font-size: 15px;
  }
`;
