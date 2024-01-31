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
    color: ${theme.fontColor};
    font-size: 2.2vw;
    border-bottom: 1px solid ${theme.secondaryFontColor};
    padding-bottom: 10px;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    user-select: none;
    transition: all 0.2s ease-out;
    overflow: hidden;
    cursor: pointer;

    @media (max-width: 767px) {
        font-size: 15px;
        align-self: baseline;
        margin-left: 20px;
        width: 90%;
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
        animation: ${marqueeAnim} 5s linear infinite;
        animation-play-state: running;
    }
`;
