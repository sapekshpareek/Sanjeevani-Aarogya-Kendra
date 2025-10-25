import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function ContactSection() {
  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Visit Our Clinics
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
              <Typography variant="h5" gutterBottom color="primary">
                Maksi Clinic
              </Typography>
              <Stack spacing={3}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <LocationOnIcon color="primary" />
                  <Typography>
                    In front of 96 shops, Kanasiya Naka, Maksi, District
                    Shajapur (M.P.) 465106
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <PhoneIcon color="primary" />
                  <Typography>+91 91311 70076</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <AccessTimeIcon color="primary" />
                  <Typography>Mon - Sat: 10:00 AM - 8:00 PM</Typography>
                </Box>
                <Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<LocationOnIcon />}
                    href="https://www.google.com/maps/search/?api=1&query=In%20front%20of%2096%20shops%2C%20Kanasiya%20Naka%2C%20Maksi%2C%20District%20Shajapur%20(M.P.)%20465106"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Map
                  </Button>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
