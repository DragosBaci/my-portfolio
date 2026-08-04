'use client';

import React from 'react';
import { EntryDescription, EntryNumber, EntryRow, EntryTitle, TitleClip } from './AiPractice.style';
import useInViewport from '../../Hooks/useInViewport';
import { caseSubtitleReveal, caseTitleReveal } from '../../Utils/AnimationValues';
import { AiEntry } from './aiConstants';

type AiPracticeEntryProps = {
    entry: AiEntry;
    index: number;
};

const AiPracticeEntry: React.FC<AiPracticeEntryProps> = ({ entry, index }) => {
    /*
     * Observed on the row, not on the title: the title starts a full line below its
     * overflow: hidden clip, and IntersectionObserver intersects against clipping
     * ancestors - observing it directly reports it as permanently off screen.
     */
    const { ref, hasEnteredViewport } = useInViewport<HTMLDivElement>({ rootMargin: '-10% 0px' });
    const revealState = hasEnteredViewport ? 'visible' : 'hidden';

    return (
        <EntryRow ref={ref}>
            <EntryNumber variants={caseSubtitleReveal} initial="hidden" animate={revealState}>
                {String(index + 1).padStart(2, '0')}
            </EntryNumber>
            <div>
                <TitleClip>
                    <EntryTitle variants={caseTitleReveal} initial="hidden" animate={revealState}>
                        {entry.title}
                    </EntryTitle>
                </TitleClip>
                <EntryDescription variants={caseSubtitleReveal} initial="hidden" animate={revealState}>
                    {entry.description}
                </EntryDescription>
            </div>
        </EntryRow>
    );
};

export default AiPracticeEntry;
