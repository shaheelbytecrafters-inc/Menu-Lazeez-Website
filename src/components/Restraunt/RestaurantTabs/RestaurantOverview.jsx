import React from 'react'
import { Box, Chip, Grid, Typography } from '@mui/material';
import RestrauntMenu, { MenuCard } from '../RestrauntMenu'
import RestaurantCard from '../RestrauntCard';
import RestaurantReviewUserCard from '../RestaurantReviewuserCard'

const RestaurantOverview = () => {
    return (
        <>
            <Box>
                <Typography variant="h6" component="h2">About this place</Typography>
                <Typography variant="h6" component="h2">Menu</Typography>
                <Box display={'flex'} gap={3}>
                    {menuItems.map((item, index) => (
                        <Grid item key={index}>
                            <MenuCard image={item.image} title={item.title} pages={item.pages} />
                        </Grid>
                    ))}
                </Box>
                <Box>
                    <Typography variant="h6" gutterBottom>
                        Cuisines
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                        {cuisines.map((cuisine, index) => (
                            <Chip
                                key={index}
                                label={cuisine}
                                variant="outlined"
                                // onClick={console.log('hi')}
                                sx={{
                                    borderRadius: '20px',
                                    fontSize: '14px',
                                    color: 'teal',
                                    borderColor: 'lightgray',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 128, 128, 0.1)',
                                    },
                                }}
                            />
                        ))}
                    </Box>
                </Box>
                <Box my={'10px'}>
                    <Typography variant="h5" gutterBottom>
                        Popular Dishes
                    </Typography>
                    <Typography variant="h7" gutterBottom>
                        Ramen Noodle, Sushi Platter, Dimsum, Prawns
                    </Typography>
                </Box>
                <Box mx={'5px'}>
                    <Typography variant='h6' sx={{ marginBottom: '10px' }}>Recommended Restraunts</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '9px' }} >
                        <RestaurantCard />
                        <RestaurantCard />
                    </Box>
                </Box>
                <Box mx={'5px'} my={'10px'}>
                <Typography variant='h6'>Reviews</Typography>
                <RestaurantReviewUserCard />
                <RestaurantReviewUserCard />
              </Box>
            </Box>
        </>
    )
}

export default RestaurantOverview


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

const cuisines = ['Asian', 'Japanese', 'Sushi', 'Chinese', 'Thai', 'Desserts', 'Beverages'];