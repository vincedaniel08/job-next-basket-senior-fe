const style = {
  footerParentBox: {
    // backgroundColor: "#1a1a1a",
    display: "flex",
    justifyContent: {
      xs: "left",
      md: "center",
    },
    textAlign: "left",
    padding: "80px 0px 90px 0px",
  },

  footerMainContainer: {
    justifyContent: {
      xs: "left",
      md: "center",
    },
    width: "95%",
    textAlign: "left",
  },

  footerColumnLogo: {
    width: "190px",
    display: "flex",
    flexDirection: "column",
    alignItems: {
      xs: "center",
      sm: "center",
      md: "center",
      lg: "flex-start",
    },

    marginRight: {
      xs: "0px",
      sm: "0px",
      md: "50px",
      lg: "50px",
    },

    justifyContent: "center",
  },

  textFooterLogo: {
    textAlign: {
      xs: "center",
      sm: "center",
      md: "center",
      lg: "Left",
    },
  },

  footerColumn: {
    width: "190px",
    display: "flex",
    flexDirection: "column",
    alignItems: {
      xs: "center",
      sm: "center",
      md: "center",
      lg: "flex-start",
    },
  },

  footerLogoDescription: {
    color: "#000000",
    fontSize: "14px",
    lineHeight: "25px",
  },

  footerTitle: {
    fontSize: "23px",
    lineHeight: "55px",
    color: "#000000",
  },

  footerContent: {
    lineHeight: "30px",
    cursor: "pointer",
    fontSize: "14px",
    color: "#000000",

    "&:hover": {
      color: "#fff",
    },
  },

  socmedLink: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: {
      xs: "center",
      sm: "center",
      md: "center",
      lg: "flex-start",
    },
  },

  socmedContainer: {
    border: "0.01em solid #c9c9c9",
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2px",
    transition: "all ease 0.5s",
    color: "#9e9e9e",
    cursor: "pointer",
    "&: hover": {
      backgroundColor: "#ad230e",
      border: "0.01em solid #ad230e",
      color: "#fff",
    },
  },

  socmed: {
    fontSize: "19px",
  },

  footerBoxCreditPayment: {
    display: "flex",
    backgroundColor: "#f2f2f2",
    padding: "10px 0px 10px 0px",
    justifyContent: "center",
    pl: {
      xs: 0,

      md: 20,
    },
    p: 3,
  },

  footerCreditPayment: {
    width: "95%",
    justifyContent: {
      xs: "center",
      sm: "center",
      md: "space-between",
    },
    alignItems: "center",
  },

  creditTextContainer: {
    textAlign: {
      xs: "center",
      sm: "center",
      md: "left",
    },
  },

  creditText: {
    color: "#000000",
    fontSize: "14px",
  },

  paymentImage: {
    display: "flex",
  },

  imageBox: {
    display: "flex",
    alignItems: "center",
  },
  footerData: {
    fontSize: {
      xs: 12,
      md: 15,
    },
  },
};
export default style;
