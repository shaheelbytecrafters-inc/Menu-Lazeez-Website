import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async () => {
    const response = await axios.get(
      "https://lazeez-user-backend-kpyf.onrender.com/restaurants"
    );
    return response.data.data; 
  }
);

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurants: [],
    isLoading:false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = true;
        state.isLoading = true;
        state.error = null;
        
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.restaurants = action.payload; 
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.isLoading= true;
        state.error = action.error.message;
      });
  },
});

export default restaurantSlice.reducer;
