import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { softShadows, MeshWobbleMaterial, OrbitControls, Box } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'
import { motion } from "framer-motion";

softShadows();

const Threefiber = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="bg-white fixed w-[100vw] h-[100vh] m-0 p-0 box-border flex flex-row gap-3">
            <div className='text-center w-[40%] self-center'>
                <p className='w-[80%] mx-auto font-bold text-xl uppercase'>This is a box <br /> an ultra awesome box <br />Try moving it </p>
            </div>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <group>
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
                        <planeBufferGeometry attach='geometry' args={[100, 100]} />
                        <meshDistanceMaterial color='white' />
                    </mesh>
                </group>
                <group>
                    <Box args={[1, 1, 1]} />
                    <meshNormalMaterial color='blue' />
                </group>


                <OrbitControls />
            </Canvas>
        </div>
        </motion.div>
    );
}

export default Threefiber;