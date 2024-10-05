
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice/authSlice.js";
import restaurantReducer from '../redux/restaurantSlice/Allrestaurant.js'
import cartReducer from '../redux/cartSlice/cart.js';
import profileReducer from "../redux/profileSlice/profileSlice.js";
import addressReducer from "../redux/profileSlice/addressSlice"; 
import searchReducer from "../redux/searchSlice/searchSlice.js";
import specificRestaurantReducer from "../redux/specificRestaurant/specificRestaurant.jsx";
import reviewsReducer from "../redux/reviewSlice/reviewSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurants: restaurantReducer,
    cart: cartReducer,
    profile: profileReducer,
    address: addressReducer,
    search: searchReducer,
    restaurant: specificRestaurantReducer,
    reviews: reviewsReducer,
  },
});

export default store;
