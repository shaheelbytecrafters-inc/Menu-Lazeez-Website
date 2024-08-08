import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar'; 
import Searchbar from '../Searchbar/Searchbar';

const Header = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://wallpaperaccess.com/full/767048.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw', 
        height: '60vh', 
        position: 'relative' 
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
        display:'flex',
        justifyContent: 'center',
      }}
      >
        <Searchbar />
      </Box>
    </Box>
  );
};

export default Header;
