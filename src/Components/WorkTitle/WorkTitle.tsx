import React from 'react';
import { WorkTitleContainer, WorkTitleImage, WorkTitleSubtitle, WorkTitleTitle } from './WorkTitle.style';
import { useScroll, useTransform } from 'framer-motion';

type WorkTitleProps = {
    title: string;
    subtitle: string;
    star: boolean;
};

const WorkTitle = ({ title, subtitle, star }: WorkTitleProps) => {
    const { scrollYProgress } = useScroll();
    const rotation = useTransform(scrollYProgress, [0, 1], ['0deg', '520deg']);

    return (
        <WorkTitleContainer>
            {star && (
                <WorkTitleImage
                    style={{
                        rotate: rotation,
                    }}
                />
            )}
            <WorkTitleTitle>{title}</WorkTitleTitle>
            <WorkTitleSubtitle>{subtitle}</WorkTitleSubtitle>
        </WorkTitleContainer>
    );
};

export default WorkTitle;
