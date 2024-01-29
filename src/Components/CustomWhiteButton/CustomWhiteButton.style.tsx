import styled, { keyframes } from 'styled-components';
import { theme } from '../../Utils/Colors';

const marqueeAnim = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-130%);
    }
`;

export const ButtonContainer = styled.div`
    display: inline-block;
    position: relative;
    color: ${theme.mainSurface};
    background-color: ${theme.fontColor};
    padding: 3px 15px;
    border: 2px solid ${theme.fontColor};
    border-radius: 50px;
    font-size: 2vw;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    user-select: none;
    transition: all 0.2s ease-out;
    overflow: hidden;
    cursor: pointer;
    margin-right: 1vw;
    @media (max-width: 767px) {
        font-size: 20px;
        align-self: baseline;
    }
`;
interface ButtonInfoProps {
    'data-text': string;
}

export const ButtonInfo = styled.span<ButtonInfoProps>`
    &:after {
        content: attr(data-text);
        position: absolute;
        left: 130%;
        width: 100%;
        text-align: center;
    }
`;

export const ButtonInner = styled.div`
    &:hover {
        animation: ${marqueeAnim} 1.5s linear infinite;
        animation-play-state: running;
    }
`;
