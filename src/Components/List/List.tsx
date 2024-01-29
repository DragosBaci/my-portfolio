import React from 'react';
import { CardListContainer, ListContainer } from './List.style';
import { items } from './data';
import Card from '../Card/Card';

const List: React.FC = () => {
    return (
        <ListContainer>
            <CardListContainer>
                <CardListContainer>
                    {items.map(card => (
                        <Card key={card.id} {...card} />
                    ))}
                </CardListContainer>
            </CardListContainer>
        </ListContainer>
    );
};

export default List;
