import styled from 'styled-components';
import { motion } from 'framer-motion';
import img from '../../Assets/images/modalBackground.jpeg';
import { Link } from 'react-router-dom';

export const CardContentContainerOpen = styled.div`
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 1;
    overflow: hidden;
    padding: 40px 0;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 100%;
    pointer-events: none;
    margin-left: 0;
    @media (max-width: 767px) {
        padding: 0;
    }
`;

export const CardContent = styled(motion.div)`
    overflow: hidden;
    margin: 0 auto;
    pointer-events: none;
    max-width: 80%;
    max-height: 40%;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    @media (max-width: 767px) {
        max-height: 100%;
        max-width: 100%;
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: repeat(2, 45%);
    }
`;

export const CardImageContainer = styled(motion.div)`
    filter: brightness(0.7);
    order: 2;
    @media (max-width: 767px) {
        margin-top: 10%;
        height: 120%;
    }
`;

export const CardImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    grid-column: 2;
    @media (max-width: 767px) {
        margin-top: 10%;
        height: 80%;
    }
`;

export const ContentContainer = styled(motion.div)`
    color: white;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    padding-left: 10%;
    display: flex;
    padding-bottom: 10%;
    @media (max-width: 767px) {
        padding-left: 5%;
    }
`;

export const ContentTitleContainer = styled.div``;

export const ContentTitle = styled.div`
    font-size: 7.875rem;
    font-family: Tusker-Bold;
    color: white;
    text-transform: uppercase;
    height: 9.5rem;
    @media (max-width: 1024px) {
        font-size: 6rem;
        height: 7rem;
    }
`;

export const Subtitle = styled.div`
    font-size: 1.2vw;
    font-family: Neue-Montreal;
    color: white;
    font-weight: normal;
    @media (max-width: 1024px) {
        font-size: 1vw;
    }
    @media (max-width: 767px) {
        font-size: 1rem;
    }
`;

export const Overlay = styled(motion.div)`
    z-index: 1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(0.4);

    &a {
        display: block;
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100vw;
        left: 50%;

        transform: translateX(-50%);
    }
`;

export const OverlayLink = styled(Link)`
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100vw;
    left: 50%;

    transform: translateX(-50%);
`;
