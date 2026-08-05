'use client';

import React, { useEffect } from 'react';
import {
    Backdrop,
    CaseCategory,
    CaseIndex,
    CloseButton,
    DetailDescription,
    DetailTitle,
    MediaBlock,
    MediaImage,
    Panel,
    PanelFooter,
    PanelHeader,
    TitleClip,
    VisitLink,
} from './Item.style';
import { useIsClickedContext } from '../../Context/IsClickedContext';
import { CASE_IMAGE_SIZES } from '../Card/Card';
import { getLenis } from '../SmoothScroll/SmoothScroll';
import { CardType } from '../../Utils/Types';
import { items } from '../List/data';
import { caseOverlayAnimation, casePanel, casePanelChild, caseTitleReveal } from '../../Utils/AnimationValues';

type ItemProps = {
    cardData: CardType;
    /* Closing is the caller's decision (it owns the URL state); every affordance here -
       backdrop, buttons, Escape - just asks for it. */
    onClose: () => void;
};

const Item: React.FC<ItemProps> = ({ cardData, onClose }) => {
    const { updateIsClicked } = useIsClickedContext();

    /*
     * The scroll lock and the navbar-hiding flag are tied to the drawer's lifecycle,
     * not to click handlers: closing via Back/Forward or Escape never runs a specific
     * button's onClick, but always unmounts this component.
     */
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        // Overflow alone doesn't stop Lenis's wheel handling - pause the animation too,
        // or input buffered while the case is open lurches the page the moment it closes.
        getLenis()?.stop();
        updateIsClicked(true);
        return () => {
            document.body.style.overflow = '';
            getLenis()?.start();
            updateIsClicked(false);
        };
    }, [updateIsClicked]);

    // Escape closes, matching what a keyboard user expects from any overlay.
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const caseNumber = String(items.findIndex(item => item.id === cardData.id) + 1).padStart(2, '0');
    const caseTotal = String(items.length).padStart(2, '0');

    return (
        <>
            <Backdrop
                variants={caseOverlayAnimation}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={onClose}
                aria-label="Close case"
                tabIndex={-1}
            />
            {/*
             * One orchestration point: the panel owns initial/animate/exit and its
             * children inherit those states through variant propagation, staggered top
             * to bottom. data-lenis-prevent exempts the panel's own scrolling from the
             * stopped Lenis instance, which otherwise swallows wheel input page-wide.
             */}
            <Panel
                variants={casePanel}
                initial="hidden"
                animate="visible"
                exit="hidden"
                role="dialog"
                aria-modal="true"
                aria-label={cardData.title}
                data-lenis-prevent
            >
                <PanelHeader>
                    <CaseIndex variants={casePanelChild}>
                        {caseNumber} / {caseTotal}
                    </CaseIndex>
                    <CloseButton onClick={onClose} autoFocus>
                        Close ✕
                    </CloseButton>
                </PanelHeader>
                <MediaBlock variants={casePanelChild}>
                    <MediaImage
                        src={`/images/${cardData.image}`}
                        alt={`${cardData.title} — ${cardData.subtitle}`}
                        fill
                        /*
                         * Deliberately the grid's sizes string, not the drawer's true
                         * geometry: matching it makes the browser resolve the exact
                         * srcset candidate the card already fetched (and the intro
                         * prefetch already cached), so the drawer opens with the image
                         * served from cache instead of downloading a second derivative
                         * of the same picture. At ~33vw on desktop the cached file is
                         * within a hair of the drawer's 640px anyway.
                         */
                        sizes={CASE_IMAGE_SIZES}
                        priority
                    />
                </MediaBlock>
                <CaseCategory variants={casePanelChild}>{cardData.subtitle}</CaseCategory>
                <TitleClip>
                    <DetailTitle variants={caseTitleReveal}>{cardData.title}</DetailTitle>
                </TitleClip>
                <DetailDescription variants={casePanelChild}>{cardData.description}</DetailDescription>
                <PanelFooter variants={casePanelChild}>
                    <VisitLink href={cardData.link} target="_blank" rel="noopener noreferrer">
                        Visit project
                    </VisitLink>
                    {/* A second close at the bottom: on a long panel the header's is a
                        full thumb-reach away on mobile. */}
                    <CloseButton onClick={onClose}>Close</CloseButton>
                </PanelFooter>
            </Panel>
        </>
    );
};

export default Item;
