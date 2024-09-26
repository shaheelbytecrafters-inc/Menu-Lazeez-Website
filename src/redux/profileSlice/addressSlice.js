import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



// Async thunk to post address
export const postAddress = createAsyncThunk(
  "profile/postAddress",
  async ({payload}, { rejectWithValue }) => {
    console.log("}}}}}}}}}}}}}}}}}}}}}}}}}}}",payload)
    try {
      const token = JSON.parse(localStorage.getItem("token"))?.token;
      const headers = { Authorization:`Bearer ${token}` };

      const response = await axios.post(
        `https://lazeez-restaurant-backend.onrender.com/address`,
        payload,
        { headers }
      );
      console.log("===================================Solve",response)
      return response.data;
    } catch (error) {
      console.log("error=====================",error)
      return rejectWithValue(error.response?.data || "Error posting address");
    }
  }
);
// Async thunk to fetch address
export const getAddress = createAsyncThunk(
  "address/getAddress",
  async (userId, { rejectWithValue }) => {
    try {
      const value = JSON.parse(localStorage.getItem("token"));
      const headers = { Authorization: `Bearer ${value.token}` };
      const response = await axios.get(
        `https://lazeez-restaurant-backend.onrender.com/address/${userId}`,
        { headers }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Something went wrong"
      );
    }
  }
);

// Async thunk to delete address
export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async (addressId, { rejectWithValue }) => {
    try {
      const value = JSON.parse(localStorage.getItem("token"));
      const headers = { Authorization: `Bearer ${value.token}` };
      const response = await axios.delete(
        `https://lazeez-restaurant-backend.onrender.com/address/${addressId}`,
        { headers }
      );
      return response.data.data; // Returning the success message
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Something went wrong"
      );
    }
  }
);

// Async thunk to edit/update address
export const editAddress = createAsyncThunk(
  "address/editAddress",
  async ({ addressID, address }, { rejectWithValue }) => {
      console.log(
        "addressID and address from editAddresss=========",
        addressID,
        address
      );

    try {
      console.log("addressID and address from editAddresss=========",addressID,address)
      const value = JSON.parse(localStorage.getItem("token"));
      const headers = { Authorization: `Bearer ${value.token}` };
      const response = await axios.post(
        `https://lazeez-restaurant-backend.onrender.com/address/${addressID}`,
        {address},
        { headers }
      );
      // console.log("=======================response",response)
      return response.data;
    } catch (error) {
      return rejectWithValue(
        console.log("erorr=============",error),
        error.response ? error.response.data : "Something went wrong"
      );
    }
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState: {
    address: [], // Holds address details
    loading: false, // To track loading state
    error: null, // To hold error messages
    deleteSuccess: null, // To track deletion success message
    updateSuccess: null, // To track update success message
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

    //post address
      // Handle postAddress pending state
      .addCase(postAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle postAddress fulfilled state
      .addCase(postAddress.fulfilled, (state, action) => {
        state.address = action.payload; // Use 'address' for consistency
        state.loading = false;
      })
      // Handle postAddress rejected state
      .addCase(postAddress.rejected, (state, action) => {
        state.error = action.payload || "Failed to post address";
        state.loading = false;
      })
      // Handle pending state for getting address
      .addCase(getAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle fulfilled state for getting address
      .addCase(getAddress.fulfilled, (state, action) => {
        state.address = action.payload; // Save address details in state
        state.loading = false;
      })
      // Handle rejected state for getting address
      .addCase(getAddress.rejected, (state, action) => {
        state.error = action.payload || "Failed to fetch address data";
        state.loading = false;
      })
      // Handle pending state for deleting address
      .addCase(deleteAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.deleteSuccess = null;
      })
      // Handle fulfilled state for deleting address
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteSuccess = action.payload.message;
      })
      // Handle rejected state for deleting address
      .addCase(deleteAddress.rejected, (state, action) => {
        state.error = action.payload || "Failed to delete address";
        state.loading = false;
      })
      // Handle pending state for editing/updating address
      .addCase(editAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.updateSuccess = null;
      })
      // Handle fulfilled state for editing/updating address
      .addCase(editAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.updateSuccess = action.payload.message; // Save success message
      })
      // Handle rejected state for editing/updating address
      .addCase(editAddress.rejected, (state, action) => {
        state.error = action.payload || "Failed to update address";
        state.loading = false;
      });
  },
});

export default addressSlice.reducer;
