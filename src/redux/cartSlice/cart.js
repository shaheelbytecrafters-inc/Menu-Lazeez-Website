
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
      console.log("cartSlice,========",response)
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error fetching cart data"
      );
    }
  }
);
     

export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async (payload, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"))?.token;
      console.log("updateCart token=========",token)
      const headers = { Authorization: `Bearer ${token}` };

      const response = await axios.post(
        "https://lazeez-restaurant-backend.onrender.com/cart/quantity/update",
        payload,
        { headers }
      );
      console.log("Response ###################",response)
      return response.data; 
      
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error updating cart quantity"
      );
    }
  }
);


// export const removeCartItem = createAsyncThunk(
//   "cart/removeCartItem",
//   async (itemId, payload, { rejectWithValue }) => {
//     console.log("++++++++++++++++", itemId);
//     console.log("=====================",payload);
//     try {
//       console.log("Hello");
//       const token = JSON.parse(localStorage.getItem("token"))?.token;
//       const headers = { Authorization: `Bearer ${token}` };
//       const response = await axios.delete(
//         `https://lazeez-restaurant-backend.onrender.com/cart/item/${itemId}`,
//         payload,
//         { headers }
//       );
//       console.log("Item removed successfully", response);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data || "Error in removing cart item"
//       );
//     }
//   }
// );


export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem ",
  async (payload, { rejectWithValue }) => {
        // console.log("++++++++++++++++", itemId);
        console.log("===================== Remove",payload);
    try {
      const token = JSON.parse(localStorage.getItem("token"))?.token;
      console.log("token from removeCart",token)
      const headers = { Authorization: `Bearer ${token}` };
      const payloadData={
        userId:payload.userId,
        restaurantId:payload.restaurantId
      }
      const response = await axios.delete(
        `https://lazeez-restaurant-backend.onrender.com/cart/item/${payload.itemId}`,
        payloadData,
        { headers }
      );
      console.log("Response ###################", response);
      // return response.data;
    } catch (error) {
      console.log("===================== Error from removeCart",error)
      return rejectWithValue(
        error.response?.data || "Error updating cart quantity"
      );
    }
  }
);


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: {

    },
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
      .addCase(removeCartItem.fulfilled,(state,action)=>{
        state.cartData=action.payload
      })
      
    },
});

export default cartSlice.reducer;


