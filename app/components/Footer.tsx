import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
// Importing Style
import style from "../styles/footer";

// Importing MUI
import { Box, Typography, Grid } from "@mui/material";

// Import Images
// import logo from "../image/monorackLogo.png";
// import bdo from "../image/Payment/BDO.jpg";
// import bpi from "../image/Payment/BPI.jpg";
// import gcash from "../image/Payment/GCash.jpg";
// import landbank from "../image/Payment/Landbank.jpg";
// import paymaya from "../image/Payment/Paymaya.jpg";
// import paypal from "../image/Payment/Paypal.jpg";

// Import Icons
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import GoogleIcon from "@mui/icons-material/Google";

import banner_1 from "../../public/images/banner/banner_1.jpg";

function Footer() {
  return (
    <Box>
      <Box sx={style.footerParentBox}>
        <Grid container sx={style.footerMainContainer}>
          {/*Footer Logo*/}
          <Grid item sx={style.footerColumnLogo}>
            <img
              alt="footer_logo"
              src={banner_1.src}
              style={{
                maxWidth: "180px",
                height: "auto",
                marginBottom: "15px",
                pointerEvents: "none",
              }}
            />
            <Box sx={style.textFooterLogo}>
              <Typography sx={style.footerLogoDescription}>
                Proving high-quality motorcycle bracket since 2017.
              </Typography>
            </Box>
          </Grid>

          {/*First Column*/}
          <Grid item sx={style.footerColumn}>
            <Typography variant="h1" sx={style.footerTitle}>
              HELP
            </Typography>
            <Link href="/shop" style={{ textDecoration: "none" }}>
              <Typography sx={style.footerContent}>Search</Typography>
            </Link>
            <Typography sx={style.footerContent}>FAQ's</Typography>
            <Typography sx={style.footerContent}>
              Shipping {"&"} Payment
            </Typography>
          </Grid>

          {/*Second Column*/}
          <Grid item sx={style.footerColumn}>
            <Typography variant="h1" sx={style.footerTitle}>
              OUR STORY
            </Typography>
            <Link href="/about" style={{ textDecoration: "none" }}>
              <Typography sx={style.footerContent}>About</Typography>
            </Link>
            <Link href="/shop" style={{ textDecoration: "none" }}>
              <Typography sx={style.footerContent}>Products</Typography>
            </Link>
            <Link href="/news" style={{ textDecoration: "none" }}>
              <Typography sx={style.footerContent}>News {"&"} Blogs</Typography>
            </Link>
          </Grid>

          {/*Third Column*/}
          <Grid item sx={style.footerColumn}>
            <Typography variant="h1" sx={style.footerTitle}>
              SUPPORT
            </Typography>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Typography sx={style.footerContent}>Contact Us</Typography>
            </Link>
            <Typography sx={style.footerContent}>
              Refund {"&"} Return
            </Typography>
            <Typography sx={style.footerContent}>
              Terms {"&"} Condition
            </Typography>
          </Grid>

          {/*Fourth Column*/}
          <Grid item sx={style.footerColumn}>
            <Typography variant="h1" sx={style.footerTitle}>
              OTHER LINKS
            </Typography>
            <Link href="/developer" style={{ textDecoration: "none" }}>
              <Typography sx={style.footerContent}>Developers</Typography>
            </Link>
            <Typography sx={style.footerContent}>Track your order</Typography>
          </Grid>

          {/*Fifth Column*/}
          <Grid item sx={style.footerColumn}>
            <Typography variant="h1" sx={style.footerTitle}>
              FOLLOW US
            </Typography>

            {/* <Box sx={style.socmedLink}>
              <Box sx={style.socmedContainer}>
                <FacebookOutlinedIcon sx={style.socmed} />
              </Box>
              <Box sx={style.socmedContainer}>
                <InstagramIcon sx={style.socmed} />
              </Box>
              <Box sx={style.socmedContainer}>
                <YouTubeIcon sx={style.socmed} />
              </Box>
              <Box sx={style.socmedContainer}>
                <GoogleIcon sx={style.socmed} />
              </Box>
            </Box> */}
          </Grid>
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

          {/*Payment Images*/}
          {/* <Grid item sx={style.paymentImage}>
            <Box sx={style.imageBox}>
              <img
                alt="BDO"
                src={bdo}
                style={{
                  width: "50px",
                  margin: "0px 5px 0px 0px",
                }}
              />
            </Box>
            <Box sx={style.imageBox}>
              <img
                alt="BPI"
                src={bpi}
                style={{
                  width: "50px",
                  margin: "0px 5px 0px 0px",
                }}
              />
            </Box>
            <Box sx={style.imageBox}>
              <img
                alt="GCash"
                src={gcash}
                style={{
                  width: "50px",
                  margin: "0px 5px 0px 0px",
                }}
              />
            </Box>
            <Box sx={style.imageBox}>
              <img
                alt="Landbank"
                src={landbank}
                style={{
                  width: "50px",
                  margin: "0px 5px 0px 0px",
                }}
              />
            </Box>
            <Box sx={style.imageBox}>
              <img
                alt="Paymaya"
                src={paymaya}
                style={{
                  width: "50px",
                  margin: "0px 5px 0px 0px",
                }}
              />
            </Box>
            <Box sx={style.imageBox}>
              <img
                alt="Paypal"
                src={paypal}
                style={{
                  width: "50px",
                  margin: "0px 5px 0px 0px",
                }}
              />
            </Box>
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
}

export default Footer;
