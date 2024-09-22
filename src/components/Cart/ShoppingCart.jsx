import { useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  IconButton,
  TextField,
  Box,
  Divider,
} from "@mui/material";
import { Delete, Add, Remove } from "@mui/icons-material";
import AddressForm from "./AddressForm";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartData,
  removeCartItem,
  updateCartQuantity,
} from "../../redux/cartSlice/cart";
import food from "../../../src/assets/images/food.jpeg";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userId = userData?._id;
    if (userId) {
      dispatch(fetchCartData(userId));
    }
  }, [dispatch]);

  const { cartData, status, error } = useSelector((state) => state.cart);

  if (status === "loading") {
    return <Typography>Loading...</Typography>;
  }

  if (status === "failed") {
    return (
      <Typography>
        Error: {error?.message || "An unknown error occurred."}
      </Typography>
    );
  }

  if (!cartData || !cartData.items || cartData.items.length === 0) {
    return <Typography>Your cart is empty.</Typography>;
  }

  const products = cartData.items;
  const taxRate = 0.05;
  const shippingRate = 15.0;

  const subtotal = products.reduce(
    (acc, product) => acc + product.totalPrice,
    0
  );
  const tax = subtotal * taxRate;
  const total = subtotal + tax + (subtotal > 0 ? shippingRate : 0);

  const handleRemoveItem = (itemId) => {
    const payload = {
      userId: cartData.userId,
      restaurantId: cartData.restaurantId,
    };
    dispatch(removeCartItem(itemId, payload));
  };


  const handleUpdateQuantity = (itemId,action) => {
    

      const payload = {
        itemId,
        quantity: 1,
        userId: cartData.userId,
        restaurantId: cartData.restaurantId,
        action:action
      };

      dispatch(updateCartQuantity(payload));
    
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {products.map((product) => (
            <Paper
              key={product.itemId}
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
                src={food}
                alt={product.name}
                sx={{
                  width: 80,
                  height: 80,
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <Box sx={{ flex: 1, minWidth: 150 }}>
                <Typography variant="h6">{product.name}</Typography>
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
                    handleUpdateQuantity(product.itemId,"decrease")
                  }
                >
                  <Remove />
                </IconButton>
                <TextField
                  type="number"
                  variant="outlined"
                  size="small"
                  value={product.quantity}
                  onChange={(e) => {
                    const quantity = parseInt(e.target.value);
                    if (!isNaN(quantity) && quantity >= 0) {
                      handleUpdateQuantity(product.itemId, quantity);
                    }
                  }}
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
                    handleUpdateQuantity(product.itemId, "increase" )
                  }
                >
                  <Add />
                </IconButton>
              </Box>

              <IconButton
                sx={{ color: "#fe0604" }}
                onClick={() => handleRemoveItem(product.itemId)}
              >
                <Delete />
              </IconButton>
              <Box
                sx={{
                  minWidth: 80,
                  textAlign: "right",
                  flexShrink: 0,
                  ml: "auto",
                }}
              >
                <Typography>${product.price * product.quantity}</Typography>
              </Box>
            </Paper>
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
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
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <AddressForm />
    </Container>
  );
};

export default ShoppingCart;
