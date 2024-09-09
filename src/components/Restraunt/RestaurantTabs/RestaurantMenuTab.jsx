import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import {MenuCard} from '../RestrauntMenu'


const RestaurantMenu = () => {
    return (
        <>
            <Grid container spacing={1} >
                {menuItems.map((item, index) => (
                    <Grid item key={index}>
                        <MenuCard image={item.image} title={item.title} pages={item.pages} />
                    </Grid>
                ))}
            </Grid>
        </>
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
        image: 'https://th.bing.com/th/id/OIP.Wt4WZcM0MGJbSMnvKefWrwHaMM?rs=1&pid=ImgDetMain',
        title: 'Beverages',
        pages: '5 pages',
    },
];
