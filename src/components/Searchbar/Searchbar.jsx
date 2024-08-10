import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, TextField, InputAdornment, Button, Hidden, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const SmallScreenBox = styled(Box)(({ theme }) => ({
  display: 'block',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up("sm")]: {
    display: 'none',
  }
}));

const LargeScreenBox = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  [theme.breakpoints.up("sm") ]: {
    display: 'flex',
  }
}));

const StyledModel = styled(Box)({
  justifyContent: 'center',
  alignItems: 'center',
});

const Searchbar = ({setOpen}) => {
  
  const [inputs, setInputs] = useState({
    searchValue: '',
    location: ''
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
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

  useEffect(() => {
    if (inputs.searchValue !== '') {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [inputs.searchValue]);

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        mx: '0px',

      }}
      mx={2}
    >
      <SmallScreenBox width={'90%'}>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'column', gap: 1 }}>
          <TextField
            placeholder='Enter location or use GPS'
            variant='outlined'
            fullWidth
            value={inputs.location}
            onChange={(e) => setInputs({ ...inputs, location: e.target.value })}
            sx={{
              backgroundColor: 'white',
              borderRadius: "10px",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={handleGpsClick}
                    sx={{
                      minWidth: 'auto',
                      padding: 0
                    }}
                  >
                    <LocationOnIcon />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            placeholder='Search for the restaurant or a dish'
            variant='outlined'
            fullWidth
            value={inputs.searchValue}
            onChange={(e) => setInputs({ ...inputs, searchValue: e.target.value })}
            sx={{
              backgroundColor: 'white',
              borderRadius: "10px",
              marginLeft: '10px',
              marginRight: '10px'
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
      </SmallScreenBox>

      <LargeScreenBox width={'100%'}>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: '0px', justifyContent: 'center' }} mx={9}>
          <TextField
            placeholder='Enter location or use GPS'
            variant='outlined'
            value={inputs.location}
            name='location'
            onChange={handleInputs}

            sx={{
              backgroundColor: 'white',
              flex: 1,
              maxWidth: '250px',
              borderTopLeftRadius: '12px',
              borderBottomLeftRadius: '12px',
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={handleGpsClick}
                    sx={{
                      minWidth: 'auto',
                      padding: 0
                    }}
                  >
                    <LocationOnIcon />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            placeholder='Search for the restaurant or a dish'
            variant='outlined'
            value={inputs.searchValue}
            name='searchValue'
            onChange={handleInputs}
            sx={{
              backgroundColor: 'white',
              flex: 2,
              maxWidth: '600px',              
              borderTopRightRadius: '12px',
              borderBottomRightRadius: '12px'
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
