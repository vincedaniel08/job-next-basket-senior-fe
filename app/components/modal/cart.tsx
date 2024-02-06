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
    const apiUrl = "https://dummyjson.com/carts/1";

    axios({
      method: "put", // or 'patch'
      url: apiUrl,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        merge: true,
        products: [
          {
            id: id,
            quantity: qty,
          },
        ],
      },
    })
      .then((response) => {
        setCarts(response.data);
        console.log("carts", carts);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  console.log("carts", carts);

  const cartDrawerContent = () => (
    <Box>
      {/*Header and Close Button*/}
      <Box sx={style.drawerHeader}>
        <Typography sx={style.bigTextHeader}>Your Cart</Typography>
        <IconButton onClick={() => toggleCartClose(false)}>
          <Iconify
            icon="material-symbols:close"
            width="24"
            height="24"
            style={{ cursor: "pointer" }}
          />
        </IconButton>
      </Box>

      {/* Kapag wala pang nakalagay sa cart eto dapat ang naka display */}
      {/* {user.carts.length === 0 ? (
        <Box>
          <Box sx={style.boxAlertGreenDrawer}>
            <Typography sx={style.warningText}>
              Your cart is currently empty.
            </Typography>
          </Box>
          <List>
            <Divider
              sx={{ backgroundColor: "#e6e6e6", width: "90%", margin: "auto" }}
            />
          </List>

          <Box sx={style.buttonContainer}>
            <Button
              variant="contained"
              sx={style.buttonCart}
              onClick={() => history.push("/shop")}
            >
              Shop Now
            </Button>
          </Box>
        </Box>
      ) : null} */}

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

                  {/*Product Description*/}

                  {/*Product Price*/}
                  <Typography sx={style.productPriceCartDrawer}>
                    Php. {cart.price} .00
                  </Typography>

                  {/*Item */}
                  <Box sx={style.productItemCountDrawerContainer}>
                    <Button
                      variant="outlined"
                      sx={style.addlessButton}
                      onClick={() => updateCart(cart.id, cart.quantity - 1)}
                      disabled={cart.quantity === 1 ? true : false}
                    >
                      -
                    </Button>
                    <TextField
                      sx={style.productQtyDrawerInput}
                      value={cart.quantity}
                    />
                    <Button
                      variant="outlined"
                      sx={style.addlessButton}
                      onClick={() => updateCart(cart.id, cart.quantity + 1)}
                    >
                      +
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

      {/* Total Price ng Product sa Cart Drawer */}

      <>
        <Box sx={style.cartDrawerPriceContainer}>
          <Typography sx={style.productTotalBig}>Total:</Typography>
          <Typography sx={style.productTotalSmall}>
            Php.{carts.total}.00
          </Typography>
        </Box>

        <List>
          <Divider
            sx={{ backgroundColor: "#e6e6e6", width: "90%", margin: "auto" }}
          />
        </List>

        <Box sx={style.reminderContainer}>
          <Typography sx={style.reminderText}>
            Shipping and other fee will be calculated at checkout.
          </Typography>
        </Box>

        <List>
          <Divider
            sx={{ backgroundColor: "#e6e6e6", width: "90%", margin: "auto" }}
          />
        </List>

        <Box sx={style.buttonContainer}>
          <Button variant="contained" color="primary" sx={style.buttonCart}>
            Checkout
          </Button>
        </Box>
      </>
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
