export type ExperienceEntry = {
    id: number;
    /** Big Tusker-Bold headline. */
    role: string;
    period: string;
    /** Bold subline underneath the headline. */
    context: string;
    description: string;
};

/*
 * Company name carries the headline rather than the job title: the title is
 * "Software Engineer" for three of these in a row, so it's the company that actually
 * differentiates each entry visually. Descriptions are condensed to one highlight each -
 * the full bullet list lives in the downloadable CV, not here.
 */
export const experienceEntries: ExperienceEntry[] = [
    {
        id: 1,
        role: 'Caseware',
        period: '04/2026 – Present',
        context: 'Software Engineer, Financials Squad',
        description:
            'Building AI-assisted, manifest-driven financial reporting workflows in Angular, and owning the squad’s CI/CD pipelines.',
    },
    {
        id: 2,
        role: 'JWX Connatix',
        period: '09/2024 – 04/2026',
        context: 'Software Engineer, Monetization Team',
        description:
            'Delivered revenue-critical business logic and integrations for a production video platform, mentored engineers, and used ELK/Tableau to validate platform behavior.',
    },
    {
        id: 3,
        role: '3 Screen Solutions',
        period: '09/2022 – 08/2024',
        context: 'Software Engineer',
        description:
            'Built and optimized streaming UI for Toggo, a Netflix-style platform, with React, TypeScript and Redux — content rails, player controls, and search.',
    },
    {
        id: 4,
        role: 'Technical University of Cluj-Napoca',
        period: '2020 – 2024',
        context: 'B.Eng., Systems Engineering and Applied Informatics',
        description: 'Bachelor’s degree that laid the systems and software foundation for the roles above.',
    },
];
