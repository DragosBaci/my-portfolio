import styled from 'styled-components';
import { theme } from '../../Utils/Colors';

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100vh;
    width: 100%;
    @media (max-width: 767px) {
        padding: 0;
        flex-direction: column;
        height: auto;
        margin-top: 10vh;
    }
`;

export const SplitContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 767px) {
        width: 100%;
        min-height: 400px;
    }
`;

export const TextContainer = styled.div`
    padding-left: 20%;
    display: block;
    @media (max-width: 767px) {
        padding-left: 12%;
        width: 80%;
        text-align: left;
    }
`;

export const TitleSeparator = styled.div`
    padding: 0;
    margin: 0;
    height: 9rem;
    @media (max-width: 767px) {
        height: 6rem;
    }
    @media (max-width: 400px) {
        height: 4rem;
    }
`;

export const Title = styled.span`
    color: ${theme.fontColor};
    font-family: Tusker-Bold;
    font-size: 8rem;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    height: 9rem;
    text-align: left;
    white-space: pre-line;
    @media (max-width: 767px) {
        font-size: 6rem;
        height: 6rem;
    }
    @media (max-width: 400px) {
        font-size: 4rem;
        height: 4rem;
    }
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const RightWrapper = styled.div`
    align-items: start;
    transform: translateY(-100px);
`;
