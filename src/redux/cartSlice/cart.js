// src/redux/cartSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// Define an async thunk for fetching cart data
export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async (id,{rejectWithValue}) => {
   
    try {

      console.log("id from My Boss is Best",id);
      // console.log("",token)
      const value = JSON.parse(localStorage.getItem("token"));
      const headers=`{Authorization:Bearer ${value}}`
    // console.log("id from cart=========================", headers);
      const response = await axios.get(
        `https://lazeez-restaurant-backend.onrender.com/cart/${id}`,
        {headers}
      );
      
      console.log("Api response from fetchCartData======================",response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartData = action.payload;
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch cart data";
      });
  },
});

export default cartSlice.reducer;
