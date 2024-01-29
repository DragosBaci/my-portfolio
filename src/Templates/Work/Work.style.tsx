import styled from 'styled-components';

export const ButtonContainer = styled.div`
    margin-left: 13.5%;
    display: flex;
    flex-direction: row;
    @media (max-width: 767px) {
        margin-left: 20px;
        flex-direction: column;
    }
`;

export const WorkTitleButtonContainer = styled.div`
    margin-left: 13.5%;
    @media (max-width: 767px) {
        margin-left: 20px;
    }
`;
