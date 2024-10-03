import React, { useEffect, useState } from "react";
import {
  CardContent,
  Typography,
  Box,
  Button,
  CardMedia,
  Divider,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  fetchSearchResults,
} from "../../redux/searchSlice/searchSlice.js";
import food from "../../assets/images/food.jpeg";
import { postAddToCart } from "../../redux/cartSlice/cart.js";
import { updateCartQuantity} from "../../redux/cartSlice/cart";

const Dish = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchQuery = location.state?.query?.toLowerCase() || "";

  const { results, status, error } = useSelector((state) => state.search);
  const [cartItems, setCartItems] = useState({});
   const { cartData } = useSelector((state) => state.cart);
// console.log("|||||||((((((((())))))))))))))))))))))))))",cartData)
  useEffect(() => {
    console.log("Updated cartData:", cartData); // Monitor cartData changes
  }, []);
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

  const handleAddToCart = (dish, restaurantId) => {
    const userId = JSON.parse(localStorage.getItem("userData"))?._id;
    if (!userId) return alert("User not logged in");

    const payload = {
      userId,
      restaurantId,
      itemId: dish.dishId,
      productName: dish.name,
      quantity: 1,
      price: dish.price,
      resetCart: false,
    };
    dispatch(postAddToCart({ payload }));

    setCartItems((prev) => ({
      ...prev,
      [dish.dishId]: 1, // Initial quantity set to 1
    }));
  };

const handleUpdateQuantity = (res, dish, action) => {
  const userId = JSON.parse(localStorage.getItem("userData"))?._id;
  const payload = {
    userId,
    restaurantId: res,
    itemId: dish.dishId,
    quantity: 1,
    action: action,
  };
  console.log("==================", payload);
  dispatch(updateCartQuantity(payload));
};

  const filteredDishes = getFilteredDishes(results, searchQuery);

  if (status === "loading") {
    return <Typography>Loading...</Typography>;
  }

  if (status === "failed") {
    return <Typography>Error: {error}</Typography>;
  }

  if (filteredDishes.length === 0) {
    return <Typography>No results found</Typography>;
  }

  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        height="auto"
        width="860px"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        marginInline="5rem"
      >
        {filteredDishes.map(({ restaurantName, restaurantId, dishes }) =>
          dishes.map((dish, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: "8px",
                border: "1px solid #eee",
                margin: "16px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                height: "270px",
                width: "370px",
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                px={2}
                pt={2}
              >
                <Box>
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    sx={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {restaurantName}
                  </Typography>
                  <Box display="flex" alignItems="center" mt={0.5}>
                    <StarIcon sx={{ fontSize: "16px", color: "#fbc02d" }} />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ ml: 0.5, fontSize: "14px" }}
                    >
                      {dish.rating || "N/A"} · {dish.reviewsCount || 0} reviews
                    </Typography>
                  </Box>
                </Box>
                <ArrowForwardIosIcon
                  sx={{ fontSize: "16px", color: "#757575" }}
                />
              </Box>

              <Divider
                sx={{ width: "90%", marginTop: "10px", marginLeft: "1rem" }}
              />

              <Box
                sx={{ display: "flex", padding: "16px", borderRadius: "10px" }}
              >
                <Box>
                  <CardMedia
                    component="img"
                    sx={{
                      width: 130,
                      height: 130,
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                    image={food}
                    alt={dish.name || "Dish image"}
                  />

                  <Box mt={1} display="flex" justifyContent="center">
                    {cartItems[dish.dishId] ? (
                      <Box
                        display="flex"
                        alignItems="center"
                        sx={{
                          marginTop: "-1rem",
                          backgroundColor: "red",
                          color: "#fff",
                          borderRadius: "5px",
                        }}
                      >
                        <Button
                          variant="none"
                          onClick={() =>
                            handleUpdateQuantity(restaurantId, dish, "decrease")
                          }
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "14px",
                            px: 1.5,
                            py: 0.5,
                            textTransform: "none",
                            minWidth: "40px",
                          }}
                        >
                          -
                        </Button>
                        <Typography
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "14px",
                            fontWeight: "bold",
                            px: 1.5,
                          }}
                        >
                          {cartItems[dish.dishId]}
                        </Typography>
                        <Button
                          variant="none"
                          onClick={() =>
                            handleUpdateQuantity(restaurantId, dish, "increase")
                          }
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "14px",
                            px: 1.5,
                            py: 0.5,
                            textTransform: "none",
                            minWidth: "40px",
                          }}
                        >
                          +
                        </Button>
                      </Box>
                    ) : (
                      <Button
                        variant="contained"
                        onClick={() => handleAddToCart(dish, restaurantId)}
                        sx={{
                          fontFamily: "Poppins, sans-serif",
                          bgcolor: "red",
                          fontSize: "14px",
                          fontWeight: 600,
                          px: 2,
                          py: 0.5,
                          textTransform: "none",
                          mt: "-1rem",
                          minWidth: "100px",
                        }}
                      >
                        ADD
                      </Button>
                    )}
                  </Box>
                </Box>

                <Box flex={1} sx={{ marginLeft: "30px" }}>
                  <CardContent sx={{ padding: "0" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                        fontWeight: 600,
                      }}
                    >
                      {dish.name || "Unknown Dish"}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "14px",
                        mt: 0.5,
                        color: "gray",
                      }}
                    >
                      {dish.description || "No description available."}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                        fontWeight: 500,
                        mt: 1,
                      }}
                    >
                      ₹ {dish.price}
                    </Typography>
                  </CardContent>
                </Box>
              </Box>
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};

export default Dish;
