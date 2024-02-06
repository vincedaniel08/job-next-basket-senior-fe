const style = {
  topMainContainer: {
    backgroundColor: "#1A1A1A",
    display: {
      xs: "none",
      sm: "none",
      md: "none",
      lg: "flex",
    },
  },

  mainCenterContainer: {
    width: "80%",
    margin: "auto",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  detailContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: "10px",
  },

  topIcon: {
    color: "#ad230e",
    marginRight: "5px",
  },

  topText: {
    color: "#fff",
    fontSize: "13px",
    marginRight: "10px",
  },

  facebookIcon: {
    color: "#006ef5",
    marginRight: "5px",
    fontSize: "20px",
  },

  instagramIcon: {
    color: "#f50056",
    marginRight: "5px",
    fontSize: "20px",
  },

  youtubeIcon: {
    color: "#f51800",
    fontSize: "25px",
  },

  bottomMainContainer: {
    minHeight: "70px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #e6e6e6",
  },

  centerBottomContainer: {
    width: "80%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  boxLogoContainer: {
    display: "flex",
    alignItems: "center",
  },

  searchBoxContainer: {
    width: "40%",
    display: {
      xs: "none",
      sm: "none",
      md: "none",
      lg: "flex",
    },
    alignItems: "center",
  },

  navSearchbar: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#cccccc",
      },
      "&:hover fieldset": {
        borderColor: "#4f4f4f",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #ad230e",
      },

      fontSize: "12px",
      padding: "10px",
      height: "45px",
      borderRadius: 0,
    },

    width: "100%",

    "& .MuiInputBase-input": {
      color: "#000",
      padding: 0,
      backgroundColor: "#fff",
    },
  },

  searchButton: {
    textTransform: "capitalize",
    backgroundColor: "#ad230e",
    boxShadow: 0,
    borderRadius: 0,
    height: "45px",

    "&:hover": {
      backgroundColor: "black",
      boxShadow: 0,
    },
  },

  userInfoMainContainer: {
    display: {
      xs: "none",
      sm: "none",
      md: "none",
      lg: "flex",
    },
    alignItems: "center",
  },

  userInfoSubContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: "5px",
    width: "150px",
  },

  accountIcon: {
    color: "#1A1A1A",
    marginRight: "10px",
    fontSize: "30px",
    display: "none",
  },

  profileAvatar: {
    marginRight: "10px",
    width: "35px",
    height: "35px",
  },

  cartIcon: {
    color: "#1A1A1A",
    marginRight: {
      xs: 0,
      sm: 0,
      md: 0,
      lg: "10px",
    },
    fontSize: "25px",
  },

  cartBadge: {
    "& .MuiBadge-badge": {
      right: {
        xs: 2,
        sm: 2,
        md: 2,
        lg: 15,
      },
      top: -1,

      fontSize: "10px",
    },
  },

  userAccountContainer: {
    display: "flex",
    flexDirection: "column",
  },

  smallText: {
    color: "#1A1A1A",
    fontSize: "11px",
    textAlign: "left",
    maxWidth: "95px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical",
  },

  bigText: {
    fontFamily: "semibold",
    color: "#1A1A1A",
    fontSize: "14px",
  },

  navigationContainer: {
    display: {
      xs: "none",
      sm: "none",
      md: "none",
      lg: "flex",
    },
    borderBottom: "3px solid #ad230e",
    backgroundColor: "#1A1A1A",
  },

  centerNavigationContainer: {
    width: "70%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  linkListContainer: {
    display: "flex",
    alignItems: "center",
  },

  linkList: {
    display: "flex",
    alignItems: "center",
    padding: 0,
    height: "40px",
  },

  navLink: {
    whiteSpace: "nowrap",

    fontSize: "13px",
    color: "#fff",

    "&:hover": {
      color: "#ad230e",
    },
  },

  navText: {
    fontFamily: "semibold",
    fontSize: "13px",
    marginRight: "10px",
    color: "#fff",
  },

  cartSmallScreenContainer: {
    display: {
      xs: "flex",
      sm: "flex",
      md: "flex",
      lg: "none",
    },

    alignItems: "center",
    justifyContent: "center",
  },

  searchContainerSmallScreen: {
    backgroundColor: "#1A1A1A",
    display: {
      xs: "flex",
      sm: "flex",
      md: "flex",
      lg: "none",
    },
    alignItems: "center",
    justifyContent: "center",
  },

  searchSmallContainer: {
    padding: "10px",
    display: "flex",
    alignItems: "center",
    width: "80%",
  },

  navSearchbarSmall: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#cccccc",
      },
      "&:hover fieldset": {
        borderColor: "#4f4f4f",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #ad230e",
      },

      fontSize: "12px",
      padding: "10px",
      height: "45px",
      borderRadius: 0,
    },

    width: "100%",
    backgroundColor: "#fff",

    "& .MuiInputBase-input": {
      color: "#000",
      padding: 0,
      backgroundColor: "#fff",
    },
  },

  searchButtonSmall: {
    textTransform: "capitalize",
    backgroundColor: "#ad230e",
    boxShadow: 0,
    borderRadius: 0,
    height: "45px",

    "&:hover": {
      backgroundColor: "black",
      boxShadow: 0,
    },
  },

  drawerMenu: {
    display: {
      lg: "none",
    },
  },

  drawerHeader: {
    backgroundColor: (theme) => theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 15px 5px 15px",
    // borderBottom: "3px solid black",
  },

  closeButton: {
    backgroundColor: "#ad230e",
    fontSize: "20px",
  },

  bigTextHeader: {
    fontFamily: "semibold",
    color: "white",
  },

  drawerLinkContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  perLink: {
    height: "30px",
    display: "flex",
    alignItems: "center",
    padding: "5px 15px 5px 15px",
  },

  perLinkTitle: {
    fontFamily: "bold",
    color: "#1A1A1A",
  },

  perLinkText: {
    color: "#1A1A1A",
    fontSize: "13px",
    marginLeft: "10px",
  },

  socmedIconDrawer: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "15px",
    marginBottom: "-5px",
  },

  facebookDrawer: {
    color: "#006ef5",
    marginRight: "5px",
    fontSize: "20px",
  },

  instagramDrawer: {
    color: "#f50056",
    marginRight: "5px",
    fontSize: "20px",
  },

  youtubeDrawer: {
    color: "#f51800",
    fontSize: "25px",
  },

  logoutIcon: {
    color: "#ad230e",
  },

  profileDrawerContainer: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0px 10px 15px",
  },

  avatarDrawerContainer: {
    marginRight: "10px",
  },

  drawerInfoContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },

  logoutContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },

  avatarPicture: {
    // i display none mo nalang to kapag hindi pa naka login .. di ko alam kung pano haha ikaw na bahala
  },

  profileIconDrawer: {
    color: "#1A1A1A",
    fontSize: "35px",
    display: "none",
  },

  boxAlertGreenDrawer: {
    width: "90%",
    margin: "auto",
    backgroundColor: "#eeffeb",
    border: "1px solid #30db12",
    padding: "15px 10px 15px 10px",
    marginTop: "5px",
  },

  warningText: {
    color: "#000",
    fontSize: "13px",
    textAlign: "center",
  },

  productCartContainer: {
    padding: "0px 10px 0px 10px",
    marginTop: "5px",
  },

  productInfoDrawerContainer: {
    display: "flex",
    flexDirection: "column",
  },

  productNameCartDrawer: {
    fontFamily: "semibold",
  },

  descriptionBoxDrawerContainer: {
    overflowWrap: "break-word",
    marginBottom: "5px",
    marginTop: "5px",
  },

  productDescriptionCartDrawer: {
    color: "#1e1e1e",
    fontSize: "13px",
  },

  productPriceCartDrawer: {
    fontFamily: "semibold",
    color: "#000",
    fontSize: "14px",
  },

  productItemCountDrawerContainer: {
    margin: "10px 0px 10px 0px",
    display: "flex",
    alignItems: "center",
  },

  addlessButton: {
    borderRadius: 0,
    fontFamily: "semibold",

    padding: 0,
    minWidth: "30px",

    "&:hover": {
      transition: "all ease .4s",
      color: "#000",
      border: "1px solid #ad230e",
      backgroundColor: "transparent",
    },
  },

  productQtyDrawerInput: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#e6e6e6",
      },
      "&:hover fieldset": {
        borderColor: "#e6e6e6",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #e6e6e6",
      },

      fontSize: "12px",
      padding: 0,
      width: "40px",
      height: "26.5px",
      borderRadius: 0,
    },

    "& .MuiInputBase-input": {
      color: "#000",
      padding: 0,
      textAlign: "center",
    },
  },

  cartDrawerPriceContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 10px 0px 10px",
  },

  productTotalBig: {
    fontFamily: "bold",
    color: "#000",
  },

  productTotalSmall: {
    color: "#000",
    fontSize: "13px",
  },

  reminderContainer: {
    margin: "auto",
    padding: "10px",
  },

  reminderText: {
    fontSize: "13px",
    color: "#1A1A1A",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    margin: "auto",
  },

  buttonCart: {
    textTransform: "capitalize",
    boxShadow: 0,
    borderRadius: 0,
    marginBottom: "3px",
    color: "#fff",

    "&:hover": {
      backgroundColor: "black",
      boxShadow: 0,
    },
  },
};
export default style;
