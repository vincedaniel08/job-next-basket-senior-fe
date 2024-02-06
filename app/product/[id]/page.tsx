"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ProductDetailsCarousel from "./ProductDetailsCarousel";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Breadcrumbs, Card, Typography, Link } from "@mui/material";

import Slider from "react-slick";
import "../../styles/product.css";
import ProductDetailsSummary from "./ProductDetailsSummary";

import axios from "axios";
import ProductDetails from "./ProductDetails";
import FeaturedBestSeller from "@/app/components/home/FeaturedBestSeller";
import ProductSponsor from "./ProductSponsor";
import Iconify from "@/app/components/Iconify";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Product() {
  const [nav1, setNav1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider1, setSlider1] = useState(null);

  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const router = useParams();
  const { id } = router;

  const breadcrumbs = [
    <Link underline="none" href="/">
      <Typography variant="h4" color="text.primary">
        Home
      </Typography>
    </Link>,

    <Typography variant="h5" sx={{ color: "gray" }}>
      Shop
    </Typography>,
  ];

  const [product, setProduct] = useState<Product[]>([{ images: [""] }]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product[]>(
          `https://dummyjson.com/products/${id}`
        );
        // Fetch the products depending on pagination
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Box
      sx={{
        px: {
          xs: 5,
          md: 25,
        },
        backgroundColor: "#FAFAFA",
      }}
    >
      <Box sx={{ py: 5 }}>
        <Breadcrumbs
          separator={
            <Iconify
              icon="ooui:next-ltr"
              width={25}
              height={25}
              sx={{ color: "gray" }}
            />
          }
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            {" "}
            <ProductDetailsCarousel product={product} />
            {/* <Card>
              <Grid container>
                <Grid item xs={12} md={6} lg={7}>
                  <ProductDetailsCarousel product={product} />
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                  asdsa
                </Grid>
              </Grid>
            </Card> */}
          </Grid>
          <Grid item xs={12} md={7}>
            {" "}
            <ProductDetailsSummary
              product={product}
              // cart={checkout.cart || []}
              // onAddCart={handleAddCart || []}
              // onGotoStep={handleGotoStep || []}
            />
          </Grid>

          <Grid item xs={12}>
            <ProductDetails product={product} />
          </Grid>
          <Grid item xs={12}>
            <FeaturedBestSeller page="Product Details" />
          </Grid>
          <Grid item xs={12}>
            <ProductSponsor />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
