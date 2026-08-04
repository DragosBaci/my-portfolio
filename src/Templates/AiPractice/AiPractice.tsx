'use client';

import React from 'react';
import { AiBody, AiHeader, AiLead, AiLeadRow, AiSection } from './AiPractice.style';
import WorkTitle from '../../Components/WorkTitle/WorkTitle';
import AiMark from './AiMark';
import AiPracticeEntry from './AiPracticeEntry';
import useInViewport from '../../Hooks/useInViewport';
import { caseSubtitleReveal } from '../../Utils/AnimationValues';
import { aiEntries, aiLead } from './aiConstants';

const AiPractice: React.FC = () => {
    const { ref, hasEnteredViewport } = useInViewport<HTMLParagraphElement>({ rootMargin: '-10% 0px' });

    return (
        <AiSection id="ai">
            <AiHeader>
                <WorkTitle title={'AI in Practice'} star={true} />
            </AiHeader>
            <AiBody>
                <AiLeadRow>
                    <AiLead
                        ref={ref}
                        variants={caseSubtitleReveal}
                        initial="hidden"
                        animate={hasEnteredViewport ? 'visible' : 'hidden'}
                    >
                        {aiLead}
                    </AiLead>
                    <AiMark />
                </AiLeadRow>
                {aiEntries.map((entry, index) => (
                    <AiPracticeEntry key={entry.id} entry={entry} index={index} />
                ))}
            </AiBody>
        </AiSection>
    );
};

export default AiPractice;
