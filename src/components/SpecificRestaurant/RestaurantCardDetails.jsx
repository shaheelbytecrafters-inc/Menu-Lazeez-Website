import { Box, Typography, Chip, Stack, Divider, CircularProgress, Alert, Card, Grid, CardContent, CardMedia, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { fetchRestaurantById } from "../../redux/specificRestaurant/specificRestaurant";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import food from '../../assets/images/food.jpeg'
import { postAddToCart } from "../../redux/cartSlice/cart";

const RestaurantCardDetails = () => {
  // Get all params from the URL
  // const params = useParams(); // This will store all parameters from the URL
  // console.log(
  //   "Params=====================================",
  //   params.restaurantId
  // );
  // const { restaurant, loading, error } = useSelector(
  //   (state) => state.restaurant
  // );
  // console.log("|||||||||||||||||||||||||||", restaurant);
  const { restaurantId } = useParams();
  // console.log(
  //   "Params=====================================",
  //   restaurantId
  // );

  const dispatch = useDispatch();
  const { restaurant, loading, error } = useSelector(
    (state) => state.restaurant
  );

  useEffect(() => {
    if (restaurantId) {
      console.log("restaurantId=============", restaurantId);
      dispatch(fetchRestaurantById(restaurantId));
    }
  }, [restaurantId, dispatch]);

  console.log("Restaurant Data:", restaurant);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  // Handle the submit action for adding items to the cart
  const handleAddToCart = (dish, restaurantId) => {
    // Accept restaurantId as a parameter
    const userId = JSON.parse(localStorage.getItem("userData"))?._id;
    const payload = {
      userId,
      restaurantId, // Use the restaurantId passed in from the map function
      itemId: dish.dishId,
      productName: dish.name,
      quantity: 1, // You can adjust the quantity dynamically
      price: dish.price,
      resetCart: false, // Set resetCart as a boolean
    };
    console.log("Payload for Add to Cart:=====================", payload);
    dispatch(postAddToCart({ payload }));
  };

  // If there's an error, display an error message
  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Alert severity="error">
          Error fetching restaurant details: {error}
        </Alert>
      </Box>
    );
  }

  // const products = [
  //   {
  //     id: 1,
  //     name: "Sizzled Falafel Shawarma",
  //     price: 179,
  //     description:
  //       "Experience Turkish magic wrapped in warm kuboos or rumali, loaded with fun toppings and crispy veg falafels.",
  //     image:
  //       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/11/f46d948c-2447-49a7-b045-98da7790475d_ba58be1e-fce8-40c7-ae9a-361f3331ddb5.jpeg",
  //   },
  //   {
  //     id: 2,
  //     name: "Chicken Shawarma",
  //     price: 199,
  //     description:
  //       "Grilled chicken served with sauces wrapped in kuboos or rumali.",
  //     image:
  //       "https://media.gettyimages.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=612x612&w=gi&k=20&c=AniWX1OhaarUxCkgjUoKiA3bKVllK0upCylW6Z0PCMQ=",
  //   },
  //   {
  //     id: 3,
  //     name: "Paneer Tikka Shawarma",
  //     price: 169,
  //     description:
  //       "Delicious paneer tikka with fresh veggies wrapped in kuboos or rumali.",
  //     image:
  //       "https://img.freepik.com/premium-photo/collection-ice-cream-cones-with-strawberries-strawberries_960117-309.jpg",
  //   },
  // ];

  return (
    <Box>
      <Box sx={{ padding: "1rem", maxWidth: "700px", margin: "auto" }}>
        {/* Breadcrumb */}
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
          {/* {console.log(restaurant)} */}
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

      {/* Product Card List */}
      <Box sx={{ maxWidth: 800, margin: "auto", padding: 1 }}>
        {/* Loop through the products array to generate a Card for each product */}
        {/* {console.log("menu============", restaurant.)} */}
        {restaurant?.menu.map((dish) => (
          <React.Fragment key={dish.dishId}>
            {/* Top Divider */}
            <Divider sx={{ width: "100%", marginBottom: "10px" }} />

            {/* Card Section */}
            <Card
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "none",
                border: "none",
              }}
            >
              {console.log("====================res", restaurant)}
              <Grid container spacing={2}>
                {/* Left Section: Text Content */}
                <Grid item xs={8}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="div"
                      fontWeight="bold"
                      fontSize="18px"
                    >
                      {dish.name}
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: "bold", fontSize: "16px", mb: 1 }}
                    >
                      ₹{dish.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {dish?.description}
                    </Typography>
                  </CardContent>
                </Grid>

                {/* Right Section: Image and Button */}
                <Grid
                  item
                  xs={4}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <CardMedia
                    component="img"
                    image={food}
                    alt={dish.name}
                    sx={{ width: 120, height: 120, borderRadius: 2, mb: 1 }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "red",
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: 2,
                      mt: -2,
                    }}
                    //  onClick={()=>}
                    onClick={() => handleAddToCart(dish, restaurant.restaurantId)} // Bind onClick event
                  >
                    ADD
                  </Button>
                </Grid>
              </Grid>
            </Card>

            {/* Bottom Divider */}
            <Divider sx={{ width: "100%", marginTop: "10px" }} />
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default RestaurantCardDetails;
