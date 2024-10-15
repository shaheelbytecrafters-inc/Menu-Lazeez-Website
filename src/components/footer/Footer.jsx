import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";

const footerLinks = {
  "ABOUT RESTRO": [
    "Who we are",
    "Blog",
    "Work with us",
    "Investor Relation",
    "Report Fraud",
    "Press Kit",
    "Contact Us",
  ],
  RESTROVERSE: [
    "Restro",
    "Blinkit",
    "Feeding India",
    "Hyperpure",
    "Restro Live",
    "Restroland",
    "Weather Union",
  ],
  "FOR RESTAURANTS": ["Partner with us", "Apps For You"],
  "LEARN MORE": ["Privacy", "Security", "Terms", "Sitemap"],
};

const socialLinks = [
  { icon: <Facebook sx={{ color: "black", marginRight: "5px" }} /> },
  { icon: <Twitter sx={{ color: "black", marginRight: "5px" }} /> },
  { icon: <Instagram sx={{ color: "black", marginRight: "5px" }} /> },
  { icon: <LinkedIn sx={{ color: "black", marginRight: "5px" }} /> },
  { icon: <YouTube sx={{ color: "black", marginRight: "5px" }} /> },
];

const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      boxSizing="border-box"
      px="3px"
      bgcolor="#f8f8f8"
      pt="50px"
      pb="30px"
    >
      <Box
        sx={{
          textAlign: "center",
          color: "#666",
          maxWidth: "1115px",
          width: "100%",
        }}
      >
        {/* Header with Logo */}
        <Typography
          variant="h4"
          sx={{
            color: "black",
            fontWeight: "700",
            fontFamily: "Poppins",
            mb: "40px",
            textAlign:"left"
          }}
        >
          Lazeez
        </Typography>

        {/* Footer Links */}
        <Grid container spacing={0} justifyContent="space-between">
          {Object.entries(footerLinks).map(([title, links]) => (
            <Grid item xs={6} sm={6} md={2} key={title} textAlign="left">
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#333",
                  marginBottom: "5px",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                }}
              >
                {title}
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  "&:hover": {
                    color: "#1C1C1C",
                    cursor: "pointer",
                  },
                }}
              >
                {links.map((item, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{ marginBottom: "10px", fontWeight: "300" }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Social Links */}
          <Grid item xs={6} sm={6} md={2} textAlign="center">
            <Typography
              variant="subtitle1"
              sx={{
                color: "#333",
                fontWeight: "400",
                fontFamily: "Poppins",
                fontSize: "16px",
                mb: "10px",
                textAlign:"center"
              }}
            >
              SOCIAL LINKS
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                mt: "10px",
                mb: "15px",
              }}
            >
              {socialLinks.map((link, index) => (
                <span key={index}>{link.icon}</span>
              ))}
            </Box>
          </Grid>
        </Grid>

        <hr />

        {/* Footer Bottom */}
        <Typography
          sx={{
            marginTop: "20px",
            fontSize: "14px",
            color: "#aaa",
            fontFamily: "Poppins",
            textAlign: "center",
          }}
        >
          © 2024 Lazeez. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
