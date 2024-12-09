import { useState } from "react";
import { Box, Skeleton } from "@mui/material";

export default function OptimizedImage({
  src,
  fallbackSrc,
  alt,
  width = "100%",
  height = "100%",
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      setError(true);
    }
  };

  return (
    <Box position="relative" width={width} height={height}>
      {loading && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
        />
      )}
      {!error && (
        <img
          src={imgSrc}
          alt={alt}
          onLoad={() => setLoading(false)}
          onError={handleError}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: loading ? "none" : "block",
            ...props.style,
          }}
          {...props}
        />
      )}
    </Box>
  );
}
