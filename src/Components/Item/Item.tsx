import React, { useEffect } from 'react';
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
import { CardType } from '../../Utils/Types';
import { caseOverlayAnimation, casePanelAnimation } from '../../Utils/AnimationValues';

type ItemProps = {
    cardData: CardType;
};

const Item: React.FC<ItemProps> = ({ cardData }) => {
    const { updateIsClicked } = useIsClickedContext();

    /*
     * The scroll lock and the navbar-hiding flag are tied to the modal's lifecycle, not
     * to click handlers: closing via the browser's Back button (or arriving via a deep
     * link) never fires an onClick, but always mounts or unmounts this component.
     */
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        updateIsClicked(true);
        return () => {
            document.body.style.overflow = '';
            updateIsClicked(false);
        };
    }, [updateIsClicked]);

    return (
        <>
            <Overlay variants={caseOverlayAnimation} initial="hidden" animate="visible" exit="hidden">
                <OverlayLink to={'/'} />
            </Overlay>
            <CardContentContainerOpen>
                <CardContent variants={casePanelAnimation} initial="hidden" animate="visible" exit="hidden">
                    <CardImageContainer>
                        <CardImage src={`/images/${cardData.image}`} alt="card image" decoding="async" />
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
