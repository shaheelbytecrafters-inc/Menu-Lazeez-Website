import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// Async thunk to post address
export const postAddress = createAsyncThunk(
  "profile/postAddress",
  async ({payload}, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"))?.token;
      const headers = { Authorization:`Bearer ${token}` };

      const response = await axios.post(
        `https://lazeez-user-backend-kpyf.onrender.com/address`,
        payload,
        { headers }
      );
       toast.success("Address posted successfully!");
      return response.data;
    } catch (error) {
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
        `https://lazeez-user-backend-kpyf.onrender.com/address/${userId}`,
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
        `https://lazeez-user-backend-kpyf.onrender.com/address/${addressId}`,
        { headers }
      );
       toast.success("Address deleted successfully!");
      return response.data.data; 
    } catch (error) {
       toast.error("Failed to delete address."); 
      return rejectWithValue(
        error.response ? error.response.data : "Something went wrong"
      );
    }
  }
);
export const editAddress = createAsyncThunk(
  "address/editAddress",
  async ({ addressID, address }, { rejectWithValue }) => {
    try {
      const value = JSON.parse(localStorage.getItem("token"));
      const headers = { Authorization: `Bearer ${value.token}` };
      const response = await axios.post(
        `https://lazeez-user-backend-kpyf.onrender.com/address/${addressID}`,
        { address },
        { headers }
      );
      toast.success("Address updated successfully!"); 
      return response.data;
    } catch (error) {
      toast.error("Failed to update address."); 
      return rejectWithValue(
        error.response ? error.response.data : "Something went wrong"
      );
    }
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState: {
    address: [],
    loading: false, 
    error: null, 
    deleteSuccess: null, 
    updateSuccess: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle postAddress fulfilled state
      .addCase(postAddress.fulfilled, (state, action) => {
        state.address = action.payload; 
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
        state.address = action.payload; 
        state.loading = false;
      })
      // Handle rejected state for getting address
      .addCase(getAddress.rejected, (state, action) => {
        state.error = action.payload;
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
        state.error = action.payload ;
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
        state.updateSuccess = action.payload.message;
      })
      // Handle rejected state for editing/updating address
      .addCase(editAddress.rejected, (state, action) => {
        state.error = action.payload ;
        state.loading = false;
      });
  },
});

export default addressSlice.reducer;
