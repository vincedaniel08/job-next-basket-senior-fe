"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Typography, Button } from "@mui/material";
import Iconify from "../Iconify";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

import banner_1 from "../../../public/images/banner/banner_1.jpg";

export default function FeaturedBestServices() {
  const services = [
    {
      icon: "ic:outline-email",
      title: "Easy Wins",
      description: "Get your best looking smile now!",
    },
    {
      icon: "ic:outline-email",
      title: "Concrete",
      description:
        "Defalcate is most focused in helping you discover your most beautiful smile",
    },
    {
      icon: "ic:outline-email",
      title: "Hack Growth",
      description: "Overcame any hurdle or any other problem.",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, mt: 10, mx: 15, textAlign: "center" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" color="gray">
            Featured Products
          </Typography>
          <Typography variant="h3" padding={2}>
            THE BEST SERVICES
          </Typography>
          <Typography variant="body2" color="text.primary">
            Problems trying to resolve the conflict between
          </Typography>
        </Grid>

        <Grid item xs={12} my={10}>
          <Grid container spacing={2}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: "center" }}>
                  <Iconify
                    sx={{ color: "primary.main" }}
                    icon={"ic:outline-email"}
                    width={60}
                    height={60}
                  />
                  <Typography variant="h5" color="text.primary" padding={2}>
                    {service.title}
                  </Typography>

                  <Typography variant="body2" color="text.primary">
                    {service.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
