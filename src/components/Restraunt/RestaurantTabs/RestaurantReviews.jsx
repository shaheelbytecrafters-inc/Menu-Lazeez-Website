import { Box, Typography } from '@mui/material'
import React from 'react'
import RestaurantReviewUserCard from '../RestaurantReviewuserCard'

const RestaurantReviews = () => {
    return (
        <Box>
            <Typography variant="h4" component="h2">Biryani Blues Reviews</Typography>
            <Box mx={'5px'} my={'10px'}>
                <Typography variant='h6'>Reviews</Typography>
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
