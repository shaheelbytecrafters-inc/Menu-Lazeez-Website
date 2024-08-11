import { Box, Button, Modal, styled, Typography } from '@mui/material'
import MainSearchBar from '../Searchbar/MainSearchBar'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DirectionIcon from '@mui/icons-material/Directions';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from "react";
import "./Restaurant.css"
// import Slider from "react-slick";
// import { baseUrl } from "./config";

// const GalleryModal = styled(Modal)({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// });

const ImageGalleryModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const Restruant = () => {
  const [showGalleryModal, setShowGalleryModal] = useState(false)

  // const handleHideGalleryModal = () =>{
  //   setShowGalleryModal(false)
  //   console.log(showGalleryModal)
  // }
  // const handleShowGalleryModal = () =>{
  //   setShowGalleryModal(true)
  //   console.log(showGalleryModal)
  // }

  return (
    <Box
      width={'100vw'}
      display={'flex'}
      justifyContent={'center'}
      mx={'20px'}
      bgcolor={'blue'}
    >
      <Box
        sx={{
          overflowX: 'hidden',
          width: '100vw',
          height: '100vh',
        }}
      >
        {/* Header  */}

        <Box
          display={'flex'}
          flexDirection={'row'}
          height={'7vh'}
          bgcolor={'white'}
          position={'relative'}
          py={'10px'}
          px={'10px'}
          alignItems={'center'}
          justifyContent={'space-evenly'}
        >
          <Typography variant="h6">
            Restro-web
          </Typography>
          <MainSearchBar />
          <Box >User</Box>

        </Box>


        {/* MainSection  */}
        <Box
          height={'93vh'}
        >

          {/* Gallary  */}
          <Box
            className='restroGallery'
            sx={{
              width: '80vw',
              height: 'auto',
              my: '5px',
              bgcolor: 'red',
              padding: '2px',
            }}
          // onClick={handleShowGalleryModal}
          >
            {itemData.map((item, indx)=>(
              <Box id={`box-${indx+1}`} className='box'>
                <img src={item.img} alt={item.title} />
              </Box>
            ))}
            {/* <div class="box" id="box-1">box-1</div>
            <div class="box" id="box-2">box-2</div>
            <div class="box" id="box-4">box-4</div>
            <div class="box" id="box-3">box-3</div> */}
          </Box>

          {/* <ImageGalleryModal open={showGalleryModal}></ImageGalleryModal> */}

          {/* Info-div  */}

          <Box
            display={'flex'}
            justifyContent={'space-between'}
            height={'150px'}
          >
            <Box flex={1} mx={'40px'}>
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