import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import RestaurantReviewUserCard from '../RestaurantReviewuserCard'

const RestaurantPhotos = () => {
    return (
        <Box>
            <Typography variant="h4" component="h2">Biryani Blues Photos</Typography>
            <Box my={'10px'}>
                <Box my={'10px'} display= 'flex' gap={'5px'}>
                    <Button
                    variant="contained" 
                    sx={{ 
                      backgroundColor: 'red', 
                      color: '#fff',              
                      borderRadius: '8px',        
                      '&:hover': {
                        backgroundColor: '#E74453' 
                      },
                    }}
                    >All</Button>
                    <Button
                    variant="contained" 
                    sx={{ 
                      color: '#fff',              
                      borderRadius: '8px',        
                      '&:hover': {
                        backgroundColor: '#E74453' 
                      },
                    }}
                    >Food</Button>
                    <Button
                    variant="contained" 
                    sx={{ 
                      color: '#fff',              
                      borderRadius: '8px',        
                      '&:hover': {
                        backgroundColor: '#E74453' 
                      },
                    }}
                    >Ambience</Button>
                </Box>
                <Box display={'flex'} gap={'1px'}>
                    {foodImages.map((img, index)=>(
                        <img src={img} alt="food Image" key={index}/>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default RestaurantPhotos;

const foodImages = [
    "https://th.bing.com/th/id/OIP.NZfYrsSO8DF9hv4jVGqeRAHaEm?w=247&h=180&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.NZfYrsSO8DF9hv4jVGqeRAHaEm?w=247&h=180&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.NZfYrsSO8DF9hv4jVGqeRAHaEm?w=247&h=180&c=7&r=0&o=5&pid=1.7"
   
  ];
  
  