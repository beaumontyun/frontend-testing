import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { softShadows, MeshWobbleMaterial, OrbitControls, Box } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'

softShadows();

const Threefiber = () => {
    return (
        <div className="bg-white fixed w-[100vw] h-[100vh] m-0 p-0 box-border">
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <group>
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
                        <planeBufferGeometry attach='geometry' args={[100, 100]} />
                        <meshBasicMaterial color='yellow' />
                    </mesh>
                </group>
                <group>
                    <Box args={[1, 1, 1]} />
                    <meshBasicMaterial color='blue' />
                </group>


                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default Threefiber;