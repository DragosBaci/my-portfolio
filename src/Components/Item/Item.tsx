import React from 'react';
import {
    CardContent,
    CardContentContainerOpen,
    CardImage,
    CardImageContainer,
    ContentContainer,
    ContentTitle,
    ContentTitleContainer,
    Overlay,
    OverlayLink,
    Subtitle,
} from './Item.style';
import { useIsClickedContext } from '../../Context/IsClickedContext';
import SeeCaseBar from '../SeeCaseBar/SeeCaseBar';

type ItemProps = {
    id: any;
    cardData: any;
};

const Item: React.FC<ItemProps> = ({ id, cardData }) => {
    const { updateIsClicked } = useIsClickedContext();

    return (
        <>
            <Overlay
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                style={{
                    pointerEvents: 'auto',
                }}
            >
                <OverlayLink
                    to={'/'}
                    onClick={() => {
                        document.body.style.overflowY = 'auto';
                        updateIsClicked(false);
                    }}
                />
            </Overlay>
            <CardContentContainerOpen>
                <CardContent layoutId={`card-container-${id}`}>
                    <CardImageContainer layoutId={`card-image-container-${id}`}>
                        <CardImage src={`images/${cardData.image}`} alt="" />
                    </CardImageContainer>
                    <ContentContainer>
                        <ContentTitleContainer>
                            <ContentTitle>{cardData.title}</ContentTitle>
                            <Subtitle>{cardData.description}</Subtitle>
                        </ContentTitleContainer>
                    </ContentContainer>
                </CardContent>
            </CardContentContainerOpen>
            <SeeCaseBar link={cardData.link} />
        </>
    );
};

export default Item;
