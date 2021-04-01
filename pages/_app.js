import { ThemeProvider } from "styled-components"
import Head from "next/head"

import theme from "../src/theme"
import { GlobalStyle } from "../src/theme/GlobalStyle"
import MainNav from "../src/components/commons/MainNav"
import Footer from "../src/components/commons/Footer"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Instalura | Marcial</title>
        <link 
          rel="preconnect"  
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
          />
        </noscript>
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div style={{
          flex: "1",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "space-between",
        }}>
          <MainNav />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}
