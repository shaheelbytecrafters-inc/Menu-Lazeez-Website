import React, { useState } from 'react';
import { Box, TextField, InputAdornment, Button, Hidden } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const SearchBar = () => {

  const [inputs, setInputs] = useState({
    location: '',
    searchInput: ''
  })

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
        maxWidth: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 15,
        gap: 2
      }}
      mx={2}
    >
      <Hidden mdUp>
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
            onChange={(e) => setSearchInput({ ...inputs, searchInput: e.target.value })}
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
      </Hidden>

      <Hidden smDown>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', }}>
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
            onChange={(e) => setSearchInput({ ...inputs, searchInput: e.target.value })}
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
      </Hidden>
    </Box>
  );
}

export default SearchBar;
