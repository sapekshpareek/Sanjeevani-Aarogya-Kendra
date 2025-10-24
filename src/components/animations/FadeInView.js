import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function FadeInView({ children, delay = 0 }) {
  return (
    <Box
      sx={{
        animation: `${fadeIn} 0.6s ease-out forwards`,
        animationDelay: `${delay}s`,
        opacity: 0,
      }}
    >
      {children}
    </Box>
  );
}
