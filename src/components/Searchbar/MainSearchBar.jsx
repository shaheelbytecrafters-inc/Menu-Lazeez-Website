import React, { useState } from 'react'
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
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // bgcolor:"yellow"
      }}
    >
        <Searchbar setShowModels={setShowModels} />
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
          {showModels == 'searchValue' ? <SearchbarModel/> : showModels == 'location' ? <LocationModel/> : <></> }
      </Box>
    </Box>

  )
}

export default MainSearchBar
