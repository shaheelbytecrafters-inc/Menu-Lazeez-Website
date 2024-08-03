import React from 'react'
import { Box, styled, Modal } from '@mui/material'
import Navbar from '../components/Navbar/Navbar'


const HomePage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column">

      <Box>
        <Navbar />
      </Box>
    </Box>
  )
}

export default HomePage
