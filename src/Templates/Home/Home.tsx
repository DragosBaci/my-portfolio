'use client';

import React from 'react';
import homeConstants from './homeConstants';
import { DetailsText, HomeContainer, SplitContainerItems, SubTitle, Title, TitleHeading } from './Home.style';
import CustomButton from '../../Components/CustomButton/CustomButton';

/*
 * Deliberately free of framer-motion: the hero is the first thing a visitor must see,
 * and its entrance runs as a CSS animation from the server-rendered stylesheet (see
 * Home.style) - visible at first paint instead of after the bundle hydrates.
 */
const Home: React.FC = () => {
    return (
        <HomeContainer>
            <SplitContainerItems>
                <SubTitle>{homeConstants.subtitle}</SubTitle>
                <TitleHeading>
                    <Title>{homeConstants.title1}</Title>
                    <Title>{homeConstants.title2}</Title>
                </TitleHeading>
            </SplitContainerItems>
            <SplitContainerItems>
                <DetailsText>{homeConstants.description}</DetailsText>
                <CustomButton value={'CONTACT ME'} email={homeConstants.email} />
            </SplitContainerItems>
        </HomeContainer>
    );
};

export default Home;
