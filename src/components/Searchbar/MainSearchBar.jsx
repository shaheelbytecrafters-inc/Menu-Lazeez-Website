import React, { useState } from 'react'
import Searchbar from './Searchbar'
import SearchbarModel from './SearchModel'
import { Box } from '@mui/material'

const MainSearchBar = () => {

  const [open, setOpen] = useState(false)

  return (
    <Box
    >
      <Searchbar setOpen={setOpen} />
      {open &&
        <SearchbarModel />
      }
    </Box>
  )
}

export default MainSearchBar
