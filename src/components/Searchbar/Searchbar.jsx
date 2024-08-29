import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, InputAdornment, Button, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MobileDrawer from './MobileDrawer';

const SmallScreenBox = styled(Box)(({ theme }) => ({
  display: 'block',
  alignItems: 'center',
  gap: '20px',
  width: '100%', // Ensures it takes up full width
  [theme.breakpoints.up("sm")]: {
    display: 'none',
  }
}));

const LargeScreenBox = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  width: '100%', // Ensures it takes up full width
  justifyContent: 'center',
  [theme.breakpoints.up("sm")]: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: 'white',
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
  "& .MuiInputBase-input::placeholder": {
    fontFamily: 'Poppins, sans-serif',
    color: 'black',
    fontWeight: '350',
    fontSize: '14px',
  },
}));

const Searchbar = ({ setShowModels }) => {
  const [inputs, setInputs] = useState({
    searchValue: '',
    location: ''
  });
  const [open, setOpen] = useState(false);

 
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };



  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleFieldClick = (name) => {
    setShowModels(name);
  };

  const handleGpsClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getLocationName(latitude, longitude);
        },
        (error) => {
          console.error("Error getting the location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const getLocationName = async (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

    try {
      const response = await axios.get(url);
      const data = response.data;
      if (data && data.display_name) {
        const address = data.display_name;
        setInputs(prevInputs => ({
          ...prevInputs,
          location: address
        }));
      } else {
        console.error("No results found.");
      }
    } catch (error) {
      console.error("Error fetching the location name: ", error);
    }
  };

  return (
    <Box
      sx={{
        width: '90%',
        maxWidth: '775px',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginInline:"5rem", // centers the box horizontally
        // bgcolor: "orange",
        // px: 2 // Padding on left and right to squeeze the content from both sides
      }}
    >

      <SmallScreenBox >
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'column', gap: 1 }}>
          <CustomTextField
            placeholder='Enter location or use GPS'
            variant='outlined'
            value={inputs.location}
            name='location'
            fullWidth
            onChange={handleInputs}
            onFocus={() => handleFieldClick('location')}
            onBlur={() => handleFieldClick('')}
            sx={{
              backgroundColor: 'white',
              borderRadius: "10px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Button
                    onClick={handleGpsClick}
                    sx={{
                      minWidth: 'auto',
                      padding: 0
                    }}
                  >
                    <LocationOnIcon sx={{ color: 'red' }} />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          <CustomTextField
            placeholder='Search for the restaurant or a dish'
            variant='outlined'
            value={inputs.searchValue}
            name='searchValue'
            fullWidth
            onChange={handleInputs}
            onFocus={() => handleFieldClick('searchValue')}
            onBlur={() => handleFieldClick('')}
            onClick={toggleDrawer(true)}
            sx={{
              backgroundColor: 'white',
              borderRadius: "10px",
              marginLeft: '10px',
              marginRight: '10px'
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'gray' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </SmallScreenBox>

      <MobileDrawer toggleDrawer={toggleDrawer} open={open} />

      <LargeScreenBox >
        <Box sx={{ flex: 1 }}>
          <CustomTextField
            placeholder='Enter location or use GPS'
            variant='outlined'
            value={inputs.location}
            name='location'
            fullWidth
            onChange={handleInputs}
            onFocus={() => handleFieldClick('location')}
            onBlur={() => handleFieldClick('')}
            sx={{
              backgroundColor: 'white',
              borderWidth: '0px',
              borderTopLeftRadius: '12px',
              borderBottomLeftRadius: '12px',
              ":hover": { borderWidth: '0px' }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Button
                    onClick={handleGpsClick}
                    sx={{
                      minWidth: 'auto',
                      padding: 0
                    }}
                  >
                    <LocationOnIcon sx={{ color: 'red' }} />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ flex: 2 }}>
          <CustomTextField
            placeholder='Search for the restaurant or a dish'
            variant='outlined'
            value={inputs.searchValue}
            name='searchValue'
            fullWidth
            onChange={handleInputs}
            onFocus={() => handleFieldClick('searchValue')}
            onBlur={() => handleFieldClick('')}
            sx={{
              backgroundColor: 'white',
              borderWidth: '0px',
              borderTopRightRadius: '12px',
              borderBottomRightRadius: '12px',
              ":hover": { borderWidth: '0px' }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </LargeScreenBox>
    </Box>
  );
}

export default Searchbar;