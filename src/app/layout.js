import { Providers } from './Providers'

import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/* <head /> */}
      <body>

        <Providers>
          {/* Header */}
          <Header/>

          {/* Navbar */}
          <Navbar />

          {/* SearchBox */}
          <SearchBox/>

          {children}
        </Providers>

      </body>
    </html>
  )
}
