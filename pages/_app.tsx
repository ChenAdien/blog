import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { MDXProvider } from '@mdx-js/react'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <MDXProvider>
        <Header />
        <div className='container'>
          <Component {...pageProps} />
        </div>
      </MDXProvider>
    </div>
  )
}
