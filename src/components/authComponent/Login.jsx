import  { useState } from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';

const Login = ({setIsLogin}) => {

  const handleKey = (event) => {
    if (!/\d/.test(event.key)) {
        event.preventDefault()
    }
}
const [contactNumber, setContactNumber] = useState('')

const handleLogin = () =>{
  if (contactNumber.length>=10) {
    setIsLogin(false)
  }else{
    alert('Invalid contact number')
  }
}

  return (
    <Container maxWidth="xs" sx={{backgroundColor:'white', borderRadius: 4}}>
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
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{color: 'white' , backgroundColor:'red'}}
          onClick={handleLogin}
          
        >
          Send OTP
        </Button>        
      </Box>
    </Container>
  );
};

export default Login;