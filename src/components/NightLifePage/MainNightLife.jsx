// import React from 'react'
import { Box } from '@mui/material'
import Slider  from '../Slider/CardSlider'
import NightlifeComponent from './NightLifeComponent'
import NightLifeBanner from './NightLifeBanner'
import MyLogo from './MyLogo'
import VerifySlider from './VerifySlider'

const MainNightLife = () => {
  return (
    <Box width="100vw">
      <Slider />
      <NightLifeBanner />
      <MyLogo/>
      <VerifySlider/>
      <NightlifeComponent />
    </Box>
  );
}

export default MainNightLife
