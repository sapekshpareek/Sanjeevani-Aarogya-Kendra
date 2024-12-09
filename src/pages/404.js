import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          textAlign: "center",
          gap: 4,
        }}
      >
        <Typography variant="h1" color="primary" sx={{ fontSize: "6rem" }}>
          404
        </Typography>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Page Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          We apologize, but the page you're looking for doesn't exist or has
          been moved.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => router.push("/")}
        >
          Return to Home
        </Button>
      </Box>
    </Container>
  );
}
