import AppProvider from '../hooks/DevjobContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider id="__next">
      <Component {...pageProps} />
    </AppProvider>
  ) 
}

export default MyApp
