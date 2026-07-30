import React from 'react';
import {
    AboutText,
    MainContainer,
    SplitContainer,
    Subtitle,
    TextContainer,
    Title,
    TitleContainer,
} from './AboutMe.style';
import aboutMeConstants from './aboutMeConstants';
import CanvasModel from '../../Components/CanvasModel/DeferredCanvasModel';

const AboutMe: React.FC = () => {
    return (
        <MainContainer id="about">
            <SplitContainer>
                <TextContainer>
                    <TitleContainer>
                        <Title>{aboutMeConstants.title}</Title>
                        <Subtitle>{aboutMeConstants.subtitle}</Subtitle>
                    </TitleContainer>
                    <AboutText>{aboutMeConstants.description}</AboutText>
                </TextContainer>
            </SplitContainer>
            <SplitContainer>
                <CanvasModel />
            </SplitContainer>
        </MainContainer>
    );
};

export default AboutMe;
