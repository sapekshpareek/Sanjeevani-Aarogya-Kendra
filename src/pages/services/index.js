import { Box, Container, Typography, Grid } from "@mui/material";
import ServiceCard from "../../components/services/ServiceCard";

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
  {
    id: "skin-disease",
    title: "General Skin Diseases",
    description:
      "Expert diagnosis and treatment for a wide range of common and complex skin conditions.",
    image: "/images/services/skin-disease.jpg",
  },
  {
    id: "kneePain",
    title: "Knee & Joint Pain",
    description:
      "Effective non-surgical treatment for chronic knee and joint pain, improving mobility and comfort.",
    image: "/images/services/knee.jpg",
  },
  {
    id: "piles",
    title: "Piles (Hemorrhoids)",
    description:
      "Advanced and non-invasive treatment options for piles and fissures, ensuring relief and recovery.",
    image: "/images/services/piles.jpg",
  },
  {
    id: "infertility",
    title: "Infertility Treatment",
    description:
      "Comprehensive care and treatment for male and female infertility issues, guiding you towards parenthood.",
    image: "/images/services/womens-health.jpg",
  },
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
