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
      console.log("Token:", token);
      console.log("Restaurant ID:", restaurantId);

      const response = await axios.get(
        `https://lazeez-user-backend-kpyf.onrender.com/review/restaurant/${restaurantId}`,
        { headers }
      );

      console.log("Response data:+++++++++++++++++", response.data);
      return response.data; // Successfully return data
    } catch (error) {
      console.log("Error:", error);

      if (error.response) {
        console.log("====================", error);
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

      console.log("Posted Review Response:", response.data);

      return response.data; 
    } catch (error) {
      console.log("Post Review Error:", error);

      if (error.response) {
        console.log("====================", error);
        return rejectWithValue({ message: error.message });
      }
    }
  }
);


export const fetchMyReviews = createAsyncThunk(
  "reviews/fetchMyReviews",
  async (restaurantId, { rejectWithValue }) => {
    console.log("restaurandjhfeurhefjhjgekjfffffffff=========",restaurantId)
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

      console.log("My Reviews Response:======================", response.data);
      return response.data; 
    } catch (error) {
      console.log("Error fetching my reviews:", error);

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
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        console.log("Fetched Reviews: ", action.payload);
        state.loading = false;
        state.reviews = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch reviews";
      })

      .addCase(postReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        console.log("Posted Review: ", action.payload);
        state.loading = false;
        // Optionally, add the new review to the state (if needed)
        state.reviews.push(action.payload);
        // dispatch(fetchReviews(response.data.review.restaurantId));
      })
      .addCase(postReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to post review";
      })

      // Handle fetchMyReviews
      .addCase(fetchMyReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyReviews.fulfilled, (state, action) => {
        console.log("Fetched My Reviews: ", action.payload);
        state.loading = false;
        state.myReviews = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchMyReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch my reviews";
      });
  },
});

export default reviewsSlice.reducer;
