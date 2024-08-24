import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, styled } from '@mui/system';
import Modal from '@mui/material/Modal';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AuthForm from '../authComponent/AuthForm';
import { Drawer, List, ListItem } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';

const StyledModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const HamburgerOrClose = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  }
}))

const NavbarBox = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  [theme.breakpoints.up("sm")]: {
    display: 'flex'
  }
}))


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false)

  // Login Modal
  const handleOpenLogin = () => {
    setOpen(true);
  };
  const handleCloseLogin = () => {
    setOpen(false);
  };

  // hamburger narbar
  const toggleDrawer = (newOpen) => () => {
    setShowDrawer(newOpen)
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: 'transparent', borderRadius: 'none' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Restro-web
          </Typography>

          <NavbarBox
            display={'flex'}
            gap={'10px'}
          >

            <Button
              color="inherit">
              Add Restraunt
            </Button>

            <Button
              color="inherit">
              Sign up
            </Button>

            <Button
              color="inherit"
              onClick={handleOpenLogin}
            >
              Login
            </Button>
          </NavbarBox>

          <HamburgerOrClose>
            {!showDrawer ? (<Button onClick={toggleDrawer(true)}><MenuRoundedIcon /></Button>) : (<Button onClick={toggleDrawer(false)}><CloseIcon /></Button>)}
          </HamburgerOrClose>

          <Drawer open={showDrawer} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 250}} role='presentation' onClick={toggleDrawer(false)}>
            <List>
              <ListItem>
                <Button color="inherit">
                  Add Restraunt
                </Button>
              </ListItem>
              <ListItem>
                <Button color="inherit">
                  Sign up
                </Button></ListItem>
              <ListItem><Button color="inherit" onClick={handleOpenLogin}>
                Login
              </Button></ListItem>
            </List>
            </Box>
          </Drawer>

        </Toolbar>
      </AppBar>
      <StyledModal open={open} onClose={handleCloseLogin} >
        <Box sx={{ width: { xs: '90%', sm: '50%' } }}>
          <AuthForm />
        </Box>
      </StyledModal>
    </Box>
  );
};

export default Navbar;