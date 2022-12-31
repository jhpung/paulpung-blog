import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import localFont from '@next/font/local'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import React from 'react'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

const pretendard = localFont({
  variable: '--font-pretendard',
  src: [
    {
      path: '../public/fonts/web-font/pretendard/woff2/Pretendard-Light.woff2',
      weight: '300',
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
  ],
})

export default function App({ Component, pageProps }) {
  return (
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
  )
}
