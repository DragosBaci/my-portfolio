import { CardType } from '../../Utils/Types';

export const items: CardType[] = [
    {
        id: 1,
        title: 'Forest Fire Simulator',
        subtitle: 'Development',
        description:
            'An interactive implementation of the Drossel-Schwabl forest fire model: trees grow and lightning ignites fires under two tunable probabilities, producing the power-law distribution of fire sizes that gives the model its self-organized criticality.',
        image: 'forest_fire.png',
        imageWidth: 3424,
        imageHeight: 1790,
        link: 'https://forest.dragosbaci.com/',
    },
    {
        id: 2,
        title: 'Device Manager',
        subtitle: 'UX/UI Design, Development',
        description:
            'During my internship at 3SS in Targu Mures, I contributed to the development of an app aimed at efficiently managing the devices within the company.',
        image: '3ss.webp',
        imageWidth: 1920,
        imageHeight: 1080,
        link: 'https://www.3ss.tv/',
    },
    {
        id: 3,
        title: 'Video Ad Auctions',
        subtitle: 'Ad Tech, Development',
        description:
            'Core contributor on the Monetization team at JWX (formerly Connatix), working on the auction layer of a production-scale video platform - the bidding logic and third-party demand integrations that decide which ad is served in the moments before a video plays.',
        image: 'jwx.webp',
        imageWidth: 1920,
        imageHeight: 1080,
        link: 'https://jwx.com/',
    },
    {
        id: 4,
        title: 'Financial Reporting',
        subtitle: 'Audit Tech, Development',
        description:
            'Software Engineer on the Financials squad at Caseware, a cloud platform accounting and audit firms use to run reporting and compliance work. Angular front-end inside a manifest-driven architecture that powers configurable, standards-aligned reporting workflows - plus caching for large engagement files and the squad CI/CD pipelines.',
        image: 'caseware.webp',
        imageWidth: 768,
        imageHeight: 428,
        link: 'https://www.caseware.com/',
    },
    // PLACEHOLDER - fills the fifth row of the grid pattern. Swap the copy, the link
    // and `image` (currently reusing CarFlow.webp) for a real case when you have one.
    {
        id: 5,
        title: 'Portfolio',
        subtitle: 'UX/UI Design, Development',
        description:
            'This site. Built with React, TypeScript and styled-components, with a WebGL statue rendered through react-three-fiber and motion driven by framer-motion.',
        image: 'CarFlow.webp',
        imageWidth: 2560,
        imageHeight: 1576,
        link: 'https://github.com/DragosBaci',
    },
];
