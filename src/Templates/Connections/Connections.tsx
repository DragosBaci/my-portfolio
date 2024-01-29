import {
    ItemContainer,
    MainContainer,
    RightWrapper,
    SplitContainer,
    TextContainer,
    Title,
    TitleSeparator,
} from './Connections.style';
import Animation from '../../Components/Animation/Animation';
import WorkTitle from '../../Components/WorkTitle/WorkTitle';
import React from 'react';

const Connections = () => {
    return (
        <MainContainer>
            <SplitContainer>
                <TextContainer>
                    <TitleSeparator>
                        <Title>i am honored to</Title>
                    </TitleSeparator>
                    <TitleSeparator>
                        <Title>work with</Title>
                    </TitleSeparator>
                    <TitleSeparator>
                        <Title>special people</Title>
                    </TitleSeparator>
                </TextContainer>
            </SplitContainer>
            <SplitContainer>
                <RightWrapper>
                    <WorkTitle title={'Check it out!'} subtitle={''} star={true} />
                    <ItemContainer>
                        <Animation />
                    </ItemContainer>
                </RightWrapper>
            </SplitContainer>
        </MainContainer>
    );
};

export default Connections;
