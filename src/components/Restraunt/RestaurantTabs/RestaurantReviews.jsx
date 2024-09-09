import { Box, Typography } from '@mui/material'
import React from 'react'
import RestaurantReviewUserCard from '../RestaurantReviewuserCard'

const RestaurantReviews = () => {
    return (
        <Box>
            <Typography sx={{fontSize: '25px', fontFamily: 'poppins, sans-serif'}}>Biryani Blues Reviews</Typography>
            <Box my={'10px'}>
                <Typography sx={{fontFamily: 'poppins, sans-serif', fontSize: '19px', fontWeight: '300'}}> All Reviews</Typography>
                <Box display={'flex'} flexDirection={'column'} gap={'4px'}>
                    <RestaurantReviewUserCard />
                    <RestaurantReviewUserCard />
                    <RestaurantReviewUserCard />
                    <RestaurantReviewUserCard />
                    <RestaurantReviewUserCard />
                </Box>
            </Box>
        </Box>
    )
}

export default RestaurantReviews
