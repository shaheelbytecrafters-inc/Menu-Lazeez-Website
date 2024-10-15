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
  Divider,
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
import { AccountCircle } from "@mui/icons-material";

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
  const { cartData, status, error } = useSelector((state) => state.cart);
  const protectedToken = localStorage.getItem("protectedToken");
  
  const navigate = useNavigate();
  const location = useLocation();
  const homePage = location.pathname === "/";
  const dispatch = useDispatch();
  const totalItemsInCart = cartData && cartData.items?.length || "0"


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

  useEffect(() => {

    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    const userId = userData?._id;
    // console.log("userId: ", userId);
    if (userId) {
      dispatch(fetchCartData(userId));
    }
  }, [dispatch]);

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
          backgroundColor: homePage
            ? scroll
              ? "#fe0604"
              : "transparent"
            : "#fe0604",
          color: "white",
          boxShadow: "none",
          padding: 0,
          margin: 0,
          // width:"100vw"
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
                  cursor: "pointer",
                }}
              >
                MenuLazeez
              </Typography>
            </Box>

            <NavbarBox
              flex={1}
              justifyContent={"flex-end"}
              gap={"15px"}
              width={"2rem"}
            >
              <SearchBar>
                <SearchIcon style={{ color: "white", fontSize: "1.7rem" }} />
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/searchBar")}
                >
                  Search
                </Typography>
              </SearchBar>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "white",
                  cursor: "pointer",
                }}
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
                  <StyledBadge badgeContent={totalItemsInCart}>
                    <ShoppingCartIcon style={{ color: "white" }} />
                  </StyledBadge>
                </IconButton>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Cart
                </Typography>
              </Box>
              {protectedToken && protectedToken !== "" ? (
                <Box>
                  <AccountMenu />
                </Box>
              ) : (
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
                    cursor: "pointer",
                  }}
                  onClick={() => handleOpenModal("logIn")}
                >
                  Login
                </Button>
              )}
            </NavbarBox>

            <HamburgerOrClose>
              {!showDrawer ? (
                <Button onClick={toggleDrawer(true)}>
                  <MenuRoundedIcon
                    style={{
                      color: "white",
                      fontSize: "2rem",
                      cursor: "pointer",
                    }}
                  />
                </Button>
              ) : (
                <Button onClick={toggleDrawer(false)}>
                  <CloseIcon
                    style={{
                      color: "white",
                      fontSize: "2rem",
                      cursor: "pointer",
                    }}
                  />
                </Button>
              )}
            </HamburgerOrClose>

            <Drawer
              anchor="left"
              open={showDrawer}
              onClose={toggleDrawer(false)}
              transitionDuration={600} // Smooth transition
              PaperProps={{
                sx: {
                  width: 270,
                  animation: showDrawer ? "slideIn 0.6s ease-out" : "none", // Custom animation
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "2rem",
                  marginInline: "1rem",
                  borderRadius: "12px",
                }}
                role="presentation"
                onClick={toggleDrawer(false)}
              >
                <Box display="flex" alignItems="center" gap="0.75rem">
                  <Box
                    sx={{
                      border: "2px solid #fe0604",
                      backgroundColor: "red",
                      color: "#fff",
                      width: "2.3rem",
                      height: "2rem",
                      display: "flex",
                      justifyContent: "center",
                      borderRadius: "0.5rem",
                      alignItems: "center",
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                      cursor: "pointer",
                    }}
                  >
                    ML
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#fe0604",
                      fontSize: "1.5rem",
                      cursor:"pointer"
                    }}
                  >
                    MenuLazeez
                  </Typography>
                </Box>

                <List>
                  <ListItem
                    sx={{
                      padding: "0.6rem",
                      transition:
                        "transform 0.3s ease, background-color 0.3s ease",
                      mt: "1rem",
                      "&:hover": {
                        backgroundColor: "#fe0604",
                        borderRadius: "0.5rem",
                        color: "#fff",
                        cursor:"pointer",
                        transform: "scale(1.05)",
                        "& svg": {
                          color: "#fff",
                          
                        },
                      },
                    }}
                    onClick={() => navigate("/profile")}
                  >
                    <ListItemIcon>
                      <AccountCircle
                        sx={{
                          color: "#fe0604",
                          fontSize: "1.8rem",
                          
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Sana"
                      primaryTypographyProps={{
                        fontSize: "1.2rem", // Increase the font size
                      }}
                    />
                  </ListItem>

                  <ListItem
                    sx={{
                      padding: "0.6rem",
                      transition:
                        "transform 0.3s ease, background-color 0.3s ease",
                      mt: "0.5rem",
                      "&:hover": {
                        backgroundColor: "#fe0604",
                        borderRadius: "0.5rem",
                        color: "#fff",
                        transform: "scale(1.05)",
                        "& svg": {
                          color: "#fff",
                        },
                      },
                    }}
                    onClick={() => navigate("/addRestaurant")}
                  >
                    <ListItemIcon>
                      <AddBoxIcon sx={{ color: "#fe0604", fontSize: "2rem" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Add Restaurant"
                      primaryTypographyProps={{
                        fontSize: "1.2rem", // Increase the font size
                      }}
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      padding: "0.6rem",
                      transition:
                        "transform 0.3s ease, background-color 0.3s ease",
                      mt: "0.5rem",
                      cursor:"pointer",
                      "&:hover": {
                        backgroundColor: "#fe0604",
                        borderRadius: "0.5rem",
                        color: "#fff",
                        transform: "scale(1.05)",
                        "& svg": {
                          color: "#fff",
                        },
                      },
                    }}
                    onClick={() => navigate("/cart")}
                  >
                    <ListItemIcon>
                      <ShoppingCartIcon
                        sx={{ color: "#fe0604", fontSize: "2rem" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Cart"
                      primaryTypographyProps={{
                        fontSize: "1.2rem", // Increase the font size
                      }}
                    />
                  </ListItem>

                  <ListItem
                    sx={{
                      padding: "0.6rem",
                      cursor:"pointer",
                      transition:
                        "transform 0.3s ease, background-color 0.3s ease",
                      mt: "0.5rem",
                      "&:hover": {
                        backgroundColor: "#fe0604",
                        borderRadius: "0.5rem",
                        color: "#fff",
                        transform: "scale(1.05)",
                        "& svg": {
                          color: "#fff",
                        },
                      },
                    }}
                    onClick={() => handleOpenModal("signUp")}
                  >
                    <ListItemIcon>
                      <SignUpIcon sx={{ color: "#fe0604", fontSize: "2rem" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Sign Up"
                      primaryTypographyProps={{
                        fontSize: "1.2rem", // Increase the font size
                      }}
                    />
                  </ListItem>

                  <ListItem
                    sx={{
                      padding: "0.6rem",
                      cursor:"pointer",
                      transition:
                        "transform 0.3s ease, background-color 0.3s ease",
                      mt: "0.5rem",
                      "&:hover": {
                        backgroundColor: "#fe0604",
                        borderRadius: "0.5rem",
                        color: "#fff",
                        transform: "scale(1.05)",
                        "& svg": {
                          color: "#fff",
                        },
                      },
                    }}
                    onClick={() => handleOpenModal("logIn")}
                  >
                    <ListItemIcon>
                      <LoginIcon sx={{ color: "#fe0604", fontSize: "2rem" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Login"
                      primaryTypographyProps={{
                        fontSize: "1.2rem", // Increase the font size
                      }}
                    />
                  </ListItem>
                </List>

                <Divider sx={{ margin: "1rem", marginTop: "3rem" }} />

                <Box sx={{ marginTop: "auto" }}>
                  <ListItem
                    sx={{
                      border: "1px solid #fe0604",
                      borderRadius: "8px",
                      padding: "0.6rem",
                      marginTop: "2.5rem",
                      backgroundColor: "#fff",
                      transition:
                        "transform 0.3s ease, background-color 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#fe0604",
                        borderRadius: "0.5rem",
                        color: "#fff",
                        transform: "scale(1.05)",
                        "& svg": {
                          color: "#fff",
                        },
                      },
                    }}
                    onClick={() => {
                      /* handleLogout */
                    }}
                  >
                    <ListItemIcon>
                      <LogoutIcon sx={{ color: "#fe0604", fontSize: "2rem" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Logout"
                      primaryTypographyProps={{
                        fontSize: "1.2rem", // Increase the font size
                      }}
                    />
                  </ListItem>
                </Box>
              </Box>
            </Drawer>
          </Stack>
        </Toolbar>
      </AppBar>
      {/* Modals */}
      {openModal === "logIn" && (
        <Login
          open={true}
          handleClose={handleCloseModal}
          handleOpenModal={handleOpenModal}
        />
      )}
      {openModal === "signUp" && (
        <SignUp
          open={true}
          handleClose={handleCloseModal}
          handleOpenModal={handleOpenModal}
        />
      )}
      {openModal === "otp" && (
        <OTPInput
          open={true}
          handleClose={handleCloseModal}
          handleOpenModal={handleOpenModal}
        />
      )}
      {openModal === null && <></>}{" "}
      {/* Assuming this is always rendered based on your original structure */}
    </>
  );
};

export default Navbar;