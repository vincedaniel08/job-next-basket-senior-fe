"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// Image
import banner_1 from "../../../public/images/banner/banner_1.jpg";
import banner_2 from "../../../public/images/banner/banner_2.png";
import banner_3 from "../../../public/images/banner/banner_3.png";
import banner_4 from "../../../public/images/banner/banner_4.jpg";
import { Button, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Banner() {
  return (
    <Box sx={{ flexGrow: 1, mx: 20, mt: 8 }}>
      <Grid
        container
        spacing={2}
        display={{
          xs: "none",
          md: "flex",
        }}
      >
        <Grid item xs={12} md={5}>
          {/* Image with text inside */}
          <div style={{ position: "relative" }}>
            <img
              src={banner_1.src}
              alt="banner"
              objectFit="cover"
              width="100%"
              height="620"
              layout="fill"
              placeholder="blur"
            />
            <div
              style={{
                position: "absolute",
                top: "15%",
                left: "30%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              <Typography
                variant="captions"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                5 items
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "black" }}
              >
                FURNITURE
              </Typography>

              <Button
                variant="text"
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Read More
              </Button>
            </div>
          </div>

          {/* <Image
            src={banner_1.src}
            // ratio="9/16"
            disabledEffect
            sx={{ borderRadius: 1, mb: 1 }}
          /> */}
        </Grid>

        <Grid item xs={7}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* Image with text inside */}
              <div style={{ position: "relative" }}>
                <img
                  src={banner_2.src}
                  alt="banner"
                  objectFit="cover"
                  width="100%"
                  height="300"
                  layout="fill"
                  placeholder="blur"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "25%",
                    left: "20%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  <Typography
                    variant="captions"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    5 items
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "black" }}
                  >
                    FURNITURE
                  </Typography>

                  <Button
                    variant="text"
                    sx={{
                      color: "black",
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div style={{ position: "relative" }}>
                <img
                  src={banner_3.src}
                  alt="banner"
                  objectFit="cover"
                  width="100%"
                  height="300"
                  layout="fill"
                  placeholder="blur"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "25%",
                    left: "40%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  <Typography
                    variant="captions"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    5 items
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "black" }}
                  >
                    FURNITURE
                  </Typography>

                  <Button
                    variant="text"
                    sx={{
                      color: "black",
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div style={{ position: "relative" }}>
                <img
                  src={banner_4.src}
                  alt="banner"
                  objectFit="cover"
                  width="100%"
                  height="300"
                  layout="fill"
                  placeholder="blur"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "25%",
                    left: "40%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  <Typography
                    variant="captions"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    5 items
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "black" }}
                  >
                    FURNITURE
                  </Typography>

                  <Button
                    variant="text"
                    sx={{
                      color: "black",
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        display={{
          xs: "flex",
          md: "none",
        }}
      >
        <Grid item xs={12} md={12}>
          {/* Image with text inside */}
          <div style={{ position: "relative" }}>
            <img
              src={banner_1.src}
              alt="banner"
              objectFit="cover"
              width="100%"
              height="300"
              layout="fill"
              placeholder="blur"
            />
            <div
              style={{
                position: "absolute",
                top: "25%",
                left: "20%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              <Typography
                variant="captions"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                5 items
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "black" }}
              >
                FURNITURE
              </Typography>

              <Button
                variant="text"
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Read More
              </Button>
            </div>
          </div>

          {/* <Image
            src={banner_1.src}
            // ratio="9/16"
            disabledEffect
            sx={{ borderRadius: 1, mb: 1 }}
          /> */}
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* Image with text inside */}
              <div style={{ position: "relative" }}>
                <img
                  src={banner_2.src}
                  alt="banner"
                  objectFit="cover"
                  width="100%"
                  height="300"
                  layout="fill"
                  placeholder="blur"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "25%",
                    left: "20%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  <Typography
                    variant="captions"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    5 items
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "black" }}
                  >
                    FURNITURE
                  </Typography>

                  <Button
                    variant="text"
                    sx={{
                      color: "black",
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <div style={{ position: "relative" }}>
                <img
                  src={banner_3.src}
                  alt="banner"
                  objectFit="cover"
                  width="100%"
                  height="300"
                  layout="fill"
                  placeholder="blur"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "25%",
                    left: "20%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  <Typography
                    variant="captions"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    5 items
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "black" }}
                  >
                    FURNITURE
                  </Typography>

                  <Button
                    variant="text"
                    sx={{
                      color: "black",
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <div style={{ position: "relative" }}>
                <img
                  src={banner_4.src}
                  alt="banner"
                  objectFit="cover"
                  width="100%"
                  height="300"
                  layout="fill"
                  placeholder="blur"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "25%",
                    left: "20%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  <Typography
                    variant="captions"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    5 items
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "black" }}
                  >
                    FURNITURE
                  </Typography>

                  <Button
                    variant="text"
                    sx={{
                      color: "black",
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
