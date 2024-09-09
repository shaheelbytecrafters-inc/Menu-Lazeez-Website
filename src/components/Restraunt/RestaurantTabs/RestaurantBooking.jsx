import React, { useState } from 'react';
import { Box, Button, Typography, MenuItem, Select, FormControl, Grid, Divider } from '@mui/material';

const RestaurantBooking = () => {
    const [date, setDate] = useState('Today');
    const [guests, setGuests] = useState(0);
    const [meal, setMeal] = useState('Dinner');
    return (
        <>
            <Box sx={{ maxWidth: 600, margin: 'auto' }}>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Select your booking details
                </Typography>
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
            </Box>

            <Box sx={{ maxWidth: 600, margin: 'auto' }}>
                <Divider sx={{ marginY: 2 }} />
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Select slot
                </Typography>
                <Grid gap={'12px'} display={'flex'}>
                    {['9:30 PM', '9:30 PM', '10:00 PM', '10:00 PM', '10:30 PM'].map((time, index) => (
                        <Grid key={index}>
                            <Button
                                variant="outlined"
                                sx={{
                                    textTransform: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    border: "1px solid lightgray", 
                                    borderRadius: "10px",
                                }}
                            >
                                <Typography sx={{color: 'black', fontFamily: 'poppins, sans-serif', fontSize: '14px', fontWeight:'500'}}>{time}</Typography>
                                <Typography variant="caption" sx={{fontFamily: 'poppins, sans-serif'}}>2 offers</Typography>
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ padding: 3, maxWidth: 600, margin: 'auto' }}>
                <Button fullWidth variant="contained" color="primary" disabled sx={{ padding: 2 }}>
                    Proceed to cart
                </Button>
            </Box>
        </>
    )
}

export default RestaurantBooking
