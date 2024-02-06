"use client";

/* Instruments */
import styles from "../styles/nav";

import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import Iconify from "./Iconify";

export const Nav = () => {
  return (
    <Box sx={styles.root}>
      <Grid container sx={styles.gridParent}>
        <Grid item xs={3} sx={styles.gridchild}>
          <Iconify
            sx={styles.icon}
            icon={"bi:telephone"}
            width={24}
            height={24}
          />
          <Typography>(225) 555-0118</Typography>
        </Grid>
        <Grid item xs={3} sx={styles.gridchild}>
          {" "}
          <Iconify
            sx={styles.icon}
            icon={"ic:outline-email"}
            width={24}
            height={24}
          />
          <Typography>michell.rivera@example.com</Typography>
        </Grid>
        <Grid item xs={3} sx={styles.gridchild}>
          <Typography sx={styles.typography}>
            Follow Us and get a chance to win 80% off
          </Typography>
        </Grid>
        <Grid item xs={3} sx={styles.gridchild}>
          {" "}
          <Typography sx={styles.typography}>Follow Us : </Typography>
          <Iconify
            sx={styles.icon}
            icon={"mdi:instagram"}
            width={24}
            height={24}
          />
          <Iconify
            sx={styles.icon}
            icon={"mdi:youtube"}
            width={24}
            height={24}
          />
          <Iconify
            sx={styles.icon}
            icon={"mdi:facebook"}
            width={24}
            height={24}
          />
          <Iconify
            sx={styles.icon}
            icon={"mdi:twitter"}
            width={24}
            height={24}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
