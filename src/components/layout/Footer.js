import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Sanjeevni Arogya Kendra
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <LocationOnIcon />
                <Typography variant="body2">
                  In front of 96 shops, Kanasiya Naka, Maksi, District Shajapur
                  (M.P.) 465106
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Link
                href="tel:+919131170076"
                color="inherit"
                sx={{ display: "flex", gap: 1 }}
              >
                <PhoneIcon />
                <Typography>+91 91311 70076</Typography>
              </Link>
              <Link
                href="tel:+917000563123"
                color="inherit"
                sx={{ display: "flex", gap: 1 }}
              >
                <PhoneIcon />
                <Typography>+91 7000563123</Typography>
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link href="/privacy-policy" color="inherit">
                Privacy Policy
              </Link>
              <Link href="/terms" color="inherit">
                Terms & Conditions
              </Link>
              <Link href="/sitemap" color="inherit">
                Sitemap
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

        <Typography variant="body2" align="center">
          © {currentYear} Sanjeevni Arogya Kendra. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
