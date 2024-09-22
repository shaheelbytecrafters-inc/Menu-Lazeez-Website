
import { Box } from '@mui/material';
import Hero from '../components/Header/Hero';
import CardSlider from '../components/Slider/CardSlider';
import HomePageCardCalling from './HomePageCardCalling';

const HomePage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
    >
    <Hero />
    <CardSlider/>
    <HomePageCardCalling/>
    
    </Box>
  );
};

export default HomePage;
