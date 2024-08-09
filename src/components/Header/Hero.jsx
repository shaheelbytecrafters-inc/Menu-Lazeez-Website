import React, { useState, useTransition } from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar'; 
import Searchbar from '../Searchbar/Searchbar';
import SearchbarModel from '../Searchbar/SearchModel'

const Hero = () => {

  const [open, setOpen] = useState(false)

  return (
    <Box
      sx={{
        backgroundImage: 'url(https://wallpaperaccess.com/full/767048.jpg)',
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
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0, 
        left: 0,
        width: '100%',
        zIndex: 1,      
      }}
      >
        <Searchbar setOpen={setOpen}/>
      </Box>
        {open &&
          <SearchbarModel />
        }        
    </Box>
  );
};

export default Hero;
