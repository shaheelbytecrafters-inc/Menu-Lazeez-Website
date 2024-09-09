import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
//   Button,
  IconButton,
  TextField,
  Box,
  Divider,
} from "@mui/material";
import { Delete, Add, Remove } from "@mui/icons-material";
import AddressForm from "./AddressForm";

const ShoppingCart = () => {
  const initialProducts = [
    {
      id: 1,
      title: "Kebab",
      description: "Melt in your mouth kebabs",
      price: 49.99,
      image:
        "https://c.ndtvimg.com/2020-01/a39okhfk_620_625x300_21_January_20.jpg",
      quantity: 1,
    },
    {
      id: 2,
      title: "Biryani",
      description: "A biryani a day keeps the doctor away",
      price: 59.99,
      image:
        "https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035-1024x683.jpg",
      quantity: 1,
    },
    {
      id: 3,
      title: "Egg Curry",
      description: "Savor the flavor, taste the difference",
      price: 69.99,
      image:
        "https://www.whiskaffair.com/wp-content/uploads/2020/04/Kerala-Style-Egg-Curry-2-3-500x500.jpg",
      quantity: 1,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const taxRate = 0.05;
  const shippingRate = 15.0;

  // Calculate totals
  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const tax = subtotal * taxRate;
  const total = subtotal + tax + (subtotal > 0 ? shippingRate : 0);

  // Update product quantity
  const updateQuantity = (id, quantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: quantity < 1 ? 1 : quantity }
          : product
      )
    );
  };

  // Remove a product from the cart
  const removeItem = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {/* Cart items */}
          {products.map((product) => (
            <Paper
              key={product.id}
              variant="outlined"
              sx={{
                padding: 2,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
                marginBottom: 2,
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.title}
                sx={{
                  width: 80,
                  height: 80,
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <Box sx={{ flex: 1, minWidth: 150 }}>
                <Typography variant="h6">{product.title}</Typography>
                <Typography color="textSecondary">
                  {product.description}
                </Typography>
              </Box>
              <Typography
                sx={{
                  minWidth: 60,
                  textAlign: "center",
                  flexShrink: 0,
                }}
              >
                ${product.price.toFixed(2)}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  size="small"
                  sx={{
                    bgcolor: "#fe0604",
                    color: "#fff",
                    ":hover": {
                      color: "#fe0604",
                      border: "1.8px solid #fe0604",
                    },
                  }}
                  onClick={() =>
                    updateQuantity(product.id, product.quantity - 1)
                  }
                >
                  <Remove />
                </IconButton>
                <TextField
                  type="number"
                  variant="outlined"
                  size="small"
                  value={product.quantity}
                  onChange={(e) =>
                    updateQuantity(product.id, parseInt(e.target.value))
                  }
                  sx={{ width: 70, mx: 1, flexShrink: 0 }}
                  inputProps={{ min: 1 }}
                />
                <IconButton
                  size="small"
                  sx={{
                    bgcolor: "red",
                    color: "#fff",
                    ":hover": {
                      color: "#fe0604",
                      border: "1.8px solid #fe0604",
                    },
                  }}
                  onClick={() =>
                    updateQuantity(product.id, product.quantity + 1)
                  }
                >
                  <Add />
                </IconButton>
              </Box>
              <IconButton
                sx={{ color: "#fe0604" }}
                onClick={() => removeItem(product.id)}
              >
                <Delete />
              </IconButton>
              <Box
                sx={{
                  minWidth: 80,
                  textAlign: "right",
                  flexShrink: 0,
                  ml: "auto", // Pushes the total amount to the right
                }}
              >
                <Typography>
                  ${(product.price * product.quantity).toFixed(2)}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          {/* Checkout section */}
          <Paper variant="outlined" sx={{ padding: 2 }}>
            <Box
              display="flex"
              flexDirection="column"
              height="100%"
              justifyContent="space-between"
            >
              <Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Subtotal</Typography>
                  <Typography>${subtotal.toFixed(2)}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Tax (5%)</Typography>
                  <Typography>${tax.toFixed(2)}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Shipping</Typography>
                  <Typography>
                    ${subtotal > 0 ? shippingRate.toFixed(2) : "0.00"}
                  </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6">Total Amount</Typography>
                  <Typography variant="h6">${total.toFixed(2)}</Typography>
                </Box>
              </Box>
              {/* <Button
                variant="contained"
                color="success"
                fullWidth
                sx={{ mt: 2 }}
                disabled={products.length === 0}
              >
                Checkout
              </Button> */}
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <AddressForm/>
    </Container>
  );
};

export default ShoppingCart;
