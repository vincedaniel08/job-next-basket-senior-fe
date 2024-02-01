"use client";

/* Core */
import next from "next";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from '@mui/icons-material/Menu';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from '@mui/icons-material/Adb';

import styles from "../styles/header";
import Iconify from "./Iconify";

const pages = ["Home", "Shop", "About", "Blog", "Contact", "Pages"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={styles.root}>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Bandage
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 10 }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex" }}>
            <Iconify
              sx={{ mx: 1 }}
              // sx={styles.icon}
              icon={"mdi:account-outline"}
              width={24}
              height={24}
            />
            <Typography>Login / Register</Typography>
          </Box>

          <Box sx={{ display: "flex", mx: 5 }}>
            <Iconify
              // sx={styles.icon}
              icon={"mdi:search"}
              width={24}
              height={24}
            />
          </Box>

          <Box sx={{ display: "flex", mx: 2 }}>
            <Iconify
              // sx={styles.icon}
              icon={"mdi:cart-outline"}
              width={24}
              height={24}
            />
          </Box>

          <Box sx={{ display: "flex", mx: 2 }}>
            <Iconify
              // sx={styles.icon}
              icon={"mdi:heart-outline"}
              width={24}
              height={24}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
