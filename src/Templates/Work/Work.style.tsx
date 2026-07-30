import styled from 'styled-components';
import { sectionInset } from '../../Utils/Layout';

export const ButtonContainer = styled.div`
    ${sectionInset}
    display: flex;
    flex-direction: row;
    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const WorkTitleButtonContainer = styled.div`
    ${sectionInset}

    /* WorkTitle supplies its own 20px indent on mobile - don't stack a second one. */
    @media (max-width: 767px) {
        padding-left: 0;
    }
`;
