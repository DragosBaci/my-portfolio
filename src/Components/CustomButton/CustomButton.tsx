import React from 'react';
import { ButtonContainer, ButtonInfo, ButtonInner } from './CustomButton.style';

type CustomButtonProps = {
    email?: string;
    value: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ email, value }) => {
    const mailto = email ? `mailto:${email}?subject=${encodeURIComponent("Let's colab!🎉")}` : undefined;

    return (
        <ButtonContainer as={email ? 'a' : 'span'} href={mailto} $inert={!email}>
            <ButtonInner>
                <ButtonInfo data-text={value}>{value}</ButtonInfo>
            </ButtonInner>
        </ButtonContainer>
    );
};

export default CustomButton;
