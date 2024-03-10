import styled from 'styled-components';
import { theme } from '../../Utils/Colors';

export const BottomNavbarSocialsContainer = styled.div`
    padding-right: 5vw;
`;

export const BottomNavbarSocialsTitle = styled.h1`
    font-size: 1.3rem;
    font-family: 'Neue-Montreal';
    margin: 0;
    text-align: left;
    vertical-align: middle;
    padding-left: 1%;
    color: ${theme.fontColor};
    padding-right: 5%;
    position: relative;
    white-space: nowrap;
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: ${theme.fontColor};
        transition:
            width 0.3s ease,
            left 0.3s ease;
    }

    &:hover:after {
        width: 100%;
        left: 0;
    }

    @media (max-width: 767px) {
        font-size: 1.2rem;
    }
`;
