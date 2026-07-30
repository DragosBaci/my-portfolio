import React, { useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import List from '../../Components/List/List';
import Item from '../../Components/Item/Item';
import { items } from '../../Components/List/data';
import WorkTitle from '../../Components/WorkTitle/WorkTitle';
import CustomButton from '../../Components/CustomButton/CustomButton';
import homeConstants from '../Home/homeConstants';
import { ButtonContainer, WorkTitleButtonContainer } from './Work.style';
import CustomWhiteButton from '../../Components/CustomWhiteButton/CustomWhiteButton';

export default function Work() {
    const { id } = useParams();

    const selectedItem = useMemo(() => items.find(card => card.id === Number(id)), [id]);

    return (
        <>
            <WorkTitleButtonContainer id="work">
                <WorkTitle title={'Selected Cases'} subtitle={''} star={true} />
            </WorkTitleButtonContainer>
            <List />
            <AnimatePresence>
                {selectedItem && <Item cardData={selectedItem} key="item" />}
            </AnimatePresence>
            <ButtonContainer>
                <CustomButton value={'CONTACT ME'} email={homeConstants.email} />
                <CustomWhiteButton value={'SEE OTHER CASES'} hasMargin={true} goTo={'https://github.com/DragosBaci'} />
            </ButtonContainer>
        </>
    );
}
