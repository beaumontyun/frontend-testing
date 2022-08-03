import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'
import * as THREE from 'three'

const Index = () => {
    return ( 
        <div className='w-full h-full'>
            <div className='pt-80 text-center text-white font-bold flex flex-col gap-5'>
                Three.js data injection and dynamic page generation <br />
                <span> Work in progress <br />Please come back later</span>
                <span className='underline'><a href='https://dune-demo.vercel.app/demo1'>Sample</a></span></div>
            <Canvas>
                {/* objects */}
                <fog attach="fog" args={['#202025', 0, 80]} />
                <TrackballControls />
            </Canvas>
        </div>
     );
}
 
export default Index;