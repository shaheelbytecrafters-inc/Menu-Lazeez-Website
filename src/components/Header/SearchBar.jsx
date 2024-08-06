import React, { useState } from 'react';
import { Box, TextField, InputAdornment, Button, Hidden, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const SearchBar = () => {

  const [inputs, setInputs] = useState({
    location: '',
    searchInput: ''
  })

  const SmallScreenBox = styled(Box)(({ theme }) => ({
    display: 'block',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up("sm")]: {
      display: 'none',
    }
  }))

  const LargeScreenBox = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
      display: 'flex'
    }
  }))


  const handleGpsClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude}, Long: ${longitude}`);
        },
        (error) => {
          console.error('Error obtaining GPS location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 15,
      }}
      mx={2}
    >
      <SmallScreenBox width={'100%'}>
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
            value={inputs.searchInput}
            onChange={(e) => setInputs({ ...inputs, searchInput: e.target.value })}
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
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: '0px', justifyContent: 'center'}} mx={15}>
          <TextField
            placeholder='Enter location or use GPS'
            variant='outlined'
            value={inputs.location}
            onChange={(e) => setInputs({ ...inputs, location: e.target.value })}
            sx={{
              backgroundColor: 'white',
              borderRadius: "10px",
              flex: 1,
              maxWidth: '250px',
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
            flex={2}
            value={inputs.searchInput}
            onChange={(e) => setInputs({ ...inputs, searchInput: e.target.value })}
            sx={{
              backgroundColor: 'white',
              borderRadius: "10px",
              marginLeft: '10px',
              marginRight: '10px',
              flex: 2,
              maxWidth: '600px'
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

export default SearchBar;
