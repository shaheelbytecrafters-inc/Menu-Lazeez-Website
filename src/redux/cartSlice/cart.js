import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch cart data
export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async (userId, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"))?.token;
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.get(
        `https://lazeez-restaurant-backend.onrender.com/cart/${userId}`,
        { headers }
      );
      console.log("cartSlice,===================", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error fetching cart data"
      );
    }
  }
);

// Update cart quantity
export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async (payload, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"))?.token;
      console.log("updateCart token=========", token);
      const headers = { Authorization: `Bearer ${token}` };

      const response = await axios.post(
        "https://lazeez-restaurant-backend.onrender.com/cart/quantity/update",
        payload,
        { headers }
      );
      console.log("Response ###################", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error updating cart quantity"
      );
    }
  }
);

// Remove cart item
export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async ({ itemId, payload}, { rejectWithValue, dispatch }) => {
    try {
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&", itemId, payload);
      const token = JSON.parse(localStorage.getItem("token"))?.token;
      console.log("updateCart token=========", token);

      if (!token) {
        throw new Error("Authorization token is missing");
      }

      const headers = { Authorization: `Bearer ${token}` };

      const response = await axios.delete(
        `https://lazeez-restaurant-backend.onrender.com/cart/item/${itemId}`,
        {
          headers, 
          data: payload, 
        }
      );

      console.log("Response ###################", response);

      // After successfully removing the item, fetch the updated cart data
      dispatch(fetchCartData(payload.userId));

      return response.data;
    } catch (error) {
      console.log("===================== Error from removeCart", error);
      return rejectWithValue(
        error.response?.data || "Error removing cart item"
      );
    }
  }
);

// Cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartData = action.payload;
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.cartData = action.payload;
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.cartData = action.payload; 
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
