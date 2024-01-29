import styled from 'styled-components';

interface CanvasModelContainerProps {
    isMobile: boolean;
}

export const CanvasModelContainer = styled.div<CanvasModelContainerProps>`
    width: 100%;
    height: ${props => (props.isMobile ? '55vh' : '90vh')};
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;
