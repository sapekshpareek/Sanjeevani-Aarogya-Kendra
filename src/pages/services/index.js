import { Box, Container, Typography, Grid } from "@mui/material";
import ServiceCard from "../../components/services/ServiceCard";
import { serviceImages } from "../../config/images";

const services = [
  {
    id: "vitiligo",
    title: "Vitiligo Treatment",
    description:
      "Advanced treatment protocols for vitiligo management and skin repigmentation.",
    image: "/images/services/vitiligo.jpg",
    details:
      "Comprehensive vitiligo treatment using modern medical approaches...",
  },
  {
    id: "psoriasis",
    title: "Psoriasis Treatment",
    description: "Effective management and treatment of psoriasis symptoms.",
    image: "/images/services/psoriasis.png",
    details: "Advanced psoriasis care with personalized treatment plans...",
  },
  // Add other services similarly
];

export default function ServicesPage() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h1" align="center" gutterBottom>
          Our Services
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Comprehensive Healthcare Solutions at Sanjeevni Arogya Kendra
        </Typography>
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} md={6} key={service.id}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
