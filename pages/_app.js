import '../styles/globals.css'
import ScrollObserver from '../components/scrollObserver'
import { ParallaxProvider } from "react-scroll-parallax"
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ParallaxProvider>
        <ScrollObserver>
          <Component {...pageProps} />
        </ScrollObserver>
      </ParallaxProvider>
    </AnimatePresence>
  )
}

export default MyApp
