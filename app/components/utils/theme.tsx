import { Montserrat } from "next/font/google";

const mont_serrat = Montserrat({ subsets: ["latin"] });

const theme = (isDarkMode) => ({
  palette: {
    mode: isDarkMode ? "light" : "dark",
    primary: {
      main: "#2DC071",
    },
    secondary: {
      main: "#474747",
    },
    text: {
      primary: "#000",
      secondary: "#fff",
    },
    // background:{
    //   default:"#F0F0F0"
    // }
  },

  typography: {
    fontFamily: mont_serrat.style.fontFamily,
    fontSize: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#6b6b6b #2b2b2b",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: (theme) => theme.palette.background.default,
            width: 2,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#479923",
            minHeight: 10,
            borderRight: "2px solid #479923",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2b2b2b",
          },
        },
      },
    },
  },
});

export default theme;
