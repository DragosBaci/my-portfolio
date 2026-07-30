import React from 'react';
import {
    BlurBackgroundContainer,
    LeftContainer,
    NavBarContainer,
    NavbarLink,
    NavbarLinkContainer,
    NavbarScrollLink,
    NavigationBar,
    NavigationBarProgress,
    RightContainer,
} from './NavBar.style';
import { useScroll, useTransform } from 'framer-motion';
import { navigationAnimation } from '../../Utils/AnimationValues';
import { useIsClickedContext } from '../../Context/IsClickedContext';

const sectionLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Connections', href: '#connections' },
    { label: 'Contact', href: '#contact' },
];

const NavBar: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const filter = useTransform(scrollYProgress, [0, 1], [0, 8]);
    const { isClicked } = useIsClickedContext();

    // React Router doesn't scroll on navigation, and a Link to the path you're already
    // on doesn't navigate at all - so scrolling to top has to be done explicitly here
    // rather than left to the `to="/"` on its own.
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

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
                            <NavbarLink to="/" onClick={handleScrollToTop}>
                                {' '}
                                Baci Dragos
                            </NavbarLink>
                        </NavbarLinkContainer>
                    </LeftContainer>
                    <RightContainer>
                        <NavbarLinkContainer>
                            {sectionLinks.map(link => (
                                <NavbarScrollLink key={link.href} href={link.href}>
                                    {link.label}
                                </NavbarScrollLink>
                            ))}
                        </NavbarLinkContainer>
                    </RightContainer>
                </NavigationBar>
                <NavigationBarProgress style={{ scaleX: scrollYProgress, transformOrigin: 'left' }} />
            </NavBarContainer>
        </>
    );
};

export default NavBar;
