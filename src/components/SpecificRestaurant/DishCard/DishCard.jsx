import React from "react";
import {
  CardContent,
  Typography,
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
} from "@mui/material";
// import { Grid } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import food from "../../../assets/images/food.jpeg";
import { useNavigate } from "react-router-dom";
const DishCard = ({
  index,
  dish,
  restaurantName,
  restaurantId,
  handleAddToCart,
  totalCartItems,
  isSmallScreen,
}) => {
  // Find the specific object where dishId matches
  const cartItem = totalCartItems.find((item) => item.itemId === dish.dishId);

  const navigate=useNavigate()

  return (
    <>
      <Grid item xs={12} sm={6} md={6} key={index}>
        <Box
          sx={{
            borderRadius: "8px",
            border: "1px solid #eee",
            // margin: "16px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            height: "270px",
            width: "85%",
            padding: "1rem",
            marginBottom: "3rem",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            // px={2}
            pt={2}
            //  gap="1rem"
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
              sx={{ fontSize: "16px", color: "#757575", cursor: "pointer" }}
              onClick={() => navigate(`/specificDetails/${restaurantId}`)}
            />
          </Box>

          <Divider sx={{ width: "90%", marginTop: "10px" }} />

          <Box
            sx={{
              display: "flex",
              padding: "16px",
              borderRadius: "10px",
            }}
          >
            <Box marginRight={"1rem"}>
              <CardMedia
                component="img"
                sx={{
                  width: 150,
                  height: 130,
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
                image={food}
                alt={dish.name || "Dish image"}
              />

              <Box mt={1} display="flex" justifyContent="center">
                {cartItem ? (
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "red",
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: 2,
                      mt: -2,
                      ":hover": {
                        bgcolor: "#fe0604",
                      },
                    }}
                    onClick={() => navigate("/cart")} // Call the parent function
                  >
                    Checkout
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#fe0604",
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: 2,
                      mt: -2,
                      ":hover": {
                        bgcolor: "#fe0604",
                      },
                    }}
                    onClick={() => handleAddToCart(dish, restaurantId)} // Call the parent function
                  >
                    ADD
                  </Button>
                )}
              </Box>
            </Box>

            <Box flex={1} sx={{}}>
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
                  {isSmallScreen
                    ? `${dish.description?.substring(0, 20)}...` // Show truncated version
                    : `${dish.description?.substring(0, 60)}...` ||
                      "No description available."}
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
      </Grid>
    </>
  );
};

export default DishCard;
