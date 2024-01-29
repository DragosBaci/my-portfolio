import styled from 'styled-components';
import { motion } from 'framer-motion';
import '../../Fonts/fonts.css';
import { theme } from '../../Utils/Colors';

export const HomeContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        flex-wrap: wrap;
    }
`;

export const SplitContainerItems = styled.div`
    max-width: 40%;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 1%;
    @media (max-width: 767px) {
        max-width: 90%;
        text-align: left;
        padding-left: 2%;
    }
`;

export const Title = styled(motion.span)`
    color: ${theme.fontColor};
    font-size: 17.7vw;
    font-family: Tusker-Bold, serif;
    margin: 0;
    box-sizing: border-box;
    line-height: 1.03;
    text-transform: uppercase;
    text-align: center;
    @media (max-width: 767px) {
        font-size: 20vh;
        line-height: 21vh;
        text-align: left;
    }
`;

export const SubTitle = styled.div`
    font-size: 2.1vw;
    font-family: Migra, serif;
    color: ${theme.secondaryFontColor};
    text-align: left;
    align-self: baseline;
    padding-left: 0.5vw;
    margin: 0;
    @media (max-width: 767px) {
        font-size: 4vh;
        line-height: 4vh;
        text-align: left;
        width: auto;
    }
`;

export const DetailsText = styled(motion.p)`
    font-family: Neue-Montreal, serif;
    font-size: 2vw;
    text-transform: uppercase;
    color: ${theme.fontColor};
    margin-bottom: 15px;
    text-indent: 10vw;
    @media (max-width: 767px) {
        text-indent: 15vh;
        font-size: 1.8vh;
        width: 100%;
        justify-content: left;
    }
`;
