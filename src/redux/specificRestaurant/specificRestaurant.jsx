import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk for fetching restaurant details by ID
export const fetchRestaurantById = createAsyncThunk(
  "restaurant/fetchRestaurantById",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://lazeez-user-backend-kpyf.onrender.com/restaurant/${restaurantId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurant: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurantById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRestaurantById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.restaurant = action.payload;
      })
      .addCase(fetchRestaurantById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default restaurantSlice.reducer;
