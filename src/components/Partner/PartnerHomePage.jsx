import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {  useNavigate } from "react-router-dom";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const PartnerHomePage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate=useNavigate()

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  const handleClick=()=>{
    navigate("/")
  }
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url('https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: {
            xs: "30vh",
            md: "30vh",
            lg: "40vh",
            xl: "60vh",
          },
          width: "100vw",
          color: "white",
          position: "relative",
          paddingBottom: "1rem",
        }}
      >
        {/* Navbar containing Lazeez and Avatar */}
        <Box
          sx={{
            backgroundColor: {
              xs: "white",
              sm: "transparent",
              md: "transparent",
            },
            color: {
              xs: "black",
              sm: "white",
              lg: "white",
              md: "white",
            },
            paddingTop: "10px",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              marginInline: { xs: "1rem", sm: "2rem", md: "5rem", lg: "10rem" },
              borderBottom: {
                xs: "1px solid #d1d0cd", 
                sm: "none", 
              },
              marginBottom: "5px",
            }}
          >
            {/* Lazeez branding */}
            <Stack>
              <Typography
                variant="h5"
                component="h1"
                // color="white"
                lineHeight="1.2rem"
                fontFamily="Poppins"
                fontWeight="bold"
                fontSize={{ xs: "1.2rem", sm: "1.5rem", md: "2rem" }}
                sx={{
                  color: {
                    xs: "black",
                    sm: "white",
                    lg: "white",
                    md: "white",
                  },
                  marginTop: {
                    xs: "1rem",
                    sm: "1rem",
                    lg: "0rem",
                    md: "0rem",
                  },
                }}
                onClick={()=>handleClick()}
              >
               Lazeez
              </Typography>
              <Typography
                fontSize={{ xs: "0.7rem", sm: "0.9rem" }}
                fontFamily="Poppins"
                fontWeight="bold"
                sx={{
                  color: {
                    xs: "black",
                    sm: "white",
                    lg: "white",
                    md: "white",
                  },
                }}
              >
                for Business
              </Typography>
            </Stack>

            {/* Avatar and Advertisement Button */}
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button
                variant="text"
                sx={{
                  fontSize: { xs: "0.5rem", sm: "0.7rem", lg: "1.1rem" },
                  color: "white",
                  textTransform: "none",
                  ":hover": {
                    backgroundColor: "transparent",
                  },
                  display: { xs: "none", sm: "inline-flex" },
                  color: {
                    xs: "black",
                    sm: "white",
                    lg: "white",
                    md: "white",
                  },
                }}
              >
                Advertisement
              </Button>
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                  color="primary"
                  sx={{
                    padding: { xs: "0.3rem", sm: "0.5rem" },
                    display: { xs: "none", sm: "flex" },
                  }}
                >
                  <AccountCircleIcon
                    sx={{ fontSize: "2.3rem", color: "white" }}
                  />
                </IconButton>
                <Typography
                  variant="body2"
                  // color="white"
                  fontSize={{ xs: "0.7rem", sm: "0.9rem" }}
                  display={{ xs: "none", sm: "block" }}
                  sx={{
                    color: {
                      xs: "black",
                      sm: "white",
                      lg: "white",
                      md: "white",
                    },
                  }}
                >
                  +123-456-7890
                </Typography>
                <hr></hr>
              </Stack>
            </Stack>
          </Stack>

          {/* Hamburger icon for smaller screens */}
          <Box
            sx={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              display: { xs: "flex", sm: "none" },
              zIndex: 1300,
              color: "black",
            }}
          >
            <IconButton color="inherit" onClick={toggleDrawer(!drawerOpen)}>
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
          <Drawer
            anchor="top"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                height: "100vh",
                overflow: "hidden",
                position: "fixed",
                backgroundColor: "white",
              },
            }}
          >
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                position: "relative",
              }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              {/* Close button inside the drawer */}
              <IconButton
                color="inherit"
                onClick={toggleDrawer(false)}
                sx={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  zIndex: 1400,
                }}
              >
                <CloseIcon />
              </IconButton>
              <List>
                <ListItem>
                  <ListItemText primary="Advertisement" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="+123-456-7890" />
                </ListItem>
              </List>
            </Box>
          </Drawer>
          <Box
            sx={{
              display: { xs: "flex", sm: "none" }, 
              alignItems: "center",
              justifyContent: "center", 
              marginTop: "0.5rem", 
              paddingBottom: "7px",
              color: "white",
            }}
          >
            {/* Phone Icon with Light Blue Background */}
            <Box
              sx={{
                backgroundColor: "#E3F2FD", 
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0.3rem",
              }}
            >
              <PhoneInTalkIcon
                sx={{
                  color: "#2196F3", 
                  fontSize: {
                    xs: "0.8rem",
                    sm: "0.9rem",
                  },
                }}
              />
            </Box>

            {/* Phone Text */}
            <Typography
              sx={{
                color: "black",
                fontSize: {
                  xs: "0.8rem",
                  sm: "0.9rem",
                },
                marginLeft: "0.5rem", 
                textAlign: "center", 
              }}
            >
              Need help? Contact{" "}
              <span style={{ color: "#2196F3" }}>+91 97-38-38-38-38</span>
            </Typography>
          </Box>
        </Box>

        {/* Main content */}
        <Box
          sx={{
            marginInline: { xs: "1rem", sm: "2rem", md: "5rem", lg: "15rem" },
            textAlign: {
              xs: "center",
              sm: "left",
              md: "left",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.5rem",
                lg: "40px",
              },
              paddingTop: "",
            }}
            fontWeight="500"
          >
            Partner with Lazeez
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "1.2rem",
                sm: "1.5rem",
                md: "2rem",
                lg: "40px",
              },
            }}
            fontWeight="500"
            lineHeight="36px"
          >
            at <span style={{ fontWeight: "bold" }}>0% commission </span> for
            the 1st month!
          </Typography>
          <Typography
            // fontSize="16px"
            sx={{
              lineHeight: {
                xs: "24px",
                sm: "30px",
                md: "40px",
                lg: "50px",
                xl: "60px",
              },
              marginTop: {
                xs: "1rem",
                sm: "1.5rem",
                md: "2rem",
                lg: "1rem",
                xl: "1rem",
              },
              marginBottom: {
                xs: "2rem", 
                sm: "2rem",
                md: "2rem",
                lg: "1rem",
                xl: "1rem",
              },
              fontSize: {
                xs: "16px",
                sm: "16px",
                md: "16px",
                lg: "16px",
              },
              marginInline: {
                xs: "12px",
                sm: "12px",
              },
            }}
          >
            And get ads worth INR 1500. Valid for new restaurant partners in
            select cities.
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, 
              gap: { xs: "1rem", sm: "1rem" }, 
              columnGap: "1rem",
              "& > *": {
                flex: 1,
                width: { xs: "100%", sm: "auto" },
              },
              marginBottom: {
                xs: "1rem",
              },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#2196F3",
                color: "white",
                textTransform: "none",
                fontSize: { xs: "0.8rem", sm: "1rem" },
                padding: { xs: "0.7rem", sm: "0.7rem" },
                ":hover": {
                  backgroundColor: "#2196F3", 
                  opacity: 1,
                },
              }}
            >
              Register your restaurant
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "white",
                color: "black",
                backgroundColor: "white",
                textTransform: "none",
                fontSize: { xs: "0.8rem", sm: "1rem" },
                padding: { xs: "0.7rem", sm: "0.7rem" },
                ":hover": {
                  borderColor: "white", 
                  color: "black", 
                  backgroundColor: "white", 
                  opacity: 1, 
                },
              }}
            >
              View your existing restaurant
            </Button>
          </Box>
          <Typography
            lineHeight="2.4rem"
            fontSize="14px"
            sx={{
              paddingBottom: {
                xs: "1rem",
                sm: "1rem",
                md: "2rem",
                lg: "4rem",
                xl: "4rem",
              },
              display: { xs: "none", sm: "flex" },
            }}
          >
            Need help? Contact +91 97-38-38-38-38
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          marginInline: { xs: "1rem", sm: "2rem", md: "5rem", lg: "15rem" },
          marginTop: "-4%",
          paddingInline: "2rem",
          backgroundColor: "white",
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
          textAlign: "center",
          paddingBlock: "4rem",
          borderRadius: "6px",
        }}
      >
        <Typography
          marginBottom="1rem"
          fontSize="30px"
          fontWeight="500"
        >
          Get started with online ordering
        </Typography>
        <Typography
          fontSize="16px"
          marginBottom="2rem"
          color="rgb(105,105,105)"
        >
          Please keep the documents ready for a smooth signup
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "16px",
              }}
            >
              <CheckCircleIcon sx={{ color: "#3AB757", fontSize: "16px" }} />
              <Typography>FSSAI license copy (apply now)</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "16px",
              }}
            >
              <CheckCircleIcon sx={{ color: "#3AB757", fontSize: "16px" }} />
              <Typography>PAN card copy</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "16px",
              }}
            >
              <CheckCircleIcon sx={{ color: "#3AB757", fontSize: "16px" }} />
              <Typography>Regular GSTIN (apply now)</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "16px",
              }}
            >
              <CheckCircleIcon sx={{ color: "#3AB757", fontSize: "16px" }} />
              <Typography>Bank account details</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "16px",
              }}
            >
              <CheckCircleIcon sx={{ color: "#3AB757", fontSize: "16px" }} />
              <Typography>Your restaurant menu</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "16px",
              }}
            >
              <CheckCircleIcon sx={{ color: "#3AB757", fontSize: "16px" }} />
              <Typography>Dish images for top 5 items</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PartnerHomePage;
