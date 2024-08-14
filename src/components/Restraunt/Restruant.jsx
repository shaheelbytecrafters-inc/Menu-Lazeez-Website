import { Box, Button, Typography } from '@mui/material';
import MainSearchBar from '../Searchbar/MainSearchBar';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DirectionIcon from '@mui/icons-material/Directions';
import ShareIcon from '@mui/icons-material/Share';
import './Restaurant.css';

const Restruant = () => {
  return (
    <Box display="flex" flexDirection="column" width="100vw" height="100vh">
      <Box
        sx={{
          overflowX: 'hidden',
          boxSizing: 'border-box',
          px: { xs: '0px', sm: '10px', md: '50px', lg: '90px' },
          flexWrap: 'wrap',
        }}
      >
        {/* Header */}
        <Box
          display="flex"
          boxSizing="border-box"
          flexDirection="row"
          height="7vh"
          bgcolor="white"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            p: { xs: '0', sm: '5', md: '20px', lg: '40px' },
          }}
        >
          <Typography variant="h6">Restro-web</Typography>
          <MainSearchBar />
          <Box>User</Box>
        </Box>

        {/* Main Section */}
        <Box display="flex" flexDirection="column" height="93vh">

          {/* Gallery */}
          <Box className="restroGallery" sx={{width:"auto",height:"60vh"}}>
            {itemData.map((item, index) => (
              <Box key={index} id={`box-${index + 1}`} className="box">
                <img src={item.img} alt={item.title} />
              </Box>
            ))}
          </Box>

          <Box display="flex" justifyContent="space-between" mt={2}>
            <Box flex={1}>
              <Typography variant="h6" color="black">
                Biryani Blues
              </Typography>
              <Typography>Biryani, Hydrabadi, Mughlai</Typography>
              <Box display="flex" gap={1} mt={1}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<DirectionIcon />}
                  sx={{ backgroundColor: 'transparent', color: 'red' }}
                >
                  Direction
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  startIcon={<BookmarkIcon />}
                  sx={{ backgroundColor: 'transparent' }}
                >
                  Bookmark
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<ShareIcon />}
                  sx={{ backgroundColor: 'transparent', color: 'red' }}
                >
                  Share
                </Button>
              </Box>
            </Box>
            <Box flex={1} position="relative">
              <Box position="absolute" top="0" right="0">
                <Button sx={{ color: 'blue' }}>2849 ratings</Button>
                <Button>
                  <Box display="flex" flexDirection="column">
                    <Typography variant="h6">3.5k</Typography>
                    <Typography variant="body2">Delivery Ratings</Typography>
                  </Box>
                </Button>
              </Box>
            </Box>
          </Box>

          <Box display="flex" gap={3} borderBottom="1px solid gray" mx="10px" mt={2}>
            <Button>Overview</Button>
            <Button>Order Online</Button>
            <Button>Reviews</Button>
            <Button>Photos</Button>
            <Button>Menu</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Restruant;

const itemData = [
  {
    img: 'https://b.zmtcdn.com/data/pictures/chains/9/21197839/4d9e82d351b9dfa74d248bdc29dd4f76.jpeg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
    title: 'Bed',
  },
  {
    img: 'https://b.zmtcdn.com/data/pictures/chains/9/21197839/6cc8e0a0bc61b5acbe02ddd089965299.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*',
    title: 'Kitchen',
  },
  {
    img: 'https://b.zmtcdn.com/data/pictures/chains/9/21197839/d7e565496c8b49321a5ca651956da1e0.jpeg?output-format=webp&fit=around|300:273&crop=300:273;*,*',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
];