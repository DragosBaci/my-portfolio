import React from 'react';
import { ButtonContainer, ButtonInfo, ButtonInner } from './CustomButton.style';

type CustomButtonProps = {
    email?: string | undefined;
    value: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ email, value }) => {
    const openEmailWindow = () => {
        if (email) {
            const subject = encodeURIComponent("Let's colab!🎉");
            const mailtoLink = `mailto:${email}?subject=${subject}`;
            window.open(mailtoLink);
        }
    };

    return (
        <ButtonContainer onClick={openEmailWindow}>
            <ButtonInner>
                <ButtonInfo data-text={value}>{value}</ButtonInfo>
            </ButtonInner>
        </ButtonContainer>
    );
};

export default CustomButton;
