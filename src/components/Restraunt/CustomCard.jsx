// import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export const  CustomCard = ({ icon, title, offer, bgColor }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: bgColor,
      padding: '16px',
      borderRadius: '8px',
      boxSizing: 'border-box'

    }}
  >
    <Grid container alignItems="center">
      <Grid item>
        <Box sx={{ fontSize: '2rem', marginRight: '16px' }}>{icon}</Box>
      </Grid>
      <Grid item>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        {offer && (
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1565c0', // Blue color for the offer button
              color: 'white',
              textTransform: 'none',
              padding: '2px 8px',
              fontSize: '12px',
              marginTop: '4px',
            }}
            disableElevation
          >
            {offer}
          </Button>
        )}
      </Grid>
    </Grid>
    <ArrowForwardIosIcon sx={{ fontSize: '1.2rem' }} />
  </Box>
);
