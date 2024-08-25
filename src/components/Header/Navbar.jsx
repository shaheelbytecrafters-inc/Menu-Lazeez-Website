import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, styled } from '@mui/system';
import Modal from '@mui/material/Modal';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AuthForm from '../authComponent/AuthForm';
import { Drawer, List, ListItem, Stack } from '@mui/material';
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
    <Box >
      <AppBar position="sticky" sx={{ backgroundColor: 'transparent', borderRadius: 'none', boxShadow: 'none' }}>

        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Stack direction={'row'} width={'100%'} maxWidth={'1100px'} height={'72px'}>
            <Box
              flex={1}
              display={'flex'}
              alignItems={'center'}
            >
              <Typography variant="h6" component="div"
                sx={{
                  fontFamily: 'poppins, sans-serif',
                  fontWeight: '500'
                }}>
                Lazeez
              </Typography>
            </Box>

            <NavbarBox
              flex={1}
              justifyContent={'flex-end'}
              gap={'25px'}
            >
              <Button
                color="inherit"
                sx={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '15px',
                  fontWeight: 'normal',
                  color: 'white',
                }}
              >
                Add Restaurant
              </Button>
              <Button
                color="inherit"
                sx={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '15px',
                  fontWeight: 'normal',
                  color: 'white',
                }}
              >
                Sign up
              </Button>
              <Button
                color="inherit"
                onClick={handleOpenLogin}
                sx={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '15px',
                  fontWeight: 'normal',
                  color: 'white',
                }}
              >
                Login
              </Button>
            </NavbarBox>

            <HamburgerOrClose>
              {!showDrawer ? (
                <Button onClick={toggleDrawer(true)}>
                  <MenuRoundedIcon style={{ color: 'white' }} />
                </Button>
              ) : (
                <Button onClick={toggleDrawer(false)}>
                  <CloseIcon style={{ color: 'white' }} />
                </Button>
              )}
            </HamburgerOrClose>


            <Drawer open={showDrawer} onClose={toggleDrawer(false)}>
              <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
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
          </Stack>
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