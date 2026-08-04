'use client';

import styled from 'styled-components';
import { sectionInset } from '../../Utils/Layout';

export const ButtonContainer = styled.div`
    ${sectionInset}
    display: flex;
    flex-direction: row;
    /* Breathing room between Work's closing buttons and the Let's Connect section. */
    margin-bottom: 20vh;
    @media (max-width: 767px) {
        flex-direction: column;
        margin-bottom: 64px;
    }
`;

export const WorkTitleButtonContainer = styled.div`
    ${sectionInset}

    /* WorkTitle supplies its own 20px indent on mobile - don't stack a second one. */
    @media (max-width: 767px) {
        padding-left: 0;
    }

    /* See AboutMe.style.tsx for why this is gated to when NavBar is actually rendered. */
    @media (min-width: 769px) {
        scroll-margin-top: 9vh;
    }
`;
