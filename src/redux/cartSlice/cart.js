import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Post add to cart
export const postAddToCart = createAsyncThunk(
  "cart/postAddToCart",
  async ({payload}, { rejectWithValue }) => {
    // console.log("++++++++",payload)
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
      console.error("Error posting AddToCart:", error);
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
      console.log("updateCart token=========", token);
      const headers = { Authorization: `Bearer ${token}` };

      const response = await axios.post(
        "https://lazeez-user-backend-kpyf.onrender.com/cart/quantity/update",
        payload,
        { headers }
      );
      console.log("Response ###################", response);
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
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&", itemId, payload);
      const token = JSON.parse(localStorage.getItem("token"))?.token;
      console.log("updateCart token=========", token);

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

      console.log("Response ###################", response);

      // After successfully removing the item, fetch the updated cart data
      dispatch(fetchCartData(payload.userId));
      toast.success("Item removed from cart!");
      return response.data;
    } catch (error) {
      console.log("===================== Error from removeCart", error);
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
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(postAddToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postAddToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems.push(action.payload); // Add the item to the cart
        state.error = null;
      })
      .addCase(postAddToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to add item to cart.";
      })

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