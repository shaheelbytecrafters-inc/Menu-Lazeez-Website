// import React from 'react'
import { Box } from '@mui/material'
import Slider  from '../Slider/CardSlider'
import NightlifeComponent from './NightLifeComponent'
import NightLifeBanner from './NightLifeBanner'
import Logo from './MyLogo'
import Variety from './VarietySlider'

const MainNightLife = () => {
  return (
    <Box width="100vw">
      <Slider />
      <NightLifeBanner />
      <Logo/>
      <Variety/>
      <NightlifeComponent />
    </Box>
  );
}

export default MainNightLife
