import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const FoodItem = ({ image, title, price, description }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <Card sx={{ display: 'flex', mb: { xs: 1, sm: 2 }, boxShadow: 'none', maxHeight: '150px' }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          sx={{ width: { xs: '85px', sm: '130px' }, height: { xs: '85px', sm: '130px' }, objectFit: 'cover', borderRadius: '14px' }}
          image={image}
          alt={title}
        />
        <Button
          sx={{
            position: 'absolute',
            bottom: { xs: 35, sm: 0 },
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            bgcolor: 'red',
            my: '3px',
            width: '70%',
            textTransform: "none",
            fontSize: { xs: '10px', sm: "14px", md: '16px' },
            fontFamily: "poppins, sans-serif",
            ":hover": {
              bgcolor: 'white',
              color: 'red',
            }
          }}
        >
          Add
        </Button>
      </Box>

      <CardContent sx={{ p: '0px', mx: '10px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mx: '5px', maxWidth: '500px' }}>
          <Typography fontFamily={'Poppins'} fontWeight={'500'} sx={{ fontSize: { xs: '14px', sm: "18px" } }}>{title}</Typography>
        </Box>
        <Box>
          <StarIcon sx={{ fontSize: { xs: 13, sm: 15 }, ml: 0.5, color: 'yellow' }} />
          <StarIcon sx={{ fontSize: { xs: 13, sm: 15 }, ml: 0.5, color: 'yellow' }} />
          <StarIcon sx={{ fontSize: { xs: 13, sm: 15 }, ml: 0.5, color: 'yellow' }} />
          <StarIcon sx={{ fontSize: { xs: 13, sm: 15 }, ml: 0.5 }} />
        </Box>
        <Typography sx={{ fontFamily: 'poppins, sans-serif', fontSize: { xs: '12px', sm: '15px' } }}>{price}</Typography>
        <Box maxWidth="500px">
          <Typography
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: { xs: '13px', sm: '15px' },
              display: '-webkit-box',
              WebkitLineClamp: showMore ? 'unset' : 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {description}
          </Typography>
          {description && description.length > 60 && (
            <Button
              onClick={toggleShowMore}
              sx={{ fontSize: { xs: '12px', sm: '14px' }, color: "lightgray", textTransform: 'none', p: '0' }}
            >
              {showMore ? 'Show less' : 'Show more'}
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

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
      description: 'Thai Flavour Soup Made With Fresh Lemon Grass, Kaffir Lime Leaves, Grilled Chicken, Prawn, Calamari, Seasonal Greens.',
    },
    {
      image: '/HeroImg.jpeg',
      title: 'Miso Shiru Soup - Veg',
      price: '₹335',
      description: 'White Miso Paste, Dashi Stock, Seasonal Vegetables.',
    },
    {
      image: '/HeroImg.jpeg',
      title: 'Dumpling Suimono Soup',
      price: '₹335',
      description: 'Fresh dumplings served with a light and flavorful broth.',
    }
  ];

  return (
    <Box>
      <Grid container direction="column">
        {foodItems.map((item, index) => (
          <Grid item key={index}>
            <FoodItem {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RestaunrantOrderOnlineCard;
