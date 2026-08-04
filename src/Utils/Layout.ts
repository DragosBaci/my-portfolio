'use client';

import { css } from 'styled-components';

/**
 * Horizontal inset shared by the cases grid and the title/buttons that bracket it, so
 * the section heading lines up with the first grid column at every breakpoint.
 */
export const sectionInset = css`
    padding-left: 12vw;

    @media (max-width: 1200px) {
        padding-left: 4vw;
    }

    /* Matches the 20px indent WorkTitle already applies to itself on mobile. */
    @media (max-width: 767px) {
        padding-left: 20px;
    }
`;

/**
 * Vertical rhythm tokens. Section spacing used to be tuned per-section in isolation
 * (a 50vh margin here, a 6vw padding there), which is why the page read as assembled
 * rather than composed. New spacing should come from these.
 *
 * `sectionGap` is the standard beat between two sections.
 */
export const sectionGap = css`
    margin-bottom: 22vh;

    @media (max-width: 767px) {
        margin-bottom: 96px;
    }
`;
