import { useRouter } from "next/router";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import Image from "next/image";
import { serviceImages } from "../../config/images";

const serviceDetails = {
  vitiligo: {
    title: "Vitiligo Treatment",
    description:
      "Advanced treatment for vitiligo using modern medical approaches",
    image: serviceImages.vitiligo.primary,
    content: [
      "Comprehensive diagnosis and treatment planning",
      "Advanced phototherapy treatments",
      "Topical medications and supplements",
      "Lifestyle and dietary recommendations",
      "Regular monitoring and adjustments",
    ],
  },
  psoriasis: {
    title: "Psoriasis Treatment",
    description: "Effective management of psoriasis symptoms",
    image: serviceImages.psoriasis.primary,
    content: [
      "Personalized treatment plans",
      "Advanced topical treatments",
      "Systemic medications when needed",
      "Lifestyle modification guidance",
      "Regular follow-up care",
    ],
  },
  // Add other services similarly
};

export default function ServiceDetail() {
  const router = useRouter();
  const { id } = router.query;
  const service = serviceDetails[id];

  if (!service) {
    return <Typography>Service not found</Typography>;
  }

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" gutterBottom>
              {service.title}
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              {service.description}
            </Typography>
            <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Treatment Features:
              </Typography>
              {service.content.map((item, index) => (
                <Typography key={index} variant="body1" sx={{ mt: 2 }}>
                  • {item}
                </Typography>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{ p: 2, position: "relative", height: "400px" }}
            >
              <Image
                src={service.image}
                alt={service.title}
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
