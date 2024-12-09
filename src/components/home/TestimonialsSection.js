import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    comment:
      "Dr. Pandey's treatment for my vitiligo showed remarkable results. His approach is very professional and caring.",
    image: "/images/testimonials/patient1.jpg",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    comment:
      "I had been struggling with psoriasis for years. The treatment at Sanjeevni Arogya Kendra has been life-changing.",
    image: "/images/testimonials/patient2.jpg",
  },
  {
    name: "Amit Patel",
    rating: 5,
    comment:
      "Excellent care and treatment. The staff is very supportive and Dr. Pandey explains everything clearly.",
    image: "/images/testimonials/patient3.jpg",
  },
];

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ py: 8, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Patient Testimonials
        </Typography>
        <Box sx={{ mt: 6 }}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} sx={{ px: 2 }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Avatar src={testimonial.image} alt={testimonial.name} />
                      <Box sx={{ ml: 2 }}>
                        <Typography variant="h6">{testimonial.name}</Typography>
                        <Rating
                          value={testimonial.rating}
                          readOnly
                          size="small"
                        />
                      </Box>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      "{testimonial.comment}"
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
}
