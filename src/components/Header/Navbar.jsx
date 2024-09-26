import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { styled } from '@mui/material/styles';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Drawer,
  List,
  ListItem,
  Stack,
  Badge,
  IconButton,
  ListItemIcon,
  ListItemText,
  Box,
  Modal,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import SignUpIcon from "@mui/icons-material/PersonAdd";
import Login from "../authComponent/Login";
import OTPInput from "../../components/authComponent/Otp";
import SignUp from "../../components/authComponent/SignUp";
import { useDispatch, useSelector } from "react-redux";
import AccountMenu from "../AccountMenu/AccountMenu";
import { fetchCartData } from "../../redux/cartSlice/cart";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: 'auto' },
  bgcolor: 'transparent',
  border: '1px solid black',
};

const HamburgerOrClose = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavbarBox = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const SearchBar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "transparent",
  padding: "0 5px",
  height: "2rem",
  color: "white",
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
  color: "white",
}));

const Navbar = () => {
  const [openModal, setOpenModal] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const homePage = location.pathname === "/";
  const { cartData, status, error } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("Cart =>", cartData);

  // useEffect(() => {
  //   const storedUserData = localStorage.getItem("userData");
  //   let userData = {};
  //   if (storedUserData) {
  //     try {
  //       userData = JSON.parse(storedUserData); // Safely parse JSON
  //     } catch (e) {
  //       console.error("Invalid JSON in localStorage for 'userData':", e);
  //     }
  //   }  
  //   const userId = userData?._id;
  //   if (userId) {
  //     dispatch(fetchCartData(userId));
  //   }
  // }, [dispatch]);
  
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    let userData = {};

    if (storedUserData) {
      try {
        userData = JSON.parse(storedUserData); // Safely parse JSON
      } catch (e) {
        console.error("Invalid JSON in localStorage for 'userData':", e);
      }
    } else {
      console.log("No user data found in localStorage.");
    }

    const userId = userData?._id;
    if (userId) {
      dispatch(fetchCartData(userId));
    }
  }, [dispatch]);



  useEffect(() => {

    const handleScroll = () => {
      setScroll(window.scrollY > window.innerHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [homePage]);

  const handleOpenModal = (type) => {
    setOpenModal(type);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  const toggleDrawer = (newOpen) => () => {
    setShowDrawer(newOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: homePage ? (scroll ? "#fe0604" : "transparent") : "#fe0604",
          color: "white",
          boxShadow: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack direction={"row"} width={"100vw"} height={"72px"}>
            <Box flex={1} display={"flex"} alignItems="center">
              <Typography
                variant="h6"
                component="div"
                onClick={() => navigate("/")}
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "700",
                  color: homePage ? (scroll ? "white" : "black") : "white",
                  fontSize: "2rem",
                  textTransform: "italic",
                }}
              >
                MenuLazeez
              </Typography>
            </Box>

            <NavbarBox flex={1} justifyContent={"flex-end"} gap={"15px"} width={"2rem"}>
              <SearchBar>
                <SearchIcon style={{ color: "white", fontSize: "1.7rem" }} />
                <Typography
                  sx={{ color: "white", fontSize: "18px", fontWeight: "500" }}
                  onClick={() => navigate("/searchBar")}
                >
                  Search
                </Typography>
              </SearchBar>
              <Typography
                sx={{ fontSize: "18px", fontWeight: "500", color: "white" }}
                onClick={() => navigate("/foodDetails")}
              >
                Restaurant
              </Typography>
              <Box
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                onClick={() => navigate("/cart")}
              >
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={10}>
                    <ShoppingCartIcon style={{ color: "white" }} />
                  </StyledBadge>
                </IconButton>
                <Typography sx={{ fontSize: "18px", fontWeight: "500", color: "white" }}>
                  Cart
                </Typography>
              </Box>
              {/* <Button
                sx={{
                  backgroundColor: "white",
                  borderRadius: "100px",
                  whiteSpace: "nowrap",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                  color: "black",
                  cursor: "pointer",
                  display: "inline-block",
                  fontFamily: "CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif",
                  textAlign: "center",
                  textDecoration: "none",
                  transition: "all 250ms",
                  border: 0,
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "none",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  touchAction: "manipulation",
                  "&:hover": {
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                    transform: "scale(1.05) rotate(-1deg)",
                    backgroundColor: "white", // Keeps the button white on hover
                  },
                }}
                onClick={() => handleOpenModal("signUp")}
              >
                Sign up
              </Button> */}
              <Box>
                <AccountMenu />
              </Box>
              <Button
                sx={{
                  backgroundColor: "white",
                  borderRadius: "100px",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                  color: "black",
                  textTransform: "none",
                  "&:hover": {
                    transform: "scale(1.05) rotate(-1deg)",
                    backgroundColor: "white",
                  },
                }}
                onClick={() => handleOpenModal("logIn")}
              >
                Login
              </Button>
            </NavbarBox>

            <HamburgerOrClose>
              {!showDrawer ? (
                <Button onClick={toggleDrawer(true)}>
                  <MenuRoundedIcon style={{ color: "white", fontSize: "2rem" }} />
                </Button>
              ) : (
                <Button onClick={toggleDrawer(false)}>
                  <CloseIcon style={{ color: "white", fontSize: "2rem" }} />
                </Button>
              )}
            </HamburgerOrClose>

            <Drawer anchor="left" open={showDrawer} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  width: 250,
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "4rem",
                  marginInline: "2rem",
                }}
                role="presentation"
                onClick={toggleDrawer(false)}
              >
                <List>
                  <ListItem
                    sx={{ borderBottom: "1px solid black" }}
                    onClick={() => navigate("/addRestaurant")}
                  >
                    <ListItemIcon>
                      <AddBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Restaurant" />
                  </ListItem>

                  <ListItem
                    sx={{ borderBottom: "1px solid black" }}
                    onClick={() => navigate("/cart")}
                  >
                    <ListItemIcon>
                      <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cart" />
                  </ListItem>

                  <ListItem
                    sx={{ borderBottom: "1px solid black" }}
                    onClick={() => handleOpenModal("signUp")}
                  >
                    <ListItemIcon>
                      <SignUpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sign up" />
                  </ListItem>

                  <ListItem
                    sx={{ borderBottom: "1px solid black" }}
                    onClick={() => handleOpenModal("logIn")}
                  >
                    <ListItemIcon>
                      <LoginIcon />
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                  </ListItem>
                </List>

                <Box sx={{ marginTop: "auto" }}>
                  <ListItem
                    sx={{ border: "1px solid black", marginTop: "100%" }}
                    onClick={() => {
                      /* handleLogout */
                    }}
                  >
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItem>
                </Box>
              </Box>
            </Drawer>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Modals */}
      {openModal === "logIn" && <Login open={true} handleClose={handleCloseModal} handleOpenModal={handleOpenModal} />}
      {openModal === "signUp" && <SignUp open={true} handleClose={handleCloseModal} handleOpenModal={handleOpenModal} />}
      {openModal === "otp" && <OTPInput open={true} handleClose={handleCloseModal} handleOpenModal={handleOpenModal} />}
      {openModal === null && <></>} {/* Assuming this is always rendered based on your original structure */}
    </>
  );
};

export default Navbar;