import { Box, Container, Typography, Grid, Avatar } from "@mui/material";

export default function AboutSection() {
  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Avatar
              src="/images/dr-ravi-pandey.jpg"
              alt="Dr. Ravi Pandey"
              sx={{
                width: { xs: 200, md: 300 },
                height: { xs: 200, md: 300 },
                mx: "auto",
                boxShadow: 3,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>
              About Dr. Ravi Pandey
            </Typography>
            <Typography variant="body1" paragraph>
              Dr. Ravi Pandey is a distinguished dermatologist with extensive
              experience in treating various skin conditions and health
              disorders. At Sanjeevni Arogya Kendra, we combine modern medical
              practices with traditional healing approaches.
            </Typography>
            <Typography variant="body1" paragraph>
              With state-of-the-art facilities at both our Maksi and Ujjain
              locations, we provide comprehensive care for conditions including
              vitiligo, psoriasis, skin diseases, obesity, and women's health
              issues.
            </Typography>
            <Typography variant="body1">
              Our mission is to provide accessible, high-quality healthcare
              services while ensuring patient comfort and satisfaction
              throughout their healing journey.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
