import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { softShadows, MeshWobbleMaterial, OrbitControls, Box } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'
import { motion } from "framer-motion";

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

softShadows();

const Threefiber = () => {
    return (
        <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
        <div className="bg-white fixed w-[100vw] h-[100vh] m-0 p-0 box-border flex flex-row gap-3">
            <motion.div variants={stagger}
            className='text-center w-[40%] self-center'>
                <motion.div variants={fadeInUp} className='w-[80%] mx-auto font-bold text-xl uppercase'>This is a box</motion.div>
                <motion.div variants={fadeInUp} className='w-[80%] mx-auto font-bold text-xl uppercase'>an ultra awesome box</motion.div>
                <motion.div variants={fadeInUp} className='w-[80%] mx-auto font-bold text-xl uppercase'>Try moving it </motion.div>
            </motion.div>
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