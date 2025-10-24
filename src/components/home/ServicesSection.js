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
    id: "obesity",
    title: "Obesity Management",
    description:
      "Personalized weight management programs for sustainable results.",
  },
  {
    id: "womenHealth",
    title: "Women's Health",
    description:
      "Specialized care for female infertility and gynecological issues.",
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
