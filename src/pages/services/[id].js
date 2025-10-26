import { useRouter } from "next/router";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import Image from "next/image";
import { serviceImages } from "../../config/images";
import SEO from "@/components/SEO";

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
  skinDisease: {
    title: "Skin Disease Treatment",
    description: "Expert care for various skin conditions and disorders.",
    image: serviceImages.skinDisease.primary,
    content: [
      "Diagnosis and treatment of acne, eczema, and rashes",
      "Fungal and bacterial infection management",
      "Allergy testing and treatment",
      "Personalized skincare routines",
    ],
  },
  kneePain: {
    title: "Knee and Joint Pain",
    description:
      "Effective non-surgical treatment for chronic knee and joint pain.",
    image: serviceImages.kneePain.primary,
    content: [
      "Comprehensive assessment of joint issues",
      "Pain relief therapies",
      "Lifestyle and exercise recommendations",
      "Management of arthritis and other joint disorders",
    ],
  },
  piles: {
    title: "Piles (Hemorrhoids) Treatment",
    description: "Advanced and non-invasive treatment for piles and fissures.",
    image: serviceImages.piles.primary,
    content: [
      "Consultation and diagnosis",
      "Medication and dietary advice",
      "Minimally invasive procedures",
      "Post-treatment care and prevention tips",
    ],
  },
  infertility: {
    title: "Infertility Treatment",
    description:
      "Comprehensive care and treatment for male and female infertility issues.",
    image: serviceImages.infertility.primary,
    content: [
      "Detailed fertility assessment for couples",
      "Hormonal treatments and ovulation induction",
      "Guidance on lifestyle and nutritional factors",
      "Supportive care throughout the treatment process",
    ],
  },
  womenHealth: {
    title: "Women’s Diseases (Gynecological Disorders)",
    description:
      "Specialized care for a range of gynecological disorders and women's health issues.",
    image: serviceImages.womenHealth.primary,
    content: [
      "Diagnosis and treatment of common gynecological problems",
      "Management of menstrual disorders",
      "Preventive care and health check-ups",
      "Confidential and compassionate consultations",
    ],
  },
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
      <SEO
        title={`${service.title} | Sanjeevani Aarogya Kendra`}
        description={service.description}
        canonical={process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/services/${id}` : undefined}
      />
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
                fill
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(serviceDetails).map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}
