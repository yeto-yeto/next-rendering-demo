import 'src/styles/globals.css'

import type { AppProps } from 'next/app'
import { Layout } from 'src/layouts/layout'

const App = (props: AppProps) => {
  return (
    <Layout {...props.pageProps}>
      <props.Component {...props.pageProps} />
    </Layout>
  )
}

export default App
