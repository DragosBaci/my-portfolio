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

export const seeCaseAnimation = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.4,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.4,
        },
    },
};
