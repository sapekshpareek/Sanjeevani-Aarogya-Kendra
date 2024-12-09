import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2C5282", // Deep medical blue
      light: "#4299E1",
      dark: "#1A365D",
    },
    secondary: {
      main: "#38A169", // Healing green
      light: "#48BB78",
      dark: "#276749",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F7FAFC",
    },
    text: {
      primary: "#2D3748",
      secondary: "#4A5568",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});
