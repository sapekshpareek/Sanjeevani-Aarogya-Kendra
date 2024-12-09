import { Box, Container, Typography, Paper } from "@mui/material";

export default function TermsAndConditions() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h1" gutterBottom>
            Terms and Conditions
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing and using Sanjeevni Arogya Kendra's services, you agree
            to be bound by these terms and conditions.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            2. Medical Services
          </Typography>
          <Typography variant="body1" paragraph>
            Our medical services are provided by qualified healthcare
            professionals. Treatment outcomes may vary based on individual
            cases.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            3. Appointments and Cancellations
          </Typography>
          <Typography variant="body1" paragraph>
            Please provide at least 24 hours notice for appointment
            cancellations. Repeated no-shows may affect future appointment
            scheduling.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
