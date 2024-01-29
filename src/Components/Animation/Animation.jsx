import React, { useState, useEffect } from 'react';
import { Container, Ul } from './StyledAnimation';
import { fakeData } from './fakeData';
import CustomButton from '../CustomButton/CustomButton';
import ConnectionsButton from '../ConnectionsButton/ConnectionsButton';

const Animation = () => {
    const [position, setPosition] = useState({
        x: '',
        y: '',
    });

    const handleMouseMove = e => {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <Container>
            <Ul>
                {fakeData.map((elem, i) => (
                    <li key={i}>
                        <span>
                            <ConnectionsButton value={'Cigan oliviu software developer'} goTo={elem.goTo} />
                        </span>
                        <div className="img-cont">
                            <img src={elem.img} alt={elem.name} />
                        </div>
                    </li>
                ))}
            </Ul>

            <div style={{ left: `${position.x}px`, top: `${position.y}px` }} className="cursor"></div>
        </Container>
    );
};

export default Animation;
