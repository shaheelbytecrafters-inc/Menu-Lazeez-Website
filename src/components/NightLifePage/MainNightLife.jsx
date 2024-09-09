// import React from 'react'
import { Box } from '@mui/material'
import Slider  from '../Slider/CardSlider'
import NightlifeComponent from './NightLifeComponent'
import NightLifeBanner from './NightLifeBanner'

const MainNightLife = () => {
  return (
    <Box width="100vw">
      <Slider />
      <NightLifeBanner />
      <NightlifeComponent />
    </Box>
  );
}

export default MainNightLife
