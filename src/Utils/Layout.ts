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
