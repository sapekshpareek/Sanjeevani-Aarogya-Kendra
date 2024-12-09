import { Box, Container, Typography, Paper } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h1" gutterBottom>
            Privacy Policy
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            At Sanjeevni Arogya Kendra, we collect information that you provide
            directly to us, including personal information and medical history
            necessary for your treatment.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph>
            We use the information we collect to provide medical services,
            communicate with you about appointments, and improve our services.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Information Security
          </Typography>
          <Typography variant="body1" paragraph>
            We implement appropriate security measures to protect your personal
            and medical information from unauthorized access or disclosure.
          </Typography>

          {/* Add more sections as needed */}
        </Paper>
      </Container>
    </Box>
  );
}
