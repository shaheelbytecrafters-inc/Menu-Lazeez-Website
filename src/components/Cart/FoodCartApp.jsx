import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Grid,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { Add, Remove, Delete, Favorite } from "@mui/icons-material";

// Sample data
const initialData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1617171594202-100a53bdfe04?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA4NjE0MjN8&ixlib=rb-4.0.3&q=85",
    name: "Blue Hoodie",
    code: "Hodie-B",
    color: "Blue",
    size: "M",
    price: 17.99,
    note: "Note, 1 piece",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA4NjE0MjN8&ixlib=rb-4.0.3&q=85",
    name: "White Hoodie",
    code: "Hodie-W",
    color: "White",
    size: "M",
    price: 35.99,
  },
];

// Format currency function
function formatCurrency(number) {
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

// Store Item Component
const StoreItem = ({ item, onAdd, onRemove, onDelete, quantity }) => {
  return (
    <Box
      className="store-item mt-2"
      sx={{ borderBottom: item.line ? "1px solid #edebeb" : "none" }}
    >
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <img
            className="image-store"
            src={item.image}
            alt={item.name}
            style={{ width: "100%", height: "170px", borderRadius: "8px" }}
          />
        </Grid>
        <Grid item lg={9}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            className="mt-3 mt-lg-0"
          >
            <Typography variant="h6">{item.name}</Typography>
            <Box display="flex" gap={1}>
              <IconButton onClick={() => onRemove(item.id)}>
                <Remove />
              </IconButton>
              <Typography>{quantity}</Typography>
              <IconButton onClick={() => onAdd(item)}>
                <Add />
              </IconButton>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>{item.code}</Typography>
            {item.note && (
              <Typography variant="body2" color="textSecondary">
                ({item.note})
              </Typography>
            )}
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>Color: {item.color}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>Size: {item.size}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" gap={1}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                startIcon={<Delete />}
                onClick={() => onDelete(item.id)}
              >
                Remove Item
              </Button>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                startIcon={<Favorite />}
              >
                Move To Wish List
              </Button>
            </Box>
            <Typography variant="h6">{formatCurrency(item.price)}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

// Amount Store Component
const AmountStore = ({ totalOrder }) => (
  <Box className="store-item mt-2">
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="space-between">
          <Typography>Temporary amount</Typography>
          <Typography>{formatCurrency(totalOrder)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Shipping</Typography>
          <Typography>Gratis</Typography>
        </Box>
        <hr />
      </Grid>
    </Grid>
    <Grid container spacing={2} className="mt-2">
      <Grid item xs={6}>
        <Typography>The total amount of (Including VAT)</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography align="right">{formatCurrency(totalOrder)}</Typography>
      </Grid>
    </Grid>
    <Button variant="contained" color="primary" fullWidth className="mt-1">
      Go To Checkout
    </Button>
  </Box>
);

// FoodCartApp Component
const FoodCartApp = () => {
  const [storeItems, setStoreItems] = useState(initialData);
  const [orders, setOrders] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);

  useEffect(() => {
    // Calculate total order amount whenever orders change
    const total = orders.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    setTotalOrder(total);
  }, [orders]);

  const handleAdd = (item) => {
    const orderIndex = orders.findIndex((x) => x.id === item.id);
    if (orderIndex >= 0) {
      const updatedOrders = [...orders];
      updatedOrders[orderIndex].quantity += 1;
      setOrders(updatedOrders);
    } else {
      setOrders([...orders, { ...item, quantity: 1 }]);
    }
  };

  const handleRemove = (id) => {
    const orderIndex = orders.findIndex((x) => x.id === id);
    if (orderIndex >= 0 && orders[orderIndex].quantity > 1) {
      const updatedOrders = [...orders];
      updatedOrders[orderIndex].quantity -= 1;
      setOrders(updatedOrders);
    }
  };

  const handleDelete = (id) => {
    setStoreItems(storeItems.filter((item) => item.id !== id));
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <Grid container spacing={4} className="pt-4 pb-4">
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          Shopping Cart
        </Typography>
      </Grid>
      <Grid item lg={8} md={7} xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6">
              Cart ({storeItems.length} items)
            </Typography>
            {storeItems.map((item, index) => (
              <StoreItem
                key={item.id}
                item={item}
                onAdd={handleAdd}
                onRemove={handleRemove}
                onDelete={handleDelete}
                quantity={
                  orders.find((order) => order.id === item.id)?.quantity || 0
                }
                line={storeItems.length - 1 !== index}
              />
            ))}
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={4} md={5} xs={12}>
        <AmountStore totalOrder={totalOrder} />
      </Grid>
    </Grid>
  );
};
export default FoodCartApp;

