import React from 'react';
import { ButtonContainer, ButtonInfo, ButtonInner } from './CustomWhiteButton.style';

type CustomButtonProps = {
    email?: string | undefined;
    value: string;
    hasMargin?: boolean;
    goTo?: string;
};

const CustomWhiteButton: React.FC<CustomButtonProps> = ({ email, value, hasMargin, goTo }) => {
    const handleClick = () => {
        if (email) {
            const subject = encodeURIComponent("Let's colab!🎉");
            const mailtoLink = `mailto:${email}?subject=${subject}`;
            window.open(mailtoLink);
        } else {
            window.open(goTo);
        }
    };

    return (
        <ButtonContainer onClick={handleClick} style={{ marginBottom: hasMargin ? '12px' : '0' }}>
            <ButtonInner>
                <ButtonInfo data-text={value}>{value}</ButtonInfo>
            </ButtonInner>
        </ButtonContainer>
    );
};

export default CustomWhiteButton;
