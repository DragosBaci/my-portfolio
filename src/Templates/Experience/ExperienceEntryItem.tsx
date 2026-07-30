import React from 'react';
import {
    EntryContent,
    EntryContext,
    EntryDescription,
    EntryDot,
    EntryHeadline,
    EntryNode,
    EntryPeriod,
    EntryRow,
    TitleLine,
    TitleRow,
} from './Experience.style';
import useInViewport from '../../Hooks/useInViewport';
import { experienceEntryReveal } from '../../Utils/AnimationValues';
import { ExperienceEntry } from './experienceConstants';

type ExperienceEntryItemProps = {
    entry: ExperienceEntry;
    side: 'left' | 'right';
};

const ExperienceEntryItem: React.FC<ExperienceEntryItemProps> = ({ entry, side }) => {
    const { ref, hasEnteredViewport } = useInViewport<HTMLDivElement>({ rootMargin: '-10% 0px' });

    return (
        <EntryRow ref={ref}>
            <EntryContent
                $side={side}
                custom={side}
                variants={experienceEntryReveal}
                initial="hidden"
                animate={hasEnteredViewport ? 'visible' : 'hidden'}
            >
                <TitleRow>
                    <EntryHeadline $side={side}>{entry.role}</EntryHeadline>
                    <TitleLine $side={side} />
                </TitleRow>
                <EntryPeriod>{entry.period}</EntryPeriod>
                <EntryContext>{entry.context}</EntryContext>
                <EntryDescription>{entry.description}</EntryDescription>
            </EntryContent>
            <EntryNode>
                <EntryDot />
            </EntryNode>
        </EntryRow>
    );
};

export default ExperienceEntryItem;
