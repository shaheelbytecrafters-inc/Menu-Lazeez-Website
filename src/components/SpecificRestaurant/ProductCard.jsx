import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";

// Sample product data
const products = [
  {
    id: 1,
    name: "Sizzled Falafel Shawarma",
    price: 179,
    description:
      "Experience Turkish magic wrapped in warm kuboos or rumali, loaded with fun toppings and crispy veg falafels.",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/11/f46d948c-2447-49a7-b045-98da7790475d_ba58be1e-fce8-40c7-ae9a-361f3331ddb5.jpeg",
  },
  {
    id: 2,
    name: "Chicken Shawarma",
    price: 199,
    description:
      "Grilled chicken served with sauces wrapped in kuboos or rumali.",
    image:
      "https://media.gettyimages.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=612x612&w=gi&k=20&c=AniWX1OhaarUxCkgjUoKiA3bKVllK0upCylW6Z0PCMQ=",
  },
  {
    id: 3,
    name: "Paneer Tikka Shawarma",
    price: 169,
    description:
      "Delicious paneer tikka with fresh veggies wrapped in kuboos or rumali.",
    image:
      "https://img.freepik.com/premium-photo/collection-ice-cream-cones-with-strawberries-strawberries_960117-309.jpg",
  },
];

const ProductCard = () => {
  return (
    <Box sx={{ maxWidth: 800, margin: "auto", padding: 1 }}>
      {/* Loop through the products array to generate a Card for each product */}
      {products.map((product) => (
        <React.Fragment key={product.id}>
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
                    {product.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold", fontSize: "16px", mb: 1 }}
                  >
                    ₹{product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
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
                  image={product.image}
                  alt={product.name}
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
  );
};

export default ProductCard;
