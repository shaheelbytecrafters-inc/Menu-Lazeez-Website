import React, { useState } from 'react'
import Searchbar from './Searchbar'
import SearchbarModel from './SearchModel'
import { Box } from '@mui/material'

const MainSearchBar = () => {

  const [open, setOpen] = useState(false)

  return (
    <Box
    width="100%"
    height="100%"
    position="relative"
  >
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Searchbar setOpen={setOpen} />
    </Box>
    <Box
      sx={{
        position: 'absolute',
        top: 'calc(50% + 30px)',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {open && <SearchbarModel />}
    </Box>
  </Box>
  
  )
}

export default MainSearchBar
