"use client";

import React, { useState, useEffect } from "react";
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

import Iconify from "../Iconify";

import style from "../../styles/cart";
import axios from "axios";
export default function Cart({ cartDrawer, toggleCartClose }) {
  const [carts, setCarts] = useState<Cart[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Cart[]>(`https://dummyjson.com/carts`);
        // Fetch the carts depending on pagination
        setCarts(response.data.carts[0]);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchData();
  }, [cartDrawer]);

  const updateCart = (id, qty) => {
    // remove product from cart
    console.log("id", id);
    // remove product from cart
    setCarts({
      ...carts,
      products: carts.products.filter((product) => product.id !== id),
    });
  };
  console.log("carts", carts);

  const cartDrawerContent = () => (
    <Box>
      {/*Header and Close Button*/}
      <Box sx={style.drawerHeader}>
        <Typography sx={style.bigTextHeader}>Your Wishlist</Typography>
        <IconButton onClick={() => toggleCartClose(false)}>
          <Iconify
            icon="material-symbols:close"
            width="24"
            height="24"
            style={{ cursor: "pointer" }}
          />
        </IconButton>
      </Box>

      <Box sx={style.productCartContainer}>
        <Box sx={style.productCartContainer}>
          {carts?.products?.map((cart) => (
            <Grid container spacing={1}>
              <Grid item>
                <img
                  alt="product_picture"
                  src={cart.thumbnail}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "contain",
                  }}
                />
              </Grid>

              <Grid item sx={style.productInfoDrawerContainer} xs>
                <Box>
                  {/*Product Name*/}
                  <Typography sx={style.productNameCartDrawer}>
                    {cart.title}
                  </Typography>

                  {/*Item */}
                  <Box sx={style.productItemCountDrawerContainer}>
                    <Button
                      variant="outlined"
                      sx={style.addlessButton}
                      onClick={() => updateCart(cart.id, cart.quantity - 1)}
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>

      <List>
        <Divider
          sx={{ backgroundColor: "#e6e6e6", width: "90%", margin: "auto" }}
        />
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
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
      </Drawer>
    </div>
  );
}
