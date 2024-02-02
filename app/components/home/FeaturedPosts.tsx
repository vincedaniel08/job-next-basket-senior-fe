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

export default function FeaturedPosts() {
  const posts = [
    {
      icon: "ic:outline-email",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "2 April 2021",
      comment: "10 comments",
    },
    {
      icon: "ic:outline-email",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "2 April 2021",
      comment: "10 comments",
    },
    {
      icon: "ic:outline-email",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "2 April 2021",
      comment: "10 comments",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, mt: 10, mx: 15 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Typography variant="body1" color="primary">
              Particle Advice
            </Typography>
            <Typography variant="h5" color="text.primary">
              Featured Posts
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            {posts.map((post, index) => (
              <Grid item xs={4}>
                <Box width={348} sx={{ textAlign: "left" }}>
                  <div style={{ position: "relative" }}>
                    <img
                      src={banner_1.src}
                      alt="banner"
                      objectFit="cover"
                      width="338"
                      height="300"
                      layout="fill"
                      placeholder="blur"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "10%",
                        left: "15%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "bold",
                        backgroundColor: "red",

                        borderRadius: 5,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "bold", px: 1.5, py: 0.2 }}
                      >
                        NEW
                      </Typography>
                    </div>
                  </div>

                  <Box>
                    <Button variant="text" color="primary">
                      Google
                    </Button>
                    <Button variant="text" color="secondary">
                      Trending
                    </Button>
                    <Button variant="text" color="secondary">
                      New
                    </Button>
                  </Box>

                  <Box sx={{ textAlign: "left", p: 2 }}>
                    <Typography variant="h5" color="text.primary">
                      {post.title}
                    </Typography>

                    <Typography variant="body1" color="text.primary" py={2}>
                      {post.description}
                    </Typography>
                  </Box>

                  {/*Date */}
                  <Box sx={{ display: "flex", px: 2, py: 2 }}>
                    <Box sx={{ display: "flex" }}>
                      <Iconify
                        sx={{ color: "primary.main" }}
                        icon={"mdi:clock-outline"}
                        width={20}
                        height={20}
                      />
                      <Typography variant="body2" color="text.primary">
                        {post.date}
                      </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: "flex" }}>
                      <Iconify
                        sx={{ color: "primary.main" }}
                        icon={"carbon:analytics"}
                        width={20}
                        height={20}
                      />
                      <Typography variant="body2" color="text.primary">
                        {post.comment}
                      </Typography>
                    </Box>
                  </Box>

                  {/*Learn More */}
                  <Box
                    sx={{
                      display: "flex",
                      p: 2,
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.primary"
                      marginRight={1}
                      fontSize={15}
                    >
                      {" "}
                      Learn More
                    </Typography>

                    <Iconify
                      sx={{
                        color: "primary.main",
                      }}
                      icon={"ooui:next-ltr"}
                      width={20}
                      height={20}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
