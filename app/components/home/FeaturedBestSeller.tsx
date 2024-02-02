"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Typography } from "@mui/material";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FeaturedBestSeller() {
  return (
    <Box sx={{ flexGrow: 1, mt: 10 }}>
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
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
