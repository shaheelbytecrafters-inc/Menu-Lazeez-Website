import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import RestaurantReviewUserCard from '../RestaurantReviewuserCard'

const RestaurantPhotos = () => {
  return (
    <Box
      maxWidth={'1115px'}
      width={'100%'}>
      <Typography variant="h4" component="h2" >Biryani Blues Photos</Typography>
      <Box my={'10px'} >
        <Box my={'10px'} display='flex' gap={'5px'} >
          <Button
            variant="contained"
            sx={{
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

        <Box>
          <Grid
            container
            spacing={1}
            sx={{justifyContent: 'center' }}
          >
            {foodImages.map((img, index) => (
              <Grid
                item
                key={index}
                xs={2.4}
              >
                <Box
                  component="img"
                  src={img}
                  alt={`Food Image ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '210px',
                    maxHeight: '200px',
                    borderRadius: '8px',
                    objectFit: 'cover',
                  }}
                />
              </Grid>
            ))}
          </Grid>

        </Box>
      </Box>
    </Box>
  )
}

export default RestaurantPhotos;

const foodImages = [
  "https://th.bing.com/th/id/OIP.NZfYrsSO8DF9hv4jVGqeRAHaEm?w=247&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.NZfYrsSO8DF9hv4jVGqeRAHaEm?w=247&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.NZfYrsSO8DF9hv4jVGqeRAHaEm?w=247&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.NZfYrsSO8DF9hv4jVGqeRAHaEm?w=247&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.NZfYrsSO8DF9hv4jVGqeRAHaEm?w=247&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.NZfYrsSO8DF9hv4jVGqeRAHaEm?w=247&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.NZfYrsSO8DF9hv4jVGqeRAHaEm?w=247&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.NZfYrsSO8DF9hv4jVGqeRAHaEm?w=247&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.NZfYrsSO8DF9hv4jVGqeRAHaEm?w=247&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.NZfYrsSO8DF9hv4jVGqeRAHaEm?w=247&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.NZfYrsSO8DF9hv4jVGqeRAHaEm?w=247&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.NZfYrsSO8DF9hv4jVGqeRAHaEm?w=247&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.NZfYrsSO8DF9hv4jVGqeRAHaEm?w=247&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.NZfYrsSO8DF9hv4jVGqeRAHaEm?w=247&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.NZfYrsSO8DF9hv4jVGqeRAHaEm?w=247&h=180&c=7&r=0&o=5&pid=1.7"

];

