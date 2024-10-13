import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Post add to cart
export const postAddToCart = createAsyncThunk(
  "cart/postAddToCart",
  async ({payload}, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"))?.token;
      if (!token) {
        throw new Error("User not authenticated");
      }
      
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.post(
        `https://lazeez-user-backend-kpyf.onrender.com/cart/add`,
        payload,
        { headers }
      );
      toast.success("Added to cart successfully!");
      return response.data;
    } catch (error) {
      toast.error("Failed to add to cart.");
      return rejectWithValue(error.response?.data || "Error adding to cart");
    }
  }
);


// Fetch cart data
export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async (userId, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"))?.token;
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.get(
        `https://lazeez-user-backend-kpyf.onrender.com/cart/${userId}`,
        { headers }
      );
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
      const headers = { Authorization: `Bearer ${token}` };

      const response = await axios.post(
        "https://lazeez-user-backend-kpyf.onrender.com/cart/quantity/update",
        payload,
        { headers }
      );
      toast.success("Cart quantity updated successfully!");
      return response.data;
    } catch (error) {
      toast.error("Error updating cart quantity");
      return rejectWithValue(
        error.response?.data || "Error updating cart quantity"
      );
    }
  }
);

// Remove cart item
export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async ({ itemId, payload }, { rejectWithValue, dispatch }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"))?.token;

      if (!token) {
        throw new Error("Authorization token is missing");
      }

      const headers = { Authorization: `Bearer ${token}` };

      const response = await axios.delete(
        `https://lazeez-user-backend-kpyf.onrender.com/cart/item/${itemId}`,
        {
          headers,
          data: payload,
        }
      );
      dispatch(fetchCartData(payload.userId));
      toast.success("Item removed from cart!");
      return response.data;
    } catch (error) {
      toast.error("Error removing cart item");
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
    cartItems: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(postAddToCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postAddToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems.push(action.payload); 
        state.error = null;
      })
      .addCase(postAddToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to add item to cart.";
      })

      .addCase(fetchCartData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartData = action.payload;
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateCartQuantity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartData = action.payload;
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartData = action.payload;
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;