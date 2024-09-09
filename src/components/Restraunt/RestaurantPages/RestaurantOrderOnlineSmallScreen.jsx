import { Box, Button, Typography, Divider } from '@mui/material'
import React from 'react'
import RestaunrantOrderOnlineCard from '../RestaurantTabs/RestaurantOrderOnlineCard'
import PersonIcon from '@mui/icons-material/Person';

const RestaurantOrderOnlineSmallScreen = () => {
  return (
    <Box>
      <Box display="flex"
        flexDirection="row"
        maxHeight="7vh"
        height={'50px'}
        width={'100%'}
        alignItems="center"
        justifyContent={'space-between'} mx={'5px'}
      >
        
        <Typography
          sx={{
            fontFamily: 'poppins, sans-serif',
            fontWeight: '900',
            fontSize: '25px',
            marginLeft: "7px"
          }}>
          Lazeez
        </Typography>
        <Button sx={{ display: { xs: 'block', md: 'none' } }}><PersonIcon sx={{ color: 'red', height: '25px' }} />
        </Button>
      </Box>
      <Divider />
      <Box my={'12px'} mx={'10px'}>
        <Box >
          <Typography color="#gray" fontFamily={'poppins, sans-serif'} fontWeight={'300'} fontSize={'17px'}>
            You Mee
          </Typography>
          <Typography color="#gray" fontFamily={'poppins, sans-serif'} fontWeight={'200'} fontSize={'14px'} my={'3px'}>Asian, Japanese, Sushi, Chinese, Thai, Desserts, Beverages, Desert</Typography>
          <Typography color="red" fontFamily={'poppins, sans-serif'} fontWeight={'200'} fontSize={'14px'} my={'3px'}>More Info</Typography>
        </Box>
        <Box>
          <Box my={'7px'}>
            <Typography sx={{ fontFamily: 'poppins, sans-serif', fontSize: '17px', my: '12px' }}>
              Today's Exclusive Dishes</Typography>
            <RestaunrantOrderOnlineCard />

            <Divider />

            <Typography sx={{ fontFamily: 'poppins, sans-serif', fontSize: '17px', my: '12px' }}>
              Meal For One</Typography>
            <RestaunrantOrderOnlineCard />

            <Divider />

            <Typography sx={{ fontFamily: 'poppins, sans-serif', fontSize: '17px', my: '12px' }}>
              Dimsum</Typography>
            <RestaunrantOrderOnlineCard />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default RestaurantOrderOnlineSmallScreen
