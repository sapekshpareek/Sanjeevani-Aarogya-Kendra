import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import Image from "next/image";
import { generalImages } from "../config/images";

export default function AboutPage() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph>
              Sanjeevni Arogya Kendra, under the leadership of Dr. Ravi Pandey,
              has been serving patients for over many years with dedication and
              expertise in dermatology and general healthcare.
            </Typography>
            <Typography variant="body1" paragraph>
              Our state-of-the-art facilities in Maksi and Ujjain are equipped
              with modern medical technology, allowing us to provide the highest
              standard of care to our patients.
            </Typography>
            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
              Our Mission
            </Typography>
            <Typography variant="body1">
              To provide accessible, high-quality healthcare services while
              ensuring patient comfort and satisfaction throughout their healing
              journey.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{ p: 2, position: "relative", height: "400px" }}
            >
              <Image
                src={generalImages.clinic.primary}
                alt="Sanjeevni Arogya Kendra"
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: "8px" }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
