import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://lazeez-user-backend-kpyf.onrender.com/signup",
        userData
      );
      const token = { token: response.data.token };
      localStorage.setItem("token", JSON.stringify(token));
      toast.success("OTP Send Successfully!");
      return response.data;
    } catch (error) {
      // Handle specific error scenarios
      if (error.response && error.response.data) {
        const errorMessage =
          error.response.data.message || "Signup failed due to an error!";
        toast.error(`Error: ${errorMessage}`);
      } else {
        toast.error("Signup failed! Please check your internet connection.");
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://lazeez-user-backend-kpyf.onrender.com/login",
        userData
      );
      const token = { token: response.data.token };
      localStorage.setItem("token", JSON.stringify(token));
      toast.success("OTP Send Successfully!");
      return response.data;
    } catch (error) {
      toast.error("Login Failed!");
      return rejectWithValue(error.response?.data || "Error during login");
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://lazeez-user-backend-kpyf.onrender.com/verify-otp",
        payload
      );
      toast.success("OTP verification Successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error verifying OTP");
    }
  }
);

export const resendOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (payload, { rejectWithValue }) => {


    try {
      const response = await axios.post(
        "https://lazeez-user-backend-kpyf.onrender.com/send-otp",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error verifying OTP");
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    token: null,
    isLoading: false,
    error: null
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      localStorage.removeItem("protectedToken");
    },
  },   
    extraReducers: (builder) => {
      builder
        .addCase(signUpUser.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(signUpUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.user = action.payload.data;
          state.token = action.payload.token;
          localStorage.setItem("userData", JSON.stringify(state.user));
        })
        .addCase(signUpUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload.error;
        })
        .addCase(loginUser.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })


        .addCase(loginUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.user = action.payload;
          localStorage.setItem("userData", JSON.stringify(state.user));
        })

        .addCase(loginUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload.error;
        })

        // OTP Verification
        .addCase(verifyOtp.pending, (state) => {
          state.isLoading = true;
          state.error = null;
          state.otpVerificationMessage = null;
        })
        .addCase(verifyOtp.fulfilled, (state, action) => {
          state.isLoading = false;
          state.otpVerificationMessage = action.payload.message;
          state.user = { phoneNumber: action.meta.arg.phoneNumber };
          const protectedToken = localStorage.getItem("token");
          localStorage.setItem("protectedToken", JSON.stringify(protectedToken));
        })
        .addCase(verifyOtp.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          state.otpVerificationMessage = "OTP verification failed";
        });
    },
  });


export const { logout } = authSlice.actions;

export default authSlice.reducer;