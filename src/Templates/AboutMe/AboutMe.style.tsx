import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100vh;
    width: 100vw;
    margin-top: 50vh;
    @media (max-width: 767px) {
        padding: 0;
        flex-direction: column;
        height: auto;
        margin-top: 20vh;
    }
`;

export const SplitContainer = styled.div`
    width: 40%;
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        width: 100%;
        min-height: 500px;
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

export const AboutText = styled.p`
    color: white;
    text-transform: uppercase;
    font-size: 2rem;
    font-family: Neue-Montreal;
    text-align: left;
    line-height: 2.7rem;

    @media (max-width: 1024px) {
        font-size: 1.5rem;
        line-height: 1.7rem;
    }

    @media (max-width: 767px) {
        font-size: 1.2rem;
        line-height: 1.8rem;
        margin-top: 3rem;
    }
`;

export const Title = styled.span`
    color: white;
    font-family: Tusker-Bold;
    font-size: 6vw;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    height: 7vw;
    text-align: left;
    @media (max-width: 767px) {
        font-size: 4.5rem;
        height: 4.5rem;
    }
    @media (max-width: 400px) {
        font-size: 3.5rem;
        height: 3.5rem;
    }
`;

export const TitleContainer = styled.span`
    right: 0;
    display: inline-grid;
    @media (max-width: 767px) {
        display: inline-grid;
    }
`;

export const Subtitle = styled.div`
    font-size: 1.2vw;
    font-family: Migra-light;
    color: #efd8b7;
    font-weight: normal;
    text-align: right;
    margin: 0;
    @media (max-width: 767px) {
        font-size: 1rem;
        text-align: right;
        margin-top: 1rem;
    }
`;
