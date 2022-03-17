import * as React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../src/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Head>
      <title>Cloned: Dribbble login and sign user interface</title>
      <meta name="title" content="Cloned: Dribbble login and sign user interface"/>
      <meta name="description" content="Cloned: Dribbble login and sign user interface"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://clone-dribbble-login-sign-screen.netlify.app/"/>
      <meta property="og:title" content="Cloned: Dribbble login and sign user interface"/>
      <meta property="og:description" content="Cloned: Dribbble login and sign user interface"/>
      <meta property="og:image" content="/assets/dribbble-login.png"/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://clone-dribbble-login-sign-screen.netlify.app/"/>
      <meta property="twitter:title" content="Cloned: Dribbble login and sign user interface"/>
      <meta property="twitter:description" content="Cloned: Dribbble login and sign user interface"/>
      <meta property="twitter:image" content="/assets/dribbble-login.png"/>
      </Head>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
