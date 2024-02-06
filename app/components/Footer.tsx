import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
// Importing Style
import style from "../styles/footer";
import Iconify from "./Iconify";
// Importing MUI
import {
  Box,
  Typography,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Button,
  TextField,
} from "@mui/material";

import banner_1 from "../../public/images/banner/banner_1.jpg";

function Footer() {
  const footerInfo = [
    {
      title: "Company Info",
      data: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Legal",
      data: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Features",
      data: [
        "Business Marketing",
        "User Analyrics",
        "Live Chat",
        "Unlimited Support",
      ],
    },
    {
      title: "Resources",
      data: ["IOS & Android", "Watch a Demos", "Customers", "API"],
    },
    {
      title: "Get in Touch",
      data: [],
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "150px",
          mx: {
            xs: 10,
            md: 20,
          },
          boxShadow: "0px 1px 0px 0px #f0eded",
        }}
      >
        <Typography variant="h3">Bandage</Typography>
        <Box sx={{ flexGrow: 1 }} />

        <Iconify
          icon="ic:baseline-facebook"
          width={24}
          height={24}
          sx={{ color: (theme) => theme.palette.primary.main, mx: 1 }}
        />
        <Iconify
          icon="mdi:instagram"
          width={24}
          height={24}
          sx={{ color: (theme) => theme.palette.primary.main, mx: 1 }}
        />
        <Iconify
          icon="mdi:twitter"
          width={24}
          height={24}
          sx={{ color: (theme) => theme.palette.primary.main, mx: 1 }}
        />
      </Box>
      <Box sx={style.footerParentBox}>
        <Grid container sx={style.footerMainContainer}>
          {footerInfo.map((foot, i) => (
            <Grid item sx={style.footerColumn} xs={12} md={2}>
              <Typography variant="h1" sx={style.footerTitle}>
                {foot.title}
              </Typography>

              {foot.data.map((data) => (
                <Link href="/" passHref>
                  <Typography variant="body" sx={style.footerData}>
                    {data}
                  </Typography>
                </Link>
              ))}

              {i === 4 && (
                <Box>
                  <Box
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 400,
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Your Email"
                      inputProps={{ "aria-label": "Your Email" }}
                    />

                    <Button sx={{ p: 2, color: "white" }} variant="contained">
                      Subscribe
                    </Button>
                  </Box>

                  <Box sx={{ display: "block", mx: 2, fontSize: 13 }}>
                    <Typography variant="captions">
                      Lore imp sum dolor Amit
                    </Typography>
                  </Box>
                </Box>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={style.footerBoxCreditPayment}>
        <Grid container sx={style.footerCreditPayment}>
          {/*Credit Texts*/}
          <Grid item sx={style.creditTextContainer}>
            <Typography sx={style.creditText}>
              Made With Love By Finland All Right Reserved
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Footer;
