import styled from 'styled-components';

export const Container = styled.section`
    align-self: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const Ul = styled.ul`
    width: 100%;
    li {
        color: rgb(255, 255, 255);
        text-transform: uppercase;
        span {
            &:hover {
                & ~ div {
                    transform: rotate(5deg) scale(1) translateY(-60%);
                    opacity: 0.9;
                    z-index: 99;
                }
            }
        }
        .img-cont {
            pointer-events: none;
            position: absolute;
            right: 5%;
            width: 300px;
            height: 200px;
            transform: scale(0.8) translateY(-30%);
            opacity: 0;
            transition: 0.3s;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
`;
