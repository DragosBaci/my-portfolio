import React from 'react';
import {
    BlurBackgroundContainer,
    LeftContainer,
    NavBarContainer,
    NavbarLink,
    NavbarLinkContainer,
    NavigationBar,
    NavigationBarProgress,
    RightContainer,
} from './NavBar.style';
import { useScroll, useTransform } from 'framer-motion';
import { navigationAnimation } from '../../Utils/AnimationValues';
import { useIsClickedContext } from '../../Context/IsClickedContext';

const NavBar: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const filter = useTransform(scrollYProgress, [0, 1], [0, 8]);
    const { isClicked } = useIsClickedContext();

    return (
        <>
            <BlurBackgroundContainer
                variants={navigationAnimation}
                initial="hidden"
                animate={isClicked ? 'hidden' : 'visible'}
                style={{ opacity: filter }}
            ></BlurBackgroundContainer>
            <NavBarContainer variants={navigationAnimation} initial="hidden" animate={isClicked ? 'hidden' : 'visible'}>
                <NavigationBar>
                    <LeftContainer>
                        <NavbarLinkContainer>
                            <NavbarLink to="/"> Baci Dragos</NavbarLink>
                        </NavbarLinkContainer>
                    </LeftContainer>
                    <RightContainer>
                        <NavbarLinkContainer></NavbarLinkContainer>
                    </RightContainer>
                </NavigationBar>
                <NavigationBarProgress style={{ scaleX: scrollYProgress, transformOrigin: 'left' }} />
            </NavBarContainer>
        </>
    );
};

export default NavBar;
