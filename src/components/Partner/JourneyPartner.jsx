
import { Box, Button, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const JourneyPartner = () => {
  return (
    <Box sx={{ marginBottom: "2rem" }}>
      <Box
        sx={{
          height: { xs: "28%", sm: "32%", md: "37%", lg: "42%" },
          marginInline: {
            xs: "1rem",
            sm: "2rem",
            md: "3rem",
            lg: "7rem",
            xl: "5rem",
          },
          backgroundImage: `url(https://www.zomato.com/partner-with-us/static/media/StartJourney.7cfaaf0a.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            padding: { xs: "1rem", sm: "2rem" },
            color: "white",
            textAlign: { xs: "center", sm: "left" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "24px", md: "32px", lg: "36" },
              lineHeight: { xs: "32px", sm: "40px", md: "48px" },
              marginBottom: { xs: "0.5rem", sm: "1rem" },
            }}
          >
            Start your journey with Zomato
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18", lg: "20" },
              lineHeight: { xs: "22px", sm: "30px", md: "50px" },
              marginBottom: { xs: "0.5rem", sm: "1rem" },
            }}
          >
            Create your restaurant page and register for online ordering
          </Typography>
          <Button
            variant="contained"
            endIcon={<ArrowRightIcon style={{ fontSize: "1.6rem" }} />} 
            sx={{
              backgroundColor: "#0366D6",
              fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1.2rem" }, 
              textTransform: "none",
              minWidth: { xs: "100px", sm: "120px", md: "140px" ,lg:"160px"}, 
            }}
          >
            Start now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default JourneyPartner;
