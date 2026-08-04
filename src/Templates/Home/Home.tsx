'use client';

import React from 'react';
import homeConstants from './homeConstants';
import { DetailsText, HomeContainer, SplitContainerItems, SubTitle, Title, TitleHeading } from './Home.style';
import { titleAnimation } from '../../Utils/AnimationValues';
import CustomButton from '../../Components/CustomButton/CustomButton';

const Home: React.FC = () => {
    return (
        <HomeContainer>
            <SplitContainerItems>
                <SubTitle>{homeConstants.subtitle}</SubTitle>
                <TitleHeading>
                    <Title variants={titleAnimation} initial="hidden" animate="visible">
                        {homeConstants.title1}
                    </Title>
                    <Title variants={titleAnimation} initial="hidden" animate="visible">
                        {homeConstants.title2}
                    </Title>
                </TitleHeading>
            </SplitContainerItems>
            <SplitContainerItems>
                <DetailsText variants={titleAnimation} initial="hidden" animate="visible">
                    {homeConstants.description}
                </DetailsText>
                <CustomButton value={'CONTACT ME'} email={homeConstants.email} />
            </SplitContainerItems>
        </HomeContainer>
    );
};

export default Home;
