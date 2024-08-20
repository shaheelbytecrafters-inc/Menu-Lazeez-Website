import { Box, Typography } from '@mui/material'
import React from 'react'
import RestaurantReviewUserCard from '../RestaurantReviewuserCard'

const RestaurantPhotos = () => {
    return (
        <Box>
            <Typography variant="h4" component="h2">Biryani Blues Photos</Typography>
            <Box mx={'5px'} my={'10px'}>
                <Box display={'flex'} gap={'1px'}>
                    {foodImages.map(img=>(
                        <img src={img} alt="food Image" />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default RestaurantPhotos;

const foodImages = [
    "https://via.placeholder.com/150?text=Food+1",
    "https://via.placeholder.com/150?text=Food+2",
    "https://via.placeholder.com/150?text=Food+3",
    "https://via.placeholder.com/150?text=Food+4",
    "https://via.placeholder.com/150?text=Food+5",
    "https://via.placeholder.com/150?text=Food+6",
    "https://via.placeholder.com/150?text=Food+7",
    "https://via.placeholder.com/150?text=Food+8",
    "https://via.placeholder.com/150?text=Food+9",
    "https://via.placeholder.com/150?text=Food+10",
  ];
  
