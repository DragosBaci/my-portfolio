import styled from 'styled-components';
import '../../Fonts/fonts.css';
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
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    width: 50px;
    height: 50px;
    @media (max-width: 767px) {
        height: 30px;
        width: 30px;
    }
`;

export const WorkTitleTitle = styled.h1`
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

export const WorkTitleSubtitle = styled.h2`
    font-size: 1.5rem;
    font-family: 'Migra';
    margin: 0;
    padding: 0;
    text-align: center;
    @media (max-width: 767px) {
        font-size: 1rem;
    }
`;
