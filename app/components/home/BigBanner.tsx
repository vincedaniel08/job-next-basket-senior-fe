import React from "react";
import { Box, Button, Typography } from "@mui/material";

import banner_1 from "../../../public/images/banner/banner_1.jpg";

export default function BigBanner() {
  return (
    <Box py={10} textAlign={"center"}>
      <Box style={{ position: "relative" }}>
        <img
          src={"https://source.unsplash.com/random/900x500?sig=12"}
          alt="banner"
          objectFit="cover"
          width="100%"
          height="500"
          layout="fill"
          placeholder="blur"
        />
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
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
            Designing Better Experience
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", color: "white" }}
            py={2}
          >
            Problems trying to resolve the conflict between
          </Typography>
          <Typography
            variant="body1"
            py={2}
            sx={{ fontWeight: "bold", color: "white" }}
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </Typography>

          <Button
            variant="contained"
            sx={{
              color: "black",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            ADD YOUR CALL TO ACTION
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
