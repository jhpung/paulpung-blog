import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import localFont from '@next/font/local'
import { Inter } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import React from 'react'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const pretendard = localFont({
  variable: '--font-pretendard',
  src: [
    {
      path: '../public/fonts/web-font/pretendard/woff2/Pretendard-Thin.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/web-font/pretendard/woff2/Pretendard-ExtraLight.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/web-font/pretendard/woff2/Pretendard-Light.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/web-font/pretendard/woff2/Pretendard-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/web-font/pretendard/woff2/Pretendard-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/web-font/pretendard/woff2/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/web-font/pretendard/woff2/Pretendard-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/web-font/pretendard/woff2/Pretendard-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        {isDevelopment && isSocket && <ClientReload />}
        <Analytics />

        <LayoutWrapper className={`${pretendard.variable} font-sans`}>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </ErrorBoundary>
  )
}
