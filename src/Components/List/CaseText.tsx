import React from 'react';
import { CaseSubtitle, CaseTitle, TextCell, TitleClip } from './List.style';
import useInViewport from '../../Hooks/useInViewport';
import { caseSubtitleReveal, caseTitleReveal } from '../../Utils/AnimationValues';

type CaseTextProps = {
    title: string;
    subtitle: string;
    column: number;
    row: number;
    mobileRow: number;
    indent?: string;
};

const CaseText: React.FC<CaseTextProps> = ({ title, subtitle, column, row, mobileRow, indent }) => {
    /*
     * The observer has to sit on the cell, not on the title. The title starts translated
     * a full line below its `overflow: hidden` clip, and IntersectionObserver intersects
     * against clipping ancestors - so observing the title itself reports it as never
     * visible, and the reveal that would bring it into view never fires.
     */
    const { ref, hasEnteredViewport } = useInViewport<HTMLDivElement>({ rootMargin: '-10% 0px' });
    const revealState = hasEnteredViewport ? 'visible' : 'hidden';

    return (
        <TextCell ref={ref} $column={column} $row={row} $mobileRow={mobileRow} $indent={indent}>
            <TitleClip>
                <CaseTitle variants={caseTitleReveal} initial="hidden" animate={revealState}>
                    {title}
                </CaseTitle>
            </TitleClip>
            <CaseSubtitle variants={caseSubtitleReveal} initial="hidden" animate={revealState}>
                {subtitle}
            </CaseSubtitle>
        </TextCell>
    );
};

export default CaseText;
