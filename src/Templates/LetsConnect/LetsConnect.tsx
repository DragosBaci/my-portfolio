'use client';

import React from 'react';
import {
    BackToTop,
    BottomNavbarBorderBottom,
    BottomNavbarContainer,
    BottomNavbarSplitter,
    BottomNavbarTitle,
    ButtonContainer,
    ButtonContainer2,
    ButtonContainer3,
    LetsConnectContainer,
    SplitContainerItemsLeft,
    SplitContainerItemsRight,
    Title,
} from './LetsConnect.style';
import CustomButton from '../../Components/CustomButton/CustomButton';
import WorkTitle from '../../Components/WorkTitle/WorkTitle';
import BottomNavbarSocials from '../../Components/BottomNavbarSocials/BottomNavbarSocials';
import CustomWhiteButton from '../../Components/CustomWhiteButton/CustomWhiteButton';

const LetsConnect = () => {
    return (
        <LetsConnectContainer id="contact">
            <SplitContainerItemsLeft>
                <Title>Let's</Title>
                <Title>Connect</Title>
            </SplitContainerItemsLeft>
            <SplitContainerItemsRight>
                <WorkTitle title={"I'M ALWAYS INTERESTED ABOUT"} star={false} />
                <ButtonContainer>
                    <CustomButton value={'UX/UI Design'} />
                    <CustomButton value={'Frontend development'} />
                    <CustomButton value={'React'} />
                </ButtonContainer>
                <ButtonContainer2>
                    <CustomButton value={'Java'} />
                    <CustomButton value={'Backend development'} />
                    <CustomButton value={'NodeJS'} />
                </ButtonContainer2>
                <ButtonContainer>
                    <CustomButton value={'Startups'} />
                    <CustomButton value={'Networking'} />
                    <CustomButton value={'Mobile Development'} />
                </ButtonContainer>
                <ButtonContainer3>
                    <CustomButton value={'Business'} />
                    <CustomButton value={'Pizza'} />
                </ButtonContainer3>
                <BottomNavbarContainer>
                    <BottomNavbarSplitter>
                        <BottomNavbarTitle>ARE YOU MINDING A JOB?</BottomNavbarTitle>
                        <CustomWhiteButton value={'CONTACT'} email={'dragos617@yahoo.com'} />
                        <BackToTop
                            type="button"
                            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                        >
                            Back to top ↑
                        </BackToTop>
                    </BottomNavbarSplitter>
                    <BottomNavbarBorderBottom></BottomNavbarBorderBottom>
                    <BottomNavbarSplitter>
                        <BottomNavbarSocials title={'Linkedin'} link={'https://www.linkedin.com/in/dragosbaci21/'} />
                        <BottomNavbarSocials title={'Github'} link={'https://github.com/DragosBaci'} />
                        <BottomNavbarSocials title={'Download CV'} downloadCV={true} />
                    </BottomNavbarSplitter>
                </BottomNavbarContainer>
            </SplitContainerItemsRight>
        </LetsConnectContainer>
    );
};

export default LetsConnect;
