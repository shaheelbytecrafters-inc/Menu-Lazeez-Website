import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 


export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (userData, { rejectWithValue }) => {
    console.log("SignUp Data",userData)
    try {
      const response = await axios.post(
        "https://lazeez-restaurant-backend.onrender.com/signup",
        userData
      );
      const token = { token: response.data.token };
      localStorage.setItem("token", JSON.stringify(token));
      toast.success("Sign Up Successful!"); 
      return response.data.data; 
    } catch (error) {
      toast.error("Sign Up Failed!"); 
      console.log(error)
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://lazeez-restaurant-backend.onrender.com/login",
        userData
      );
      
      const token = { token: response.data.token };
      localStorage.setItem("token", JSON.stringify(token));
      toast.success("Login Successful!");
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
    console.log("PhoneNumber , token",payload)
    
    try {
      const response = await axios.post(
        "https://lazeez-restaurant-backend.onrender.com/verify-otp",
        payload 
      );
      return response.data; 
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response?.data || "Error verifying OTP");
    }
  }
);

export const resendOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (payload, { rejectWithValue }) => {
    console.log("PhoneNumber , token", payload);

    try {
      const response = await axios.post(
        "https://lazeez-restaurant-backend.onrender.com/send-otp",
        payload
      );
      // console.log("resend otp", response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data || "Error verifying OTP");
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
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
        const mobileNumber = {
          phoneNumber: action.payload.phoneNumber,
        };
        console.log(mobileNumber);
        console.log("Storing in localStorage: ", action.payload);
        localStorage.setItem("phoneNumber", JSON.stringify(mobileNumber));
        localStorage.setItem("userData", JSON.stringify(action.payload));
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //Login

      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
    

      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
        console.log("Payload from loginUser.fulfilled:", action.payload.data);
        localStorage.setItem("userData", JSON.stringify(action.payload.data));
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
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
