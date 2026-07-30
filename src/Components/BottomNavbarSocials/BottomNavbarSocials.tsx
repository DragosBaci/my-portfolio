import React from 'react';
import { BottomNavbarSocialsContainer, BottomNavbarSocialsTitle } from './BottomNavbarSocials.style';

type BottomNavbarSocialsProps = {
    title: string;
    link?: string;
    downloadCV?: boolean;
};

const BottomNavbarSocials: React.FC<BottomNavbarSocialsProps> = ({ title, link, downloadCV }) => {
    const anchorProps = downloadCV
        ? { href: `${process.env.PUBLIC_URL}/Dragos Baci.pdf`, download: 'Dragos_Baci_CV.pdf' }
        : { href: link, target: '_blank', rel: 'noopener noreferrer' };

    return (
        <BottomNavbarSocialsContainer>
            <BottomNavbarSocialsTitle {...anchorProps}>{title}</BottomNavbarSocialsTitle>
        </BottomNavbarSocialsContainer>
    );
};

export default BottomNavbarSocials;
