import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import MainSearchBar from '../Searchbar/MainSearchBar';

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/HeroImage.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '60vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1,
          marginTop: 1,
        }}
      >
        <Navbar />
      </Box>
      <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 1,
        marginBottom: 26
      }}
      >
      <MainSearchBar />
      </Box>
    </Box>
  );
};

export default Hero;
