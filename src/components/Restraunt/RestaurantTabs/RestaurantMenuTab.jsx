import { Grid } from '@mui/material';
import React from 'react'
import MenuCard from '../RestrauntMenu'

const RestaurantMenu = () => {
    return (
        <Grid container spacing={1} justifyContent="center" alignItems={'center'}>
            {menuItems.map((item, index) => (
                <Grid item key={index}>
                    <MenuCard image={item.image} title={item.title} pages={item.pages} />
                </Grid>
            ))}
        </Grid>
    )
}

export default RestaurantMenu


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
  