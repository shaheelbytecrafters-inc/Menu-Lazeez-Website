import { Box } from '@mui/material';
import Navbar from './Navbar';
import MainSearchBar from '../Searchbar/MainSearchBar';
import HeroImage from '../../../public/HeroImage.jpeg'

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "60vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          marginTop: 1,
        }}
      >
        <Navbar />
      </Box>
      <Box
        sx={{
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <MainSearchBar />
      </Box>
    </Box>
  );
};

export default Hero;
