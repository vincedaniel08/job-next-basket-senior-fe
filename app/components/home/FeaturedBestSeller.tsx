"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Typography, Button } from "@mui/material";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface Product {
  // Define your product properties based on the API response
  id: number;
  name: string;
  // ... other properties
}

import banner_1 from "../../../public/images/banner/banner_1.jpg";

export default function FeaturedBestSeller() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productPerPage, setProductPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product[]>(
          "https://dummyjson.com/products"
        );
        // Fetch the products depending on pagination
        setProducts(response.data.products.slice(0, productPerPage));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [productPerPage]);
  return (
    <Box sx={{ flexGrow: 1, mt: 10, mx: 15 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Typography variant="body1" color="primary">
              Featured Products
            </Typography>
            <Typography variant="h5" color="text.primary">
              BESTSELLER PRODUCTS
            </Typography>
            <Typography variant="body2" color="text.primary">
              Problems trying to resolve the conflict between
            </Typography>
          </Item>
        </Grid>

        {/* PRODUCTS */}
        <Grid item xs={12} marginTop={5}>
          <Grid container spacing={2}>
            {products?.map((product) => (
              <Grid item xs={2.4}>
                <Item>
                  <img
                    src={product?.images[0] || banner_1}
                    alt="banner"
                    objectFit="cover"
                    width="183"
                    height="238"
                    layout="fill"
                    placeholder="blur"
                  />

                  <Typography variant="h3">
                    {product?.title || "Name"}
                  </Typography>
                  <Typography variant="subtitle2">
                    {product?.description || "Description"}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="subtitle2" color="text.primary">
                      ${product?.discountPercentage || "0.00"}
                    </Typography>
                    <Typography variant="subtitle2" color="primary">
                      ${product?.price || "0.00"}
                    </Typography>
                  </Box>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* LOAD MORE */}
        <Grid item xs={12} marginTop={5} textAlign={"center"}>
          <Button
            disabled={products?.length < productPerPage}
            variant="outlined"
            color="primary"
            onClick={() => setProductPerPage(productPerPage + 10)}
          >
            Load More Products
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
