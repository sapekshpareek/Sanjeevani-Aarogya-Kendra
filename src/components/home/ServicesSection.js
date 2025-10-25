import { Box, Container, Grid, Typography } from "@mui/material";
import { serviceImages } from "../../config/images";
import ServiceCard from "../services/ServiceCard";

const services = [
  {
    id: "vitiligo",
    title: "Vitiligo Treatment",
    description:
      "Advanced treatment protocols for vitiligo management and skin repigmentation.",
  },
  {
    id: "psoriasis",
    title: "Psoriasis Care",
    description:
      "Comprehensive care for psoriasis using modern therapeutic approaches.",
  },
  {
    id: "skinDisease",
    title: "Skin Disease Treatment",
    description: "Expert care for various skin conditions and disorders.",
  },
  {
    id: "kneePain",
    title: "Knee and Joint Pain",
    description:
      "Effective treatment for chronic knee and joint pain without surgery.",
  },
  {
    id: "piles",
    title: "Piles (Hemorrhoids)",
    description: "Advanced and non-invasive treatment for piles and fissures.",
  },
  {
    id: "infertility",
    title: "Infertility Treatment",
    description:
      "Comprehensive care and treatment for male and female infertility issues.",
  },
  {
    id: "womenHealth",
    title: "Women’s Diseases (Gynecological)",
    description:
      "Specialized care for a range of gynecological disorders and women's health issues.",
  },
];

export default function ServicesSection() {
  return (
    <Box sx={{ py: 8, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} md={4} key={service.id}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
