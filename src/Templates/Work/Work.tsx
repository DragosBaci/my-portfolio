'use client';

import React, { useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useParams } from 'next/navigation';
import List from '../../Components/List/List';
import Item from '../../Components/Item/Item';
import { items } from '../../Components/List/data';
import WorkTitle from '../../Components/WorkTitle/WorkTitle';
import CustomButton from '../../Components/CustomButton/CustomButton';
import homeConstants from '../Home/homeConstants';
import { ButtonContainer, WorkTitleButtonContainer } from './Work.style';
import CustomWhiteButton from '../../Components/CustomWhiteButton/CustomWhiteButton';

type WorkProps = {
    /* Handed down from the case route's server component. Prefer it over the router:
       it is known at build time, which guarantees the open case is baked into the
       exported HTML rather than depending on the client router having resolved the
       param during prerender. */
    caseId?: string;
};

export default function Work({ caseId }: WorkProps) {
    const params = useParams<{ id?: string }>();
    const routeId = typeof params?.id === 'string' ? params.id : undefined;
    // The prop wins on the statically rendered case pages; the router keeps client-side
    // navigation working when the id changes without a full reload.
    const activeId = caseId ?? routeId;

    const selectedItem = useMemo(() => items.find(card => card.id === Number(activeId)), [activeId]);

    return (
        <>
            <WorkTitleButtonContainer id="work">
                <WorkTitle title={'Selected Cases'} star={true} />
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
