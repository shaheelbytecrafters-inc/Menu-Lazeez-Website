import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify"; // Importing toast

// Fetch Restaurants
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
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.isLoading = true; // Changed to isLoading
        state.error = null;
        // toast.info("Loading restaurants..."); // Toast wh/en loading starts
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.restaurants = action.payload;
        // toast.success("Restaurants loaded successfully!"); // Toast on successful fetch
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.isLoading = false; // Changed to false
        state.error = action.error.message;
        toast.error(`Failed to load restaurants: ${action.error.message}`); // Toast on error
      });
  },
});

export default restaurantSlice.reducer;
