import { Box, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SmallScreenSearchBar = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box
            display={{ xs: 'flex', sm: 'none' }}
            py={'4px'}
            position={'sticky'}
            top={0}
            zIndex={10}
            margin={'10px'}
            height={'46px'}
            width={'486px'}
          >
            <TextField
              placeholder='Search for the restaurant or a dish'
              variant='outlined'
              name='searchValue'
              fullWidth
              sx={{
                bgcolor: 'white',
                border: '1px solid gray',
                borderRadius: "30px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  height: '100%',
                  padding: '0 14px',
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  '& input': {
                    padding: 0,
                    height: '100%',
                    lineHeight: '46px',
                  },
                  '& input::placeholder': {
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    verticalAlign: 'middle',
                  },
                },
              }}
            />
          </Box>
        </Box>
  )
}

export default SmallScreenSearchBar
