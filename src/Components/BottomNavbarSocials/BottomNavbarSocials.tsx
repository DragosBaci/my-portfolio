'use client';

import React from 'react';
import { BottomNavbarSocialsContainer, BottomNavbarSocialsTitle } from './BottomNavbarSocials.style';

type BottomNavbarSocialsProps = {
    title: string;
    link?: string;
    downloadCV?: boolean;
};

const BottomNavbarSocials: React.FC<BottomNavbarSocialsProps> = ({ title, link, downloadCV }) => {
    const anchorProps = downloadCV
        ? { href: '/DragosBaci_Resume.pdf', download: 'DragosBaci_Resume.pdf' }
        : { href: link, target: '_blank', rel: 'noopener noreferrer' };

    return (
        <BottomNavbarSocialsContainer>
            <BottomNavbarSocialsTitle {...anchorProps}>{title}</BottomNavbarSocialsTitle>
        </BottomNavbarSocialsContainer>
    );
};

export default BottomNavbarSocials;
