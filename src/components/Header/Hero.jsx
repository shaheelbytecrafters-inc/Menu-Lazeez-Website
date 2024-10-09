import { Box, Typography } from "@mui/material";
import NavBarHero from "../../../src/assets/images/Home.jpg";

const Hero = () => {
  return (
    <Box
      
      sx={{
        width: "100vw", 
        minHeight: "100vh", 
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${NavBarHero})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: 0,
        padding: 0,
        // overflow: "hidden",
        // bgcolor:"Blue"
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 5%",
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            textAlign: "left",
            gap: "10px",
            flex: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 40, sm: 70 },
              fontFamily: "Poppins, sans-serif",
              color: "black",
              fontStyle: "italic",
              fontWeight: "900",
            }}
          >
            MenuLazeez
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              color: "black",
              fontSize: { xs: 25, sm: 35 },
              fontWeight: "bold",
              fontFamily:"Playwrite DE Grund, cursive"
            }}
            
          >
            Bringing the Best Bites to Your Doorstep.
          </Typography>
        </Box>

        {/* Right Circular Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
