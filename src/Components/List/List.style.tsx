import styled from 'styled-components';

export const ListContainer = styled.div`
    display: flex;
    flex: 1 1 100%;
    margin-left: 13.5%;
    padding-bottom: 3vw;
    @media (max-width: 991px) {
        padding: 0;
    }
    @media (max-width: 767px) {
        margin-left: 4%;
        width: 92%;
        padding: 0 0 5vw;
    }
`;

export const CardListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
`;
