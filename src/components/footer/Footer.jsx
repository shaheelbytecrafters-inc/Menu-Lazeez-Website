import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import Flag from "react-world-flags";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import {
  Box,
  Typography,
  Select,
  MenuItem,
  Grid,
  Stack,
  Button,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
  Apple,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      boxSizing={"border-box"}
      px={"3px"}
      bgcolor={"#f8f8f8"}
    >
      <Box
        sx={{
          pt: "50px",
          px: { xs: "5px", md: "50px" },
          textAlign: "center",
          color: "#666",
          maxWidth: "1115px",
          width: "100%",
        }}
      >
        {/* Header with Dropdowns */}
        <Box
          sx={{
            // display: "flex",
            // justifyContent: "space-between",
            // alignItems: {
            //   xs: "flex-start", // Align items to the start (left) on small screens
            //   sm: "center", // Center align on larger screens
            // },
            py: "10px",
            textAlign: "left",
            flexDirection: {
              xs: "column", // For mobile screens, make it a column
              sm: "row", // For small and larger screens, make it a row
            },
            gap: "16px", // Add some space between the dropdowns on mobile
          }}
        >
          {/* Headline */}
          <Typography
            variant="h4"
            sx={{
              color: "black",
              fontWeight: "700",
              fontFamily: "poppins",
            }}
          >
            MenuLazeez
          </Typography>

          {/* Footer Links */}
          <Grid pt={"40px"}>
            <Stack
              sx={{
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <Grid
                justifyContent={"space-between"}
                container
                spacing={0}
                sx={{
                  margin: "0 auto",
                  width: { xs: "100%", md: "80%" },
                }}
              >
                {/* Rest of the footer remains unchanged */}

                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={2}
                  textAlign={"left"}
                  paddingLeft={"-10px"}
                  paddingBottom={"10px"}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#333",
                      marginBottom: "5px",
                      fontSize: "15px",
                      fontWeight: "400",
                    }}
                  >
                    ABOUT RESTRO
                  </Typography>
                  <Box
                    component="ul"
                    sx={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      fontSize: "14px",
                      fontFamily: "poppins",
                      "&:hover": {
                        color: "#1C1C1C",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {[
                      "Who we are",
                      "Blog",
                      "Work with us",
                      "Investor Relation",
                      "Report Fraud",
                      "Press Kit",
                      "Contact Us",
                    ].map((item, index) => (
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

                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={2}
                  textAlign={"left"}
                  paddingLeft={"-10px"}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#333",
                      marginBottom: "5px",
                      fontWeight: "400",
                      fontFamily: "poppins",
                      fontSize: "16px",
                    }}
                  >
                    RESTROVERSE
                  </Typography>
                  <Box
                    component="ul"
                    sx={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      fontSize: "14px",
                      fontFamily: "poppins",
                      "&:hover": {
                        color: "#1C1C1C",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {[
                      "Restro",
                      "Blinkit",
                      "Feeding India",
                      "Hyperpure",
                      "Restro Live",
                      "Restroland",
                      "Weather Union",
                    ].map((item, index) => (
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

                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={2}
                  textAlign={"left"}
                  paddingLeft={"-10px"}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#333",
                      marginBottom: "5px",
                      fontWeight: "400",
                      fontFamily: "poppins",
                      fontSize: "16px",
                    }}
                  >
                    FOR RESTAURANTS
                  </Typography>
                  <Box
                    component="ul"
                    sx={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      fontSize: "14px",
                      fontFamily: "poppins",
                      "&:hover": {
                        color: "#1C1C1C",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {["Partner with us", "Apps For You"].map((item, index) => (
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

                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={2}
                  textAlign={"left"}
                  paddingLeft={"-10px"}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#333",
                      marginBottom: "5px",
                      fontWeight: "400",
                      fontFamily: "poppins",
                      fontSize: "16px",
                    }}
                  >
                    LEARN MORE
                  </Typography>
                  <Box
                    component="ul"
                    sx={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      fontSize: "14px",
                      fontFamily: "poppins",
                      "&:hover": {
                        color: "#1C1C1C",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {["Privacy", "Security", "Terms", "Sitemap"].map(
                      (item, index) => (
                        <Box
                          component="li"
                          key={index}
                          sx={{ marginBottom: "10px", fontWeight: "300" }}
                        >
                          {item}
                        </Box>
                      )
                    )}
                  </Box>
                </Grid>
              </Grid>

              <Stack
                sx={{
                  width: { xs: "100%", md: "20%" },
                  flexDirection: { xs: "column-reverse", md: "column" },
                }}
              >
                <Stack direction={"column"}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#333",
                      fontWeight: "400",
                      fontFamily: "poppins",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                  >
                    SOCIAL LINKS
                  </Typography>
                  <Box
                    spacing={0}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingLeft: "30px",
                      mt: "10px",
                      mb: "15px",
                    }}
                  >
                    <Facebook sx={{ color: "black", marginRight: "5px" }} />
                    <Twitter sx={{ color: "black", marginRight: "5px" }} />
                    <Instagram sx={{ color: "black", marginRight: "5px" }} />
                    <LinkedIn sx={{ color: "black", marginRight: "5px" }} />
                    <YouTube sx={{ color: "black", marginRight: "5px" }} />
                  </Box>
                </Stack>
                <Stack
                  sx={{
                    width: { xs: "100%", md: "70%" },
                    marginLeft: { md: "25%" },
                    flexDirection: { xs: "row", md: "column" },
                    justifyContent: { xs: "space-around", md: "" },
                    alignItems: "center",
                    paddingBlock: "10px",
                    marginBottom: {
                      xs: "20px", // Apply 17px left margin on extra small screens
                      sm: "0px", // No left margin on small screens and above
                    },
                  }}
                ></Stack>
              </Stack>
            </Stack>
          </Grid>

          <hr />

          {/* Footer Bottom */}
          <Box
            sx={{
              marginTop: "20px",
              fontSize: "14px",
              color: "#aaa",
              paddingBottom: "30px",
              fontFamily: "poppins",
            }}
          >
            <Typography sx={{ textAlign: "center" }}>
              © 2024 Lazeez. All Rights Reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
