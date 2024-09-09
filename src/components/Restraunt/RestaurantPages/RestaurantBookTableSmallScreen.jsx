import { Box, Button, IconButton, styled, Typography, Divider, Grid, FormControl, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import Slider from 'react-slick'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { RatingBox } from '../Restaurant';
import BreadcrumbNavigation from '../BreadcrumbNavigation';

const RestaurantBookTableSmallScreen = () => {
    const [date, setDate] = useState('Today');
    const [guests, setGuests] = useState(0);
    const [meal, setMeal] = useState('Dinner');
    const ArrowButton = styled(Box)(({ direction }) => ({
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
        [direction]: direction === "left" ? "-50px" : "-50px", // Adjust this value to position the button
    }));

    // Custom Arrow Components
    const PrevArrow = ({ onClick }) => (
        <ArrowButton direction="left" onClick={onClick}>
            <IconButton
                sx={{
                    color: "white",
                    fontWeight: "bold",
                    background: "#f0ae46", // Initial background color
                    "&:hover": {
                        background: "#f0ae46", // Darker background color on hover
                    },
                    boxShadow: "0px 4px 10px #f0ae46", // Add shadow to the icon
                    marginRight: { sm: '0px', xs: '100px' },
                    marginLeft: { sm: '0px', xs: '100px' }
                }}
            >
                <ArrowBackIosIcon />
            </IconButton>
        </ArrowButton>
    );

    const NextArrow = ({ onClick }) => (
        <ArrowButton direction="right" onClick={onClick}>
            <IconButton
                sx={{
                    color: "white",
                    background: "#f0ae46", // Initial background color
                    "&:hover": {
                        background: "#f0ae46", // Darker background color on hover
                    },
                    boxShadow: "0px 4px 10px #f0ae46", // Add shadow to the icon
                    marginLeft: { xs: '100px', sm: '0px' },
                    marginRight: { xs: '100px', sm: '0px' }
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </ArrowButton>
    );
    const settingsForSmallScreenCarousel = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        centerMode: false,
        centerPadding: "0",
    };
    return (
        <Box sx={{ overflowX: 'hidden' }}>
            <Box display="flex"
                flexDirection="row"
                maxHeight="7vh"
                height={'50px'}
                width={'100%'}
                alignItems="center"
                justifyContent={'space-between'} mx={'5px'}
            >
                <Box sx={{ display: { xs: 'flex', sm: 'none' }, marginRight: "7px" }}>
                    <ArrowBackIcon />
                </Box>
                <Typography
                    sx={{
                        fontFamily: 'poppins, sans-serif',
                        fontWeight: '900',
                        fontSize: '25px',
                        marginLeft: "7px"
                    }}>
                    Lazeez
                </Typography>
                <Button sx={{ display: { xs: 'block', md: 'none' } }}><PersonIcon sx={{ color: 'red', height: '25px' }} />
                </Button>
            </Box>
            <Divider />
            <Box sx={{ display: { xs: "block", sm: 'none' } }} >
                <Slider {...settingsForSmallScreenCarousel}>
                    {cards.map((card, index) => (
                        <Box
                            key={index}
                            sx={{
                                boxSizing: "border-box",
                                height: '27vh',
                                maxHeight: '414px'
                            }}
                        >
                            <Box
                                sx={{
                                    height: "100%",
                                    maxHeight: '250px',
                                    backgroundImage: `url(${card.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: "0.5rem",
                                    marginBottom: "0.4rem",
                                }}
                            />
                        </Box>
                    ))}
                </Slider>
            </Box>

            <Box sx={{mx: "10px"}}>
                <Box display={'flex'} justifyContent="space-between" flexDirection={{ xs: 'column-reverse', sm: 'row' }} marginBottom={'5px'} sx={{ mx: { xs: '7px', md: '0px' } }} >
                    <Box flex={1}>
                        <Typography color="#1d1d1d" fontFamily={'poppins, sans-serif'} fontWeight={'500'} sx={
                            { fontSize: { xs: '23px', sm: '36px' }, my: { xs: '11px', sm: '3px' } }
                        }>
                            Biryani Blues
                        </Typography>
                        <Typography fontFamily={'poppins, sans-serif'} sx={{ fontWeight: 350, color: 'gray' }}>Biryani, Hydrabadi, Mughlai</Typography>
                        <Typography fontFamily={'poppins, sans-serif'} sx={{ fontWeight: 250 }} color={'gray'}>DLF Avenue, Saket, New Delhi</Typography>
                        <Typography fontFamily={'poppins, sans-serif'} fontWeight={250} color={'gray'} fontSize={'14px'}>Opens - 9:30 - 10:00</Typography>

                        <Box display="flex" gap={1} my={1}></Box>

                    </Box>
                    <Box display="flex" gap={2}>
                        <RatingBox rating="4.4" count="935" label="Dining Ratings" />
                        <RatingBox rating="4.2" count="1,671" label="Delivery Ratings" />
                    </Box>
                </Box>

                <Box>
                    <Box sx={{ maxWidth: 600, margin: 'auto' }}>
                        <Typography variant="h6" sx={{ marginBottom: 2 }}>
                            Select your booking details
                        </Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={4}>
                                {/* <FormControl fullWidth>
                            <InputLabel><DateRangeIcon /> Today</InputLabel>
                            <Select>
                                <MenuItem value="Today">Today</MenuItem>
                                <MenuItem value="Tomorrow">Tomorrow</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl fullWidth>
                            <InputLabel><PeopleIcon /> 1 guest</InputLabel>
                            <Select>
                                <MenuItem value={0}>1 guest</MenuItem>
                                <MenuItem value={1}>2 guests</MenuItem>
                                <MenuItem value={2}>3 guests</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl fullWidth>
                            <InputLabel><AccessTimeIcon /> Dinner</InputLabel>
                            <Select>
                                <MenuItem value="Dinner">Dinner</MenuItem>
                                <MenuItem value="Lunch">Lunch</MenuItem>
                            </Select>
                        </FormControl> */}
                            </Grid>
                        </Grid>
                    </Box>
                    
                    <Grid container gap={4} display={'flex'} justifyContent={'center'} flexDirection={{ xs: 'column', sm: 'row' }}>
                    <Grid>
                        <FormControl fullWidth variant="outlined" sx={{ position: 'relative'}}>
                            <Select
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                sx={{
                                    px: "30px",
                                    fontFamily: "poppins, sans-serif",
                                    color: "gray",
                                    '& .MuiSelect-icon': {
                                        top: 'calc(50% - 12px)',
                                        right: '10px',
                                    },
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <MenuItem value="Today">Today</MenuItem>
                                <MenuItem value="Tomorrow">Tomorrow</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid>
                        <FormControl fullWidth variant="outlined" sx={{ position: 'relative' }}>
                            <Select value={guests} onChange={(e) => setGuests(e.target.value)}
                                sx={{
                                    px: "30px",
                                    fontFamily: "poppins, sans-serif",
                                    color: "gray",
                                    '& .MuiSelect-icon': {
                                        top: 'calc(50% - 12px)',
                                        right: '10px',
                                    },
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <MenuItem value={0}>1 guest</MenuItem>
                                <MenuItem value={1}>2 guests</MenuItem>
                                <MenuItem value={2}>3 guests</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid>
                        <FormControl fullWidth variant="outlined" sx={{ position: 'relative' }}>
                            <Select value={meal} onChange={(e) => setMeal(e.target.value)}
                                sx={{
                                    px: '30px',
                                    fontFamily: "poppins, sans-serif",
                                    color: "gray",
                                    '& .MuiSelect-icon': {
                                        top: 'calc(50% - 12px)',
                                        right: '10px',
                                    },
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <MenuItem value="Dinner">Dinner</MenuItem>
                                <MenuItem value="Lunch">Lunch</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    </Grid>


                    <Box sx={{ maxWidth: 500, margin: 'auto' }}>
                        <Divider sx={{ marginY: 2 }} />
                        <Typography variant="h6" sx={{ marginBottom: 2 }}>
                            Select slot
                        </Typography>
                        <Grid container spacing={2} alignItems="center">
                            {['9:30 PM', '9:30 PM', '10:00 PM', '10:00 PM', '10:30 PM'].map((time, index) => (
                                <Grid item xs={4} key={index}>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        sx={{
                                            padding: 2,
                                            textTransform: 'none',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography>{time}</Typography>
                                        <Typography variant="caption">2 offers</Typography>
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    <Box sx={{ padding: 3, maxWidth: 500, margin: 'auto' }}>
                        <Button fullWidth variant="contained" color="primary" disabled sx={{ padding: 2 }}>
                            Proceed to cart
                        </Button>
                    </Box>
                </Box>

                <Box>
                    <Typography sx={{ fontFamily: 'poppins, sans-serif', fontSize: '16px' }}>Related to You Mee, Saket</Typography>
                    <Typography sx={{ fontFamily: 'poppins, sans-serif', fontSize: '12px', color: 'gray', my: '5px' }}>Restaurants in DLF Avenue, Saket, Restaurants in New Delhi, New Delhi Restaurants, Saket restaurants, Best Saket restaurants, South Delhi restaurants, Casual Dining in Delhi NCR, Casual Dining near me, Casual Dining in South Delhi, Casual Dining in Saket, in Delhi NCR, near me, in South Delhi, in Saket, You Mee Menu, Order food online in Saket, Order food online in Delhi NCR, Order food online in South Delhi, New Year Parties in Delhi NCR, Christmas' Special in Delhi NCR</Typography>

                    <Typography sx={{ fontFamily: 'poppins, sans-serif', fontSize: '16px' }}>Restaurants around Saket</Typography>
                    <Typography sx={{ fontFamily: 'poppins, sans-serif', fontSize: '12px', color: 'gray', my: '5px' }}>Malviya Nagar restaurants, Geetanjali Enclave restaurants, Sainik Farms restaurants, Khanpur restaurants</Typography>

                    <Typography sx={{ fontFamily: 'poppins, sans-serif', fontSize: '16px' }}>Frequent searches leading to this page</Typography>
                    <Typography sx={{ fontFamily: 'poppins, sans-serif', fontSize: '12px', color: 'gray', my: '5px' }}>you mee menu, you mee saket menu, you mee new delhi, you mee new delhi menu, you mee restaurant</Typography>

                    <Typography sx={{ fontFamily: 'poppins, sans-serif', fontSize: '16px' }}>Top Stores</Typography>
                    <Typography sx={{ fontFamily: 'poppins, sans-serif', fontSize: '12px', color: 'gray', my: '5px' }}>Greater Kailash 2 (GK2), Nehru Place, DLF Phase 3, Sector 66, Sushant Lok, Paras Tierea, DLF Cyber City, NIT, Sector 68</Typography>
                </Box>
                <Box sx={{ marginTop: { xs: '14px', sm: '19px' } }}>
                    <BreadcrumbNavigation />
                </Box>
            </Box>
        </Box>
    )
}

export default RestaurantBookTableSmallScreen


const cards = [
    {
        image:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        title: "Cheese Burger",
        description: "Burger Arena",
        price: "$3.35",
    },
    {
        image:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        title: "Cheese Burger",
        description: "Burger Arena",
        price: "$3.35",
    },
    {
        image:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        title: "Cheese Burger",
        description: "Burger Arena",
        price: "$3.35",
    },
    {
        image:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        title: "Cheese Burger",
        description: "Burger Arena",
        price: "$3.35",
    },
    {
        image:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        title: "Cheese Burger",
        description: "Burger Arena",
        price: "$3.35",
    },
    {
        image:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        title: "Cheese Burger",
        description: "Burger Arena",
        price: "$3.35",
    },
    {
        image:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        title: "Cheese Burger",
        description: "Burger Arena",
        price: "$3.35",
    },
    {
        image:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        title: "Cheese Burger",
        description: "Burger Arena",
        price: "$3.35",
    },
];