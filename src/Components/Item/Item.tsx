'use client';

import React, { useEffect } from 'react';
import {
    BottomBlock,
    CaseIndex,
    CloseHint,
    DetailDescription,
    DetailStage,
    DetailTitle,
    HeroImage,
    HeroImageWrap,
    HeroScrim,
    Overlay,
    OverlayLink,
    TitleBlock,
    TitleClip,
} from './Item.style';
import { useIsClickedContext } from '../../Context/IsClickedContext';
import SeeCaseBar from '../SeeCaseBar/SeeCaseBar';
import { CardType } from '../../Utils/Types';
import { items } from '../List/data';
import {
    caseHeroReveal,
    caseOverlayAnimation,
    caseSubtitleReveal,
    caseTitleReveal,
} from '../../Utils/AnimationValues';

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

    const caseNumber = String(items.findIndex(item => item.id === cardData.id) + 1).padStart(2, '0');
    const caseTotal = String(items.length).padStart(2, '0');

    return (
        <>
            <Overlay variants={caseOverlayAnimation} initial="hidden" animate="visible" exit="hidden">
                <OverlayLink href="/" />
            </Overlay>
            {/*
             * One orchestration point: the stage owns initial/animate/exit and its
             * children inherit those states through variant propagation, each resolving
             * them against its own reveal (hero settle, title wipe, meta fades).
             */}
            <DetailStage variants={caseOverlayAnimation} initial="hidden" animate="visible" exit="hidden">
                <HeroImageWrap variants={caseHeroReveal}>
                    <HeroImage
                        src={`/images/${cardData.image}`}
                        alt={`${cardData.title} — ${cardData.subtitle}`}
                        decoding="async"
                    />
                    <HeroScrim />
                </HeroImageWrap>
                <CaseIndex variants={caseSubtitleReveal}>
                    {caseNumber} / {caseTotal}
                </CaseIndex>
                <CloseHint variants={caseSubtitleReveal}>Close ✕</CloseHint>
                <BottomBlock>
                    <TitleBlock>
                        <TitleClip>
                            <DetailTitle variants={caseTitleReveal}>{cardData.title}</DetailTitle>
                        </TitleClip>
                    </TitleBlock>
                    <DetailDescription variants={caseSubtitleReveal}>{cardData.description}</DetailDescription>
                </BottomBlock>
            </DetailStage>
            <SeeCaseBar link={cardData.link} label={cardData.subtitle} />
        </>
    );
};

export default Item;
