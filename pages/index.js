import Link from 'next/link'
import { motion } from "framer-motion"

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
      <div className='text-white font-bold text-5xl p-20 flex flex-col gap-10'>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className='title'>
          <h1>Links to test pages -</h1>
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
      </div>
    </motion.div>
  )
}
