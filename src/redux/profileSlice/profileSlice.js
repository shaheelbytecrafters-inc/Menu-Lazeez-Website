import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Fetching profile
export const fetchProfile = createAsyncThunk("gitUsers", async (profileId) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"))?.token;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await axios.get(
      `https://lazeez-user-backend-kpyf.onrender.com/profile/${profileId}`,
      { headers }
    );
    toast.success("Profile fetched successfully!"); // Toast on success
    return response.data;
  } catch (error) {
    toast.error("Failed to fetch profile!"); // Toast on error
    throw new Error(
      error.response ? error.response.data : "Something went wrong"
    );
  }
});

// Edit profile
export const editProfile = createAsyncThunk(
  "editProfile",
  async ({ profileId, phoneNumber, email }, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"))?.token;
      const headers = { Authorization: `Bearer ${token}` };

      const response = await axios.post(
        `https://lazeez-user-backend-kpyf.onrender.com/edit-profile/${profileId}`,
        { phoneNumber, email },
        { headers }
      );
      toast.success("Profile updated successfully!"); // Toast on success
      return response.data;
    } catch (error) {
      toast.error("Failed to update profile!"); // Toast on error
      return rejectWithValue(
        error.response ? error.response.data : "Something went wrong"
      );
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileData: [],
    loading: false,
    error: null,
    user: {},
    address: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Profile
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.profileData = action.payload;
        state.loading = false;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.error = action.payload || "Failed to fetch profile data";
        state.loading = false;
      })

      // Edit Profile
      .addCase(editProfile.pending, (state) => {
        state.loading = true; // Changed from status to loading
        state.error = null;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.loading = false; // Changed from status to loading
        state.user = { ...state.user, ...action.payload };
        state.profileData = { ...state.profileData, ...action.payload };
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.loading = false; // Changed from status to loading
        state.error = action.payload || "Failed to edit profile";
      });
  },
});

export default profileSlice.reducer;
