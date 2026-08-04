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
import { getLenis } from '../../Components/SmoothScroll/SmoothScroll';

type MobileNavProps = {
    /*
     * True while the intro plays. Blocking the button (not just the links) matters
     * beyond politeness: opening and closing the menu mid-intro would run this
     * component's lenis stop/start pair and unlock the page under the intro's own lock.
     */
    disabled?: boolean;
};

const MobileNav: React.FC<MobileNavProps> = ({ disabled = false }) => {
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
        getLenis()?.stop();
        return () => {
            document.body.style.overflow = previousOverflow;
            getLenis()?.start();
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
                disabled={disabled}
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
                                {/*
                                 * Lenis needs hand-holding here that the desktop navbar doesn't:
                                 * its own anchor intercept silently drops scrollTo while stopped,
                                 * and it is stopped for as long as this menu is open. So take
                                 * over the click - block the (instant) native jump, keep the
                                 * hash in the URL, and glide after the menu's cleanup has
                                 * restarted Lenis. The rAF matters: start() resets any in-flight
                                 * animation, so a scrollTo issued in this handler would be wiped
                                 * by the very restart that makes it possible.
                                 */}
                                <MenuLink
                                    href={link.href}
                                    onClick={event => {
                                        const lenis = getLenis();
                                        if (lenis) {
                                            event.preventDefault();
                                            window.history.pushState(null, '', link.href);
                                            requestAnimationFrame(() => getLenis()?.scrollTo(link.href));
                                        }
                                        // Without Lenis (reduced motion) the native anchor
                                        // navigation proceeds untouched.
                                        setIsOpen(false);
                                    }}
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
