import React from 'react';
import { ButtonContainer, ButtonInfo, ButtonInner } from './ConnectionsButton.style';

type ConnectionsButtonProps = {
    value: string;
    goTo: string;
};

const ConnectionsButton: React.FC<ConnectionsButtonProps> = ({ value, goTo }) => {
    return (
        <ButtonContainer href={goTo} target="_blank" rel="noopener noreferrer">
            <ButtonInner>
                <ButtonInfo data-text={value}>{value}</ButtonInfo>
            </ButtonInner>
        </ButtonContainer>
    );
};

export default ConnectionsButton;
