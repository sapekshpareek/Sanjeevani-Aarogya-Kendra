import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { generalImages } from "../../config/images";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "100vh", md: "93vh" },
        display: "flex",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${generalImages.hero.primary})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)",
          zIndex: -1,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          margin: "auto",
          color: "white",
          py: { xs: 8, md: 12 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                mb: 2,
                fontWeight: 700,
              }}
            >
              Your Journey to Better Health Starts Here
            </Typography>
            <Typography variant="h2" sx={{ mb: 4, fontSize: "1.5rem" }}>
              Dr. Ravi Pandey - Expert Dermatologist & Healthcare Specialist
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Button
                variant="contained"
                color="secondary"
                size="large"
                href="tel:+919131170076"
              >
                Book Appointment
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                href="/services"
              >
                Our Services
              </Button>
            </Stack>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "block" },
              bgcolor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "10px",
              height: "400px",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
