import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { Box, styled } from "@mui/system";
import Modal from "@mui/material/Modal";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AuthForm from "../authComponent/AuthForm";
import { Drawer, List, ListItem, Stack, Badge, IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

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

  color: "black",
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
  const [open, setOpen] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const homePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > window.innerHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [homePage]);

  const handleOpenLogin = () => {
    setOpen(true);
  };

  const handleCloseLogin = () => {
    setOpen(false);
  };

  const toggleDrawer = (newOpen) => () => {
    setShowDrawer(newOpen);
  };

  const handleNavigation = (path) => () => {
  // Scroll to the top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Navigate to the specified path
  navigate(path);
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
          zIndex: 1600,
          boxShadow: "none",
          // width:"100vw",
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
          <Stack
            direction={"row"}
            width={"100vw"}
            // maxWidth={"1100px"}
            height={"72px"}
          >
            <Box flex={1} display={"flex"} alignItems="center">
              <Typography
                variant="h6"
                component="div"
                onClick={() => navigate("/")}
                sx={{
                  fontFamily: "poppins, sans-serif",
                  fontWeight: "700",
                  color: homePage ? (scroll ? "white" : "black") : "white",
                  fontSize: "2rem",
                  textTransform: "italic",
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
                <SearchIcon
                  style={{
                    color: "#fff",
                    fontSize: "1.7rem",
                  }}
                />
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                  onClick={() => navigate("/searchBar")}
                >
                  Search
                </Typography>
              </SearchBar>
              <Typography
                sx={{ fontSize: "18px", fontWeight: "500" }}
                onClick={() => navigate("/foodDetails")}
              >
                Restaurant
              </Typography>
              <Box
                color="inherit"
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "white",
                  textTransform: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                onClick={() => navigate("/cart")}
              >
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4}>
                    <ShoppingCartIcon style={{ color: "white" }} />
                  </StyledBadge>
                </IconButton>
                <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>
                  Cart
                </Typography>
              </Box>
              <Button
                sx={{
                  backgroundColor: "white",
                  borderRadius: "100px",
                  whiteSpace: "nowrap",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                  color: "black",
                  cursor: "pointer",
                  display: "inline-block",
                  fontFamily:
                    "CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif",
                  // padding: "5px 20px",
                  // paddingInline:"20px",
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
              >
                Sign up
              </Button>
              <Button
                sx={{
                  backgroundColor: "white",
                  borderRadius: "100px",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                  color: "black",
                  cursor: "pointer",
                  display: "inline-block",
                  fontFamily:
                    "CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif",
                  padding: "5px 15px",
                  textAlign: "center",
                  textDecoration: "none",
                  transition: "all 250ms",
                  border: 0,
                  fontSize: "14px",
                  fontWeight: 600,
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  touchAction: "manipulation",
                  textTransform: "none",
                  "&:hover": {
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                    transform: "scale(1.05) rotate(-1deg)",
                    backgroundColor: "white", // Keeps the button white on hover
                  },
                }}
                onClick={handleOpenLogin}
              >
                Login
              </Button>
            </NavbarBox>

            <HamburgerOrClose>
              {!showDrawer ? (
                <Button onClick={toggleDrawer(true)}>
                  <MenuRoundedIcon
                    style={{ color: "white", fontSize: "2rem" }}
                  />
                </Button>
              ) : (
                <Button onClick={toggleDrawer(false)}>
                  <CloseIcon style={{ color: "white", fontSize: "2rem" }} />
                </Button>
              )}
            </HamburgerOrClose>

            <Drawer
              anchor="left" // Ensure drawer opens from left
              open={showDrawer}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{
                  width: 250,
                  padding: "10px", // Add padding for better spacing
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px", // Add gap between items
                }}
                role="presentation"
                onClick={toggleDrawer(false)}
              >
                <List>
                  <ListItem>
                    <Button
                      color="inherit"
                      fullWidth // Ensures button takes full width of drawer
                      sx={{
                        justifyContent: "flex-start", // Align text to left
                      }}
                      onClick={() => navigate("/foodDetails")} // Add functionality as needed
                    >
                      Restaurant
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button
                      color="inherit"
                      fullWidth
                      sx={{ justifyContent: "flex-start" }}
                      onClick={() => navigate("/foodDetails")}
                    >
                      Add Restaurant
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button
                      color="inherit"
                      fullWidth
                      sx={{ justifyContent: "flex-start" }}
                    >
                      Sign up
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button
                      color="inherit"
                      fullWidth
                      sx={{ justifyContent: "flex-start" }}
                      onClick={handleOpenLogin}
                    >
                      Login
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button
                      color="inherit"
                      fullWidth
                      startIcon={<ShoppingCartIcon />}
                      sx={{ justifyContent: "flex-start" }}
                      onClick={() => navigate("/cart")}
                    >
                      Cart
                    </Button>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </Stack>
        </Toolbar>
      </AppBar>

      <StyledModal open={open} onClose={handleCloseLogin}>
        <Box sx={{ width: { xs: "90%", sm: "50%" } }}>
          <AuthForm />
        </Box>
      </StyledModal>
    </>
  );
};

export default Navbar;
