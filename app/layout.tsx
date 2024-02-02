"use client";

/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav";
import Header from "./components/Header";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

// Theme
import theme from "./components/utils/theme";

/* Instruments */
import styles from "./styles/layout.module.css";
import "./styles/globals.css";

import { Montserrat } from "next/font/google";
import Footer from "./components/Footer";

const mont_serrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout(props: React.PropsWithChildren) {
  const THEME = createTheme(theme());
  return (
    <Providers>
      <ThemeProvider theme={THEME}>
        {/* <CssBaseline /> */}
        <html lang="en">
          <body>
            <section className={styles.container}>
              <Nav />

              <header className={styles.header}>
                {/* <img src="/logo.svg" className={styles.logo} alt="logo" /> */}
                <Header />
              </header>

              <main className={styles.main}>{props.children}</main>

              {/* <footer className={styles.footer}>
              <span>Learn </span>
              <a
                className={styles.link}
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              <span>, </span>
              <a
                className={styles.link}
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>
              <span>, </span>
              <a
                className={styles.link}
                href="https://redux-toolkit.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux Toolkit
              </a>
              ,<span> and </span>
              <a
                className={styles.link}
                href="https://react-redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Redux
              </a>
            </footer> */}

              <footer className={styles.footer}>
                <Footer />
              </footer>
            </section>
          </body>
        </html>
      </ThemeProvider>
    </Providers>
  );
}
