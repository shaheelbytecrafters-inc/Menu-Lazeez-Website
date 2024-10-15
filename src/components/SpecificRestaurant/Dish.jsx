import React, { useEffect, useState } from "react";
import {
  CardContent,
  Typography,
  Box,
  Button,
  CardMedia,
  Divider,
  Modal,
  Grid,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  fetchSearchResults,
} from "../../redux/searchSlice/searchSlice.js";

import { fetchCartData, postAddToCart } from "../../redux/cartSlice/cart.js";
import { updateCartQuantity } from "../../redux/cartSlice/cart";
import ShimmerDish from "./ShimmerDish.jsx";
import { useMediaQuery } from "@mui/material";
import DishCard from "./DishCard/DishCard.jsx";
// import { Grid } from "@mui/system";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Dish = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchQuery = location.state?.query?.toLowerCase() || "";
  const { results, isLoading, error } = useSelector((state) => state.search);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [newRestaurantData, setNewRestaurantData] = React.useState(null);

  const { cartData } = useSelector((state) => state.cart);
  const totalCartItems = cartData?.items || [];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (searchQuery.length > 0) {
      dispatch(fetchSearchResults(searchQuery));
      dispatch(setQuery(searchQuery));
    }
  }, [dispatch, searchQuery]);

  const getFilteredDishes = (restaurants = [], searchTerm) => {
    if (!searchTerm) return [];
    let matchedDishes = [];
    restaurants.forEach((restaurant) => {
      const filteredMenu = restaurant.menu?.filter((dish) =>
        dish.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredMenu && filteredMenu.length > 0) {
        matchedDishes.push({
          restaurantName: restaurant.name || "Unknown Restaurant",
          restaurantId: restaurant.restaurantId || "Unknown ID",
          dishes: filteredMenu,
        });
      }
    });
    return matchedDishes;
  };

  const handleAddToCart = async (dish, restaurantId) => {
    // Accept restaurantId as a parameter
    const userId = JSON.parse(localStorage.getItem("userData"))?._id;
    let payload = {};

    payload = {
      userId,
      restaurantId, // Use the restaurantId passed in from the map function
      itemId: dish.dishId,
      productName: dish.name,
      quantity: 1, // You can adjust the quantity dynamically
      price: dish.price,
      resetCart: false,
    };

    const response = await dispatch(postAddToCart({ payload }));
    console.log("response =>", response);

    if (response?.error?.message === "Rejected") {
      handleOpen();
      setMessage(response.payload.message);

      payload = {
        userId,
        restaurantId, // Use the restaurantId passed in from the map function
        itemId: dish.dishId,
        productName: dish.name,
        quantity: 1, // You can adjust the quantity dynamically
        price: dish.price,
        resetCart: true,
      };
      setNewRestaurantData(payload);
    }

    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    const userid = userData?._id;

    if (userid) {
      dispatch(fetchCartData(userid));
    }
  };

  const handleNewRestaurantData = async () => {
    await dispatch(postAddToCart({ payload: newRestaurantData }));
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    const userid = userData?._id;
    if (userid) {
      dispatch(fetchCartData(userid));
    }
    setNewRestaurantData(null);
    handleClose();
  };

  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("sm", "md")
  );

  const filteredDishes = getFilteredDishes(results, searchQuery);

  if (isLoading) {
    return <ShimmerDish />;
  }

  console.log("newRestaurantData: ", newRestaurantData);

  // If there's an error, display an error message
  if (newRestaurantData) {
     const style = {
       position: "absolute",
       top: "50%",
       left: "50%",
       transform: "translate(-50%, -50%)",
       width: 300,
       bgcolor: "background.paper",
       boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)", // Softer and larger shadow for depth
       borderRadius: "12px", // Smoother and modern rounded corners
       p: 4,
       textAlign: "center", // Center align content
       backgroundImage: "linear-gradient(135deg, #c62e3e, #fe0604)", // Gradient background for a vibrant look
     };
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="child-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontWeight: "bold",
                color: "#fff", // White text to contrast with the vibrant background
                marginBottom: "1rem",
              }}
            >
              Items already in cart
            </Typography>
            <Typography
              id="child-modal-description"
              variant="body1"
              sx={{
                color: "#f3f3f3", // Lighter text for contrast
                marginBottom: "1.5rem",
                fontSize: "15px",
                lineHeight: "1.6",
              }}
            >
              {message}
            </Typography>
            <Button
              variant="contained"
              onClick={handleNewRestaurantData}
              sx={{
                backgroundColor: "#fff", // White button for contrast
                color: "#fe0604", // Same color as background for consistency
                fontWeight: "bold",
                padding: "0.6rem 2rem", // Slightly larger button for emphasis
                borderRadius: "20px", // Rounded button for a modern look
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)", // Subtle shadow for button
                transition: "background-color 0.3s ease", // Smooth transition
                "&:hover": {
                  backgroundColor: "#f3f3f3", // Light hover effect
                  color: "#fe0604",
                },
              }}
            >
              Refresh
            </Button>
          </Box>
        </Modal>
      </Box>
    );
  }

  return (
    <Box
      // height="100%"
      width="95vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginLeft="1.9%"
    >
      <Grid container justifyContent="center">
        {filteredDishes.map(({ restaurantName, restaurantId, dishes }) =>
          dishes.map((dish, index) => (
            <DishCard
              index={index}
              key={dish.dishId}
              dish={dish}
              restaurantName={restaurantName}
              restaurantId={restaurantId}
              handleAddToCart={handleAddToCart}
              totalCartItems={totalCartItems}
              isSmallScreen={isSmallScreen}
            />
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Dish;
