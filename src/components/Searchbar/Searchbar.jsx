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
  width: '100%',
  justifyContent: 'center',
  [theme.breakpoints.up("sm")]: {
    display: 'flex',
  }
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: 'white',
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&:hover": {
      borderWidth: '0px',
    },
  },
}));


const Searchbar = ({ setShowModels }) => {
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
        width: 'auto',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <SmallScreenBox width={'95%'}>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'column', gap: 1 }}>
          <TextField
            placeholder='Enter location or use GPS'
            variant='outlined'
            value={inputs.location}
            name='location'
            fullWidth
            onChange={handleInputs}
            onFocus={() => handleFieldClick('location')}
            // onBlur={() => handleFieldClick('')}
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
            value={inputs.searchValue}
            name='searchValue'
            fullWidth
            onChange={handleInputs}
            onFocus={() => handleFieldClick('searchValue')}
            // onBlur={() => handleFieldClick('')}
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

      <LargeScreenBox>
          <Box           
            sx={{flex: 1}}
          >
          <CustomTextField
            placeholder='Enter location or use GPS'
            variant='outlined'
            value={inputs.location}
            name='location'
            fullWidth
            // focused 
            onChange={handleInputs}
            onFocus={() => handleFieldClick('location')}
            // onBlur={()=> handleFieldClick('')}          

            sx={{
              backgroundColor: 'white',
              borderWidth: '0px',
              borderTopLeftRadius: '12px',
              borderBottomLeftRadius: '12px',
              ":hover":{borderWidth: '0px'}
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
          </Box>

          <Box
            sx={{flex: 2}}>
          <CustomTextField
            placeholder='Search for the restaurant or a dish'
            variant='outlined'
            value={inputs.searchValue}
            name='searchValue'
            fullWidth
            onChange={handleInputs}
            onFocus={() => handleFieldClick('searchValue')}
            // onBlur={()=> handleFieldClick('')}
            sx={{
              backgroundColor: 'white',
              borderWidth: '0px',             
              borderTopRightRadius: '12px',
              borderBottomRightRadius: '12px',
              ":hover":{borderWidth: '0px'}
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

{/* <TextField
      variant="outlined"
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
        },
        '& .MuiOutlinedInput-input': {
          '&:hover': {
            backgroundColor: 'transparent', // Ensure no hover effect
          },
        },
      }}
      placeholder="No border on hover"
    /> */}
    </Box>
  );
}

export default Searchbar;
