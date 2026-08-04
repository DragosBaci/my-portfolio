'use client';

import styled from 'styled-components';
import { theme } from '../../Utils/Colors';
import img from '../../Assets/images/star.png';
import { motion } from 'framer-motion';

export const WorkTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1vw;
    width: auto;
    height: 60px;
    padding-top: 10%;
    padding-bottom: 2%;
    @media (max-width: 767px) {
        margin-left: 20px;
        padding-bottom: 5%;
    }
`;

export const WorkTitleImage = styled(motion.div)`
    background-image: url(${img.src});
    background-size: cover;
    background-position: center;
    width: 50px;
    height: 50px;
    @media (max-width: 767px) {
        height: 30px;
        width: 30px;
    }
`;

/* h2, not h1: this is a section label used several times per page, and the single h1
   belongs to the hero headline. */
export const WorkTitleTitle = styled.h2`
    font-size: 2rem;
    font-family: 'Neue-Montreal', serif;
    margin: 0;
    text-align: center;
    vertical-align: middle;
    padding-left: 1%;
    color: ${theme.fontColor};
    text-transform: uppercase;
    @media (max-width: 767px) {
        font-size: 1.25rem;
    }
`;

/* A span, not a heading: it sits beside the section label rather than introducing its
   own subsection, and every current caller leaves it empty. */
export const WorkTitleSubtitle = styled.span`
    font-size: 1.5rem;
    font-family: 'Migra';
    margin: 0;
    padding: 0;
    text-align: center;
    @media (max-width: 767px) {
        font-size: 1rem;
    }
`;
