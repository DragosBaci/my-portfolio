'use client';

import {
    BarLabel,
    LeftContainer,
    NavBarContainer,
    NavbarLink,
    NavbarLinkContainer,
    NavigationBar,
    RightContainer,
} from './SeeCaseBar.style';
import { useIsClickedContext } from '../../Context/IsClickedContext';
import { seeCaseAnimation } from '../../Utils/AnimationValues';

const SeeCaseBar = ({ link, label }) => {
    const { isClicked } = useIsClickedContext();

    return (
        <>
            <NavBarContainer
                variants={seeCaseAnimation}
                initial="hidden"
                animate={!isClicked ? 'hidden' : 'visible'}
                exit="hidden"
            >
                <NavigationBar>
                    <LeftContainer>
                        <NavbarLinkContainer>{label && <BarLabel>{label}</BarLabel>}</NavbarLinkContainer>
                    </LeftContainer>
                    <RightContainer>
                        <NavbarLinkContainer>
                            <NavbarLink href={link} target="_blank" rel="noopener noreferrer" aria-label="go to case">
                                see case
                            </NavbarLink>
                        </NavbarLinkContainer>
                    </RightContainer>
                </NavigationBar>
            </NavBarContainer>
        </>
    );
};

export default SeeCaseBar;
