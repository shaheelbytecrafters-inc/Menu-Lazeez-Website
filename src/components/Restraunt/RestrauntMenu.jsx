import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';


export const MenuCard = ({ image, title, pages }) => (
  <Card sx={{ maxWidth: 200, boxShadow: 'none' }}>
    <CardMedia
      component="img"
      height="full"
      image={image}
      alt={title}
      sx={{ borderRadius: '8px' }}
    />
    <CardContent sx={{ paddingLeft: 0, paddingRight: 0 }}>
      <Typography sx={{ fontSize: '20px', fontFamily: 'poppins, sans-serif' }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {pages}
      </Typography>
    </CardContent>
  </Card>
);

const MenuGrid = () => {
  return (<>
  <Grid container spacing={4} justifyContent="center">
    {menuItems.map((item, index) => (
      <Grid item key={index}>
        <MenuCard image={item.image} title={item.title} pages={item.pages} />
      </Grid>
    ))}
  </Grid>
  <Typography>He</Typography>
</>)
};

export default MenuGrid;

const menuItems = [
  {
    image: 'https://cdn.geckoandfly.com/wp-content/uploads/2019/06/menu-template-restaurant-cafe-templates-30.jpg',
    title: 'Food Menu',
    pages: '7 pages',
  }
];
