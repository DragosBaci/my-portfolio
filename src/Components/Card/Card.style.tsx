import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useIsMobile from '../../Hooks/useIsMobile';

export const CardContainer = styled.li`
    position: relative;
    display: flex;
    padding: 25px 25px 15px;
    height: 15vw;
    flex: 0 0 40%;
    transition: transform 1s ease-in-out;

    @media (min-width: 768px) {
        &:hover {
            transform: scale(0.95);
            transition: transform 2s cubic-bezier(0.0005, 0.0005, 0.0025, 1);
        }
    }
    @media (max-width: 767px) {
        height: 220px;
        flex: auto;
        padding: 0;
    }

    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
        max-width: 60%;
        @media (max-width: 767px) {
            max-width: 100%;
            flex: 100%;
        }
    }
`;

export const CardContentContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    pointer-events: none;
`;

export const CardContent = styled(motion.div)`
    pointer-events: auto;
    position: relative;
    border-radius: 2px;
    color: white;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0 auto;
`;

export const CardImageContainer = styled(motion.div)`
    overflow: hidden;
    filter: grayscale(1) sepia(1) saturate(0.5) contrast(0.6) brightness(0.7);
    grid-column: 2;
    height: 100%;

    @media (min-width: 768px) {
        ${CardContainer}:hover & {
            transition: transform 2s cubic-bezier(0.0005, 0.0005, 0.0025, 1);
            transform: scale(1.4);
        }
    }

    @media (max-width: 767px) {
        grid-row: 2;
        grid-column: 1;
    }
`;

export const CardImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    grid-column: 2;
    @media (max-width: 767px) {
        object-fit: fill;
    }
`;

export const TitleContainer = styled(motion.div)`
    position: absolute;
    top: 15px;
    left: 15px;
    max-width: 300px;
`;

export const Category = styled.span`
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
`;

export const CardOpenLink = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;
