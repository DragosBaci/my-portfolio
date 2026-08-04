'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
    MenuBar,
    MenuButton,
    MenuFooter,
    MenuLink,
    MenuLinkClip,
    MenuOverlay,
} from './MobileNav.style';
import { mobileMenuLink, mobileMenuOverlay } from '../../Utils/AnimationValues';
import { sectionLinks } from '../../Utils/NavigationLinks';
import { useIsClickedContext } from '../../Context/IsClickedContext';

const MobileNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    // Hidden while a case detail is open, mirroring how the desktop NavBar retracts -
    // otherwise the button floats over the full-screen case view.
    const { isClicked } = useIsClickedContext();

    // Lock the page behind the menu while it's open, and always release on unmount so
    // the lock can't outlive the component (same lifecycle rule as the case modal).
    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    // Escape closes, matching what a keyboard user expects from any overlay.
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    if (isClicked && !isOpen) return null;

    return (
        <>
            <MenuButton
                onClick={() => setIsOpen(open => !open)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
            >
                <MenuBar $open={isOpen} $top />
                <MenuBar $open={isOpen} />
            </MenuButton>

            <AnimatePresence>
                {isOpen && (
                    <MenuOverlay
                        key="mobile-menu"
                        variants={mobileMenuOverlay}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {sectionLinks.map((link, index) => (
                            <MenuLinkClip key={link.href}>
                                {/* Native anchor + the page's global smooth scrolling; closing
                                    on click lets the browser handle the jump itself. */}
                                <MenuLink
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    variants={mobileMenuLink}
                                    custom={0.08 + index * 0.07}
                                >
                                    {link.label}
                                </MenuLink>
                            </MenuLinkClip>
                        ))}
                        <MenuFooter variants={mobileMenuOverlay}>Baci Dragos</MenuFooter>
                    </MenuOverlay>
                )}
            </AnimatePresence>
        </>
    );
};

export default MobileNav;
