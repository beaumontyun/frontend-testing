import '../styles/globals.css'
import ScrollObserver from '../components/scrollObserver'
import { ParallaxProvider } from "react-scroll-parallax"

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </ParallaxProvider>
  )
}

export default MyApp
