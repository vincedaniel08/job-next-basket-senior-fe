import React, { useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Stack,
  Button,
  Rating,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

import Iconify from "@/app/components/Iconify";
import Label from "@/app/components/Label";
import axios from "axios";

import { ColorSinglePicker } from "@/app/components/color";

export default function ProductDetailsSummary({ product }) {
  const { id, title, price, images, rating } = product;
  console.log("rating", rating);
  const theme = useTheme();

  return (
    <div>
      <Label
        variant={theme.palette.mode === "light" ? "ghost" : "filled"}
        // color={inventoryType === "in_stock" ? "success" : "error"}
        sx={{ textTransform: "uppercase" }}
      >
        {title}
      </Label>

      <Typography
        variant="overline"
        sx={{
          mt: 2,
          mb: 1,
          display: "block",
          color: status === "sale" ? "error.main" : "info.main",
        }}
      >
        {status}
      </Typography>

      <Typography variant="h5" paragraph>
        {title}
      </Typography>

      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
        <Rating value={Number(rating)} precision={0.1} readOnly />
        <Typography variant="body2">{Number(rating)} reviews</Typography>
      </Stack>

      {/* <Typography variant="h4" sx={{ mb: 3 }}>
        <Box
          component="span"
          sx={{ color: "text.disabled", textDecoration: "line-through" }}
        >
          23
        </Box>
        &nbsp;{3}
      </Typography> */}

      <Divider sx={{ borderStyle: "dashed" }} />

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 3 }}
      >
        <ColorSinglePicker
          colors={["#00AB55", "#3D3D3D", "#FFC107", "#FF4842"]}
          //   value={field.value}
          //   onChange={field.onChange}
          //   sx={{
          //     ...(colors.length > 4 && {
          //       maxWidth: 144,
          //       justifyContent: "flex-end",
          //     }),
          //   }}
        />

        {/* <Controller
          name="color"
          control={control}
          render={({ field }) => (
            <ColorSinglePicker
              colors={colors}
              value={field.value}
              onChange={field.onChange}
              sx={{
                ...(colors.length > 4 && {
                  maxWidth: 144,
                  justifyContent: "flex-end",
                }),
              }}
            />
          )}
        /> */}
      </Stack>

      <Divider sx={{ borderStyle: "dashed" }} />

      <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
        <Button
          fullWidth
          // disabled={isMaxQuantity}
          size="large"
          color="primary"
          variant="contained"
          //   onClick={handleAddCart}
          sx={{ whiteSpace: "nowrap", color: "common.white", width: 150 }}
        >
          Select Options
        </Button>

        <IconButton aria-label="delete" sx={{ boxShadow: 1 }}>
          <Iconify
            icon={"mdi:heart-outline"}
            width={24}
            height={24}
            color={"#000"}
          />
        </IconButton>
        <IconButton aria-label="delete" sx={{ boxShadow: 1 }}>
          <Iconify
            icon={"mdi:cart-outline"}
            width={24}
            height={24}
            color={"#000"}
          />
        </IconButton>
        <IconButton aria-label="delete" sx={{ boxShadow: 1 }}>
          <Iconify icon={"mdi:eye"} width={24} height={24} color={"#000"} />
        </IconButton>
      </Stack>

      <Stack alignItems="center" sx={{ mt: 3 }}>
        {/* <SocialsButton initialColor /> */}a
      </Stack>
    </div>
  );
}
