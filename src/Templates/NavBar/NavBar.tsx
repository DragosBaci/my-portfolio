'use client';

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
import { sectionLinks } from '../../Utils/NavigationLinks';

type NavBarProps = {
    /* True while the intro plays: links stay visible but inert until the page unlocks. */
    disabled?: boolean;
};

const NavBar: React.FC<NavBarProps> = ({ disabled = false }) => {
    const { scrollYProgress } = useScroll();
    const filter = useTransform(scrollYProgress, [0, 1], [0, 8]);
    const { isClicked } = useIsClickedContext();

    /*
     * preventDefault rather than pointer-events: a keyboard user can still focus a link
     * and hit Enter, which fires click without a pointer ever being involved - this
     * guard covers both input paths at once.
     */
    const blockWhileIntro = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (disabled) event.preventDefault();
    };

    // React Router doesn't scroll on navigation, and a Link to the path you're already
    // on doesn't navigate at all - so scrolling to top has to be done explicitly here
    // rather than left to the `to="/"` on its own.
    const handleScrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (disabled) {
            event.preventDefault();
            return;
        }
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
                            <NavbarLink href="/" onClick={handleScrollToTop}>
                                {' '}
                                Baci Dragos
                            </NavbarLink>
                        </NavbarLinkContainer>
                    </LeftContainer>
                    <RightContainer>
                        <NavbarLinkContainer>
                            {sectionLinks.map(link => (
                                <NavbarScrollLink
                                    key={link.href}
                                    href={link.href}
                                    onClick={blockWhileIntro}
                                    aria-disabled={disabled || undefined}
                                >
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
