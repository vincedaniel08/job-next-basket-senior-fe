const style = {
  root: {
    backgroundColor: "#23856D",
    color: "white",
    height: "58px",
    px: 15,
    display: {
      xs: "none",
      lg: "flex",
    },
  },
  gridParent: {
    height: "100%",
    display: "flex",
  },
  gridchild: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",

    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    // height: "50px",
  },
  icon: {
    fontSize: "40px",
    color: "white",
    mx: "5px",
  },
  typography: {
    fontWeight: "bold",
  },
};
export default style;
