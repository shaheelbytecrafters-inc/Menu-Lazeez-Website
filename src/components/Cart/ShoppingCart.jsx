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
  Button,
} from "@mui/material";
import { Delete, Add, Remove } from "@mui/icons-material";
import AddressForm from "./AddressForm";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartData,
  updateCartQuantity,
  removeCartItem,
} from "../../redux/cartSlice/cart";
import food from "../../../src/assets/images/food.jpeg";
import AddToCart from "../../../src/assets/images/AddToCart.gif";
import ShimmerCart from "./ShimmerCart";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const dispatch = useDispatch();
   const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    const userId = userData?._id;
   
    if (userId) {
      dispatch(fetchCartData(userId));
    }
  }, [dispatch]);

  const { cartData, isLoading, error } = useSelector((state) => state.cart);

  if (isLoading) {
    return <ShimmerCart />;
  }

  if (error) {
    return (
      <Typography color="error">
        Error: {error?.message || "An unknown error occurred."}
      </Typography>
    );
  }

  if (!cartData || !cartData.items || cartData.items.length === 0) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={AddToCart} alt="Add To Cart" />
      </Box>
    );
  }

  const handleCheckout=()=>{
    navigate("/checkout");
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
    dispatch(removeCartItem({ itemId: Number(itemId), payload }));
  };

  const handleUpdateQuantity = (itemId, action) => {
    const payload = {
      itemId,
      quantity: 1,
      userId: cartData.userId,
      restaurantId: cartData.restaurantId,
      action,
    };
    dispatch(updateCartQuantity(payload));
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        // fontFamily="'Poppins', sans-serif"
        fontFamily="Playwrite DE Grund, cursive"
        fontWeight="bold"
        sx={{ textAlign: "center", color: "black", marginBottom: "2rem" }}
      >
        Your Shopping Cart
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {products.map((product) => (
            <Paper
              key={product.itemId}
              sx={{
                padding: 2,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
                marginBottom: 2,
                borderRadius: "10px",
                boxShadow:
                  "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Box
                component="img"
                src={food}
                alt={product.name}
                sx={{
                  width: 100,
                  height: 80,
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                }}
              />
              <Box sx={{ flex: 1, minWidth: 150, marginLeft: "1rem" }}>
                <Typography variant="h6">{product.name}</Typography>
              </Box>
              <Typography sx={{ minWidth: 60, textAlign: "center" }}>
                ₹{product.price.toFixed(2)}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  size="small"
                  sx={{
                    bgcolor: "#fe0604",
                    color: "#fff",
                    ":hover": {
                      color: "#fe0604",
                      bgcolor: "transparent",
                      border: "1.8px solid #fe0604",
                    },
                  }}
                  onClick={() =>
                    handleUpdateQuantity(product.itemId, "decrease")
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
                  sx={{ width: 70, mx: 1 }}
                  inputProps={{ min: 1 }}
                />
                <IconButton
                  size="small"
                  sx={{
                    bgcolor: "#fe0604",
                    color: "#fff",
                    ":hover": {
                      color: "#fe0604",
                      bgcolor: "transparent",
                      border: "1.8px solid #fe0604",
                    },
                  }}
                  onClick={() =>
                    handleUpdateQuantity(product.itemId, "increase")
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
                  marginLeft: "auto",
                }}
              >
                <Typography>
                  ₹{(product.price * product.quantity).toFixed(2)}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              padding: 2,
              borderRadius: "10px",
              boxShadow:
                "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            <Box display="flex" flexDirection="column">
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Subtotal</Typography>
                <Typography> ₹{subtotal.toFixed(2)}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Tax (5%)</Typography>
                <Typography> ₹{tax.toFixed(2)}</Typography>
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
                <Typography variant="h6"> ₹{total.toFixed(2)}</Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  marginTop: "1.5rem",
                  background: "linear-gradient(45deg, #fe0604, #fe0604)",
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  ":hover": {
                    backgroundColor: "#fe0604",
                  },
                  textTransform: "none",
                }}
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShoppingCart;
