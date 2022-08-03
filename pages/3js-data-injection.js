import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'
import * as THREE from 'three'

const Index = () => {
    return ( 
        <>
            <Canvas>
                {/* objects */}
                <fog attach="fog" args={['#202025', 0, 80]} />
                <TrackballControls />
            </Canvas>
        </>
     );
}
 
export default Index;