import { Box, Typography, Chip, Stack, Divider, Button, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { fetchRestaurantById } from "../../redux/specificRestaurant/specificRestaurant";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import food from "../../assets/images/food.jpeg";
import { fetchCartData, postAddToCart } from "../../redux/cartSlice/cart";
import ReviewPage from "./ReviewPage";
import Modal from "@mui/material/Modal";
// import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../redux/reviewSlice/reviewSlice";

import ShimmerSpecific from "./ShimmerSpecific";

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

const RestaurantCardDetails = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  const { restaurant, loading, error } = useSelector(
    (state) => state.restaurant
  );
  const { cartData, isLoading } = useSelector((state) => state.cart);
  const totalCartItems = cartData?.items || [];

  const { reviews } = useSelector((state) => state.reviews);
  const [showMenu, setShowMenu] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [newRestaurantData, setNewRestaurantData] = React.useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Step 2: Toggle function
  // const toggleView = () => {
  //   setShowReviews((prev) => !prev);
  // };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    const userId = userData?._id;
    if (userId) {
      dispatch(fetchCartData(userId));
    }
  }, [dispatch]);

  useEffect(() => {
    if (restaurantId) {
      dispatch(fetchRestaurantById(restaurantId));
    }
  }, [restaurantId, dispatch]);

  useEffect(() => {
    dispatch(fetchReviews({ restaurantId })); // Fetch reviews when component mounts
  }, [dispatch, restaurantId]);

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

  if (isLoading) {
    return <ShimmerSpecific />;
  }

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
        {/* <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id="child-modal-title">Items already in cart</h2>
            <p id="child-modal-description">{message}</p>
            <Button onClick={handleNewRestaurantData}>Refresh</Button>
          </Box>
        </Modal> */}
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
    <Box>
      <Box sx={{ padding: "1rem", maxWidth: "800px", margin: "auto" }}>
        {/* Breadcrumb */}
        {/* <ShimmerSpecific/> */}
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginBottom: "0.5rem" }}
        >
          Home / {restaurant?.location?.city || "City"} /{" "}
          {restaurant?.name || "Restaurant Name"}
        </Typography>

        {/* Restaurant Name */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            marginTop: "0.5rem",
            fontSize: "1.3rem",
          }}
        >
          {restaurant?.name || "Restaurant Name"}
        </Typography>

        {/* Rating and Pricing Section */}
        <Box
          marginTop="2rem"
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          border="1px solid #ccc"
          padding="0.8rem"
          borderRadius="1rem"
        >
          <Stack direction="row" alignItems="center">
            <Chip
              icon={<StarIcon />}
              sx={{
                height: 35,
                fontWeight: "bold",
                fontSize: "14px",
                backgroundColor: "transparent",
              }}
              label={
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" fontWeight="bold" fontSize="1rem">
                    {restaurant?.rating || "N/A"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="black"
                    fontWeight="bold"
                    fontSize="1rem"
                    sx={{ marginLeft: "4px" }}
                  >
                    ({restaurant?.reviewsCount || "0"} ratings)
                  </Typography>
                </Box>
              }
            />

            <Typography
              variant="body1"
              sx={{ marginLeft: "1rem", fontWeight: "bold" }}
            >
              ₹{restaurant?.priceForOne || "N/A"} for one
            </Typography>
          </Stack>

          {/* Cuisine Links */}
          <Typography
            variant="body1"
            sx={{ color: "#fe0604", fontWeight: "bold", fontSize: "0.8rem" }}
          >
            {restaurant?.cuisineType?.join(", ") || "Cuisine Types"}
          </Typography>

          {/* Outlet and Delivery Time */}
          <Stack direction="row" alignItems="center" spacing={2}>
            {/* Vertical Line with Dots */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  backgroundColor: "#ccc",
                  borderRadius: "50%",
                }}
              />
              <Divider
                orientation="vertical"
                sx={{ height: 22, borderWidth: "1px", borderColor: "#ccc" }}
              />
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  backgroundColor: "#ccc",
                  borderRadius: "50%",
                }}
              />
            </Box>

            {/* Outlet Information and Delivery Time */}
            <Box>
              <Box display="flex" gap="1rem">
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                    marginTop: "0.5rem",
                  }}
                >
                  Outlet
                </Typography>
                <Typography
                  variant="body1"
                  color="gray"
                  fontSize="0.8rem"
                  marginTop="0.5rem"
                >
                  {restaurant?.location?.address || "Address"}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  lineHeight: 3,
                }}
              >
                {restaurant?.operationalHours?.monday || "N/A"}
              </Typography>
            </Box>
          </Stack>

          <Divider sx={{ width: "100%", marginTop: "7px" }} />

          {/* Delivery Fee Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "0.5rem",
            }}
          >
            <DirectionsBikeIcon sx={{ marginRight: 1 }} />
            <Typography variant="body2" sx={{ color: "gray" }}>
              {restaurant?.location?.coordinates?.latitude
                ? `${restaurant.location.coordinates.latitude} kms | ₹39 Delivery fee will apply`
                : "Delivery fee will apply"}
            </Typography>
          </Box>

          <Divider sx={{ width: "100%", marginTop: "10px" }} />

          {/* Free Delivery Offer */}
          <Box
            sx={{
              marginTop: "0.5rem",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              color="#fe0604"
              sx={{ fontWeight: "bold", fontSize: "0.8rem" }}
            >
              Free delivery on orders above ₹199
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ padding: 2 }}>
          {/* Step 2: Buttons to switch between views */}
          <Box
            sx={{ marginBottom: 2, display: "flex", justifyContent: "center" }}
          >
            {/* Button to show the menu */}
            <Button
              variant={showMenu ? "contained" : "outlined"}
              onClick={() => setShowMenu(true)}
              sx={{
                marginRight: "1rem",
                textTransform: "none",
                fontSize: { xs: "0.8rem", sm: "1rem" }, // Responsive font size
                fontWeight: "bold",
                backgroundColor: showMenu ? "#fe0604" : "transparent",
                color: showMenu ? "white" : "red",
                border: showMenu ? "none" : "1px solid red",
                borderRadius: "24px", // Rounded corners
                padding: "10px 20px", // Consistent padding
                boxShadow: showMenu ? "0 3px 5px rgba(254, 6, 4, 0.3)" : "none", // Subtle shadow when active
                transition:
                  "background-color 0.3s, color 0.3s, border 0.3s, transform 0.2s", // Smooth transition
                "&:hover": {
                  backgroundColor: "#d50000", // Darker red on hover
                  color: "white",
                  transform: "scale(1.05)", // Slightly enlarge button on hover
                },
                "&:active": {
                  transform: "scale(0.95)", // Scale down slightly on click
                },
              }}
            >
              Menu
            </Button>

            {/* Button to show the reviews */}
            <Button
              variant={!showMenu ? "contained" : "outlined"}
              onClick={() => setShowMenu(false)}
              sx={{
                marginRight: "1rem",
                textTransform: "none",
                fontSize: { xs: "0.8rem", sm: "1rem" }, // Responsive font size
                fontWeight: "bold",
                backgroundColor: !showMenu ? "#fe0604" : "transparent",
                color: !showMenu ? "white" : "red",
                border: !showMenu ? "none" : "1px solid red",
                borderRadius: "24px", // Rounded corners
                padding: "10px 20px", // Consistent padding
                boxShadow: !showMenu
                  ? "0 3px 5px rgba(254, 6, 4, 0.3)"
                  : "none", // Subtle shadow when active
                transition:
                  "background-color 0.3s, color 0.3s, border 0.3s, transform 0.2s", // Smooth transition
                "&:hover": {
                  backgroundColor: "#d50000", // Darker red on hover
                  color: "white",
                  transform: "scale(1.05)", // Slightly enlarge button on hover
                },
                "&:active": {
                  transform: "scale(0.95)", // Scale down slightly on click
                },
              }}
            >
              Reviews
            </Button>
          </Box>

          {/* Step 3: Conditional rendering of content based on showMenu state */}
          {showMenu ? (
            <Grid
              container
              spacing={3}
              sx={{
                padding: 1,
                width: { xs: "100vw", sm: "100vw", md: "100vw", lg: "90vw" }, // Full width for small and medium screens
              }}
            >
              {restaurant?.menu.map((dish) => (
                <ProductCard
                  key={dish.dishId}
                  dish={dish}
                  restaurantId={restaurant.restaurantId}
                  handleAddToCart={handleAddToCart}
                  totalCartItems={totalCartItems}
                />
              ))}
            </Grid>
          ) : (
            <ReviewPage
              reviews={reviews}
              sx={{ width: "100%", bgcolor: "black" }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default RestaurantCardDetails;
