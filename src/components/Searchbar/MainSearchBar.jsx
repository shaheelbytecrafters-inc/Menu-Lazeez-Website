import React, { useState } from 'react'
import Searchbar from './Searchbar'
import SearchbarModel from './SearchModel'
import { Box } from '@mui/material'

const MainSearchBar = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
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
        <Searchbar setOpen={setOpen} />
      </Box>
      <Box
      sx={{
        width: '100%',
      }}
      >
        {open &&
          <SearchbarModel />
        }
      </Box>
    </>
  )
}

export default MainSearchBar
