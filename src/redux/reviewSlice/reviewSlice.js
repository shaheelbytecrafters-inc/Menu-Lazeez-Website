import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch Reviews Thunk
export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async ({ restaurantId }, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"))?.token;
      if (!token) {
        throw new Error("User not authenticated");
      }
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.get(
        `https://lazeez-user-backend-kpyf.onrender.com/review/restaurant/${restaurantId}`,
        { headers }
      );
      return response.data; // Successfully return data
    } catch (error) {

      if (error.response) {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

// Post Review Thunk
export const postReview = createAsyncThunk(
  "reviews/postReview",
  async (payload, {  rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"))?.token;
      if (!token) {
        throw new Error("User not authenticated");
      }

      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.post(
        "https://lazeez-user-backend-kpyf.onrender.com/review",
        payload,
        { headers }
      );

      return response.data; 
    } catch (error) {

      if (error.response) {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);


export const fetchMyReviews = createAsyncThunk(
  "reviews/fetchMyReviews",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"))?.token;
      if (!token) {
        throw new Error("User not authenticated");
      }

      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.get(
        `https://lazeez-user-backend-kpyf.onrender.com/review/user/${restaurantId}`,
        { headers }
      );
      return response.data; 
    } catch (error) {

      if (error.response) {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);
export const updateReview = createAsyncThunk(
  "reviews/updateReview",
  async ({ reviewId, payload }, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"))?.token;
      if (!token) {
        throw new Error("User not authenticated");
      }

      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.post(
        `https://lazeez-user-backend-kpyf.onrender.com/review/update/${reviewId}`,
        payload,
        { headers }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);


// Reviews Slice
const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchReviews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to fetch reviews";
      })

      .addCase(postReview.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews.push(action.payload);
      })
      .addCase(postReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to post review";
      })

      // Handle fetchMyReviews
      .addCase(fetchMyReviews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMyReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.myReviews = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchMyReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to fetch my reviews";
      })
      // Edit Review
      .addCase(updateReview.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateReview.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.reviews.findIndex(
          (review) => review._id === action.payload._id
        );
        if (index !== -1) {
          state.reviews[index] = action.payload;
        }
      })
      .addCase(updateReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to edit review";
      });
  },
});

export default reviewsSlice.reducer;
