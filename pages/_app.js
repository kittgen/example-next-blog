import '../styles/globals.css'
import '../lib/i18n'
import '../lib/cotUtil'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
