"use client";

/* Components */
import React, { useState, useEffect } from "react";

import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav";
import Header from "./components/Header";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import {
  Box,
  Grid,
  Button,
  Typography,
  TextField,
  Drawer,
  IconButton,
  List,
  ListItem,
  Divider,
} from "@mui/material";
// Theme
import theme from "./components/utils/theme";

/* Instruments */
import styles from "./styles/layout.module.css";
import "./styles/globals.css";
import style from "./styles/cart";

import { Montserrat } from "next/font/google";
import Footer from "./components/Footer";
import CartModal from "./components/modal/cart";
import WishlistModal from "./components/modal/wishlist";

const mont_serrat = Montserrat({ subsets: ["latin"] });

import Iconify from "./components/Iconify";
import axios from "axios";
export default function RootLayout(props: React.PropsWithChildren) {
  const THEME = createTheme(theme());

  const [cartDrawer, setCartDrawer] = useState(false);
  const [wishDrawer, setWishDrawer] = useState(false);

  const toggleCartOpen = (cart) => {
    setCartDrawer(cart);
  };

  const toggleCartClose = (cart) => {
    setCartDrawer(cart);
  };

  const toggleWishOpen = (wish) => {
    setWishDrawer(wish);
  };

  const toggleWishClose = (wish) => {
    setWishDrawer(wish);
  };

  console.log("cartDrawer", cartDrawer);

  const cartDrawerContent = () => (
    <Box>
      {/*Header and Close Button*/}
      <Box sx={style.drawerHeader}>
        <Typography sx={style.bigTextHeader}>Your Cart</Typography>
        <IconButton onClick={() => setCartDrawer(false)}>
          {/* <CloseIcon sx={style.closeButton} /> */}

          <Iconify
            icon="material-symbols:close"
            width="24"
            height="24"
            style={{ cursor: "pointer" }}
          />
        </IconButton>
      </Box>

      {/* Kapag wala pang nakalagay sa cart eto dapat ang naka display */}

      {/* Kapag may laman naman ganito dapat ang itsura */}
      <Box sx={style.productCartContainer}>
        {/* NOTE: isang Product, Isang Grid.
                        Naka package kasi yun, for every product, isang grid.
                    */}
      </Box>

      <List>
        <Divider
          sx={{ backgroundColor: "#e6e6e6", width: "90%", margin: "auto" }}
        />
      </List>

      {/* Total Price ng Product sa Cart Drawer */}
    </Box>
  );

  // const [carts, setCarts] = useState<Cart[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get<Cart[]>(`https://dummyjson.com/carts`);
  //       // Fetch the carts depending on pagination
  //       setCarts(response.data);
  //     } catch (error) {
  //       console.error("Error fetching cart:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Providers>
      <ThemeProvider theme={THEME}>
        {/* <CssBaseline /> */}
        <html lang="en">
          <head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>Bandage</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
            />
          </head>
          <body>
            <section className={styles.container}>
              <Nav />
              <CartModal
                cartDrawer={cartDrawer}
                toggleCartClose={toggleCartClose}
              />

              <WishlistModal
                cartDrawer={wishDrawer}
                toggleCartClose={toggleWishClose}
              />

              {/* <Drawer
                anchor={"right"}
                open={cartDrawer}
                PaperProps={{
                  sx: {
                    boxShadow: 0,
                    background: "#fff",
                    width: 300,
                  },
                }}
              >
                {cartDrawerContent()}
              </Drawer> */}

              <header className={styles.header}>
                {/* <img src="/logo.svg" className={styles.logo} alt="logo" /> */}
                <Header
                  toggleCartOpen={toggleCartOpen}
                  toggleWishOpen={toggleWishOpen}
                />
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
