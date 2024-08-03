import React from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';

const Login = () => {

  const handleKey = (event) => {
    if (!/\d/.test(event.key)) {
        event.preventDefault()
    }
}

  return (
    <Container maxWidth="xs" sx={{backgroundColor:'pink', borderRadius: 3}}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height={400}
        gap={3}
      >
        <Typography variant="h3">
          Login
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Mobile Number"
          onKeyPress={handleKey}
        />
        <Button
          variant="contained"
          sx={{color: 'white' , backgroundColor:'red'}}
        >
          Send OTP
        </Button>        
      </Box>
    </Container>
  );
};

export default Login;