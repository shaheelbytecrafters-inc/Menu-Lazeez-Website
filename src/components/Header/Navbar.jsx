import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, styled } from '@mui/system';
import Modal from '@mui/material/Modal';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AuthForm from '../authComponent/AuthForm';

const StyledModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpenLogin = () => {
    setOpen(true);
  };

  const handleCloseLogin = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: 'transparent', borderRadius:'none' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Restro-web
          </Typography>

          <Box
          display={'flex'}
          gap={'10px'}
          >
          <Button color="inherit">
            Add Restraunt
          </Button>
          <Button color="inherit">
            Sign up
          </Button>
          <Button color="inherit" onClick={handleOpenLogin}>
            Login
          </Button>
          </Box>

        </Toolbar>
      </AppBar>
      <StyledModal open={open} onClose={handleCloseLogin} >
        <Box sx={{width:{xs: '90%', sm: '50%'}}}>
          <AuthForm />
        </Box>
      </StyledModal>
    </Box>
  );
};

export default Navbar;