import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch restaurant data from the API
export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async () => {
    const response = await axios.get(
      "https://lazeez-restaurant-backend.onrender.com/restaurants"
    );
    console.log("API Response:", response); // Log the response to verify its structure
    return response.data.data; // Assuming the restaurant data is in response.data.data
  }
);

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurants: [],
    status: "idle", // idle, loading, succeeded, failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.restaurants = action.payload; // Directly assign the payload
        console.log("Fetched Restaurants:", state.restaurants); // Log to check data
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default restaurantSlice.reducer;
