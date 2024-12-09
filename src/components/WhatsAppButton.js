import { IconButton, Tooltip, Zoom } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919131170076", "_blank");
  };

  return (
    <Tooltip
      title="Chat with us on WhatsApp"
      TransitionComponent={Zoom}
      placement="left"
    >
      <IconButton
        onClick={handleWhatsAppClick}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "#25D366",
          color: "white",
          "&:hover": {
            backgroundColor: "#128C7E",
          },
          width: 56,
          height: 56,
          boxShadow: 3,
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 32 }} />
      </IconButton>
    </Tooltip>
  );
}
