'use client';

import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import {
    ExperienceContainer,
    TimelineHeader,
    TimelineList,
    TimelineProgress,
    TimelineTrack,
} from './Experience.style';
import WorkTitle from '../../Components/WorkTitle/WorkTitle';
import ExperienceEntryItem from './ExperienceEntryItem';
import { experienceEntries } from './experienceConstants';

const Experience: React.FC = () => {
    const listRef = useRef<HTMLDivElement>(null);
    // Progress fills as the list scrolls through view: 0 when its top reaches the
    // bottom of the viewport, 1 when its bottom reaches the top - the same idea as
    // NavBar's page-wide scroll bar, scoped to just this section.
    const { scrollYProgress } = useScroll({
        target: listRef,
        offset: ['start end', 'end start'],
    });

    return (
        <ExperienceContainer id="experience">
            <TimelineHeader>
                <WorkTitle title={'Professional Experience'} star={true} />
            </TimelineHeader>
            <TimelineList ref={listRef}>
                <TimelineTrack />
                <TimelineProgress style={{ scaleY: scrollYProgress }} />
                {experienceEntries.map((entry, index) => (
                    <ExperienceEntryItem key={entry.id} entry={entry} side={index % 2 === 0 ? 'left' : 'right'} />
                ))}
            </TimelineList>
        </ExperienceContainer>
    );
};

export default Experience;
