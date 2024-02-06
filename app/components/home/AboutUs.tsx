"use client";

import dynamic from "next/dynamic";

import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Typography, Rating } from "@mui/material";

import Image from "../../components/Image";

const Item = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  padding: 5,
  textAlign: "center",
  color: theme.palette.text.primary,
}));

import banner_1 from "../../../public/images/banner/banner_1.jpg";

const AboutUs = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 5 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={8}>
          <Item>
            <Typography variant="h3" padding={5}>
              What they say about us
            </Typography>

            {/* <Image
              alt="large image"
              src={banner_1.src}
              ratio="16:9"
              sx={{ width: "100%" }}
            /> */}

            <img
              src={"https://source.unsplash.com/random/200x200?sig=11"}
              alt="banner"
              style={{
                width: 120,
                height: 120,
                borderRadius: 120,
                display: "block",
                margin: "auto",
              }}
            />
            <Rating name="read-only" value={4.5} readOnly />
            <Typography variant="body1" padding={5}>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </Typography>
            <Typography variant="h6" color="primary">
              John Doe
            </Typography>
            <Typography variant="body2">CEO, Company</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <img
                src={"https://source.unsplash.com/random/200x200?sig=8"}
                alt="banner"
                style={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={"https://source.unsplash.com/random/200x200?sig=7"}
                alt="banner"
                style={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={"https://source.unsplash.com/random/200x200?sig=6"}
                alt="banner"
                style={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={"https://source.unsplash.com/random/200x200?sig=5"}
                alt="banner"
                style={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={"https://source.unsplash.com/random/200x200?sig=9"}
                alt="banner"
                style={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={"https://source.unsplash.com/random/200x200?sig=3"}
                alt="banner"
                style={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={"https://source.unsplash.com/random/200x200?sig=1"}
                alt="banner"
                style={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={"https://source.unsplash.com/random/200x200?sig=4"}
                alt="banner"
                style={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={"https://source.unsplash.com/random/200x200?sig=2"}
                alt="banner"
                style={{ width: 150, height: 150 }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default dynamic(() => Promise.resolve(AboutUs), { ssr: false });
