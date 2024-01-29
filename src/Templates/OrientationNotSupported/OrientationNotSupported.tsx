import React from 'react';
import { OrientationNotSupportedContainer, TextContainer } from './OrientationNotSupported.style';
import { Title, TitleSeparator } from '../Connections/Connections.style';

const OrientationNotSupported = () => {
    return (
        <OrientationNotSupportedContainer>
            <TextContainer>
                <TitleSeparator>
                    <Title>Orientation</Title>
                </TitleSeparator>
                <TitleSeparator>
                    <Title>Not Supported</Title>
                </TitleSeparator>
            </TextContainer>
        </OrientationNotSupportedContainer>
    );
};

export default OrientationNotSupported;
