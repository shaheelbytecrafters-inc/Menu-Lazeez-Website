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
  backgroundColor: "#fae6e6", 
  padding: theme.spacing(4),
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundImage:
    'url("https://www.transparenttextures.com/patterns/smoke.png")',
  backgroundSize: "cover",
}));

const IconWrapper = styled(Box)(() => ({
  textAlign: "center",
}));

const Description = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  fontWeight: "bold",
  fontSize: "1.2rem", 
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#D32F2F", 
  color: theme.palette.common.white, 
  borderRadius: "50%",
  padding: theme.spacing(2), 
  boxShadow: "0px 4px 10px rgba(9, 7, 7, 0.8)",
  "&:hover": {
    backgroundColor: "#B71C1C", 
  },
}));

function IconComponent() {
  return (
    <FooterContainer>
      <Typography
        variant="h4"
        sx={{
          fontSize: {
            xs: "1.3rem", // Smaller font size on extra-small screens
            sm: "1.4rem", // Medium font size on small screens
            md: "1.5rem", // Larger font size on medium screens
            lg: "2rem", // Default size on large screens and above
          },
          pl: {
            xs: 2, // Padding-left: 2 (16px) on extra-small screens
            sm: 4, // Padding-left: 4 (32px) on small screens
            md: 6, // Padding-left: 6 (48px) on medium screens
            lg: 8, // Padding-left: 8 (64px) on large screens and above
          },
          fontWeight: "bold", // Apply bold font weight
          textAlign: "center",
        }}
      >
        How It works
      </Typography>

      <Grid container spacing={4} justifyContent="center" mt={2}>
        <Grid item xs={12} sm={6} md={3}>
          <IconWrapper>
            <StyledIconButton>
              <HomeIcon fontSize="large" />
            </StyledIconButton>
            <Description variant="body2">Home</Description>
            <Typography variant="body2">
              Description: We are at home page
            </Typography>
          </IconWrapper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <IconWrapper>
            <StyledIconButton>
              <SearchIcon fontSize="large" />
            </StyledIconButton>
            <Description variant="body2">Search</Description>
            <Typography variant="body2">
              Description: We are at home page
            </Typography>
          </IconWrapper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <IconWrapper>
            <StyledIconButton>
              <NotificationsIcon fontSize="large" />
            </StyledIconButton>
            <Description variant="body2">Notifications</Description>
            <Typography variant="body2">
              Description: We are at home page
            </Typography>
          </IconWrapper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <IconWrapper>
            <StyledIconButton>
              <AccountCircleIcon fontSize="large" />
            </StyledIconButton>
            <Description variant="body2">Profile</Description>
            <Typography variant="body2">
              Description: We are at home page
            </Typography>
          </IconWrapper>
        </Grid>
      </Grid>
    </FooterContainer>
  );
}

export default IconComponent;
