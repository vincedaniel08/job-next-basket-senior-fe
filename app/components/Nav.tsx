"use client";

/* Core */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* Instruments */
import styles from "../styles/nav";

import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Iconify from "./Iconify";

export const Nav = () => {
  const pathname = usePathname();

  return (
    // <nav className={styles.nav}>
    //   <Link
    //     className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
    //     href="/"
    //   >
    //     Home
    //   </Link>
    //   <Link
    //     className={`${styles.link} ${
    //       pathname === "/verify" ? styles.active : ""
    //     }`}
    //     href="/verify"
    //   >
    //     Verify
    //   </Link>
    // </nav>

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
