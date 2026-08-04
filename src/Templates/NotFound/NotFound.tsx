'use client';

import React from 'react';
import { Code, HomeLink, Message, NotFoundContainer, Title } from './NotFound.style';

const NotFound = () => {
    return (
        <NotFoundContainer>
            <Code>Error 404</Code>
            <Title>Lost page</Title>
            <Message>
                This page does not exist - or it did once and has since moved. Head back to the start and pick up from
                there.
            </Message>
            {/* A plain anchor, not a router Link: a full document load guarantees a clean
                slate here, whatever malformed URL got the visitor to this page. */}
            <HomeLink href="/">Back home</HomeLink>
        </NotFoundContainer>
    );
};

export default NotFound;
