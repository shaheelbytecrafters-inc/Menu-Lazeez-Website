import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import food from "../../assets/images/food.jpeg"; // Adjust the path to your food image

const ProductCard = ({ dish, restaurantId, handleAddToCart }) => {
  // Function to truncate the description based on screen size
  const truncateText = (text, maxLengthLargeScreen, maxLengthSmallScreen) => {
    const isSmallScreen = window.innerWidth < 600; // Define small screen width (e.g., 600px)
    const maxLength = isSmallScreen
      ? maxLengthSmallScreen
      : maxLengthLargeScreen;

    if (text?.length > maxLength) {
      return text.slice(0, maxLength) + "..."; // Truncate the text and add ellipsis
    }
    return text; // Return full text if it's within the limit
  };

  return (
    <React.Fragment key={dish.dishId}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // padding: { xs: "0.5rem", sm: "1rem" }, // Responsive padding
        }}
      >
        <Box
          sx={{
            width: { xs: "90vw", sm: "80vw", md: "70vw" }, // Responsive width
            marginBottom: "10px",
            // padding: { xs: "0.5rem", sm: "1rem" }, // Responsive padding
          }}
        >
          <Divider />
          <Card
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Responsive layout
              justifyContent: "space-between",
              boxShadow: "none",
              border: "none",
              padding: "0.4rem",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    fontWeight="bold"
                    fontSize={{ xs: "16px", sm: "18px" }} // Responsive font size
                  >
                    {dish.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
                      mb: 1,
                    }}
                  >
                    ₹{dish.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {/* Adjust character limit based on screen size */}
                    {truncateText(dish?.description, 100, 50)}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                sx={{ mt: { xs: 2, sm: 0 } }} // Add margin top for small screens
              >
                <CardMedia
                  component="img"
                  image={food}
                  alt={dish.name}
                  sx={{
                    width: { xs: 150, sm: 170 }, // Responsive image size
                    height: { xs: 100, sm: 120 },
                    borderRadius: 2,
                    mb: 1,
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#ff0000",
                    ":hover": { bgcolor: "#ff0000" },
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: 2,
                    mt: -2,
                    width: { xs: "100px", sm: "120px" }, // Responsive button size
                  }}
                  onClick={() => handleAddToCart(dish, restaurantId)} // Call the parent function
                >
                  ADD
                </Button>
              </Grid>
            </Grid>
          </Card>
          <Divider sx={{ marginTop: "10px" }} />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ProductCard;
