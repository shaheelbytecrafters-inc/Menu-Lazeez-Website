// import React from 'react';
import { Box } from '@mui/material';
import Hero from '../components/Header/Hero';
import CardSlider from '../components/Slider/CardSlider';
import Icon from '../components/Slider/Icon';

const HomePage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
    >
    <Hero />
    <CardSlider/>
    <Icon/>
    </Box>
  );
};

export default HomePage;
