import React from 'react';
import { BottomNavbarSocialsContainer, BottomNavbarSocialsTitle } from './BottomNavbarSocials.style';

type BottomNavbarSocialsProps = {
    title: string;
    link?: string;
    downloadCV?: boolean;
};

const BottomNavbarSocials: React.FC<BottomNavbarSocialsProps> = ({ title, link, downloadCV }) => {
    const handleClick = () => {
        if (downloadCV) {
            const downloadLink = document.createElement('a');
            downloadLink.href = '/Dragos Baci.pdf';
            downloadLink.download = 'Dragos_Baci_CV.pdf';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        } else {
            window.open(link);
        }
    };

    return (
        <BottomNavbarSocialsContainer onClick={handleClick}>
            <BottomNavbarSocialsTitle>{title}</BottomNavbarSocialsTitle>
        </BottomNavbarSocialsContainer>
    );
};

export default BottomNavbarSocials;
