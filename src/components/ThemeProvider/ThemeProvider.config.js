import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiDivider: {
      root: {
        backgroundColor: "rgba(255,255,255, 0.6)"
      }
    }
  },
  palette: {
    primary: {
      light: "#da8a83",
      main: "#cc4b80",
      dark: "#4e484a",
      contrastText: "#fff"
    },
    secondary: {
      light: "#e096aa",
      main: "#6b6a6e",
      dark: "#1b1b22",
      contrastText: "#fff"
    },
    background: {
      paper: "#1b1d21",
      default: "#121116"
    },
    text: {
      primary: "rgba(255,255,255, 0.87)",
      secondary: "rgba(255,255,255, 0.54)",
      disabled: "rgba(255,255,255, 0.38)",
      hint: "rgba(255,255,255, 0.38)",
      divider: "rgba(255,255,255, 0.12)"
    }
  }
});

export default theme;
