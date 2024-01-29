import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BackgroundImage = styled(motion.img)`
    width: 100vw;
    height: 150vh;
    z-index: -10;
    position: fixed;
    overflow: hidden;
    transform: translateY(-20vh);
    filter: brightness(0.9);
    @media (max-width: 768px) {
        filter: brightness(0.9);
    }
`;
