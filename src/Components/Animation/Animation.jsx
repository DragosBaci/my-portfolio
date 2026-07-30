import React from 'react';
import { Container, Ul } from './StyledAnimation';
import { connectionsData } from './connectionsData';
import ConnectionsButton from '../ConnectionsButton/ConnectionsButton';

const Animation = () => {
    return (
        <Container>
            <Ul>
                {connectionsData.map(elem => (
                    <li key={elem.id}>
                        <span>
                            <ConnectionsButton value={elem.label} goTo={elem.goTo} />
                        </span>
                        <div className="img-cont">
                            <img src={elem.img} alt={elem.name} loading="lazy" decoding="async" />
                        </div>
                    </li>
                ))}
            </Ul>
        </Container>
    );
};

export default Animation;
