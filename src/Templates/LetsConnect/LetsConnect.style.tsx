import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../Utils/Colors';

export const LetsConnectContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    @media (max-width: 767px) {
        display: block;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
    }
`;

export const SplitContainerItemsLeft = styled.div`
    max-width: 40%;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 1%;
    @media (max-width: 767px) {
        width: 90%;
        text-align: left;
        padding-left: 2%;
    }
`;

export const SplitContainerItemsRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 80%;
    @media (max-width: 767px) {
        width: 95%;
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

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const ButtonContainer2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10%;
    @media (max-width: 767px) {
        flex-direction: column;
        margin-left: 0;
    }
`;

export const ButtonContainer3 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20%;
    padding-bottom: 15%;
    @media (max-width: 767px) {
        flex-direction: row;
        margin-left: 0;
        align-items: baseline;
    }
`;

export const BottomNavbarContainer = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 767px) {
        margin-bottom: 10%;
    }
`;

export const BottomNavbarSplitter = styled.div`
    height: 50%;
    width: 98%;
    display: flex;
    align-items: center;
    padding-left: 2%;
    @media (max-width: 767px) {
        margin-bottom: 5%;
        margin-top: 3%;
    }
`;

export const BottomNavbarBorderBottom = styled.div`
    border-bottom: 1px solid ${theme.fontColor};
    height: 1%;
    width: 95%;
    display: flex;
    align-items: center;
    opacity: 70%;
    margin-left: 3%;
`;

export const BottomNavbarTitle = styled.h1`
    font-size: 2rem;
    font-family: 'Neue-Montreal', serif;
    margin: 0;
    text-align: left;
    vertical-align: middle;
    padding-left: 1%;
    color: ${theme.fontColor};
    padding-right: 5%;
    text-transform: uppercase;
    @media (max-width: 767px) {
        font-size: 1rem;
        width: 40%;
    }
`;
