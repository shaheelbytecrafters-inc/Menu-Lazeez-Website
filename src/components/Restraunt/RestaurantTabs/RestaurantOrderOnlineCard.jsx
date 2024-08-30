import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const FoodItem = ({ image, title, price, description }) => (
  <Card sx={{ display: 'flex', mb: 2 , boxShadow: 'none'}}>
    <CardMedia
      component="img"
      sx={{ width: 150 , height: 'auto', borderRadius: '14px'}}
      image={image}
      alt={title}
    />
    <CardContent>
      <Typography fontFamily={'Poppins'} fontWeight={'500'} fontSize={'20px'}>{title}</Typography>
      <Box>
      <StarIcon sx={{ fontSize: 16, ml: 0.5, color: 'yellow'}} />
      <StarIcon sx={{ fontSize: 16, ml: 0.5, color: 'yellow' }} />
      <StarIcon sx={{ fontSize: 16, ml: 0.5, color: 'yellow' }} />
      <StarIcon sx={{ fontSize: 16, ml: 0.5 }} />
      </Box>
      <Typography variant="body2" color="text.secondary">{price}</Typography>
      <Typography variant="body2" color="text.secondary">{description}</Typography>
    </CardContent>
  </Card>
);

const AppDownloadCard = () => (
  <Card
    sx={{
      position: 'fixed',
      bottom: 16,
      right: 16,
      display: 'flex',
      alignItems: 'center',
      padding: 2,
      boxShadow: 3,
      maxWidth: 300,
    }}
  >
    <Box sx={{ flexGrow: 1, zIndex: '50' }}>
      <Typography variant="body1" color="text.primary">
        Online ordering is only supported on the mobile app
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 1 }}>
        Download the App 
      </Button>
    </Box>
    <Box
      sx={{
        ml: 2,
        width: 70,
        height: 140,
        backgroundColor: 'red',
        backgroundImage: 'url(/path-to-image/zomato.png)',
        backgroundSize: 'cover',
      }}
    />
  </Card>
);

const RestaunrantOrderOnline = () => {
  const foodItems = [
    {
      image: '/HeroImg.jpeg',
      title: 'Thai Flavour Soup',
      price: '₹335',
      description: 'Thai Flavour Soup Made With Fresh Lemon Grass, Kaffir Lime Leaves...',
    },
    {
      image: '/HeroImg.jpeg',
      title: 'Miso Shiru Soup - Veg',
      price: '₹335',
      description: 'White Miso Paste, Dashi Stock, Seasonal Vegetables...',
    },
    {
      image: '/HeroImg.jpeg',
      title: 'Dumpling Suimono Soup',
      price: '₹335',
      description: '',
    },
    {
      image: '/HeroImg.jpeg',
      title: 'Thai Flavour Soup',
      price: '₹335',
      description: 'Thai Flavour Soup Made With Fresh Lemon Grass, Kaffir Lime Leaves...',
    },
    {
      image: '/HeroImg.jpeg',
      title: 'Miso Shiru Soup - Veg',
      price: '₹335',
      description: 'White Miso Paste, Dashi Stock, Seasonal Vegetables...',
    },
    {
      image: '/HeroImg.jpeg',
      title: 'Dumpling Suimono Soup',
      price: '₹335',
      description: '',
    },
  ];

  return (
    <Box>
      <Grid container direction="column" >
        {foodItems.map((item, index) => (
          <Grid item key={index} > 
            <FoodItem {...item} />
          </Grid>
        ))}
      </Grid>
      {/* <AppDownloadCard /> */}
    </Box>
  );
};

export default RestaunrantOrderOnline;
