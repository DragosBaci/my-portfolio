import { CardType } from '../../Utils/Types';

export const items: CardType[] = [
    {
        id: 1,
        title: 'Car Flow App',
        subtitle: 'UX/UI Design, Development',
        description:
            'Our team, consisting of five individuals, developed an application as part of a school project. The app is designed for efficiently managing a fleet of cars, whether for company or personal use.',
        image: 'CarFlow.webp',
        link: 'https://github.com/orgs/Urzisoft/repositories',
    },
    {
        id: 2,
        title: 'Device Manager',
        subtitle: 'UX/UI Design, Development',
        description:
            'During my internship at 3SS in Targu Mures, I contributed to the development of an app aimed at efficiently managing the devices within the company.',
        image: '3ss.webp',
        link: 'https://www.3ss.tv/',
    },
    {
        id: 3,
        title: 'Microservices',
        subtitle: 'Development',
        description:
            'The development of this app was undertaken with the specific goal of gaining deeper insights into the microservice architecture using Spring Boot.',
        image: 'microservice.webp',
        link: 'https://github.com/DragosBaci/java-microservices-demo',
    },
    {
        id: 4,
        title: 'CarRepair',
        subtitle: 'UX/UI Design, Development',
        description:
            'My colleague and I collaborated on the development of an application that employs Artificial Intelligence to assess the extent of damage to a car following an accident.',
        image: 'carRepair.webp',
        link: 'https://github.com/Urzisoft/urzisoft-car-damage-management-mobile-app',
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
        link: 'https://github.com/DragosBaci',
    },
];
