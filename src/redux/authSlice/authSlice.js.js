import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
// import { act } from "react";
// import { json } from "react-router-dom";

// Async thunk for user sign-in
// export const signUpUser = createAsyncThunk(
//   "auth/signUpUser",
//   async (userData, { rejectWithValue }) => {
  
//     console.log("Hello ",userData)
//     try {
//       const response = await axios.post(
//         "https://lazeez-restaurant-backend.onrender.com/signup",
//         userData
//       );
//       // console.log("response data from /////////////////",response)
//       // console.log("response data 1",response.data.data)
//       const token={
//         token:response.data.token
//       }
//       localStorage.setItem("token",JSON.stringify(token))
//       // console.log("token",response.data.token)
//       return response.data.data; // Assuming this is where you receive the token
//     } catch (error) {
//       console.log("rejected++++++++++++++++++++++++++++",error)
      
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://lazeez-restaurant-backend.onrender.com/signup",
        userData
      );
      const token = { token: response.data.token };
      localStorage.setItem("token", JSON.stringify(token));
      toast.success("Sign Up Successful!"); // Show success toast
      return response.data.data; // Assuming this is where you receive the token
    } catch (error) {
      toast.error("Sign Up Failed!"); // Show error toast
      return rejectWithValue(error.response.data);
    }
  }
);

// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async (userData, { rejectWithValue }) => {
//     console.log("logIn Data",userData)
//     try {
//       const response = await axios.post(
//         "https://lazeez-restaurant-backend.onrender.com/login",
//         userData
//       );
//       // console.log("response data from login", response);
//       // console.log("response data 1 from login",response.data.data)
//       // const token = {
//       //   token: response.data.token,
//       // };
//       // console.log("Login token", token);
//       // console.log("response data 1 from login",response.data.data)

//       // localStorage.setItem("userData", JSON.stringify(response.data.data));
//       // localStorage.setItem("token", JSON.stringify(token));

//       // console.log("token",response.data.token)
//       return response.data;
//     } catch (error) {
//       // console.log("problem in login")
//       return rejectWithValue(error.response?.data || "Error during login");
//     }
//   }
// );
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://lazeez-restaurant-backend.onrender.com/login",
        userData
      );
      toast.success("Login Successful!"); 
      // localStorage.setItem("userData", JSON.stringify(response.data.data));
      // localStorage.setItem("token", JSON.stringify(response.data.token));
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
      // console.log("verified otp",response)
      return response.data; 
    } catch (error) {
      console.log(error)
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
        // localStorage.setItem("token", action.payload.token);
        const mobileNumber = {
          phoneNumber: action.payload.phoneNumber,
        };
        // console.log(mobileNumber);
        localStorage.setItem("phoneNumber", JSON.stringify(mobileNumber));
        localStorage.setItem("userData", JSON.stringify(action.payload));
        //  console.log("userData payload", JSON.stringify(action.payload));
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
      // .addCase(loginUser.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.user = action.payload.data;
      //   state.token = action.payload.token;
      //   // localStorage.setItem("token", action.payload.token);
      //   const mobileNumber = {
      //     phoneNumber: action.payload.phoneNumber,
      //   };
      //   console.log(mobileNumber);
      //   console.log("payload data from login",action.payload.data);
      //   // console.log()
      //   localStorage.setItem("userData", JSON.stringify(action.payload.data));
      //   localStorage.setItem("token", JSON.stringify(action.payload.token));
      //   //  console.log("userData payload", JSON.stringify(action.payload));
      // })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data; // Ensure this is correct
        state.token = action.payload.token; // Ensure this is correct

        // Check if action.payload contains the correct values
        console.log("Payload from loginUser.fulfilled:", action.payload.data);
        console.log("token login ==========================",action.payload.token)
        
        // Store user data and token in localStorage
        localStorage.setItem("userData", JSON.stringify(action.payload.data));
        localStorage.setItem("token", JSON.stringify(action.payload.token));
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
        // localStorage.setItem("phoneNumber", action.meta.arg.phoneNumber);
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
