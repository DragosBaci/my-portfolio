import React from 'react';
import { BottomNavbarSocialsContainer, BottomNavbarSocialsTitle } from './BottomNavbarSocials.style';

type BottomNavbarSocialsProps = {
    title: string;
    link: string;
};

const BottomNavbarSocials: React.FC<BottomNavbarSocialsProps> = ({ title, link }) => {
    const handleClick = () => {
        window.open(link);
    };

    return (
        <BottomNavbarSocialsContainer onClick={handleClick}>
            <BottomNavbarSocialsTitle>{title}</BottomNavbarSocialsTitle>
        </BottomNavbarSocialsContainer>
    );
};

export default BottomNavbarSocials;
