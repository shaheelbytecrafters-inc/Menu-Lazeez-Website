import { Box, Grid, Skeleton } from '@mui/material'
import React from 'react'

const ShimmerReview = () => {
  return (
    <Box sx={{width:"100%", display:"flex", alignItems:"center" , justifyContent:"center"}}>
      <Box>
        {Array.from({ length: 5 }).map((_, index) => (
          <Grid item xs={12} key={index}>
            <Box display="flex" justifyContent="center">
              <Box
                display="flex"
                alignItems="center"
                p={2}
                sx={{
                  borderRadius: "12px",
                  width: "70vw",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Skeleton
                  variant="circular"
                  width={40}
                  height={40}
                  sx={{ mr: 2 }}
                />
                <Box width="100%">
                  <Skeleton width="30%" height={30} sx={{ mb: 1 }} />
                  <Skeleton width="20%" height={20} sx={{ mb: 1 }} />
                  <Skeleton width="100%" height={60} sx={{ mb: 1 }} />
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}

export default ShimmerReview
