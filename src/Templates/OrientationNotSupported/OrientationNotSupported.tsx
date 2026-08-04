'use client';

import React from 'react';
import { Message, OrientationNotSupportedContainer, Title } from './OrientationNotSupported.style';

const OrientationNotSupported = () => {
    return (
        <OrientationNotSupportedContainer>
            <Title>Rotate your device</Title>
            <Message>This site is built for portrait on mobile. Turn your phone upright to continue.</Message>
        </OrientationNotSupportedContainer>
    );
};

export default OrientationNotSupported;
