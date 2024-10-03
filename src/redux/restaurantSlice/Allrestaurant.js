import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async () => {
    const response = await axios.get(
      "https://lazeez-user-backend-kpyf.onrender.com/restaurants"
    );
    console.log("API Response:", response); 
    return response.data.data; 
  }
);

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurants: [],
    status: "idle",
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
        state.restaurants = action.payload; 
        console.log("Fetched Restaurants:", state.restaurants); 
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default restaurantSlice.reducer;
