import React from 'react'
import { Box, Button, Card, Chip, Grid, Typography } from '@mui/material';
import  { MenuCard } from '../RestrauntMenu'
import RestaurantCard from '../RestrauntCard';
import RestaurantReviewUserCard from '../RestaurantReviewuserCard'
import SafetyMeasures from '../RestaunrantSafetyMeasures';

const RestaurantOverview = () => {
    return (
        <Box display={'flex'}>
            <Box flex={2}>
                <Typography sx={{ fontSize: '24px', fontFamily: 'poppins' }}>About this place</Typography>
                <SafetyMeasures />
                <Typography fontSize={'20px'} fontFamily={'poppins, sans-serif'} sx={{ my: { sm: '10px' } }}>Menu</Typography>
                <Box display={'flex'} gap={3}>
                    {menuItems.map((item, index) => (
                        <Grid item key={index}>
                            <MenuCard image={item.image} title={item.title} pages={item.pages} />
                        </Grid>
                    ))}
                </Box>
                <Box marginBottom={'20px'}>
                    <Typography sx={{ fontFamily: 'poppins, sans-serif', fontSize: "20px", marginBottom: '4px' }}>
                        Cuisines
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                        {cuisines.map((cuisine, index) => (
                            <Chip
                                key={index}
                                label={cuisine}
                                variant="outlined"
                                sx={{
                                    borderRadius: '20px',
                                    fontSize: '14px',
                                    color: 'teal',
                                    borderColor: 'lightgray',
                                    fontFamily: 'poppins, sans-serif',
                                    fontWeight: '300'
                                }}
                            />
                        ))}
                    </Box>
                </Box>
                <Box my={'10px'}>
                    <Typography sx={{ fontFamily: 'poppins, sans-serif', fontSize: "20px", marginBottom: '4px' }}>
                        Popular Dishes
                    </Typography>
                    <Typography
                        fontFamily='poppins, sans-serif'
                        fontWeight='300'
                        color={'gray'}
                    >
                        Ramen Noodle, Sushi Platter, Dimsum, Prawns, Chicken 65, Paneer Biryani, Motton Biryani, Chicken Biryani Double, Masala Shikanji
                    </Typography>
                </Box>

                <Box my={'10px'}>
                    <Typography sx={{ fontFamily: 'poppins, sans-serif', fontSize: "20px", marginBottom: '4px' }}>
                        People Say This Place is Known For
                    </Typography>
                    <Typography
                        fontFamily='poppins, sans-serif'
                        fontWeight='300'
                        color={'gray'}
                    >
                        Value for Money, Jain Food Option, Gastronomical Experience, Family Place, Perfect Packing, Fancy Crowd
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='h6' sx={{ marginBottom: '10px' }}>Recommended Restraunts</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '9px' }} >
                        <RestaurantCard name="You Mee" address="Saket vihar, New Delhi" img='https://wallpapercave.com/wp/wp1874173.jpg' />
                        <RestaurantCard name="Discovery" address="Sector-13, Dwarka New Delhi" img="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?cs=srgb&dl=chairs-coffee-shop-drinking-glasses-67468.jpg&fm=jpg" />
                    </Box>
                </Box>
                <Box my={'10px'} sx={{marginRight: {sm: '13px'}}}>
                    <Typography variant='h6'>Reviews</Typography>
                    <RestaurantReviewUserCard />
                    <RestaurantReviewUserCard />
                </Box>
            </Box>
            {/* <Box flex={1} border={'1px solid lightgray'} maxWidth={'350px'} maxHeight={'480px'} position={'static'}>
                <Box maxWidth={'350px'} marginBottom={'5px'} borderRadius={'17px'}>
                    <Card
                        sx={{
                            display: 'flex',
                            width: '350px',
                            alignItems: 'center',
                        }}
                    >
                        <Box sx={{ flexGrow: 1, zIndex: '50', justifyContent: 'center', alignItems: 'center', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="body1" color="text.primary">
                                Online ordering is only supported on the mobile app
                            </Typography>
                            <Button sx={{bgcolor: 'white', color: 'black', border: '1px solid gray', fontFamily: 'poppins, sans-serif', }}>
                                Download the App
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                backgroundImage: 'url(/path-to-image/zomato.png)',
                                backgroundSize: 'cover',
                            }}
                        />
                    </Card>
                </Box>
                <Box maxWidth={'350px'} height={'auto'} bgcolor={'blue'} borderRadius={'17px'}>Call</Box>
            </Box> */}
        </Box>
    )
}

export default RestaurantOverview


const menuItems = [
    {
        image: 'https://psd.zone/wp-content/uploads/2021/01/A4-Size-Restaurant-Food-Menu-PSD-Template-preview-908x1024.jpg',
        title: 'Food Menu',
        pages: '1 pages',
    }
];

const cuisines = ['Asian', 'Japanese', 'Sushi', 'Chinese', 'Thai', 'Desserts', 'Beverages'];