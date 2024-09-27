// import React from 'react';
import { Box } from '@mui/material';
import Hero from '../components/Header/Hero';
import CardSlider from '../components/Slider/CardSlider';
// import HomePageCard from './HomePageCard';
import HomePageCardCalling from './HomePageCardCalling';
// import IconComponent from '../components/Slider/IconComponent';

const HomePage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
    >
    <Hero />
    <CardSlider/>
    {/* <IconComponent/> */}
    <HomePageCardCalling/>
    
    </Box>
  );
};

export default HomePage;
