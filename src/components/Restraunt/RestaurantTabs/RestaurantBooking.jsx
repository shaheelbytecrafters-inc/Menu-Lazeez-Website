import React from 'react';
import { Box, Button, Typography, MenuItem, Select, InputLabel, FormControl, Grid, Divider } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const RestaurantBooking = () => {
    return (
        <>
            <Box sx={{ maxWidth: 500, margin: 'auto' }}>
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
        </>
    )
}

export default RestaurantBooking
