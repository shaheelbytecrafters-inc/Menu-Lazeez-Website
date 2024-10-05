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
  return (
    <React.Fragment key={dish.dishId}>
      <Divider sx={{ minWidth: "800px", marginBottom: "10px" }} />
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // alignItems: "left",
          boxShadow: "none",
          border: "none",
        }}
      >
        <Grid container spacing={2}>
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
              onClick={() => handleAddToCart(dish, restaurantId)} // Call the parent function
            >
              ADD
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Divider sx={{ width: "100%", marginTop: "10px" }} />
    </React.Fragment>
  );
};

export default ProductCard;
