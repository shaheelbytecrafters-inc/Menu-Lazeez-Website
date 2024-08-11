import React from 'react'
import { Box, Button, IconButton, ImageListItemBar, Typography } from '@mui/material'
import MainSearchBar from '../Searchbar/MainSearchBar'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DirectionIcon from '@mui/icons-material/Directions';
import ShareIcon from '@mui/icons-material/Share';


function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Restruant = () => {
  return (
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
        <Box bgcolor={'green'}>User</Box>

      </Box>


      {/* MainSection  */}
      <Box
        height={'93vh'}
      >

        {/* Gallary  */}
        <Box
          sx={{
            width: '100vw',
            height: '450px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            my: '5px'
          }}
        >
          <ImageList
            sx={{
              width: 500,
              height: 450,
              // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
              transform: 'translateZ(0)',
            }}
            rowHeight={200}
            gap={1}
          >
            {itemData.map((item) => {
              const cols = item.featured ? 2 : 1;
              const rows = item.featured ? 2 : 1;

              return (
                <ImageListItem key={item.img} cols={cols} rows={rows}>
                  <img
                    {...srcset(item.img, 250, 200, rows, cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    sx={{
                      background:
                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                    }}
                    title={item.title}
                    position="top"
                    actionIcon={
                      <IconButton
                        sx={{ color: 'white' }}
                        aria-label={`star ${item.title}`}
                      >
                        <StarBorderIcon />
                      </IconButton>
                    }
                    actionPosition="left"
                  />
                </ImageListItem>
              );
            })}
          </ImageList>

        </Box>

        {/* Info-div  */}

        <Box
        display={'flex'}
        justifyContent={'space-between'}
        height={'150px'}
        >
          <Box flex={1} p={'10px'}>
            <Typography variant="h6" color="black">
              Biryani Blues
            </Typography>
            <Typography>
              Biryani, Hydrabadi, Mughlai
            </Typography>
            <Box display={'flex'} gap={3} marginTop={'5px'}>
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
                  backgroundColor: 'transparent',}}
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
              <Button>2849 ratings</Button>
              <Button>30.7k delivery ratings</Button>
            </Box>
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