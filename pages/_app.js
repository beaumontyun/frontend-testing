import '../styles/globals.css'
import ScrollObserver from '../components/scrollObserver'
import { ParallaxProvider } from "react-scroll-parallax"
import { AnimatePresence } from "framer-motion"
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ParallaxProvider>
        <ScrollObserver>
          <Header />
          <Component {...pageProps} />
        </ScrollObserver>
      </ParallaxProvider>
    </AnimatePresence>
  )
}

export default MyApp
