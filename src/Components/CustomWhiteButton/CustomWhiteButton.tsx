'use client';

import React from 'react';
import { ButtonContainer, ButtonInfo, ButtonInner } from './CustomWhiteButton.style';

type CustomButtonProps = {
    email?: string;
    value: string;
    hasMargin?: boolean;
    goTo?: string;
};

const CustomWhiteButton: React.FC<CustomButtonProps> = ({ email, value, hasMargin, goTo }) => {
    const href = email ? `mailto:${email}?subject=${encodeURIComponent("Let's colab!🎉")}` : goTo;
    // External links open a new tab; mailto stays in this one.
    const externalProps = email ? {} : { target: '_blank', rel: 'noopener noreferrer' };

    return (
        <ButtonContainer href={href} {...externalProps} style={{ marginBottom: hasMargin ? '12px' : '0' }}>
            <ButtonInner>
                <ButtonInfo data-text={value}>{value}</ButtonInfo>
            </ButtonInner>
        </ButtonContainer>
    );
};

export default CustomWhiteButton;
