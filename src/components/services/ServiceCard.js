import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import OptimizedImage from "../common/OptimizedImage";
import { serviceImages } from "../../config/images";
import ErrorBoundary from "../common/ErrorBoundary";

export default function ServiceCard({ service }) {
  const router = useRouter();
  const images = serviceImages[service.id];

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box sx={{ height: 240, overflow: "hidden" }}>
        <ErrorBoundary>
          <OptimizedImage
            src={images.primary}
            fallbackSrc={images.fallback}
            alt={service.title}
            style={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </ErrorBoundary>
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {service.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {service.description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push(`/services/${service.id}`)}
          >
            Learn More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
