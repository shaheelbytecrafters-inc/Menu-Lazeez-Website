import React from 'react';
import { Box, Typography, Select, MenuItem, IconButton, Grid } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter, YouTube, Flag } from '@mui/icons-material';

const Footer = () => {
  const [optionOne, setOptionOne] = React.useState('');
  const [optionTwo, setOptionTwo] = React.useState('');

  const handleOptionOneChange = (event) => {
    setOptionOne(event.target.value);
  };

  const handleOptionTwoChange = (event) => {
    setOptionTwo(event.target.value);
  };

  return (
    <Box
      // component="footer"
      sx={{
        backgroundColor: '#f8f9fa',
        padding: '40px 0',
        textAlign: 'center',
        color: '#666',
      }}
    >
      {/* Header with Dropdowns */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px',
          backgroundColor: '#f8f9fa',
        }}
      >
        {/* Headline */}
        <Typography variant="h4" sx={{ left: 1, color:"black" }}>
          RESTRO
        </Typography>

        {/* First Dropdown */}
        <Select
          value={optionOne}
          onChange={handleOptionOneChange}
          displayEmpty
          sx={{ minWidth: 150, marginRight: 2 }}
        >
          <MenuItem value="">
            <em><Flag /> India</em>
          </MenuItem>
          <MenuItem value="uae">UAE</MenuItem>
        </Select>

        {/* Second Dropdown */}
        <Select
          value={optionTwo}
          onChange={handleOptionTwoChange}
          displayEmpty
          sx={{ minWidth: 150 }}
        >
          <MenuItem value="">
            <em>English</em>
          </MenuItem>
          <MenuItem value="optionA">Option A</MenuItem>
          <MenuItem value="optionB">Option B</MenuItem>
        </Select>
      </Box>

      {/* Footer Links */}
      <Grid container spacing={4} justifyContent="space-between" sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="subtitle1" sx={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>
            ABOUT RESTRO
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Who we are', 'Blog', 'Work with us', 'Investor Relation', 'Report Fraud', 'Press Kit', 'Contact Us'].map((item, index) => (
              <Box component="li" key={index} sx={{ marginBottom: '10px' }}>
                {item}
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="subtitle1" sx={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>
            RESTROVERSE
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Restro', 'Blinkit', 'Feeding India', 'Hyperpure', 'Restro Live', 'Restroland', 'Weather Union'].map((item, index) => (
              <Box component="li" key={index} sx={{ marginBottom: '10px' }}>
                {item}
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="subtitle1" sx={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>
            FOR RESTAURANTS
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Partner with us', 'Apps For You'].map((item, index) => (
              <Box component="li" key={index} sx={{ marginBottom: '10px' }}>
                {item}
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="subtitle1" sx={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>
            LEARN MORE
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Privacy', 'Security', 'Terms', 'Sitemap'].map((item, index) => (
              <Box component="li" key={index} sx={{ marginBottom: '10px' }}>
                {item}
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="subtitle1" sx={{ color: '#333', fontWeight: 'bold' }}>
            SOCIAL LINKS
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton href="#" sx={{ color: 'black' }}>
              <Facebook />
            </IconButton>
            <IconButton href="#" sx={{ color: 'black' }}>
              <Twitter />
            </IconButton>
            <IconButton href="#" sx={{ color: 'black' }}>
              <Instagram />
            </IconButton>
            <IconButton href="#" sx={{ color: 'black' }}>
              <LinkedIn />
            </IconButton>
            <IconButton href="#" sx={{ color: 'black' }}>
              <YouTube />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <hr />

      {/* Footer Bottom */}
      <Box sx={{ marginTop: '20px', fontSize: '14px', color: '#aaa' }}>
        <Typography>© 2024 Zomato. All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;