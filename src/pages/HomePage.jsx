import React from 'react';
import { Box } from '@mui/material';
import Hero from '../components/Header/Hero';

const HomePage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
    >
      <Hero />
    </Box>
  );
};

export default HomePage;
