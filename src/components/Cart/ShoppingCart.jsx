import { useEffect, useMemo, useState } from "react";
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

  const { cartData, isLoading, error } = useSelector((state) => state.cart);

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("userData"))?._id;
    if (userId) {
      dispatch(fetchCartData(userId));
    }
  }, [dispatch]);

  const handleCheckout = () => navigate("/checkout");

  const handleRemoveItem = (itemId) => {
    const { userId, restaurantId } = cartData;
    dispatch(removeCartItem({ itemId, payload: { userId, restaurantId } }));
  };

  const handleUpdateQuantity = (itemId, action) => {
    const { userId, restaurantId } = cartData;
    dispatch(
      updateCartQuantity({ itemId, quantity: 1, userId, restaurantId, action })
    );
  };


  const products = cartData?.items || [];

  const taxRate = 0.05;
  const shippingRate = 15.0;

  const subtotal = useMemo(
    () => products.reduce((acc, product) => acc + product.totalPrice, 0),
    [products]
  );
  const tax = useMemo(() => subtotal * taxRate, [subtotal]);
  const total = useMemo(
    () => subtotal + tax + (subtotal > 0 ? shippingRate : 0),
    [subtotal, tax]
  );

  if (isLoading) return <ShimmerCart />;
  if (error)
    return (
      <Typography color="error">
        Error: {error?.message || "An unknown error occurred."}
      </Typography>
    );
  if (products.length === 0) {
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

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        fontFamily="Playwrite DE Grund, cursive"
        fontWeight="bold"
        sx={{ textAlign: "center", color: "black", marginBottom: "2rem" }}
      >
        Your Shopping Cart
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {products.map((product) => (
            <CartItem
              key={product.itemId}
              product={product}
              onRemove={() => handleRemoveItem(product.itemId)}
              onUpdateQuantity={(action) =>
                handleUpdateQuantity(product.itemId, action)
              }
            />
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={cartStyles.summaryBox}>
            <CartSummary
              subtotal={subtotal}
              tax={tax}
              total={total}
              shippingRate={shippingRate}
              onCheckout={handleCheckout}
              // onOpenPaymentModal={handleOpenPaymentModal}
            />
          </Paper>
        </Grid>
      </Grid>
      
    </Container>
  );
};

// CartItem Component
const CartItem = ({ product, onRemove, onUpdateQuantity }) => {

  return (
    <Paper sx={cartStyles.productBox}>
      <Box
        component="img"
        src={food}
        alt={product.name}
        sx={cartStyles.productImage}
      />
      <Box sx={{ flex: 1, minWidth: 150, marginLeft: "1rem" }}>
        <Typography variant="h6">{product.name}</Typography>
      </Box>
      <Typography sx={{ minWidth: 60, textAlign: "center" }}>
        ₹{product.price.toFixed(2)}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <QuantityButton
          action="decrease"
          onClick={() => onUpdateQuantity("decrease")}
        />
        <TextField
          value={product.quantity}
          onChange={() => {}}
          sx={cartStyles.quantityInput}
          inputProps={{ min: 1 }}
        />
        <QuantityButton
          action="increase"
          onClick={() => onUpdateQuantity("increase")}
        />
      </Box>
      <IconButton sx={{ color: "#fe0604" }} onClick={onRemove}>
        <Delete />
      </IconButton>
      <Box sx={{ minWidth: 80, textAlign: "right", marginLeft: "auto" }}>
        <Typography>
          ₹{(product.price * product.quantity).toFixed(2)}
        </Typography>
      </Box>
    </Paper>
  );
};

// CartSummary Component
const CartSummary = ({ subtotal, tax, total, shippingRate, onCheckout ,  onOpenPaymentModal}) => (
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
      <Typography>{subtotal > 0 ? shippingRate.toFixed(2) : "0.00"}</Typography>
    </Box>
    <Divider sx={{ my: 1 }} />
    <Box display="flex" justifyContent="space-between">
      <Typography variant="h6">Total Amount</Typography>
      <Typography variant="h6"> ₹{total.toFixed(2)}</Typography>
    </Box>
    <Button
      variant="contained"
      fullWidth
      sx={cartStyles.checkoutButton}
      onClick={onCheckout}
    >
      Proceed to Checkout
    </Button>
  </Box>
);

// QuantityButton Component
const QuantityButton = ({ action, onClick }) => (
  <IconButton size="small" sx={cartStyles.quantityButton} onClick={onClick}>
    {action === "increase" ? <Add /> : <Remove />}
  </IconButton>
);

// Reusable Styles
const cartStyles = {
  productBox: {
    padding: 2,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 1,
    marginBottom: 2,
    borderRadius: "10px",
    boxShadow:
      "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
  },
  productImage: {
    width: 100,
    height: 80,
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  },
  quantityButton: {
    bgcolor: "#fe0604",
    color: "#fff",
    ":hover": {
      color: "#fe0604",
      bgcolor: "transparent",
      border: "1.8px solid #fe0604",
    },
  },
  quantityInput: { width: 70, mx: 1 },
  summaryBox: {
    padding: 2,
    borderRadius: "10px",
    boxShadow:
      "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
  },
  checkoutButton: {
    marginTop: "1.5rem",
    background: "linear-gradient(45deg, #fe0604, #fe0604)",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    ":hover": { backgroundColor: "#fe0604" },
    textTransform: "none",
  },
};

export default ShoppingCart;
