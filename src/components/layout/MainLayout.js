import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "../WhatsAppButton";
import { theme } from "../../theme/theme";

export default function MainLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline removes default browser styles (e.g., body margin) */}
      <CssBaseline />
      <Box
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
        <Footer />
        <WhatsAppButton />
      </Box>
    </ThemeProvider>
  );
}
