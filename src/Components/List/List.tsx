'use client';

import React from 'react';
import { CasesGrid, ListContainer } from './List.style';
import { items } from './data';
import Card from '../Card/Card';
import CaseText from './CaseText';

type CaseLayout = {
    textColumn: number;
    imageColumn: number;
    /** Left padding on the text cell when it sits to the right of an image. */
    textIndent?: string;
};

/**
 * Which columns each row's two cells occupy. The pair walks rightward across the three
 * columns and then resets, which is what makes the grid feel hand-placed rather than
 * tabular. Rows beyond the fifth cycle back through the same pattern.
 *
 * No negative margin pulling images into the neighboring column: that "bleed" look was
 * copied from the reference site, but it meant an image's rendered box always actually
 * overlapped the text column next to it - fine when there was room to spare, a real
 * collision once either side needed more space. Columns now stay strictly inside their
 * own track.
 */
const caseLayouts: CaseLayout[] = [
    { textColumn: 1, imageColumn: 2 },
    { textColumn: 2, imageColumn: 1, textIndent: '1vw' },
    { textColumn: 3, imageColumn: 2, textIndent: '1vw' },
    { textColumn: 2, imageColumn: 3 },
    { textColumn: 1, imageColumn: 2 },
];

const List: React.FC = () => {
    return (
        <ListContainer>
            <CasesGrid>
                {items.map((card, index) => {
                    const layout = caseLayouts[index % caseLayouts.length];
                    const row = index + 1;

                    const text = (
                        <CaseText
                            key={`text-${card.id}`}
                            title={card.title}
                            subtitle={card.subtitle}
                            column={layout.textColumn}
                            row={row}
                            mobileRow={index * 2 + 2}
                            indent={layout.textIndent}
                        />
                    );

                    const image = (
                        <Card
                            key={`image-${card.id}`}
                            id={card.id}
                            image={card.image}
                            title={card.title}
                            column={layout.imageColumn}
                            row={row}
                            mobileRow={index * 2 + 1}
                        />
                    );

                    // Emit the leftmost cell first so that when the grid collapses to two
                    // columns and falls back to document order, the sides still alternate.
                    return layout.textColumn < layout.imageColumn ? [text, image] : [image, text];
                })}
            </CasesGrid>
        </ListContainer>
    );
};

export default List;
