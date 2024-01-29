import React from 'react';
import { useScroll, useTransform } from 'framer-motion';
import mobileBackground from '../../Assets/images/backgroundMobile.jpg';
import computerBackground from '../../Assets/images/background.jpg';
import { BackgroundImage } from './Background.style';
import { backgroundAnimation } from '../../Utils/AnimationValues';
import useIsMobile from '../../Hooks/useIsMobile';

const Background = () => {
    const { isMobile } = useIsMobile();
    const { scrollYProgress } = useScroll();
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.34, 0.7, 1], [1, 0, 0, 1]);
    const backgroundMovement = useTransform(scrollYProgress, [0, 0.3, 0.7], ['0vh', '-30vh', '0vh']);

    return (
        <BackgroundImage
            src={isMobile ? mobileBackground : computerBackground}
            style={{
                opacity: backgroundOpacity,
                marginTop: !isMobile ? backgroundMovement : 0,
            }}
            variants={backgroundAnimation}
            initial="hidden"
            animate="visible"
        />
    );
};

export default Background;
