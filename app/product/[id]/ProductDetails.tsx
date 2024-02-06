import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, Box, Paper } from "@mui/material";

const Item = styled(Box)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  justifyContent: "center",
}));

import Image from "../../components/Image";

export default function ProductDetails({ product }: { product: any }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} borderBottom={1} color={"gray"}>
          <Item>
            <Typography variant="h5" component="h1" padding={2}>
              Product Details
            </Typography>

            <Typography variant="h5" component="h1" padding={2}>
              Additional Information
            </Typography>

            <Typography variant="h5" component="h1" padding={2}>
              Reviews (0)
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h5" padding={2}>
                the quick fox jumps over
              </Typography>

              <Typography variant="body1" padding={2} color="gray">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </Typography>

              <Box
                sx={{
                  borderLeft: 1,
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                <Typography variant="body1" padding={2} color="gray">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </Typography>
              </Box>

              <Typography variant="body1" padding={2} color="gray">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <Image src={product?.images?.[0] || ""} />
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
