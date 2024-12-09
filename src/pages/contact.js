import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h1" align="center" gutterBottom>
          Contact Us
        </Typography>

        <Grid container spacing={6} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Send us a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Name" required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Phone" required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Email" type="email" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
              <Typography variant="h5" gutterBottom>
                Our Locations
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" color="primary" gutterBottom>
                  Maksi Clinic
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <LocationOnIcon color="primary" />
                  <Typography>
                    In front of 96 shops, Kanasiya Naka, Maksi, District
                    Shajapur (M.P.) 465106
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  color="primary"
                  gutterBottom
                  sx={{ mt: 4 }}
                >
                  Ujjain Clinic
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <LocationOnIcon color="primary" />
                  <Typography>
                    2, Ashok Nagar, near Loharpatti, Ujjain 456001
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
