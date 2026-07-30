import { Variants } from 'framer-motion';

export const backgroundAnimation = {
    hidden: {
        opacity: 0,
        clipPath: 'polygon(50% 10%, 60% 50%, 50% 90%, 40% 50%)',
        transition: {
            duration: 5,
        },
    },
    visible: {
        opacity: 1,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        transition: {
            delay: 1,
            duration: 1.2,
        },
    },
};

export const titleAnimation = {
    hidden: {
        opacity: 1,
        x: 20,
        y: 100,
        rotate: 10,
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        transition: {
            duration: 2.5,
        },
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        transition: {
            delay: 0.6,
            staggerChildren: 0,
        },
    },
};

export const navigationAnimation = {
    hidden: {
        transform: 'translate(0px,-150%)',
        transition: {
            duration: 0.4,
        },
    },
    visible: {
        transform: 'translate(0px,0%)',
        transition: {
            duration: 0.4,
        },
    },
};

/* Timed to match caseOverlay/casePanel so the bar, panel and overlay move as one. */
export const seeCaseAnimation = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.35,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
};

/**
 * Opening a case animates opacity and transform only - both run on the compositor,
 * so nothing here forces layout or paint. Closing is deliberately quicker than
 * opening: a slow dismiss reads as unresponsive.
 */
export const caseEase: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

export const caseOverlayAnimation: Variants = {
    hidden: {
        opacity: 0,
        transition: { duration: 0.2, ease: caseEase },
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.35, ease: caseEase },
    },
};

export const casePanelAnimation: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
        transition: { duration: 0.2, ease: caseEase },
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: caseEase },
    },
};

/**
 * Scroll reveals for the case grid. Each image sits in an `overflow: hidden` box and
 * starts pushed a full height below it, so it wipes upward into view. Titles use the
 * same idea at a shorter distance.
 */
export const caseImageReveal: Variants = {
    hidden: { y: '100%' },
    visible: {
        y: 0,
        transition: { duration: 0.9, ease: caseEase },
    },
};

export const caseTitleReveal: Variants = {
    hidden: { y: '110%' },
    visible: {
        y: 0,
        transition: { duration: 0.7, ease: caseEase },
    },
};

export const caseSubtitleReveal: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: 0.15, ease: caseEase },
    },
};

/**
 * Timeline entries slide in from whichever side of the center line they sit on, via
 * the `custom` prop (see framer-motion's per-instance variant resolution). A small
 * offset rather than a full clip-reveal: these elements are never fully hidden inside
 * an `overflow: hidden` ancestor, so a plain fade/slide is enough here.
 */
export const experienceEntryReveal: Variants = {
    hidden: (side: 'left' | 'right') => ({
        opacity: 0,
        x: side === 'left' ? -24 : 24,
    }),
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: caseEase },
    },
};
