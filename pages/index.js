import Link from 'next/link'
import { motion } from "framer-motion"
import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'

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

export default function Home() {
  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
      <div className='text-white font-bold text-xl sm:text-4xl flex flex-col gap-10 relative'>
        <div className='h-[100vh] w-[100vw] fixed top-0 z-0'>
          <Canvas>
            <Stars count={1000} />
            <OrbitControls autoRotate={true} autoRotateSpeed={0.5} enableRotate={false} enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          </Canvas>
        </div>
        <div className='p-20 z-10'>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className='title'>
          <h1>Frontend tests:</h1>
        </motion.div>
        <motion.div variants={stagger}>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Link href="/scrolling"><a>- Scrolling</a></Link>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Link href="/carousel"><a>- Carousel</a></Link>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Link href="/metadata"><a>- Metadata</a></Link>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Link href="/parallax">- Parallax</Link>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Link href="/threefiber">- React Three Fiber</Link>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Link href="/zustand">- Zustand state management</Link>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Link href="/3js-data-injection">- 3JS Data Injection</Link>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <a href="https://dune-demo.vercel.app/demo1">- 3D world testing</a>
          </motion.div>
        </motion.div>
        <div className='font-base text-xs sm:grid sm:grid-cols-3'>
          <div></div>
          <div></div>
          <div className='pt-10'>
            References: <br /> This site is created with Nextjs, a React-based framework<br />
            Framer-motion is utilised for page transition and mouse-over animation<br />
            Zustand state management is used to manage persistent data<br />
            TailwindCSS is used to manipulate CSS elements <br />
            React-three-fiber (Three.js library) is used to create 3D objects <br />
            MySQL database hosted on Planetscale, managed by Prisma ORM</div>
        </div>
        </div>
      </div>
    </motion.div>
  )
}
