'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
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

    /*
     * Open/close is client state, not navigation - and that distinction is the fix for
     * the "page resets when I open a case" bug. The cards used to <Link> to /[id],
     * which made every open a real route change: Next scrolled the window to the top
     * and remounted the entire page shell, replaying the background reveal and every
     * in-view animation. Now the only navigation that ever involves /[id] is a deep
     * link or a hard refresh, where the server prerender seeds this state; after that,
     * opening and closing swap a fixed overlay in and out while the page underneath
     * keeps its scroll position and its mounted component tree.
     *
     * history.pushState keeps the URL shareable (Next 14 syncs its router state with
     * native pushState calls), and the popstate listener keeps Back/Forward working:
     * back from an opened case closes it in place instead of reloading the page.
     */
    const [openId, setOpenId] = useState<string | undefined>(caseId ?? routeId);

    const openCase = useCallback((id: number) => {
        setOpenId(String(id));
        window.history.pushState(null, '', `/${id}`);
    }, []);

    const closeCase = useCallback(() => {
        setOpenId(undefined);
        window.history.pushState(null, '', '/');
    }, []);

    useEffect(() => {
        const syncFromLocation = () => {
            const match = window.location.pathname.match(/^\/(\d+)$/);
            setOpenId(match ? match[1] : undefined);
        };
        window.addEventListener('popstate', syncFromLocation);
        return () => window.removeEventListener('popstate', syncFromLocation);
    }, []);

    const selectedItem = useMemo(() => items.find(card => card.id === Number(openId)), [openId]);

    return (
        <>
            <WorkTitleButtonContainer id="work">
                <WorkTitle title={'Selected Cases'} star={true} />
            </WorkTitleButtonContainer>
            <List onOpenCase={openCase} />
            <AnimatePresence>
                {selectedItem && <Item cardData={selectedItem} onClose={closeCase} key="item" />}
            </AnimatePresence>
            <ButtonContainer>
                <CustomButton value={'CONTACT ME'} email={homeConstants.email} />
                <CustomWhiteButton value={'SEE OTHER CASES'} hasMargin={true} goTo={'https://github.com/DragosBaci'} />
            </ButtonContainer>
        </>
    );
}
