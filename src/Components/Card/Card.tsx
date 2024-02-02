import React from 'react';
import {
    CardContainer,
    CardContent,
    CardContentContainer,
    CardImage,
    CardImageContainer,
    CardOpenLink,
} from './Card.style';
import { useIsClickedContext } from '../../Context/IsClickedContext';
import { CardType } from '../../Utils/Types';

const Card: React.FC<CardType> = ({ id, title, subtitle, description, image, link, isHidden }) => {
    const { updateIsClicked, isClicked } = useIsClickedContext();

    const handleClick = () => {
        document.body.style.overflow = 'hidden';
        updateIsClicked(true);
        console.log(isClicked);
    };

    return (
        <CardContainer>
            <CardContentContainer>
                <CardContent layoutId={`card-container-${id}`}>
                    <CardImageContainer layoutId={`card-image-container-${id}`}>
                        <CardImage src={`/images/${image}`} alt="card image" />
                    </CardImageContainer>
                </CardContent>
            </CardContentContainer>
            <CardOpenLink to={id.toString()} onClick={handleClick} />
        </CardContainer>
    );
};

export default Card;
