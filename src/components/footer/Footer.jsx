import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import Flag from "react-world-flags";
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
  Android,
} from "@mui/icons-material";

const Footer = () => {
  const [optionOne, setOptionOne] = React.useState("");
  const [optionTwo, setOptionTwo] = React.useState("");

  const handleOptionOneChange = (event) => {
    setOptionOne(event.target.value);
  };

  const handleOptionTwoChange = (event) => {
    setOptionTwo(event.target.value);
  };

  return (
    <Box
    display="flex"
      flexDirection="column"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      boxSizing={'border-box'}
      px={"3px"}
      bgcolor={'#f8f8f8'}
    >

    <Box
      sx={{
        pt: "50px",
        px: { xs: "5px", md: "50px" },
        textAlign: "center",
        color: "#666",
        maxWidth:'1115px',
        width:'100%'
      }}
    >
      {/* Header with Dropdowns */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: {
            xs: "flex-start", // Align items to the start (left) on small screens
            sm: "center", // Center align on larger screens
          },
          padding: "10px",
          flexDirection: {
            xs: "column", // For mobile screens, make it a column
            sm: "row", // For small and larger screens, make it a row
          },
          gap: "16px", // Add some space between the dropdowns on mobile
        }}
      >
        {/* Headline */}
        <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
          Lazeez
        </Typography>

        {/* Dropdowns - Stack vertically on mobile */}
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "", // Stack vertically on extra-small screens (mobile)
              sm: "row", // Align horizontally on small and larger screens
            },
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "16px", // Space between the dropdowns
          }}
        >
          {/* First Dropdown */}
          <Select
            value={optionOne}
            onChange={handleOptionOneChange}
            displayEmpty
            sx={{ minWidth: 90 }}
          >
            <MenuItem
              value=""
              sx={{ padding: "0px 1px", display: "flex", alignItems: "center" }}
            >
              <Flag code="IN" style={{ width: 20, height: 15 }} />{" "}
              {/* Smaller icon with minimal margin */}
              <em>India</em>
            </MenuItem>
            <MenuItem
              value="uae"
              sx={{ padding: "2px 4px", display: "flex", alignItems: "center" }}
            >
               <Flag code="GB" style={{ width: 20, height: 15 }} />{" "}
              {/* Smaller icon with minimal margin */}
              UAE
            </MenuItem>
          </Select>

          {/* Second Dropdown */}
         <Select
  value={optionTwo}
  onChange={handleOptionTwoChange}
  displayEmpty
  sx={{ minWidth: 100 }}
  renderValue={(selected) => {
    if (selected === "") {
      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <LanguageIcon sx={{ fontSize: "large" }} /> {/* Icon only in select */}
          <em>English</em>
        </Box>
      );
    }

    if (selected === "optionA") {
      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <LanguageIcon sx={{ fontSize: "large" }} />
          English
        </Box>
      );
    }

    if (selected === "optionB") {
      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <LanguageIcon sx={{ fontSize: "large" }} />
          Hindi
        </Box>
      );
    }

    return selected;
  }}
>
  {/* Dropdown options without icons */}
  <MenuItem value="" sx={{ padding: "2px 4px" }}>
    <em>English</em>
  </MenuItem>
  <MenuItem value="optionA" sx={{ padding: "4px 8px" }}>
    English
  </MenuItem>
  <MenuItem value="optionB" sx={{ padding: "4px 8px" }}>
    Hindi
  </MenuItem>
</Select>

        </Box>
      </Box>

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
                sx={{ color: "#333", marginBottom: "5px", fontWeight: "bold" }}
              >
                ABOUT RESTRO
              </Typography>
              <Box
                component="ul"
                sx={{ listStyle: "none", padding: 0, margin: 0 }}
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
                  <Box component="li" key={index} sx={{ marginBottom: "10px" }}>
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
                sx={{ color: "#333", marginBottom: "5px", fontWeight: "bold" }}
              >
                RESTROVERSE
              </Typography>
              <Box
                component="ul"
                sx={{ listStyle: "none", padding: 0, margin: 0 }}
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
                  <Box component="li" key={index} sx={{ marginBottom: "10px" }}>
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
                sx={{ color: "#333", marginBottom: "5px", fontWeight: "bold" }}
              >
                FOR RESTAURANTS
              </Typography>
              <Box
                component="ul"
                sx={{ listStyle: "none", padding: 0, margin: 0 }}
              >
                {["Partner with us", "Apps For You"].map((item, index) => (
                  <Box component="li" key={index} sx={{ marginBottom: "10px" }}>
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
                sx={{ color: "#333", marginBottom: "5px", fontWeight: "bold" }}
              >
                LEARN MORE
              </Typography>
              <Box
                component="ul"
                sx={{ listStyle: "none", padding: 0, margin: 0 }}
              >
                {["Privacy", "Security", "Terms", "Sitemap"].map(
                  (item, index) => (
                    <Box
                      component="li"
                      key={index}
                      sx={{ marginBottom: "10px" }}
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
            <Stack
              direction={"column"}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: "#333", fontWeight: "bold" }}
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
            >
              <Button
                startIcon={<Apple />} // Adds an icon to the left
                sx={{
                  marginTop: "7px",
                  backgroundColor: "#213a4e", // Black background like App Store
                  color: "#fff", // White text color
                  px: "10px", // Control padding for the button
                  py: "10px",
                  textTransform: "none", // Prevents uppercase transformation
                  borderRadius: "5px", // Rounded corners
                  fontWeight: "bold", // Bold text
                  fontSize: "14px", // Font size for the text
                  "&:hover": {
                    backgroundColor: "#213a4e", // Darker shade on hover
                  },
                  marginLeft: {
                    xs: "50px", // Apply 17px left margin on extra small screens
                    sm: "0px", // No left margin on small screens and above
                  },
                }}
              >
                App Store
              </Button>

              <Button
                variant="contained"
                startIcon={<Android sx={{ fontSize: "30px" }} />} // Optional: Android icon for Google Play button
                sx={{
                  backgroundColor: "#213a4e", // Google Play green color
                  mt: { xs: "7px", md: "16px" },
                  color: "#fff", // White text color
                  px: "5px",
                  py: "10px",
                  textTransform: "none", // Keeps text case as it is
                  borderRadius: "5px", // Rounded corners
                  fontWeight: "bold", // Bold text
                  fontSize: "14px", // Font size for the text
                  "&:hover": {
                    backgroundColor: "#213a4e", // Darker shade of green on hover
                  },
                  marginRight: {
                    xs: "50px", // Apply 17px left margin on extra small screens
                    sm: "0px", // No left margin on small screens and above
                  },
                }}
              >
                Google Play
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Grid>

      <hr />

      {/* Footer Bottom */}
      <Box sx={{ marginTop: "20px", fontSize: "14px", color: "#aaa", paddingBottom:"30px" }}>
        <Typography>© 2024 Lazeez. All Rights Reserved.</Typography>
      </Box>
    </Box>
    </Box>
  );
};

export default Footer;