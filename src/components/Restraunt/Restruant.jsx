import React from 'react'
import { Box, Typography } from '@mui/material'
import MainSearchBar from '../Searchbar/MainSearchBar'

const Restruant = () => {
  return (
    <Box
      width={'100vw'}
      height={'100vh'}
      bgcolor={'red'}
    >
      {/* Header  */}
      <Box
        display={'flex'}
        flexDirection={'row'}
        height={'7vh'}
        bgcolor={'white'}
        position={'relative'}
        py={'10px'}
        px={'14px'}
        alignItems={'center'}
        justifyContent={'space-evenly'}
      >
        <Typography variant="h6">
          Restro-web
        </Typography>
        <MainSearchBar/>
        <Box bgcolor={'green'}>User</Box>

      </Box>

      {/* MainSection  */}

      <Box 
      height={'93vh'}
      bgcolor={'blue'}
      
      >
      
      </Box>
    </Box>
  )
}

export default Restruant

