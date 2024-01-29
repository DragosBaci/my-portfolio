import React from 'react';
import { ButtonContainer, ButtonInfo, ButtonInner } from './ConnectionsButton.style';

type ConnectionsButtonProps = {
    value: string;
    goTo: string;
};

const ConnectionsButton: React.FC<ConnectionsButtonProps> = ({ value, goTo }) => {
    const handleClick = () => {
        window.open(goTo);
        console.log(goTo);
    };

    return (
        <>
            <ButtonContainer onClick={handleClick}>
                <ButtonInner>
                    <ButtonInfo data-text={value}>{value}</ButtonInfo>
                </ButtonInner>
            </ButtonContainer>
        </>
    );
};

export default ConnectionsButton;
