import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{ bgcolor: "background.paper", py: 2, textAlign: "center" }}
      
      >
        <Typography variant="body2" color="text.secondary">
          © 2024 Made with ❤️ by Shalini
        </Typography>
      </Box>
    </>
  );
};
export default Footer;
