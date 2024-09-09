import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const RestaurantCard = ({ img, name, address }) => {
  return (
    <Card sx={{ width: '100%', maxWidth: '365px', borderRadius: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt="Restaurant"
          sx={{ borderRadius: '16px', maxWidth: '365px', width: '100%' }}
        />
      </Box>
      <CardContent sx={{ p: '3px' }}>
        <Typography sx={{ fontSize: '20px', fontWeight: '400', fontFamily: 'poppins, sans-serif', color: 'black' }}>
          {name}
        </Typography>
        <Box display="flex" alignItems="center" mb={1}>
          <Chip
            label={<span style={{ order: 1, fontFamily: 'poppins, sans-serif', fontWeight: '500'}}>4.5</span>}
            icon={<StarIcon sx={{
              color: 'white', fontSize: '13px', order: 2}} />}
            sx={{
              backgroundColor: '#4caf50',
              color: 'white',
              marginRight: '6px',
              height: '20px',
              width: '50px',
              borderRadius: '5px',
              fontSize: '12px',
              bgcolor: 'green',
              '& .MuiChip-label': {
                px: '0px'
              },           
              '& .MuiChip-icon' : {
                color : 'white'

              }
            }}
          />
          <Typography sx={{ marginRight: '8px', fontSize: '12px', fontFamily: 'poppins, sans-serif' }}>
            DINING |
          </Typography>
          <Chip
            label={<span style={{ order: 1, fontFamily: 'poppins, sans-serif', fontWeight: "500"}}>4.5</span>}
            icon={<StarIcon sx={{
              color: 'white', fontSize: '13px', order: 2}} />}
            sx={{
              backgroundColor: '#4caf50',
              color: 'white',
              marginRight: '6px',
              height: '20px',
              width: '50px',
              borderRadius: '5px',
              fontSize: '12px',
              bgcolor: 'green',
              '& .MuiChip-label': {
                px: '0px'
              },
              '& .MuiChip-icon' : {
                color : 'white'
              }
            }}
          />
          <Typography sx={{fontFamily: 'poppins, sans-serif', fontSize: "12px"}}>
            DELIVERY
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">
          Cafe, Continental, Fast Food, Desserts
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {address}
        </Typography>
      </CardContent>
    </Card>
  );
};


export default RestaurantCard;
