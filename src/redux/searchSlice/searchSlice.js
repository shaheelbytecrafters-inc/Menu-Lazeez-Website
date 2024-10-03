import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch search results based on query
export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://lazeez-user-backend-kpyf.onrender.com/search?query=${query}`
      );
      console.log("}}}}}}}}}}}}}}}}}}}}}",response)
      return response.data;
    } catch (error) {
      return rejectWithValue(
        console.log("=========================++++++++++++++++++++++++",error),
        error.response ? error.response.data : error.message
      );
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    results: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload; // Update query state in Redux
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.results = action.payload.results; // Update search results when API call succeeds
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export the action to set query
export const { setQuery } = searchSlice.actions;

export default searchSlice.reducer;
