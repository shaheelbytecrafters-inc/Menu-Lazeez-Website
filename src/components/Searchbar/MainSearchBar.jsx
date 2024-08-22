  // import React, { useState } from 'react'
  import Searchbar from './Searchbar'
  import SearchbarModel from './SearchModel'
  import { Box, styled } from '@mui/material'
  import LocationModel from './LocationModel'

  const SearchBox = styled(Box)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.up("sm")]: {
      width: '60%'
    }
  }));

  const MainSearchBar = () => {
    const [showModels, setShowModels] = useState('')
    return (
      <Box
        width="100%"
        height="100%"
        position="relative"
      >
        <SearchBox
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '777px',
            zIndex: 1,
            borderRadius: '12px'
          }}
        >
          <Searchbar setShowModels={setShowModels} />
        </SearchBox>
        <Box
          sx={{
            position: 'absolute',
            top: 'calc(50% + 30px)',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60%',
            maxWidth: '777px',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
        
            {showModels == 'searchValue' ? <SearchbarModel  setShowModels={setShowModels}/> : showModels == 'location' ? <LocationModel/> : <></> }
        </Box>
      </Box>

    )
  }

  export default MainSearchBar
