import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider } from './app_provider'

function MyApp({ Component, pageProps }: AppProps) {
  return <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
}

export default MyApp
