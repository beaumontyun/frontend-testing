import '../styles/globals.css'
import ScrollObserver from '../components/scrollObserver'

function MyApp({ Component, pageProps }) {
  return (
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
  )
}

export default MyApp
