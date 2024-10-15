import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify"; // Importing toast

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
  async (payload, { rejectWithValue }) => {
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

// Fetch My Reviews
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

// Update Review
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
        // toast.success("Reviews loaded successfully!"); // Toast on success
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to fetch reviews";
        toast.error(
          `No reviews found}`
        ); // Toast on error
      })

      .addCase(postReview.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews.push(action.payload);
        toast.success("Review posted successfully!"); // Toast on success
      })
      .addCase(postReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to post review";
        toast.error(
          `Error posting review: ${action.payload?.message || "Unknown error"}`
        ); // Toast on error
      })

      .addCase(fetchMyReviews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMyReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.myReviews = Array.isArray(action.payload) ? action.payload : [];
        toast.success("Your reviews loaded successfully!"); // Toast on success
      })
      .addCase(fetchMyReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to fetch your reviews";
        toast.error(
          `Error fetching your reviews: ${
            action.payload?.message || "Unknown error"
          }`
        ); // Toast on error
      })

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
          toast.success("Review updated successfully!"); // Toast on success
        }
      })
      .addCase(updateReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to edit review";
        toast.error(
          `Error updating review: ${action.payload?.message || "Unknown error"}`
        ); // Toast on error
      });
  },
});

export default reviewsSlice.reducer;
