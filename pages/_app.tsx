import '../styles/globals.css'
import React from 'react'
import { AppProps } from 'next/app'

import '../styles/index.css'

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return <Component {...pageProps} />
}

export default App
