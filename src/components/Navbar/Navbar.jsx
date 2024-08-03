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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ borderRadius: '13px', backgroundColor: 'pink' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Restro-web
          </Typography>
          <Button color="inherit" onClick={handleOpen}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <StyledModal open={open} onClose={handleClose} >
        <Box sx={{width:{sm: '50%',}}}>
          <AuthForm />
        </Box>
      </StyledModal>
    </Box>
  );
};

export default Navbar;