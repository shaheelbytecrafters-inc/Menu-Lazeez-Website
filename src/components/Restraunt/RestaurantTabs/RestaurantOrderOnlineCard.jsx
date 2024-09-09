import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';

const FoodItem = ({ image, title, price, description }) => (
  <Card sx={{ display: 'flex', mb: { xs: 1, sm: 2 }, boxShadow: 'none', maxHeight: '150px' }}>
    <CardMedia
      component="img"
      sx={{ width: { xs: '85px', sm: '130px' }, height: { xs: '85px', sm: '130px' }, objectFit: 'cover', borderRadius: '14px' }}
      image={image}
      alt={title}
    />
    <CardContent sx={{ p: '0px', mx: '10px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mx: '5px', maxWidth: '500px' }}>
        <Typography fontFamily={'Poppins'} fontWeight={'500'} sx={{ fontSize: { xs: '16px', sm: "20px" } }}>{title}</Typography>
        {/* <Box display={'flex'} alignItems={'center'}  mx={'5px'} flexDirection={'column'} sx={{cursor: 'pointer'}}>
          <AddIcon sx={{fontSize: '20px'}}/>
          <Typography sx={{fontSize: '12px', fontFamily: 'poppins, sans-serif'}}>Add to Cart</Typography>
        </Box> */}
      </Box>
      <Box>
        <StarIcon sx={{ fontSize: 16, ml: 0.5, color: 'yellow' }} />
        <StarIcon sx={{ fontSize: 16, ml: 0.5, color: 'yellow' }} />
        <StarIcon sx={{ fontSize: 16, ml: 0.5, color: 'yellow' }} />
        <StarIcon sx={{ fontSize: 16, ml: 0.5 }} />
      </Box>
      <Typography sx={{ fontFamily: 'poppins, sans-serif', fontSize: { xs: '12px', sm: '15px' } }}>{price}</Typography>
      <Typography maxWidth={'500px'} sx={{ fontFamily: 'poppins, sans-serif', fontSize: { xs: '13px', sm: '15px' } }}>{description}</Typography>
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

const RestaunrantOrderOnlineCard = () => {
  const foodItems = [
    {
      image: '/HeroImg.jpeg',
      title: 'Thai Flavour Soup',
      price: '₹335',
      description: 'Thai Flavour Soup Made With Fresh Lemon Grass, Kaffir Lime Leaves, Grilled Chicken, Prawn, Calamri, Seasonal Greens, in...',
    },
    {
      image: '/HeroImg.jpeg',
      title: 'Miso Shiru Soup - Veg',
      price: '₹335',
      description: 'Thai Flavour Soup Made With Fresh Lemon Grass, Kaffir Lime Leaves, Grilled Chicken, Prawn, Calamri, Seasonal Greens, in...',
    },
    {
      image: '/HeroImg.jpeg',
      title: 'Dumpling Suimono Soup',
      price: '₹335',
      description: 'Thai Flavour Soup Made With Fresh Lemon Grass, Kaffir Lime Leaves, Grilled Chicken, Prawn, Calamri, Seasonal Greens,in...',
    },
    {
      image: '/HeroImg.jpeg',
      title: 'Thai Flavour Soup',
      price: '₹335',
      description: 'Thai Flavour Soup Made With Fresh Lemon Grass, Kaffir Lime Leaves, Grilled Chicken, Prawn, Calamri, Seasonal Greens,in...',
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

export default RestaunrantOrderOnlineCard;
