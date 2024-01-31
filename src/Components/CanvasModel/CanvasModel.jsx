import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { CanvasModelContainer } from './CanvasModel.style';
import useIsMobile from '../../Hooks/useIsMobile';

function Model(props) {
    const { scene } = useGLTF('../snake_statue.glb');
    const modelRef = useRef({});
    useFrame(() => {
        if (modelRef.current && modelRef.current.rotation) {
            modelRef.current.rotation.y -= 0.002;
        }
    });

    return <primitive ref={modelRef} object={scene} {...props} />;
}

function CanvasModel() {
    const { isMobile } = useIsMobile();

    return (
        <CanvasModelContainer style={{ height: `${isMobile ? '55vh' : '90vh'}` }}>
            <Canvas dpr={2} camera={{ fov: 45, position: [0, 0, 5] }}>
                <PresentationControls speed={1.5} zoom={0} polar={[0, 0]}>
                    <Stage environment={'city'} intensity={0.5}>
                        <Model />
                    </Stage>
                </PresentationControls>
            </Canvas>
        </CanvasModelContainer>
    );
}

export default CanvasModel;
