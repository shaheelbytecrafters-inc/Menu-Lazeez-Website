import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk for fetching restaurant details by ID
export const fetchRestaurantById = createAsyncThunk(
  "restaurant/fetchRestaurantById",
  async (restaurantId, { rejectWithValue }) => {
    console.log("rest}|{}}}|{{}}}++++++", restaurantId);
    try {
      const response = await axios.get(
        `https://lazeez-user-backend-kpyf.onrender.com/restaurant/${restaurantId}`
      );
      console.log("dataResponse================", response);
      return response.data;
    } catch (error) {
      // Return the error as rejected action with a value
      console.log("eroor+++++++++++++++++++++++++++++++++++++++", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurant: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurantById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurantById.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurant = action.payload;
      })
      .addCase(fetchRestaurantById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default restaurantSlice.reducer;
