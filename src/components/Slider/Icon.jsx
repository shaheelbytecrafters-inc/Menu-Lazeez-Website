// import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";

// Custom styles for the footer
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
}));

const Description = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

function Icon() {
  return (
    <FooterContainer>
      <Typography variant="h6" component="h2" align="center">
        How Does It Work
      </Typography>
      <Grid container spacing={4} justifyContent="center" mt={2}>
        <Grid item xs={12} sm={6} md={3}>
          <IconWrapper>
            <IconButton>
              <HomeIcon fontSize="large" />
            </IconButton>
            <Description variant="body2">Home</Description>
          </IconWrapper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <IconWrapper>
            <IconButton>
              <SearchIcon fontSize="large" />
            </IconButton>
            <Description variant="body2">Search</Description>
          </IconWrapper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <IconWrapper>
            <IconButton>
              <NotificationsIcon fontSize="large" />
            </IconButton>
            <Description variant="body2">Notifications</Description>
          </IconWrapper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <IconWrapper>
            <IconButton>
              <AccountCircleIcon fontSize="large" />
            </IconButton>
            <Description variant="body2">Profile</Description>
          </IconWrapper>
        </Grid>
      </Grid>
    </FooterContainer>
  );
}

export default Icon;
