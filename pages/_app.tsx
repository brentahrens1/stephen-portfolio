import '../styles/scss/main.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'

import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
