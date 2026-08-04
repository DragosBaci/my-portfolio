export type AiEntry = {
    id: number;
    title: string;
    description: string;
};

/**
 * Optional image/GIF for the section's visual. Leave null to use the coded mark (the
 * site's star turning inside pulsing rings); set it to a path under public/images -
 * e.g. '/images/ai-mark.gif' - to swap in a file instead.
 *
 * If you use a third party's logo or mascot here, check you're licensed to: a vendor's
 * trademarked mark on a personal site can imply an affiliation that doesn't exist.
 */
export const aiMarkSrc: string | null = '/images/claude-claude-code.gif';

export const aiLead =
    'I build AI into products people already rely on - not demos. The interesting problems are the unglamorous ones: giving a model the right context, keeping it inside the rules of a regulated domain, and making the result something a user can trust.';

/*
 * Drawn from real work: the Caseware entries come from the Financials squad's AI
 * architecture, the third from the CarRepair project in Selected Cases. Deliberately
 * framed as integration and product engineering rather than model research - overstating
 * this is the fastest way to lose credibility with anyone who asks a follow-up question.
 */
export const aiEntries: AiEntry[] = [
    {
        id: 1,
        title: 'Context-aware intelligence',
        description:
            'Integrating Primers and Claude Skills into Caseware, so financial engagements carry their own context into every AI interaction instead of starting from a blank prompt.',
    },
    {
        id: 2,
        title: 'AI inside a regulated domain',
        description:
            'Audit and financial reporting leave no room for a confident wrong answer. The work is as much about constraints, standards alignment and reviewability as it is about the model.',
    },
    {
        id: 3,
        title: 'Applied AI in product work',
        description:
            'CarRepair uses image analysis to assess collision damage from photographs - an early lesson in shipping a model as a feature, with all the fallbacks and edge cases that implies.',
    },
];
