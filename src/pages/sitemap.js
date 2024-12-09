import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import Link from "next/link";

export default function Sitemap() {
  const pages = [
    {
      category: "Main Pages",
      links: [
        { title: "Home", path: "/" },
        { title: "About Us", path: "/about" },
        { title: "Services", path: "/services" },
        { title: "Contact", path: "/contact" },
      ],
    },
    {
      category: "Services",
      links: [
        { title: "Vitiligo Treatment", path: "/services/vitiligo" },
        { title: "Psoriasis Treatment", path: "/services/psoriasis" },
        { title: "Skin Disease Treatment", path: "/services/skin-disease" },
        { title: "Obesity Management", path: "/services/obesity" },
        { title: "Women's Health", path: "/services/womens-health" },
      ],
    },
    {
      category: "Legal",
      links: [
        { title: "Privacy Policy", path: "/privacy-policy" },
        { title: "Terms & Conditions", path: "/terms" },
      ],
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom>
          Sitemap
        </Typography>
        {pages.map((section, index) => (
          <Box key={section.category} sx={{ mb: 4 }}>
            <Typography variant="h5" color="primary" gutterBottom>
              {section.category}
            </Typography>
            <List>
              {section.links.map((link) => (
                <ListItem
                  key={link.path}
                  component={Link}
                  href={link.path}
                  sx={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItemText primary={link.title} />
                </ListItem>
              ))}
            </List>
            {index < pages.length - 1 && <Divider sx={{ my: 2 }} />}
          </Box>
        ))}
      </Container>
    </Box>
  );
}
