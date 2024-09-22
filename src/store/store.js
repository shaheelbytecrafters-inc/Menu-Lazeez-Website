
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice/authSlice.js";
import restaurantReducer from '../redux/restaurantSlice/Allrestaurant.js'
import cartReducer from '../redux/cartSlice/cart.js';


const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurants: restaurantReducer,
    cart: cartReducer,
  },
});

export default store;
