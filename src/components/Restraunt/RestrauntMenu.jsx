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
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {pages}
      </Typography>
    </CardContent>
  </Card>
);

const MenuGrid = () => (
  <Grid container spacing={4} justifyContent="center">
    {menuItems.map((item, index) => (
      <Grid item key={index}>
        <MenuCard image={item.image} title={item.title} pages={item.pages} />
      </Grid>
    ))}
  </Grid>
);

export default MenuGrid;

const menuItems = [
  {
    image: 'https://cdn.geckoandfly.com/wp-content/uploads/2019/06/menu-template-restaurant-cafe-templates-30.jpg',
    title: 'Food Menu',
    pages: '7 pages',
  },
  {
    image: 'https://cdn.geckoandfly.com/wp-content/uploads/2019/06/menu-template-restaurant-cafe-templates-30.jpg',
    title: 'Beverages',
    pages: '5 pages',
  },
];
