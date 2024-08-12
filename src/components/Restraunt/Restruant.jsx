import { Box, Button, Modal, styled, Typography } from '@mui/material'
import MainSearchBar from '../Searchbar/MainSearchBar'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DirectionIcon from '@mui/icons-material/Directions';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from "react";
import "./Restaurant.css"

const Restruant = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      width={'100vw'}
      height={'100vh'}
    >
      <Box
         sx={{
          overflowX: 'hidden',
          boxSizing: 'border-box',
          px: {xs: '0px', sm: '10px', md:'50px', lg: '90px'},
          flexWrap: 'wrap'  
        }}
      >
        {/* Header  */}

        <Box
          display={'flex'}
          boxSizing={'border-box'}
          flexDirection={'row'}
          height={'7vh'}
          bgcolor={'white'}
          position={'relative'}
          alignItems={'center'}
          justifyContent={'space-evenly'}
          sx={{
            p:{xs: '0', sm: '5', md: "20px", lg: '40px'}
          }}
        >
          <Typography variant="h6">
            Restro-web
          </Typography>
          <MainSearchBar />
          <Box >User</Box>

        </Box>


        {/* MainSection  */}
        <Box
            display={'flex'}
            flexDirection={'column'}
            height={'93vh'}

        >

          {/* Gallary  */}
          <Box
            className='restroGallery'
            height={'35vw'}
          >
            {/* {itemData.map((item, indx) => (
              <Box id={`box-${indx + 1}`} className='box'>
                <img src={item.img} alt={item.title} />
              </Box>
            ))} */}
            <div class="box" id="box-1">box-1</div>
            <div class="box" id="box-2">box-2</div>
            <div class="box" id="box-4">box-4</div>
            <div class="box" id="box-3">box-3</div>
          </Box>

          <Box
            display={'flex'}
            justifyContent={'space-between'}
            // height={'150px'}
          >
            <Box flex={1} >
              <Typography variant="h6" color="black">
                Biryani Blues
              </Typography>
              <Typography>
                Biryani, Hydrabadi, Mughlai
              </Typography>
              <Box display={'flex'} gap={1} marginTop={'5px'}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<DirectionIcon />}
                  sx={{
                    backgroundColor: 'transparent',
                    color: 'red'
                  }}
                >Direction</Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  startIcon={<BookmarkIcon />}
                  sx={{
                    backgroundColor: 'transparent',
                  }}
                >Bookmark</Button>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<ShareIcon />}
                  sx={{
                    backgroundColor: 'transparent',
                    color: 'red'
                  }}
                >Share</Button>
              </Box>
            </Box>
            <Box flex={1} position={'relative'}>
              <Box position={'absolute'} top={'0'} right={'0'}>
                <Button
                  sx={{ color: 'blue' }}
                >2849 ratings</Button>
                <Button>
                  <Box display={'flex'}>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography variant='h6'> 3.5k</Typography>
                      <Typography variant='p'>Delivery Ratings</Typography>
                    </Box>
                  </Box>
                </Button>
              </Box>
            </Box>
          </Box>

          <Box display={'flex'} gap={3} borderBottom={'1px solid gray'} mx={'10px'}>
            <Button>Overview</Button>
            <Button>Order Online</Button>
            <Button>Reviews</Button>
            <Button>Photos</Button>
            <Button>Menu</Button>

          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Restruant

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  }
];