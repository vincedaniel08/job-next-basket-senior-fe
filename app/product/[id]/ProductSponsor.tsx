import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Image from "../../components/Image";

import sponsor_1 from "../../../public/images/sponsor/Vector.png";
import sponsor_2 from "../../../public/images/sponsor/Vector_1.png";
import sponsor_3 from "../../../public/images/sponsor/Vector_2.png";
import sponsor_4 from "../../../public/images/sponsor/Vector_3.png";
import sponsor_5 from "../../../public/images/sponsor/Vector_4.png";
import sponsor_6 from "../../../public/images/sponsor/Vector_5.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ProductSponsor() {
  const sponsors = [
    sponsor_1,
    sponsor_2,
    sponsor_3,
    sponsor_4,
    sponsor_5,
    sponsor_6,
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
        px: { xs: 0, md: 15 },
        py: {
          xs: 0,
          md: 8,
        },
      }}
    >
      <Grid container spacing={2}>
        {sponsors.map((sponsor, index) => (
          <Grid item xs={12} md={2}>
            <Box
              width={{
                xs: 150,
                md: 120,
              }}
              mx="auto"
              padding={2}
            >
              <img src={sponsor.src} alt="sponsor" width="100%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
