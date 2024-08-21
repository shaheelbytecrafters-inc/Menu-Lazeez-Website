import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const RestaurantCard = () => {
  return (
    <Card sx={{ width: '100%', borderRadius: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
      <CardMedia
        component="img"
        height="180"
        image="https://www.tripsavvy.com/thmb/1avBxv5nrmUddXubBq846cMRxJQ=/2500x1667/filters:fill(auto,1)/Annette-2ac0e13d6b9e48eabab41a887561c562.jpg"
        alt="Restaurant"
        sx={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
      />
      <CardContent>
        <Box display="flex" alignItems="center" mb={1}>
          <Chip
            icon={<StarIcon sx={{ color: 'white', fontSize: '1rem' }} />}
            label="4.4"
            sx={{
              backgroundColor: '#4caf50',
              color: 'white',
              fontWeight: 'bold',
              marginRight: '8px',
              height: '24px',
              borderRadius: '5px',
              fontSize: '14px',
              paddingLeft: '4px',
              paddingRight: '4px',
            }}
          />
          <Typography variant="body2" color="textSecondary" sx={{ marginRight: '8px' }}>
            DINING
          </Typography>
          <Typography variant="body2" color="textSecondary">
            • DELIVERY
          </Typography>
        </Box>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
         Cafe
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Cafe, Continental, Fast Food, Desserts
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
