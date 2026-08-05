'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { CanvasModelContainer } from './CanvasModel.style';
import useIsMobile from '../../Hooks/useIsMobile';

const MODEL_URL = '/snake_statue.glb';

function Model(props) {
    const { scene } = useGLTF(MODEL_URL);
    const modelRef = useRef({});
    useFrame(() => {
        if (modelRef.current && modelRef.current.rotation) {
            modelRef.current.rotation.y -= 0.002;
        }
    });

    return <primitive ref={modelRef} object={scene} {...props} />;
}

function CanvasModel({ active = true }) {
    const { isMobile } = useIsMobile();

    return (
        <CanvasModelContainer style={{ height: `${isMobile ? '55vh' : '90vh'}` }}>
            <Canvas
                // Cap at 2x instead of forcing it: on a 1x display `dpr={2}` renders four
                // times the pixels every frame for no visible gain.
                //
                // Pinned to 1x on phones. The loop runs on rAF on the main thread, the
                // same thread that has to keep up with the touch scroll, and a 3x device
                // pixel ratio means ~4x the fragment work per frame of this statue - the
                // one thing on the page heavy enough to drop scroll frames on its own.
                dpr={isMobile ? 1 : [1, 2]}
                // Stop the render loop entirely while the model is scrolled off screen.
                frameloop={active ? 'always' : 'never'}
                camera={{ fov: 45, position: [0, 0, 5] }}
            >
                <PresentationControls speed={1.5} zoom={0} polar={[0, 0]}>
                    {/* Self-hosted 'city' environment (public/env_city.exr) - the
                        @pmndrs/assets edition of the same lighting drei's preset string
                        pulls from a raw.githack.com CDN at the moment the model appears.
                        512px DWA-compressed EXR: 133 KB against the preset's 1.5 MB HDR,
                        visually equivalent as a lighting/reflection source, served from
                        our origin and preloaded from the document head. */}
                    <Stage environment={{ files: '/env_city.exr' }} intensity={0.5}>
                        <Model />
                    </Stage>
                </PresentationControls>
            </Canvas>
        </CanvasModelContainer>
    );
}

useGLTF.preload(MODEL_URL);

export default CanvasModel;
